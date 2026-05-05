// content/docs
// serve static on 3001

import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.DEV_PORT || 3003;

const getCurrentBranch = () => {
  try {
    return execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  } catch (error) {
    console.warn('Could not determine git branch, defaulting to "main"');
    return 'main';
  }
};

const currentBranch = getCurrentBranch();
const DOCS_DIRECTORY = process.env.DIRECTORY ||  './src/pages';

const app = express();
console.log(path.resolve(__dirname, `./${DOCS_DIRECTORY}`));
app.use(
  express.static(path.resolve(__dirname, `./${DOCS_DIRECTORY}`), {
    setHeaders: (res) => {
      res.setHeader('last-modified', new Date().toGMTString());
      res.setHeader('local-branch-name', currentBranch);
    },
  }),
);

app.listen(PORT, () => {
  console.debug(`Docs dev server is running on port ${PORT}`);
});
