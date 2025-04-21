// Netlify: This is a workaround for Vite path resolution issues
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an empty _redirects file if it doesn't exist already
if (!fs.existsSync('./dist/_redirects')) {
  fs.writeFileSync('./dist/_redirects', '/* /index.html 200');
}

// Ensure that the assets paths are correctly preserved
if (fs.existsSync('./dist/index.html')) {
  const indexHtml = fs.readFileSync('./dist/index.html', 'utf8');
  const modifiedIndexHtml = indexHtml.replace(/\/assets\//g, '/assets/');
  fs.writeFileSync('./dist/index.html', modifiedIndexHtml);
}

console.log('Netlify deployment fixes applied successfully!');
