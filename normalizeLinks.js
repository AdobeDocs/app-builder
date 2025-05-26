const path = require('path');
const fs = require('node:fs');
const matchAll = require('string.prototype.matchall');
const { 
    getDeployableFiles,
    getMarkdownFiles, 
    replaceLinksInFile, 
    getFindPatternForMarkdownFiles: getFindPattern, 
    getReplacePatternForMarkdownFiles: getReplacePattern, 
    removeFileExtension
} = require('./scriptUtils.js');

// ensures link includes file name and extension
function normalizeLinksInMarkdownFile(file, files) {
    const relativeToDir = path.dirname(file);
    const relativeFiles = files.map(file => path.relative(relativeToDir, file));
    const linkMap = new Map();    

    const linkPattern = getFindPattern('[^)#]*');
    let data = fs.readFileSync(file, 'utf8');
    const links = matchAll(data, new RegExp(linkPattern, "gm"));
    [...links].forEach(link => {
        const optionalPrefix = link[2] ?? '';
        const from = link[3] ?? '';
        let to = from;

        const toHasTrailingSlash = to.endsWith('/') || optionalPrefix.endsWith('/') && !to;
        if(toHasTrailingSlash) {
            to = `${to}index.md`
        }

        // temporarily use local machine's path separator (i.e. '\' for Windows, '/' for Mac) 
        // to compare files retrieved from local machine
        to = to.replaceAll('/', path.sep);

        // ensure simplest relative path
        // this removes trailing slash, so need to do this after check for trailing slash above
        const absolute = path.resolve(relativeToDir, to);
        const relative = path.relative(relativeToDir, absolute);
        to = relative;

        // add missing file extension only if we're sure it's the right one
        // if there's more than one option, let user manually fix it
        const potentialFileExtensions = relativeFiles.filter(file => removeFileExtension(file) === to).map(file => path.extname(file));
        if (potentialFileExtensions.length === 1) {
            const ext = potentialFileExtensions[0];
            if(!to.endsWith(ext) && to) {
                to = `${to}${ext}`;
            }
        }

        // ensure the link we constructed above exists
        const toExists = relativeFiles.find(file => to === file);

        // revert back to URL path separator '/'
        to = to.replaceAll(path.sep, '/');

        if(to !== from && toExists) {
            linkMap.set(from, to);
        }
    })

    replaceLinksInFile({ 
        file, 
        linkMap,
        getFindPattern,
        getReplacePattern,
    });
}

try {
    const files = getDeployableFiles();
    const mdFiles = getMarkdownFiles();
    mdFiles.forEach(mdFile => {
        normalizeLinksInMarkdownFile(mdFile, files);
    });
    
} catch (err) {
    console.error(err);
}