// fix-icon-components.cjs
// Node.js script: Remove duplicate 'title' prop/element from icon components
// Usage: node scripts/fix-icon-components.cjs

const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.resolve(__dirname, '../src/components/common/icons');

for (const file of fs.readdirSync(ICONS_DIR)) {
  if (!file.endsWith('-icon.tsx')) continue;
  const filePath = path.join(ICONS_DIR, file);
  let code = fs.readFileSync(filePath, 'utf8');

  // Remove duplicate title prop in component signature
  code = code.replace(/,?\s*title\s*=\s*[^,)}]+/g, '');

  // Remove <title>{title}</title> if present
  code = code.replace(/<title>\{[^}]+\}<\/title>\s*/g, '');

  // Remove any remaining title attribute in <svg ... title=...>
  code = code.replace(/title=\{[^}]+\}\s*/g, '');

  fs.writeFileSync(filePath, code, 'utf8');
}
console.log('Removed duplicate title prop/element from all icon components.');
