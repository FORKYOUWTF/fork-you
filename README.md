# FORK YOU

**They want to eat everything. Fork the future.**

Find open-source projects, companies, cooperatives, and public-interest organizations worth contributing to, working for, or volunteering with.

Website: [forkyou.wtf](https://forkyou.wtf)

## Features

- Search 18 curated profiles by name, cause, or skill.
- Filter by organization type and contribution, careers, or volunteer routes.
- Read governance context, official sources, and review dates.
- Use a responsive interface with keyboard-accessible controls and reduced-motion support.

The directory links to official participation pages. A careers page does not imply a current vacancy, and inclusion does not imply endorsement.

## Development

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run typecheck
npm run lint
npm run build
npm run check:pages
```

Built with React, TypeScript, Vinext, and Tailwind CSS. Static output is written to `out/`.

## Publishing

Enable GitHub Pages with GitHub Actions as the source, then run the **Publish GitHub Pages** workflow. The workflow uses the URL configured in Pages settings.

Local builds default to `https://forkyouwtf.github.io/fork-you/`. For a root custom domain:

```sh
FORK_YOU_PAGES_BASE_PATH='' FORK_YOU_SITE_URL='https://forkyou.wtf/' npm run build
FORK_YOU_PAGES_BASE_PATH='' npm run check:pages
```

## Directory data

Profiles are maintained in `lib/directory.ts`. Entries include official source links, governance context, participation routes, and review dates. Update review dates only after checking the sources. Paid-work routes are labeled separately from unpaid contribution and volunteering.

## Help improve the directory

- [Suggest a project](https://github.com/FORKYOUWTF/fork-you/issues/new?template=suggest-project.yml) with official sources and a practical way to get involved.
- [Report a correction](https://github.com/FORKYOUWTF/fork-you/issues/new?template=report-correction.yml) with the affected listing, the proposed change, and supporting evidence.

Submissions are public and require a GitHub account. Suggestions and corrections are reviewed against the [listing standards](https://forkyou.wtf/#standards) before publication. Each listing's “Why them?” panel also has a correction link that fills in its name.

## License

No project license has been selected. Public visibility alone does not grant an open-source license.
