import { mkdirSync, copyFileSync, rmSync } from 'node:fs';
import { dirname } from 'node:path';

const files = ['index.html', 'src/styles.css', 'src/app.js', 'docs/architecture.md'];
rmSync('dist', { recursive: true, force: true });
for (const file of files) {
  const target = `dist/${file}`;
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(file, target);
}
console.log(`Built Basma Pro Services platform with ${files.length} static assets.`);
