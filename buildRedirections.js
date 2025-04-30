const path = require('path');
const { pathPrefix } = require('./gatsby-config.js');
const { globSync }= require('glob');
const { writeRedirectionsFile } = require('./scriptUtils.js');

try {
    if(!pathPrefix) {
        throw new TypeError("pathPrefix not found");
    } 

    let results = globSync(__dirname + '/src/pages/**/*.md');
    let data = [];

    results.forEach(mdFilePath => {
        mdFilePath = mdFilePath.replace(__dirname + '/src/pages', pathPrefix);
        mdFilePath = path.resolve(mdFilePath);

        // Fixes paths that don't end in a trailing slash but should.
        // index.md is a directory-level URL that needs a trailing slash
        if(mdFilePath.endsWith('index.md')) {
            const source = mdFilePath.replace('/index.md', '');
            data.push({
                "Source" : source,
                "Destination" : source + '/'
            });
            data.push({
                "Source" : source + '/index',
                "Destination" : source + '/'
            });
        }
        // Fixes paths that end in a trailing slash but shouldn't.
        // skip any index.md or config.md as they don't need redirect
        else if(!mdFilePath.endsWith('config.md')) {
            const source = mdFilePath.replace('.md', '/');
            data.push({
                "Source" : source,
                "Destination" : source.replace(/\/$/, "")
            });
        }
    });

    writeRedirectionsFile(data);

} catch (err) {
    console.error(err);
}
