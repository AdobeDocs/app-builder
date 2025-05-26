// This script retrieves the pathPrefix from the config.md file and validates it against the pathPrefix from devsite-paths.json.
// It serves as an example for how to set up external javascript functions
// outside workflow .yml files when they get too big or complex to keep them inline.

// Documentation for the actions/github-script:
// https://github.com/actions/github-script#run-a-separate-file

const CONFIG_PATH = `./src/pages/config.md`;
const DEVSITE_STAGE_HOST = `https://main--adp-devsite-stage--adobedocs.aem.page`;
const DEVSITE_PROD_HOST = `https://main--adp-devsite--adobedocs.aem.live`;
const DEVSITE_PATHNAME = `/franklin_assets/devsitepaths.json`;

module.exports = async ({ core, isStage, isProd }) => {
    const fs = await require('fs');
    if (!fs.existsSync(CONFIG_PATH)) {
      core.setFailed(
        `The site's config.md file is missing.
  
        To fix this, either create one in ./src/pages, or auto-generate one from the site's gatsby-config.md file by building navigation file.`
      );
      return;
    }

    const string = fs.readFileSync(CONFIG_PATH).toString() ?? "";
    const lines = string.split('\n');

    // find the pathPrefix key
    const keyIndex = lines.findIndex(line => line.includes("pathPrefix:"));

    if (keyIndex < 0) {
      core.setFailed(
        `The pathPrefix in the site's config.md file is missing.

        To fix this, open your config.md file, and add it to the config object:

        - pathPrefix:
        ...`
      );
      return;
    }

    // find the pathPrefix value
    const line = lines.slice(keyIndex + 1)?.find(line => line.trimStart().startsWith("-")) ?? "";
  
    // remove whitespace at start, remove dash (i.e. first non-whitespace character), and remove whitespace at start and end
    const pathPrefix = line.trimStart().substring(1).trim();

    if (!pathPrefix) {
      core.setFailed(
        `The pathPrefix in the site's config.md file is missing.

        To fix this, open your config.md file, and add it to the config object:

        - pathPrefix:
            - /commerce/frontend-core/
        ...`
      );
    } else if (pathPrefix === '/') {
        core.setFailed(
            `The pathPrefix in the site's config.md file is set to "/". This is not allowed.

            To fix this, change the pathPrefix to include a name that starts and ends with "/".

            For example: "/commerce/frontend - core/"

            This name identifies the site within the developer.adobe.com domain:
            https://developer.adobe.com/document-services/<PATH_TO_FILES>.
            `
        );
    } else if (!pathPrefix.startsWith('/') || !pathPrefix.endsWith('/')) {
        core.setFailed(
            `The pathPrefix in the site's config.md file does not start or end with "/".

            pathPrefix: "${pathPrefix}"

            To fix this, change the pathPrefix to include a name that starts and ends with "/".
            For example: "/document-services/" or "/commerce/cloud-tools/".

            This is required by convention because of the way we construct site URLs.
            For example: https://developer.adobe.com + /document-services/ + path/to/files/.
            `
        );
    }

    // TODO: devsitepaths pathPrefix currently do not have a trailing slash
    // will need to refactor all path prefix listings to include them
    // but for now checked with a popped trailing slash

    const poppedPathPrefix = pathPrefix.substring(0, pathPrefix.length-1);
    // must convert values to boolean from string
    if(isStage.toLowerCase() === 'true') {
      const stageEntries = await (await fetch(`${DEVSITE_STAGE_HOST}${DEVSITE_PATHNAME}`)).json();
      const stageEntry = stageEntries?.data?.find(entry => entry.pathPrefix === poppedPathPrefix);

      if(!stageEntry) {
        core.setFailed(
          `The pathPrefix in the site's config.md file was not found in the STAGE gdrive's devsitepaths.json.

          pathPrefix from config.md: "${pathPrefix}"
          devsitepath.json location: "${DEVSITE_STAGE_HOST}${DEVSITE_PATHNAME}"

          To fix this, make sure the pathPrefix listed in the config.md is in the devsitepath.json location.
          `
        );
      }
    }

    // must convert values to boolean from string
    if(isProd.toLowerCase() === 'true') {
      const prodEntries = await (await fetch(`${DEVSITE_PROD_HOST}${DEVSITE_PATHNAME}`)).json();
      const prodEntry = prodEntries?.data?.find(entry => entry.pathPrefix === poppedPathPrefix);

      if(!prodEntry) {
        core.setFailed(
          `The pathPrefix in the site's config.md file was not found in the PROD gdrive's devsitepaths.json.

          pathPrefix from config.md: "${pathPrefix}"
          devsitepath.json location: "${DEVSITE_PROD_HOST}${DEVSITE_PATHNAME}"

          To fix this, make sure the pathPrefix listed in the config.md is in the devsitepath.json location.
          `
        );
      }
    }

    core.setOutput('path_prefix', poppedPathPrefix);
}