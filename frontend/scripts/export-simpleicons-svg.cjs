// export-simpleicons-svg.cjs
// Node.js script: Export all available simple-icons as SVGs to src/assets
// Usage: node scripts/export-simpleicons-svg.cjs

const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

const ICONS_DIR = path.resolve(__dirname, '../src/assets');
if (!fs.existsSync(ICONS_DIR)) fs.mkdirSync(ICONS_DIR, { recursive: true });

const allIcons = Object.values(simpleIcons).filter(icon => icon && icon.slug && icon.svg);

let count = 0;
for (const icon of allIcons) {
  const svg = `<svg role="img" viewBox="0 0 24 24" fill="#${icon.hex}" xmlns="http://www.w3.org/2000/svg"><title>${icon.title}</title>${icon.svg}</svg>`;
  fs.writeFileSync(path.join(ICONS_DIR, `${icon.slug}.svg`), svg, 'utf8');
  count++;
}
console.log(`Exported ${count} SVGs from simple-icons.`);
