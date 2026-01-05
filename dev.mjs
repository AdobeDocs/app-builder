// content/docs
// serve static on 3001

import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.DEV_PORT || 3003;

// TODO: ensure `DOCS_DIRECTORY` starts with `/`
const DOCS_DIRECTORY = process.env.DIRECTORY ||  './src/pages';

const app = express();
console.log(path.resolve(__dirname, `./${DOCS_DIRECTORY}`));
app.use(
  express.static(path.resolve(__dirname, `./${DOCS_DIRECTORY}`), {
    setHeaders: (res) => {
      res.setHeader('last-modified', new Date().toGMTString());
    },
  }),
);

app.listen(PORT, () => {
  console.debug(`Docs dev server is running on port ${PORT}`);
});