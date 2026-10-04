import type { Language } from './language.ts';

export type NewsSource = {
  id: string;
  label: string;
  url: string;
  kind: 'Primary source' | 'Reporting' | 'Opinion';
  publishedAt?: string;
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
    id: 'openai-robinson-safety-resignation',
    title: 'An OpenAI safety-report author quits over its culture.',
    topic: 'Safety & accountability',
    eventDate: '2026-10-03',
    reviewedAt: '2026-10-04',
    summary:
      'David Robinson says OpenAI’s pace leaves too little room for careful safety work. OpenAI says it strengthens safeguards and holds back models when needed.',
    status: 'First-person criticism; company response',
    context: [
      {
        label: 'What Robinson says',
        text: 'In an October 3 essay, Robinson says he resigned after leading the writing of launch safety reports. He argues that constant sprints undermine deeper changes and calls for expertise from fields such as aviation and nuclear safety. This is his account and assessment of the culture.',
        sources: ['robinson'],
      },
      {
        label: 'OpenAI’s response',
        text: 'Spokesperson Drew Pusateri says OpenAI strengthens safeguards, expands outside evaluations and pauses training or withholds models when necessary.',
        sources: ['techcrunch-response'],
      },
      {
        label: 'A concrete safety decision',
        text: 'AP reported on September 29 that OpenAI had delayed GPT-6.1 Astra after safety concerns. That is a documented decision to hold a release, rather than evidence that every safeguard works.',
        sources: ['ap-delay'],
      },
      {
        label: 'What this establishes',
        text: 'A departing employee’s warning deserves scrutiny. It is not an independent audit or proof that a predicted disaster will happen; the company’s assurances are not an independent audit either.',
        sources: ['robinson', 'techcrunch-response'],
      },
    ],
    ourTake:
      'Safety teams need enough time and authority to stop a release. Public incident reports and independent scrutiny would help people judge whether that power works in practice.',
    sources: [
      {
        id: 'robinson',
        label: 'David Robinson / The Atlantic — Resignation essay',
        url: 'https://www.theatlantic.com/technology/2026/10/openai-safety-team-resignation/688881/',
        kind: 'Opinion',
        publishedAt: '2026-10-03',
      },
      {
        id: 'techcrunch-response',
        label: 'TechCrunch — OpenAI’s response to Robinson',
        url: 'https://techcrunch.com/2026/10/03/openai-safety-employee-resigns-claiming-the-companys-culture-is-broken/',
        kind: 'Reporting',
        publishedAt: '2026-10-03',
      },
      {
        id: 'ap-delay',
        label: 'AP — OpenAI delays a model over safety concerns',
        url: 'https://apnews.com/article/5afb865b2cddc439efdcf31ebdc406a5',
        kind: 'Reporting',
        publishedAt: '2026-09-29',
      },
    ],
  },
  {
    id: 'apple-muse-agent-permissions',
    title:
      'Apple promises tighter controls as AI agents reach into private files.',
    topic: 'Agent privacy & consent',
    eventDate: '2026-10-02',
    reviewedAt: '2026-10-04',
    summary:
      'Apple plans stricter consent for Full Disk Access. The announcement follows a disputed account of Meta’s Muse reading private messages; it does not settle what happened on that Mac.',
    status: 'Apple announcement; Muse claim disputed',
    context: [
      {
        label: 'What Apple announced',
        text: 'On October 2, Apple said some developers use Full Disk Access in ways that expose files, mail, messages and browsing history without users fully understanding. It promised additional controls requiring explicit user action, but gave no rollout date. This is an announced change, not a verified fix already on your Mac.',
        sources: ['apple'],
      },
      {
        label: 'The earlier account',
        text: 'In a September 19 column, Jason Aten says Muse referred to private Messages conversations despite his decision not to grant access. He describes finding a synced Messages database. This is his first-person account; FORK YOU has not reproduced it.',
        sources: ['aten'],
      },
      {
        label: 'Meta’s response',
        text: 'Meta says Muse needs both macOS Full Disk Access and an enabled Messages connector to read messages. Ars Technica reports the company repeated that position when questioned.',
        sources: ['ars'],
      },
      {
        label: 'What remains unresolved',
        text: 'Apple’s general warning does not name Muse or determine which permissions Aten granted. The sources establish a consent dispute and a platform response, not a demonstrated bypass of macOS protections.',
        sources: ['apple', 'aten', 'ars'],
      },
    ],
    ourTake:
      '“Let this app help” should not leave people guessing which private conversations it can read. Permissions should name the data involved, and users should be able to inspect and revoke access.',
    sources: [
      {
        id: 'apple',
        label: 'Apple Developer — Planned Full Disk Access changes',
        url: 'https://developer.apple.com/news/?id=p6zjojqw',
        kind: 'Primary source',
        publishedAt: '2026-10-02',
      },
      {
        id: 'aten',
        label: 'Jason Aten / Inc. — First-person account of Muse and Messages',
        url: 'https://www.inc.com/jason-aten/metas-new-muse-ai-agent-read-my-private-messages-i-never-asked-it-to/91408202',
        kind: 'Opinion',
        publishedAt: '2026-09-19',
      },
      {
        id: 'ars',
        label: 'Ars Technica — Apple’s announcement and Meta’s response',
        url: 'https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/',
        kind: 'Reporting',
        publishedAt: '2026-10-02',
      },
    ],
  },
  {
    id: 'ftc-frontier-labs-consumer-investigation',
    title: 'The FTC is investigating AI labs over consumer risks.',
    topic: 'Regulation & public oversight',
    eventDate: '2026-09-30',
    reviewedAt: '2026-10-04',
    summary:
      'The US Federal Trade Commission confirmed an investigation involving OpenAI, Anthropic and other AI companies. An investigation is not a finding of wrongdoing.',
    status: 'Investigation confirmed; outcome unresolved',
    context: [
      {
        label: 'What is confirmed',
        text: 'AP reported on September 30 that an FTC spokesperson confirmed the consumer-risk investigation and declined to give further details.',
        sources: ['ap-ftc'],
      },
      {
        label: 'What is reportedly being sought',
        text: 'Bloomberg, citing an unnamed source, reported that the agency was preparing formal information demands concerning compliance with consumer-protection laws.',
        sources: ['bloomberg'],
      },
      {
        label: 'Company responses',
        text: 'AP said OpenAI and Anthropic had not immediately responded by publication on September 30. That does not establish their position today.',
        sources: ['ap-ftc'],
      },
      {
        label: 'What is still unknown',
        text: 'The cited reports do not establish the investigation’s full scope, eventual findings or penalties. Reported plans to seek records should not be confused with a completed enforcement action.',
        sources: ['ap-ftc', 'bloomberg'],
      },
    ],
    ourTake:
      'Public oversight should test what companies tell users about safety. The useful questions are what evidence investigators obtain, what becomes public, and whether any remedies give people more control.',
    sources: [
      {
        id: 'ap-ftc',
        label: 'AP — FTC confirms the investigation',
        url: 'https://apnews.com/article/89ac416717adbfb1d72f2d85e6ce83d1',
        kind: 'Reporting',
        publishedAt: '2026-09-30',
      },
      {
        id: 'bloomberg',
        label: 'Bloomberg — Report on planned information demands',
        url: 'https://bloomberg.com/news/articles/2026-09-30/ftc-probing-openai-and-anthropic-over-product-safety-concerns',
        kind: 'Reporting',
        publishedAt: '2026-09-30',
      },
    ],
  },
  {
    id: 'zcode-git-workspace-uploads',
    title: 'ZCode’s uploads reached beyond source files into .git.',
    topic: 'Code privacy & consent',
    eventDate: '2026-09-18',
    reviewedAt: '2026-09-20',
    summary:
      'Researchers found ZCode packaging project files and Git history for background uploads. Z.ai apologized, and a later release addressed the upload mechanism. What happened to earlier cloud copies remains unverified.',
    status: 'Upload findings; fix reported',
    context: [
      {
        label: 'What was packaged',
        text: 'In a September 18 analysis of ZCode 3.12.3, ferstar describes encrypted workspace snapshots destined for Alibaba Cloud storage. The manifest included source files, Git objects, LFS assets and reflogs; .git accounted for 86.6% of the measured snapshot.',
        sources: ['ferstar'],
      },
      {
        label: 'An attempted upload is not a completed upload',
        text: 'The author’s September 19 clarification says the 313 MB commercial-project archive never uploaded successfully. A separate 538-file public repository did receive server confirmation. The large archive’s presence on disk alone does not prove it reached the cloud.',
        sources: ['ferstar'],
      },
      {
        label: 'A separate local inspection',
        text: 'Silent Star reports finding Git-heavy manifests in version 3.10.1, with smaller snapshots accepted by the server and a private repository still pending. That analysis says Git metadata bypassed filters applied to ordinary files. This could expose previously committed secrets, but the author reports finding no real credentials in the repositories checked.',
        sources: ['silent-star'],
      },
      {
        label: 'The company’s response',
        text: 'IT Home reports that Z.ai apologized on September 18 and attributed the issue to codebase indexing and Repo Wiki, which had initially been enabled by default. The company says uploaded data is destroyed after cloud-generated wiki pages are completed. It also promised to open-source ZCode and bring in outside reviewers; these are commitments, not completed audits.',
        sources: ['ithome'],
      },
      {
        label: 'What changed in 3.14.0',
        text: 'ZCode’s September 19 release notes list a repository-wiki upload fix. Ferstar’s updated inspection says version 3.14.0 removed the upload pipeline. These findings concern the client change; they do not independently verify deletion of previously uploaded data. FORK YOU has reviewed the sources, not reproduced the client analysis.',
        sources: ['zcode-changelog', 'ferstar'],
      },
    ],
    ourTake:
      'Your repository’s history deserves the same consent as its current files. Coding tools should show what leaves your machine, provide a working opt-out, and make retention claims verifiable. Publishing source and an independent audit would give users something concrete to inspect.',
    sources: [
      {
        id: 'ferstar',
        label: 'ferstar — Original analysis and September 19 clarification',
        url: 'https://blog.ferstar.org/en/posts/zcode-silent-workspace-snapshot-upload/',
        kind: 'Primary source',
        publishedAt: '2026-09-18',
      },
      {
        id: 'silent-star',
        label: 'Silent Star — Separate local inspection (Chinese)',
        url: 'https://blog.silencestar.com/posts/zcode-repo-snapshot/',
        kind: 'Primary source',
        publishedAt: '2026-09-18',
      },
      {
        id: 'ithome',
        label: 'IT Home — Z.ai’s apology and response (Chinese)',
        url: 'https://www.ithome.com/1/004/310.htm',
        kind: 'Reporting',
        publishedAt: '2026-09-18',
      },
      {
        id: 'zcode-changelog',
        label: 'ZCode — Official 3.14.0 release notes',
        url: 'https://zcode.z.ai/en/changelog',
        kind: 'Primary source',
        publishedAt: '2026-09-19',
      },
    ],
  },
  {
    id: 'openai-project-lily-chat-review',
    title: 'Project Lily: the people reading ChatGPT conversations.',
    topic: 'Privacy & data work',
    eventDate: '2026-09-14',
    reviewedAt: '2026-09-17',
    summary:
      '404 Media reports that OpenAI contractors review real ChatGPT conversations, sometimes containing sensitive information. OpenAI’s consumer FAQ permits limited human access for model improvement and other specified purposes.',
    status: 'Reported practice',
    context: [
      {
        label: 'The original investigation',
        text: 'Joseph Cox’s September 14 report describes hundreds of contractors rating chatbot replies under Project Lily. It cites internal documents and real prompts seen by 404 Media. The work aims to improve responses, including reducing excessive agreement with users and claims of human-like experiences.',
        sources: ['404-media'],
      },
      {
        label: 'More than a single prompt',
        text: 'Tom’s Hardware’s follow-up, citing 404 Media, describes reviewers receiving conversations and a user-memory summary that may include personal context such as location. This is coverage of the same investigation, rather than a separate set of leaked evidence.',
        sources: ['toms-hardware'],
      },
      {
        label: 'OpenAI’s response and disclosures',
        text: '404 Media reports that reviewers do not see usernames; OpenAI says it tries to remove personal details but acknowledges some can get through. The company’s consumer FAQ says authorized staff and service providers may access content for abuse investigations, support, legal matters, or model improvement unless users opt out of that last purpose. It describes confidentiality obligations, access controls, and logging.',
        sources: ['404-media', 'consumer-faq'],
      },
      {
        label: 'What filtering can miss',
        text: 'OpenAI’s Privacy Filter documentation explicitly warns that the tool does not guarantee anonymity and can miss unusual identifiers or ambiguous private references. That supports caution about redaction; it does not measure the failure rate inside Project Lily.',
        sources: ['privacy-filter'],
      },
      {
        label: 'What you can control',
        text: 'OpenAI offers a training opt-out under Settings → Data Controls → Improve the model for everyone. Its FAQ says Temporary Chats are not used for training but may be reviewed for abuse. A training opt-out is not a promise of zero human access for the other purposes listed in the consumer FAQ.',
        sources: ['data-controls', 'consumer-faq'],
      },
    ],
    ourTake:
      'An intimate chat interface needs a clear explanation of who might read the conversation. Users should be able to understand and control that trade before sharing sensitive material. The people doing the review work deserve visibility too.',
    sources: [
      {
        id: '404-media',
        label: '404 Media — Original Project Lily investigation',
        url: 'https://www.404media.co/inside-project-lily-the-humans-reading-your-chatgpt-chats/',
        kind: 'Reporting',
        publishedAt: '2026-09-14',
      },
      {
        id: 'toms-hardware',
        label:
          'Tom’s Hardware — Follow-up on reviewer access and memory summaries',
        url: 'https://www.tomshardware.com/tech-industry/artificial-intelligence/chatgpt-transcripts-are-reportedly-read-by-humans-to-improve-responses-including-those-with-personal-information-project-lilly-has-seen-openai-hire-hundreds-of-contractors-to-manually-review-logs',
        kind: 'Reporting',
        publishedAt: '2026-09-15',
      },
      {
        id: 'consumer-faq',
        label: 'OpenAI — Data Usage for Consumer Services FAQ',
        url: 'https://help.openai.com/en/articles/7039943-data-usage-for-consumer-services-faq',
        kind: 'Primary source',
      },
      {
        id: 'privacy-filter',
        label: 'OpenAI — Privacy Filter and its limitations',
        url: 'https://openai.com/index/introducing-openai-privacy-filter/',
        kind: 'Primary source',
        publishedAt: '2026-04-22',
      },
      {
        id: 'data-controls',
        label: 'OpenAI — Data Controls FAQ',
        url: 'https://help.openai.com/en/articles/7730893-data-controls-faq',
        kind: 'Primary source',
      },
    ],
  },
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

export function formatNewsDate(
  date: string,
  language: Language = 'en',
): string {
  return new Intl.DateTimeFormat(language, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
