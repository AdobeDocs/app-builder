const path = require('path');
const fs = require('node:fs');
const { globSync }= require('glob');

function getRedirectionsFilePath() {
    const redirectionsFilePath = path.join(__dirname, 'src', 'pages', 'redirects.json');
    return path.resolve(redirectionsFilePath);
}

function readRedirectionsFile() {
    const redirectionsFilePath = getRedirectionsFilePath();
    return JSON.parse(fs.readFileSync(redirectionsFilePath)).data; 
}

function writeRedirectionsFile(data) {
    let redirectionsData = 
    {
        "total" : data.length,
        "offset": 0,
        "limit": data.length,
        "data" : data,
        ":type": "sheet"
    };

    let redirectionsFilePath = getRedirectionsFilePath();
    fs.writeFileSync(redirectionsFilePath, JSON.stringify(redirectionsData));
}

function getFiles(fileExtensions) {
    const fileExtensionsPattern = fileExtensions.join('|');
    return globSync(__dirname + `/src/pages/**/*+(${fileExtensionsPattern})`)
        .map(f => path.relative(__dirname, f));
}

function getDeployableFiles() {
    // files types deployed to EDS in process-mds.sh 
    return getFiles(['.md', '.json']);
}

function getMarkdownFiles() {
    return getFiles(['.md']);
}

function removeFileExtension(file) {
    const base = path.basename(file);
    const ext = path.extname(file);
    const end = file.length - base.length;
    const baseWithoutExt = base.substring(0, base.length - ext.length);
    return `${file.substring(0, end)}${baseWithoutExt}`
}

const getFindPatternForMarkdownFiles = (from) => `(\\[[^\\]]*]\\()(/|./)?(${from})(#[^\\()]*)?(\\))`;
const getReplacePatternForMarkdownFiles = (to) => `$1$2${to}$4$5`;

function replaceLinksInFile({ file, linkMap, getFindPattern, getReplacePattern }) {
    let data = fs.readFileSync(file, 'utf8');
    linkMap.forEach((to, from) => {
        const find = getFindPattern(from);
        const replace = getReplacePattern(to);
        data = data.replaceAll(new RegExp(find, "gm"), replace);
    });
    fs.writeFileSync(file, data, 'utf-8');
}

module.exports = {
    getRedirectionsFilePath,
    readRedirectionsFile,
    writeRedirectionsFile,
    getDeployableFiles,
    getMarkdownFiles,
    getFindPatternForMarkdownFiles,
    getReplacePatternForMarkdownFiles,
    removeFileExtension,
    replaceLinksInFile
};