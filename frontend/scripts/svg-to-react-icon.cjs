// svg-to-react-icon.cjs
// Node.js script: Convert SVGs in assets/ to React components in components/common/icons/
// Usage: node scripts/svg-to-react-icon.cjs

const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const ICONS_DIR = path.resolve(__dirname, '../src/assets');
const OUT_DIR = path.resolve(__dirname, '../src/components/common/icons');
const ICON_PROPS_IMPORT = `import { IconProps } from '@/types/icon';`;

function toPascalCase(str) {
  return str
    .replace(/(^[a-z])|([-_][a-z])/g, (match) => match.replace(/[-_]/, '').toUpperCase())
    .replace(/\./g, '');
}

function svgToComponent(svg, name, color) {
  svg = svg.replace(/<title>.*?<\/title>/gs, '');
  svg = svg.replace(/<svg([^>]*)>/, `<svg$1 width={size} height={size} fill=\"${color}\" role=\"img\" aria-label={title} className={className} {...props}>`);
  return `import React from 'react';\n${ICON_PROPS_IMPORT}\n\nexport const ${name} = ({ size = 24, title = '${name.replace(/Icon$/, '')}', className, ...props }: IconProps) => (\n  ${svg.trim()}\n);\n`;
}

(async () => {
  for (const file of fs.readdirSync(ICONS_DIR)) {
    if (!file.endsWith('.svg')) continue;
    const svgPath = path.join(ICONS_DIR, file);
    const svg = fs.readFileSync(svgPath, 'utf8');
    const match = svg.match(/fill=\"#?([0-9a-fA-F]{3,8})\"/);
    const color = match ? (match[1].startsWith('#') ? match[1] : `#${match[1]}`) : 'currentColor';
    const name = toPascalCase(file.replace(/\.svg$/, '-icon'));
    const component = svgToComponent(svg, name, color);
    const formatted = await prettier.format(component, { parser: 'typescript' });
    fs.writeFileSync(path.join(OUT_DIR, `${file.replace(/\.svg$/, '-icon.tsx')}`), formatted, 'utf8');
  }
  console.log('SVGs converted to React icon components.');
})();
