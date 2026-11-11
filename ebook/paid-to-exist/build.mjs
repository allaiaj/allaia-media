// Renders book.html to Paid-to-Exist.pdf.
// Run from the repo root after `npm install`: node ebook/paid-to-exist/build.mjs
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
// require() honours NODE_PATH, so a global Playwright install also works.
const { chromium } = createRequire(import.meta.url)('playwright');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(path.join(dir, 'book.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: path.join(dir, 'Paid-to-Exist.pdf'),
  preferCSSPageSize: true,
  printBackground: true,
  tagged: true,
  outline: true,
});
await browser.close();
console.log('Wrote Paid-to-Exist.pdf');
