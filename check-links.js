const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

function getMarkdownFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getMarkdownFiles(fullPath, results);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }

  return results;
}

async function checkExternalLink(url) {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      timeout: 30000, // Increased to 30 second timeout
      redirect: 'follow'
    });
    // Consider both OK responses and redirects (status 200-399) as valid
    return response.ok;
  } catch (error) {
    // If it's a timeout error, try one more time with GET method
    if (error.message.includes('timeout')) {
      try {
        const response = await fetch(url, {
          method: 'GET',
          timeout: 30000,
          redirect: 'follow'
        });
        return response.ok;
      } catch (retryError) {
        return false;
      }
    }
    return false;
  }
}

// Function to extract headings from markdown content
function getHeadings(content) {
  const headingRegex = /^#{1,6}\s+(.+)$/gm;
  const headings = new Set();
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    // Convert heading to lowercase, replace spaces and special chars with hyphens
    const headingId = match[1]
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    headings.add(headingId);
  }

  return headings;
}

async function checkLinks() {
  const markdownFiles = getMarkdownFiles('./src/pages');
  const linkRegex = /\[.*?\]\(([^)"'\s]+)(?:\s+"[^"]*")?\)/g;
  let brokenLinks = [];
  let externalLinksToCheck = new Map();

  // First pass: collect all links and check local ones
  for (const file of markdownFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      const url = match[1];

      // Skip empty links
      if (!url) continue;

      if (url.startsWith('http') || url.startsWith('https')) {
        externalLinksToCheck.set(url, file);
      } else if (!url.startsWith('mailto:')) {
        // Handle anchor links in local files
        const [filePath, anchor] = url.split('#');

        // Handle pure anchor links (links to sections in the same file)
        if (!filePath && anchor) {
          const headings = getHeadings(content);
          if (!headings.has(anchor)) {
            brokenLinks.push({
              file,
              url,
              type: 'anchor',
              error: `Heading "${anchor}" not found in file`
            });
          }
          continue;
        }

        // Check local files and their anchors
        const localPath = filePath.startsWith('/') ?
          path.join('.', filePath.slice(1)) :
          path.join(path.dirname(file), filePath);

        if (!fs.existsSync(localPath)) {
          brokenLinks.push({
            file,
            url,
            type: 'local',
            error: 'File not found'
          });
        } else if (anchor) {
          // If file exists and there's an anchor, check if the heading exists
          const targetContent = fs.readFileSync(localPath, 'utf8');
          const headings = getHeadings(targetContent);
          if (!headings.has(anchor)) {
            brokenLinks.push({
              file,
              url,
              type: 'anchor',
              error: `Heading "${anchor}" not found in target file`
            });
          }
        }
      }
    }
  }

  // Second pass: check external links concurrently
  console.log(`\nChecking links...`);
  const externalResults = await Promise.all(
    Array.from(externalLinksToCheck.entries()).map(async ([url, file]) => {
      const isValid = await checkExternalLink(url);
      if (!isValid) {
        return {
          url,
          type: 'external',
          error: 'Link appears to be dead',
          file
        };
      }
      return null;
    })
  );

  brokenLinks = [...brokenLinks, ...externalResults.filter(result => result !== null)];

  // Report results
  if (brokenLinks.length > 0) {
    console.error('\n❌ Found broken links:');
    brokenLinks.forEach(({ file, url, type, error }) => {
      if (type === 'local') {
        console.error(`  Warning - Local link in ${file}:  "${url}" - ${error}`);
      } else if (type === 'anchor') {
        console.error(`  Warning - Anchor link in ${file}:  "${url}" - ${error}`);
      } else {
        console.error(`  Warning - External link in ${file}:  "${url}" - ${error}`);
      }
    });
    process.exit(1);
  } else {
    console.log('\n✅ All links are valid.');
  }
}

checkLinks().catch(error => {
  console.error('Error while checking links:', error);
  process.exit(1);
});
