import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { organizations } from '../lib/directory.ts';
import { newsStories } from '../lib/news.ts';

const basePath = process.env.FORK_YOU_PAGES_BASE_PATH ?? '/fork-you';
const root = path.resolve('out');
const server = createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    if (!pathname.startsWith(`${basePath}/`))
      throw new Error('Outside base path');
    let file = path.resolve(root, `.${pathname.slice(basePath.length)}`);
    if (file !== root && !file.startsWith(`${root}${path.sep}`))
      throw new Error('Outside artifact');
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const body = await readFile(file);
    response.writeHead(200);
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
try {
  const origin = `http://127.0.0.1:${server.address().port}`;
  const response = await fetch(`${origin}${basePath}/`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.equal(
    (html.match(/class="org-card"/g) ?? []).length,
    organizations.length,
  );
  for (const organization of organizations)
    assert.ok(html.includes(organization.name), organization.name);
  assert.ok(html.includes('id="news"'), 'News section is exported');
  for (const story of newsStories) {
    assert.ok(html.includes(`id="${story.id}"`), 'Story has a stable anchor');
    assert.ok(html.includes(story.status), 'Claim status is exported');
    for (const source of story.sources)
      assert.ok(html.includes(source.url), 'Source link is exported');
  }
  assert.ok(!html.includes('noindex'));
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, 'Canonical URL is present');
  assert.equal(new URL(canonical[1]).pathname, `${basePath}/`);
  const assets = [
    ...new Set(
      [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
        .map((match) => match[1])
        .filter((url) => url.startsWith(`${basePath}/`)),
    ),
  ];
  assert.ok(assets.some((url) => url.endsWith('.js')));
  assert.ok(assets.some((url) => url.endsWith('.css')));
  for (const asset of [
    ...assets,
    `${basePath}/robots.txt`,
    `${basePath}/sitemap.xml`,
    `${basePath}/404.html`,
  ]) {
    assert.equal((await fetch(`${origin}${asset}`)).status, 200, asset);
  }
  assert.ok(
    (await (await fetch(`${origin}${basePath}/sitemap.xml`)).text()).includes(
      canonical[1],
    ),
  );
  assert.equal((await fetch(`${origin}${basePath}/missing-page`)).status, 404);
  console.log(
    `Pages HTTP checks passed: ${organizations.length} profiles, ${newsStories.length} news briefs and their sources, canonical, ${assets.length} assets, metadata, and missing-page status.`,
  );
} finally {
  await new Promise((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
}
