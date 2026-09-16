export type NewsSource = {
  id: string;
  label: string;
  url: string;
  kind: 'Primary source' | 'Reporting' | 'Opinion';
  publishedAt: string;
};

export type NewsStory = {
  id: string;
  title: string;
  topic: string;
  eventDate: string;
  reviewedAt: string;
  summary: string;
  status: string;
  context: {
    label: string;
    text: string;
    sources: string[];
  }[];
  ourTake: string;
  sources: NewsSource[];
};

export const newsStories: NewsStory[] = [
  {
    id: 'anthropic-slowdown-ipo',
    title: 'Anthropic’s slowdown call meets its IPO ambitions.',
    topic: 'Safety & money',
    eventDate: '2026-09-12',
    reviewedAt: '2026-09-16',
    summary:
      'Dario Amodei wants a slower AI race while Anthropic pursues a public listing. There is a real debate about who benefits. An IPO-only motive has not been established by the sources below.',
    status: 'IPO motive unproven',
    context: [
      {
        label: 'The proposal',
        text: 'Amodei’s September 12 essay calls for slower capability growth, embedded outside evaluators, and coordination between companies and governments. His stated reason is to give safety work time to catch up. He says pacing would not stop model training.',
        sources: ['amodei'],
      },
      {
        label: 'The money',
        text: 'Reuters reported on September 11 that Nvidia was discussing an investment in Anthropic’s planned IPO. The report cites unnamed sources, says the plans could change, and records that Anthropic declined to comment.',
        sources: ['reuters'],
      },
      {
        label: 'The criticism',
        text: 'In a September 15 column, Le Monde’s Nicolas Chapuis describes the suspicion that regulation could protect leading labs from cheaper open models. He also describes a competing interpretation: sincere safety concerns under competitive pressure. Neither interpretation establishes a hidden IPO motive.',
        sources: ['le-monde'],
      },
    ],
    ourTake:
      'Safety rules deserve independent oversight and a voice for the public. Watch who writes the rules, who can afford to comply, and whether open alternatives still have room to exist.',
    sources: [
      {
        id: 'amodei',
        label: 'Dario Amodei — We Must Pace the Frontier',
        url: 'https://darioamodei.com/post/we-must-pace-the-frontier',
        kind: 'Primary source',
        publishedAt: '2026-09-12',
      },
      {
        id: 'reuters',
        label: 'Reuters via Investing.com — Nvidia and Anthropic IPO talks',
        url: 'https://www.investing.com/news/stock-market-news/exclusivenvidia-in-talks-to-invest-in-anthropics-mega-ipo-sources-say-4898552',
        kind: 'Reporting',
        publishedAt: '2026-09-11',
      },
      {
        id: 'le-monde',
        label: 'Le Monde — The money behind the AI slowdown debate',
        url: 'https://www.lemonde.fr/en/opinion/article/2026/09/15/the-growing-debate-over-the-aipocalypse-is-also-and-above-all-about-big-money_6757529_23.html',
        kind: 'Opinion',
        publishedAt: '2026-09-15',
      },
    ],
  },
  {
    id: 'openai-buckmaster-math-credit',
    title: 'OpenAI claims a math breakthrough. The credit is disputed.',
    topic: 'Research & power',
    eventDate: '2026-09-08',
    reviewedAt: '2026-09-16',
    summary:
      'OpenAI announced a Navier–Stokes proof. NYU mathematician Tristan Buckmaster challenged its conduct around related work with Levent Alpöge. OpenAI disputes his account; use of their private research has not been established.',
    status: 'Disputed accounts',
    context: [
      {
        label: 'The announcement',
        text: 'On September 8, OpenAI published what it describes as a solution to the Navier–Stokes Millennium Prize Problem, with a paper and Lean formalization. That is the company’s mathematical claim; this brief does not independently validate the proof.',
        sources: ['openai'],
      },
      {
        label: 'Buckmaster’s account',
        text: 'Buckmaster says OpenAI proposed a paper that excluded his collaborator Alpöge, an Anthropic employee, and that his questions about training on their Codex drafts initially went unanswered. His statement explicitly says he does not know whether their data was used. Their published results concern related fluid equations, including forced Euler.',
        sources: ['buckmaster'],
      },
      {
        label: 'OpenAI’s response',
        text: 'OpenAI denies seeing their work before publication. Its September 10 update says an investigation ruled out influence from Buckmaster’s Codex prompts in the preceding two months, including through training. WIRED also reports that Sébastien Bubeck disputed the claim that OpenAI sought to remove Alpöge’s name.',
        sources: ['openai', 'wired'],
      },
    ],
    ourTake:
      'Researchers need clear boundaries when the company supplying their tools also competes for discoveries. Credit, data use, and access to compute deserve scrutiny alongside the result itself.',
    sources: [
      {
        id: 'openai',
        label: 'OpenAI — Announcement and September 10 response update',
        url: 'https://openai.com/index/navier-stokes-solution/',
        kind: 'Primary source',
        publishedAt: '2026-09-08',
      },
      {
        id: 'buckmaster',
        label: 'Tristan Buckmaster — Public statement (PDF)',
        url: 'https://cims.nyu.edu/~tristanb/statement.pdf',
        kind: 'Primary source',
        publishedAt: '2026-09-07',
      },
      {
        id: 'wired',
        label: 'WIRED — The announcement and competing accounts',
        url: 'https://www.wired.com/story/openai-navier-stokes-math-discovery-academics/',
        kind: 'Reporting',
        publishedAt: '2026-09-08',
      },
    ],
  },
];

export function formatNewsDate(date: string): string {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
