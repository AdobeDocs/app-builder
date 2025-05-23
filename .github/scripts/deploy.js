const { exec } = require('child_process');

module.exports = async ({ core, changes, deletions, operation, siteEnv, branch, pathPrefix }) => {
  let httpMethod, edsSiteEnv, codeRepoBranch, args;
  if (operation.includes('cache') || operation.includes('preview') || operation.includes('live')) {
    httpMethod = 'POST';
  } else {
    console.error('Unknown operation method');
  }

  if (siteEnv.includes('stage')) {
    edsSiteEnv = "adp-devsite-stage";
    codeRepoBranch = "stage";
  } else if (siteEnv.includes('prod')) {
    edsSiteEnv = "adp-devsite";
    codeRepoBranch = "main";
  } else {
    console.error('Unknown env to deploy to');
  }

  // hacky way to do operations on our adp-devsite-stage env
  if ((siteEnv.includes('stage') && operation.includes('preview')) || (siteEnv.includes('stage') && operation.includes('cache'))) {
    args = `--header "x-content-source-authorization: ${branch}"`;
  } else {
    args = '';
  }

  changes.forEach((file) => {
    // have to pop src/pages from the file path
    file = file.replace('src/pages/', '');

    const theFilePath = `${pathPrefix}/${file}`;
    const url = `https://admin.hlx.page/${operation}/adobedocs/${edsSiteEnv}/${codeRepoBranch}${theFilePath}`;
    const cmd = `curl -X${httpMethod} -vi ${args} ${url}`;

    exec(cmd, (error, execOut, execErr) => {
      if (error) {
        console.error(`::group:: Error ${theFilePath} \n${execErr} \n::endgroup::`)
        return;
      }

      console.log(`::group:: Running ${operation} on ${theFilePath} \nThe command: ${cmd} \n${execOut} \n::endgroup::`);
    });
  });

  deletions.forEach((file) => {
    // have to pop src/pages from the file path
    file = file.replace('src/pages/', '');

    const theFilePath = `${pathPrefix}/${file}`;
    const deleteUrl = `https://admin.hlx.page/${operation}/adobedocs/${edsSiteEnv}/${codeRepoBranch}${theFilePath}`;
    const deleteCmd = `curl -XDELETE -vi ${args} ${deleteUrl}`;


    exec(deleteCmd, (deleteError, deleteExecOut, deleteExecErr) => {
      if (deleteError) {
        console.error(`::group:: Deleting error ${theFilePath} \n${deleteExecErr} \n::endgroup::`)
        return;
      }

      console.log(`::group:: Deleting ${operation} on ${theFilePath} \nThe command: ${deleteCmd} \n${deleteExecOut} \n::endgroup::`);
    });
  });
}