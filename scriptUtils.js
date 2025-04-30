const path = require('path');
const fs = require('node:fs');
const { globSync }= require('glob');

function getRedirectionsFilePath() {
    return path.resolve(__dirname + '/src/pages/redirects.json');
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

function getMarkdownFiles() {
    return globSync(__dirname + '/src/pages/**/*.md')
        .map(f => path.resolve(f));
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
    getMarkdownFiles,
    getFindPatternForMarkdownFiles,
    getReplacePatternForMarkdownFiles,
    replaceLinksInFile
};