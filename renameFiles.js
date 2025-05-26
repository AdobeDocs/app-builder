const path = require('path');
const fs = require('node:fs');
const { pathPrefix: pathPrefixFromGatsbyConfig } = require('./gatsby-config.js');
const { 
    readRedirectionsFile, 
    writeRedirectionsFile, 
    getRedirectionsFilePath, 
    getDeployableFiles,
    getMarkdownFiles, 
    getFindPatternForMarkdownFiles,
    getReplacePatternForMarkdownFiles,
    removeFileExtension,
    replaceLinksInFile 
} = require('./scriptUtils.js');

function toKebabCase(str) {
    const isScreamingSnakeCase = new RegExp(/^[A-Z0-9_]*$/).test(str);
    str = isScreamingSnakeCase ? str.toLowerCase() : str;
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');
}

function toEdsCase(str) {
    const isValid = Boolean((/^([a-z0-9-]*)$/.test(str)));
    return isValid ? str : toKebabCase(str);
}

function getPathPrefixFromConfig() {
    const CONFIG_PATH = path.join('src', 'pages', 'config.md');
    if (!fs.existsSync(CONFIG_PATH)) {
        return null;
    }
    
    const data = fs.readFileSync(CONFIG_PATH).toString();
    if(!data) {
        return null;
    }

    const lines = data.split("\n");
    
    // find the pathPrefix key
    const keyIndex = lines.findIndex(line => new RegExp(/\s*-\s*pathPrefix:/).test(line));
    if (keyIndex < 0) {
        return null;
    }
    
    // find the pathPrefix value
    const line = lines.slice(keyIndex + 1)?.find(line => new RegExp(/\s*-/).test(line));
    if(!line) {
        null;
    }

    // extract pathPrefix
    const pathPrefixLine = line.match(new RegExp(/(\s*-\s*)(\S*)(\s*)/));
    if(!pathPrefixLine) {
        return null;
    }
    return pathPrefixLine[2];
}

function renameFile(file, renameBaseWithoutExt) {
    const renamedFileWithoutExt = removeFileExtension(file, renameBaseWithoutExt);
    const ext = path.extname(file);
    return `${renamedFileWithoutExt}${ext}`
}

function getFileMap(files) {
    const map = new Map();
    files.forEach(from => { 
        const to = renameFile(from, toEdsCase)
        if(to !== from) {
            map.set(from, to) 
        }
    });
    return map;
}

function getLinkMap(fileMap, relativeToDir) {
    const linkMap = new Map();    
    fileMap.forEach((toFile, fromFile) => {
        let fromRelFile = path.relative(relativeToDir, fromFile);
        fromRelFile = fromRelFile.replaceAll(path.sep, '/');

        let toRelFile = path.relative(relativeToDir, toFile);
        toRelFile = toRelFile.replaceAll(path.sep, '/');

        linkMap.set(fromRelFile, toRelFile);
    });
    return linkMap;
}

function renameLinksInMarkdownFile(fileMap, file) {
    const dir = path.dirname(file);
    replaceLinksInFile({ 
        file, 
        linkMap: getLinkMap(fileMap, dir),
        getFindPattern: getFindPatternForMarkdownFiles,
        getReplacePattern: getReplacePatternForMarkdownFiles,
    });
}

function renameLinksInRedirectsFile(fileMap, pathPrefix) {
    const file = getRedirectionsFilePath();
    const dir = path.dirname(file);
    replaceLinksInFile({
        file,
        linkMap: getLinkMap(fileMap, dir),
        getFindPattern: (from) => `(['"]?)(Source|Destination)(['"]?\\s*:\\s*['"])(${pathPrefix}${removeFileExtension(from)})(/?)(#[^'"]*)?(['"])`,
        getReplacePattern: (to) => `$1$2$3${pathPrefix}${removeFileExtension(to)}$5$6$7`,
    });
}

function renameLinksInGatsbyConfigFile(fileMap, file) {
    const dir = path.join('src', 'pages');
    replaceLinksInFile({
        file,
        linkMap: getLinkMap(fileMap, dir),
        getFindPattern: (from) => `(['"]?path['"]?\\s*:\\s*['"])(/|./)?(${from})(#[^'"]*)?(['"])`,
        getReplacePattern: (to) => `$1$2${to}$4$5`,
    });
}

function appendRedirects(fileMap, pathPrefix) {
    const file = getRedirectionsFilePath();
    const dir = path.dirname(file);
    const linkMap = getLinkMap(fileMap, dir);
    const newData = [];
    linkMap.forEach((to, from) => {
        newData.push({
            Source:  `${pathPrefix}${removeFileExtension(from)}`, 
            Destination: `${pathPrefix}${removeFileExtension(to)}`,
        })
    });
    const currData = readRedirectionsFile();
    const data = [...currData, ...newData];
    writeRedirectionsFile(data);
}

function renameFiles(map) {
    map.forEach((to, from) => {
        fs.renameSync(from, to);
    });
}

try {
    const files = getDeployableFiles();
    const fileMap = getFileMap(files);

    const mdFiles = getMarkdownFiles();
    mdFiles.forEach(mdFile => {
        renameLinksInMarkdownFile(fileMap, mdFile);
    });

    const redirectsFile = getRedirectionsFilePath();
    const pathPrefix = getPathPrefixFromConfig() ?? pathPrefixFromGatsbyConfig;
    if(fs.existsSync(redirectsFile)) {
        renameLinksInRedirectsFile(fileMap, pathPrefix);
        appendRedirects(fileMap, pathPrefix);
    }

    const gatsbyConfigFile = 'gatsby-config.js';
    if(fs.existsSync(gatsbyConfigFile)) {
        renameLinksInGatsbyConfigFile(fileMap, gatsbyConfigFile);
    }

    renameFiles(fileMap);

} catch (err) {
    console.error(err);
}