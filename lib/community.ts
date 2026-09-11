export const repositoryUrl = 'https://github.com/FORKYOUWTF/fork-you';

export const suggestProjectUrl = `${repositoryUrl}/issues/new?template=suggest-project.yml`;

export function reportCorrectionUrl(listing?: string) {
  const url = new URL(`${repositoryUrl}/issues/new`);
  url.searchParams.set('template', 'report-correction.yml');
  if (listing) {
    url.searchParams.set('title', `[Correction] ${listing}`);
    url.searchParams.set('listing', listing);
  }
  return url.href;
}
