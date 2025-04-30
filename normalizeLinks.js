const path = require('path');
const fs = require('node:fs');
const matchAll = require('string.prototype.matchall');
const { 
    getMarkdownFiles, 
    replaceLinksInFile, 
    getFindPatternForMarkdownFiles: getFindPattern, 
    getReplacePatternForMarkdownFiles: getReplacePattern, 
} = require('./scriptUtils.js');

function normalizeLinksInMarkdownFile(file, files) {
    const relativeToDir = path.dirname(file);
    const relativeFiles = files.map(file => path.relative(relativeToDir, file));
    const linkMap = new Map();    

    const linkPattern = getFindPattern('[^)#]*');
    let data = fs.readFileSync(file, 'utf8');
    const links = matchAll(data, new RegExp(linkPattern, "gm"));
    [...links].forEach(link => {

        // ensure link includes file name and extension
        const from = link[3] ?? '';
        let to = from;
        if(link[2]?.endsWith('/') && to === '') {
            to = 'index.md';
        }
        if(to.endsWith('/')) {
            to = `${to}index.md`
        }
        if(!to.endsWith('.md')) {
            to = `${to}.md`;
        }

        // ensure the link we constructed above exists
        const toExists = relativeFiles.find(file => to === file);

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
    const files = getMarkdownFiles();
    files.forEach(file => {
        normalizeLinksInMarkdownFile(file, files);
    });
    
} catch (err) {
    console.error(err);
}