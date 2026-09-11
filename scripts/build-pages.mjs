import { spawnSync } from 'node:child_process';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const basePath = process.env.FORK_YOU_PAGES_BASE_PATH ?? '/fork-you';
if (
  basePath !== '' &&
  !/^\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(basePath)
) {
  throw new Error('Pages base path must be empty or a path such as /fork-you.');
}
const siteUrl = new URL(
  process.env.FORK_YOU_SITE_URL ??
    `https://forkyouwtf.github.io${basePath}/`,
);
if (siteUrl.protocol !== 'https:' || siteUrl.username || siteUrl.password) {
  throw new Error('Set FORK_YOU_SITE_URL to the public HTTPS website address.');
}
if (siteUrl.pathname.replace(/\/$/, '') !== basePath) {
  throw new Error('The public URL path must match FORK_YOU_PAGES_BASE_PATH.');
}
const canonical = `${siteUrl.href.replace(/\/$/, '')}/`;
const result = spawnSync(
  process.execPath,
  ['node_modules/vinext/dist/cli.js', 'build'],
  {
    stdio: 'inherit',
    env: { ...process.env, FORK_YOU_PAGES: '1', FORK_YOU_SITE_URL: canonical },
  },
);
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

// Vinext prefixes its export directory as well as asset URLs. Pages mounts
// the uploaded artifact at the base path, so upload the contents of that folder.
const source = path.resolve('dist/client', `.${basePath}`);
await readFile(path.join(source, 'index.html'));
await rm('out', { recursive: true, force: true });
await mkdir('out', { recursive: true });
await cp(source, 'out', { recursive: true });
await cp('dist/client/404.html', 'out/404.html');
await writeFile('out/.nojekyll', '');

// The current Vinext exporter does not emit dynamic metadata routes.
await writeFile(
  'out/robots.txt',
  `User-agent: *\nAllow: /\nSitemap: ${canonical}sitemap.xml\n`,
);
await writeFile(
  'out/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonical}</loc></url></urlset>\n`,
);
console.log(`Static Pages artifact ready in out/ for ${canonical}`);
