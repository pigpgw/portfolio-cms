// download-simpleicons-svg.cjs
// Node.js script: Download only existing simpleicons SVGs for a given slug list using simple-icons npm package
// Usage: node scripts/download-simpleicons-svg.cjs

const fs = require('fs');
const path = require('path');
const https = require('https');
const simpleIcons = require('simple-icons');

const ICONS_DIR = path.resolve(__dirname, '../src/assets');
const SLUGS = [
  'react', 'nextdotjs', 'vuedotjs', 'nuxtdotjs', 'angular', 'svelte', 'solid',
  'redux', 'zustand', 'recoil', 'reactquery', 'swr', 'apollographql', 'rxjs',
  'threedotjs', 'd3dotjs', 'chartdotjs', 'framer', 'greensock', 'storybook',
  'cypress', 'playwright', 'jest', 'testinglibrary', 'webpack', 'vite', 'parcel',
  'rollupdotjs', 'babel', 'eslint', 'prettier', 'stylelint', 'tailwindcss',
  'styledcomponents', 'emotion', 'sass', 'postcss', 'materialui', 'antdesign',
  'chakraui', 'shadcnui', 'radixui', 'bootstrap', 'mantine', 'headlessui',
  'reacthookform', 'formik', 'yup', 'zod', 'i18next', 'reactintl',
  'nextauthdotjs', 'auth0', 'clerk', 'firebase'
];

function getAllSlugs() {
  // simpleIcons.get returns icon object by slug
  return Object.keys(simpleIcons).filter((key) => key !== 'get').map((key) => simpleIcons[key].slug);
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        res.resume();
        return resolve(false);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(true)));
    }).on('error', reject);
  });
}

(async () => {
  // Ensure output dir exists
  if (!fs.existsSync(ICONS_DIR)) fs.mkdirSync(ICONS_DIR, { recursive: true });

  // Get valid slugs from simple-icons
  const validSlugs = new Set(getAllSlugs());

  // Download only if slug exists
  for (const slug of SLUGS) {
    if (!validSlugs.has(slug)) {
      console.log(`[SKIP] ${slug} (not found in simple-icons)`);
      continue;
    }
    const url = `https://cdn.simpleicons.org/${slug}.svg`;
    const dest = path.join(ICONS_DIR, `${slug}.svg`);
    const ok = await download(url, dest);
    if (ok) {
      console.log(`[OK]   ${slug}`);
    } else {
      console.log(`[FAIL] ${slug}`);
    }
  }
})();
