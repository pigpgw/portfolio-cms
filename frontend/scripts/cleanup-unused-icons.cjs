// cleanup-unused-icons.cjs
// Node.js script: Delete all icon components except the used ones
// Usage: node scripts/cleanup-unused-icons.cjs

const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.resolve(__dirname, '../src/components/common/icons');
const KEEP = new Set([
  'figma-icon.tsx',
  'github-icon.tsx',
  'react-icon.tsx',
  'nextjs-icon.tsx',
  'typescript-icon.tsx',
  'javascript-icon.tsx',
  'tailwindcss-icon.tsx',
  'shadcnui-icon.tsx',
  'radixui-icon.tsx',
  'styledcomponents-icon.tsx',
  'vite-icon.tsx',
  'zustand-icon.tsx',
  'reactquery-icon.tsx',
  'jest-icon.tsx',
  'vercel-icon.tsx',
  'nodejs-icon.tsx',
  'express-icon.tsx',
  'mongodb-icon.tsx',
  'postgresql-icon.tsx',
  'docker-icon.tsx',
  'testinglibrary-icon.tsx',
  'pnpm-icon.tsx',
]);

fs.readdirSync(ICONS_DIR).forEach(file => {
  if (!KEEP.has(file) && file.endsWith('-icon.tsx')) {
    fs.unlinkSync(path.join(ICONS_DIR, file));
    console.log('Deleted', file);
  }
});
console.log('Cleanup complete.');
