const path = require('path');
const fs = require('node:fs');

const { siteMetadata } = require('./gatsby-config.js');

try {

  let sideWideBanner = ``;
  if (siteMetadata.siteWideBanner) {
    sideWideBanner = JSON.stringify(siteMetadata.siteWideBanner);
  }

  let configFilePath = path.resolve(__dirname + '/src/pages/sitewidebanner.json');
  fs.writeFileSync(configFilePath, sideWideBanner);
  console.log(`Generated file: ${configFilePath}`);

} catch (err) {
  console.error(err);
}