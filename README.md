# FORK YOU

**They want to eat everything. Fork the future.**

Find open-source projects, companies, cooperatives, and public-interest organizations worth contributing to, working for, or volunteering with.

Website: [forkyou.wtf](https://forkyou.wtf)

## Features

- Search 18 curated profiles by name, cause, or skill.
- Filter by organization type and contribution, careers, or volunteer routes.
- Read governance context, official sources, and review dates.
- Follow dated news briefs with linked evidence, disputed claims, company responses, and clearly labeled editorial views.
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

## Languages

The site supports English, Simplified Chinese, Traditional Chinese, Korean, Japanese, Spanish, French, and Italian. On first visit it uses the first supported language in the browser’s preference list, falling back to English. Chinese script tags take priority over regions: `zh-Hant` selects Traditional Chinese, `zh-Hans` selects Simplified Chinese; otherwise Taiwan, Hong Kong, and Macau select Traditional Chinese. Other Chinese preferences select Simplified Chinese. Regional variants such as `es-MX` and `fr-CA` use the shared Spanish and French translations.

The header selector lists each language in its own writing system and remembers a manual choice on that browser. The localized Auto option restores browser-language selection. No location lookup or translation service is used. Switching still works if local storage is blocked, but the choice may not survive a reload.

The static HTML is English; language selection runs after hydration. All languages share the same URLs and article anchors. English remains available without JavaScript. English and Simplified Chinese UI copy lives in `lib/copy.ts`, with Simplified Chinese content in `lib/directory-zh.ts` and `lib/news-zh.ts`. Each additional language has its own file in `lib/locales/`; `lib/translations.ts` registers the content bundles. Translations reuse the original IDs, source URLs, citation relationships, and evidence-review dates. Update all languages when changing content; tests check full coverage and evidence preservation. Search accepts every supported language regardless of the displayed language, ignores Latin accents, and preserves filters when switching.

## News briefs

The [news section](https://forkyou.wtf/#news) is maintained in `lib/news.ts`. Each brief includes an event date, a source-review date in UTC, context linked to individual sources, and a separate editorial view. Source types distinguish first-party statements, reporting, and opinion. Briefs are manually reviewed; the site does not fetch or publish headlines automatically.

Source publication dates are optional for living documents such as policy FAQs that do not display a fixed date. Their review date is recorded on the brief; do not invent a publication date from a relative “updated” label.

When adding or updating a story, read the original material, check for subsequent responses or corrections, and preserve the distinction between facts, allegations, and motives that have not been established. Write original summaries, quote sparingly, and link to the full source. Update `reviewedAt` only after checking the sources. Keep stable story IDs for existing links, list newer events first, and explain substantive corrections in the brief.

[Suggest a story](https://github.com/FORKYOUWTF/fork-you/issues/new?template=suggest-story.yml) with evidence. Every brief also links to a correction form. These forms are public and require a GitHub account.

## License

No project license has been selected. Public visibility alone does not grant an open-source license.
