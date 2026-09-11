export const categories = [
  { value: 'all', label: 'Everyone', singular: 'Organization' },
  {
    value: 'project',
    label: 'Open projects',
    singular: 'Open project',
  },
  {
    value: 'company',
    label: 'Companies & co-ops',
    singular: 'Company / co-op',
  },
  {
    value: 'nonprofit',
    label: 'NGOs & nonprofits',
    singular: 'NGO / nonprofit',
  },
] as const;
export const intents = [
  { value: 'all', label: 'Any way in' },
  { value: 'contribute', label: 'Contribute to a project' },
  { value: 'careers', label: 'Explore paid work' },
  { value: 'volunteer', label: 'Volunteer my time' },
] as const;
export type Category = (typeof categories)[number]['value'];
export type Intent = (typeof intents)[number]['value'];
export type Organization = {
  id: string;
  name: string;
  initials: string;
  color: string;
  category: Exclude<Category, 'all'>;
  description: string;
  tags: string[];
  reason: string;
  governance: string;
  participation: string;
  actions: { label: string; url: string; intent: Exclude<Intent, 'all'> }[];
  sources: { label: string; url: string }[];
  reviewedAt: string;
};
export const organizations: Organization[] = [
  {
    id: 'godot',
    name: 'Godot',
    initials: 'Gd',
    color: '#cbe6ff',
    category: 'project',
    description: 'An open-source game engine for people with worlds to build.',
    tags: ['Games', 'C++', 'Documentation'],
    reason:
      'A shared game engine gives creators tools they can inspect, adapt, and keep using. Its contribution guide includes much more than programming.',
    governance:
      'The nonprofit Godot Foundation supports the project. Contributors retain copyright in their code; the engine uses the MIT license.',
    participation:
      'Start with the contribution guide for engine work, documentation, demos, tutorials, and community support. These are community contribution routes, not job offers.',
    actions: [
      {
        label: 'Find a contribution',
        url: 'https://contributing.godotengine.org/en/latest/organization/how_to_contribute.html',
        intent: 'contribute',
      },
    ],
    sources: [
      {
        label: 'Ways to contribute',
        url: 'https://contributing.godotengine.org/en/latest/organization/how_to_contribute.html',
      },
      { label: 'Governance model', url: 'https://godotengine.org/governance/' },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'igalia',
    name: 'Igalia',
    initials: 'ig',
    color: '#dfeaa4',
    category: 'company',
    description:
      'Build the open web with a consultancy organized around its workers.',
    tags: ['Worker ownership', 'Browsers', 'Engineering'],
    reason:
      'Igalia combines paid open-source engineering with an employee-owned, democratically managed company model.',
    governance:
      'An employee-owned open-source consultancy. Its published company information describes a flat, cooperative organization.',
    participation:
      'Read the official jobs page for the application process and current opportunities. Eligibility and compensation depend on the individual role.',
    actions: [
      {
        label: 'Explore careers',
        url: 'https://www.igalia.com/jobs/',
        intent: 'careers',
      },
    ],
    sources: [
      {
        label: 'Igalia values and cooperative decision-making',
        url: 'https://www.igalia.com/about/values',
      },
      { label: 'Working at Igalia', url: 'https://www.igalia.com/jobs/' },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'eff',
    name: 'Electronic Frontier Foundation',
    initials: 'EFF',
    color: '#ffc5b8',
    category: 'nonprofit',
    description:
      'Fight for privacy, free expression, and a digital world with civil liberties.',
    tags: ['Digital rights', 'Policy', 'Advocacy'],
    reason:
      'People need rights as well as software. EFF offers routes into public-interest advocacy, legal work, and technology.',
    governance:
      'A nonprofit digital-rights organization with published leadership, corporate documents, and financial reports.',
    participation:
      'The opportunities page links to jobs, internships, and volunteering. Check each route for its requirements and whether it is paid.',
    actions: [
      {
        label: 'Explore careers',
        url: 'https://www.eff.org/about/opportunities',
        intent: 'careers',
      },
      {
        label: 'Find volunteer routes',
        url: 'https://www.eff.org/volunteer',
        intent: 'volunteer',
      },
    ],
    sources: [
      {
        label: 'Official opportunities and volunteer links',
        url: 'https://www.eff.org/about/opportunities',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'mastodon',
    name: 'Mastodon',
    initials: 'm',
    color: '#d9d0ff',
    category: 'project',
    description:
      'Social networking that lets communities run their own corner of the internet.',
    tags: ['Social web', 'Federation', 'Ruby'],
    reason:
      'Federated, open-source social software lets communities choose their own server and rules instead of relying on one central platform.',
    governance:
      'The core project describes itself as nonprofit-developed. Individual servers have their own operators and moderation rules.',
    participation:
      'Start at the official source repository and read its contribution guidelines before proposing work. Community contributions are generally unpaid.',
    actions: [
      {
        label: 'Explore the source',
        url: 'https://github.com/mastodon/mastodon',
        intent: 'contribute',
      },
    ],
    sources: [
      {
        label: 'Mastodon: software, federation, and organization',
        url: 'https://joinmastodon.org/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'codeberg',
    name: 'Codeberg',
    initials: 'Cb',
    color: '#bcebdd',
    category: 'nonprofit',
    description:
      'Give open-source projects a home supported by a nonprofit community.',
    tags: ['Developer tools', 'Community', 'Infrastructure'],
    reason:
      'Community-supported development infrastructure is a practical alternative to depending on a single commercial code host.',
    governance:
      'Codeberg e.V. is a membership-based nonprofit. Active members can vote on association matters; supporting membership has different rights.',
    participation:
      'Read the membership and volunteering information. Membership can involve fees; volunteering availability and roles should be confirmed with Codeberg.',
    actions: [
      {
        label: 'Explore ways to help',
        url: 'https://join.codeberg.org/',
        intent: 'volunteer',
      },
    ],
    sources: [
      {
        label: 'Membership, voting rights, and volunteering',
        url: 'https://join.codeberg.org/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'collabora',
    name: 'Collabora',
    initials: 'Co',
    color: '#f2d8a5',
    category: 'company',
    description:
      'Get paid to work on open-source systems that other people can build on.',
    tags: ['Linux', 'Infrastructure', 'Engineering'],
    reason:
      'A commercial business can fund upstream open-source maintenance. Collabora explicitly centers that work in its engineering practice.',
    governance:
      'A commercial open-source consultancy. Inclusion reflects its documented open-source work, not a claim of nonprofit or worker ownership.',
    participation:
      'Use the official careers page to review available roles and locations. This is a company profile, not a promise of a current vacancy.',
    actions: [
      {
        label: 'Explore careers',
        url: 'https://www.collabora.com/careers.html',
        intent: 'careers',
      },
    ],
    sources: [
      {
        label: 'Careers and open-source engineering',
        url: 'https://www.collabora.com/careers.html',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'blender',
    name: 'Blender',
    initials: 'Bl',
    color: '#ffd4a6',
    category: 'project',
    description:
      'Keep 3D creation in the hands of the people who actually make things.',
    tags: ['3D & art', 'Design', 'Documentation'],
    reason:
      'A shared creation tool gives artists room to build outside a proprietary subscription. Contributions include design, code, testing, and documentation.',
    governance:
      'The Blender Foundation supports the free, open-source Blender project. Development is organized into modules with documented roles.',
    participation:
      'The get-involved guide lists development, documentation, translation, and other community routes. Read the relevant team guidance before starting.',
    actions: [
      {
        label: 'Find a contribution',
        url: 'https://www.blender.org/get-involved/',
        intent: 'contribute',
      },
    ],
    sources: [
      {
        label: 'Ways to get involved',
        url: 'https://www.blender.org/get-involved/',
      },
      {
        label: 'Blender Foundation',
        url: 'https://www.blender.org/about/foundation/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'nextcloud',
    name: 'Nextcloud',
    initials: 'Nc',
    color: '#c4e3ff',
    category: 'company',
    description:
      'Build collaboration tools that people can run on infrastructure they choose.',
    tags: ['Self-hosting', 'PHP', 'Collaboration'],
    reason:
      'Open-source, self-hosted collaboration gives organizations more choice over where their files and conversations live.',
    governance:
      'A commercial open-source company with a contributor community. It offers paid products and services; being listed is not a claim that it rejects AI.',
    participation:
      'Explore the careers page for paid work or the contribution guide for code, testing, translations, and community work. Community contributions are separate from employment.',
    actions: [
      {
        label: 'Explore careers',
        url: 'https://nextcloud.com/jobs/',
        intent: 'careers',
      },
      {
        label: 'Find a contribution',
        url: 'https://nextcloud.com/contribute/',
        intent: 'contribute',
      },
    ],
    sources: [
      {
        label: 'Jobs and company description',
        url: 'https://nextcloud.com/jobs/',
      },
      {
        label: 'Community contribution guide',
        url: 'https://nextcloud.com/contribute/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'tor',
    name: 'Tor Project',
    initials: 'Tor',
    color: '#e2d4f0',
    category: 'nonprofit',
    description:
      'Help people communicate and browse beyond surveillance and censorship.',
    tags: ['Privacy', 'Censorship resistance', 'Translation'],
    reason:
      'Privacy infrastructure matters when control over the internet concentrates. Tor has entry points for technical and nontechnical participation.',
    governance:
      'A nonprofit organization with a board and a wider volunteer community. Its jobs and community pages describe distinct ways to participate.',
    participation:
      'Use the community portal for translation, outreach, research, and technical volunteering, or check its careers page for paid roles. Follow the guidance for each activity.',
    actions: [
      {
        label: 'Find volunteer routes',
        url: 'https://community.torproject.org/',
        intent: 'volunteer',
      },
      {
        label: 'Explore careers',
        url: 'https://www.torproject.org/about/jobs/',
        intent: 'careers',
      },
    ],
    sources: [
      {
        label: 'Tor community portal',
        url: 'https://community.torproject.org/',
      },
      {
        label: 'Jobs and organization',
        url: 'https://www.torproject.org/about/jobs/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'wikimedia',
    name: 'Wikimedia Foundation',
    initials: 'Wm',
    color: '#c6dfc2',
    category: 'nonprofit',
    description:
      'Support the infrastructure and people behind freely shared knowledge.',
    tags: ['Knowledge', 'Education', 'Public interest'],
    reason:
      'Shared knowledge needs a public foundation. Wikimedia offers paid work supporting the infrastructure and communities behind Wikipedia and related projects.',
    governance:
      'The nonprofit Wikimedia Foundation supports Wikimedia projects. Foundation employment is distinct from volunteering as an editor in the wider movement.',
    participation:
      'Review the Foundation careers page for current roles, location requirements, and application details. This listing does not promise any particular opening.',
    actions: [
      {
        label: 'Explore careers',
        url: 'https://wikimediafoundation.org/jobs/',
        intent: 'careers',
      },
    ],
    sources: [
      {
        label: 'Foundation careers and mission',
        url: 'https://wikimediafoundation.org/jobs/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'libreoffice',
    name: 'LibreOffice',
    initials: 'Lo',
    color: '#dfeaa4',
    category: 'project',
    description: 'Make everyday office tools something everyone can improve.',
    tags: ['Office tools', 'Design', 'Translation'],
    reason:
      'Documents are part of everyday life. A community-built office suite gives people tools they can study, improve, and share.',
    governance:
      'A free and open-source project developed by a contributor community with support from The Document Foundation.',
    participation:
      'The contribution guide covers design, translation, documentation, development, and testing, including small tasks. It recommends an introductory conversation with a project mentor.',
    actions: [
      {
        label: 'Find a contribution',
        url: 'https://www.libreoffice.org/improve-it/',
        intent: 'contribute',
      },
    ],
    sources: [
      {
        label: 'Community and contribution routes',
        url: 'https://www.libreoffice.org/improve-it/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'openstreetmap',
    name: 'OpenStreetMap',
    initials: 'OSM',
    color: '#c6dfc2',
    category: 'project',
    description: 'Put your local knowledge on a map everyone can use.',
    tags: ['Open data', 'Mapping', 'Community'],
    reason:
      'Shared map data gives communities a foundation they can reuse beyond one proprietary map provider. Local knowledge is a useful contribution in its own right.',
    governance:
      'A community mapping project. The OpenStreetMap Foundation operates the main site and related services on behalf of the community. Map data has its own open-data licensing and attribution requirements.',
    participation:
      'Start with the welcome guide to learn mapping and ways to help the community. This is an open-data contribution route; you do not need to be a software developer.',
    actions: [
      {
        label: 'Start mapping',
        url: 'https://welcome.openstreetmap.org/',
        intent: 'contribute',
      },
    ],
    sources: [
      {
        label: 'Community, open data, and Foundation role',
        url: 'https://www.openstreetmap.org/about',
      },
      {
        label: 'Welcome and ways to contribute',
        url: 'https://welcome.openstreetmap.org/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'zulip',
    name: 'Zulip',
    initials: 'Zu',
    color: '#cbe6ff',
    category: 'company',
    description:
      'Build open-source team chat with a business owned by a nonprofit.',
    tags: ['Team chat', 'Self-hosting', 'Foundation ownership'],
    reason:
      'Open-source chat and nonprofit ownership offer a different structure for sustaining collaboration tools. That structure deserves scrutiny, not an automatic independence badge.',
    governance:
      'The May 2026 announcement places Kandra Labs, the business behind Zulip, under the independent nonprofit Zulip Foundation. The same announcement says its founder and three senior team members were leaving to join Anthropic.',
    participation:
      'Explore the official jobs page for roles and application requirements. This profile covers the business and its foundation ownership; it does not imply an absence of personal ties to AI labs.',
    actions: [
      {
        label: 'Explore careers',
        url: 'https://zulip.com/jobs/',
        intent: 'careers',
      },
    ],
    sources: [
      { label: 'Jobs and current stewardship', url: 'https://zulip.com/jobs/' },
      {
        label: 'Foundation ownership and leadership transition',
        url: 'https://blog.zulip.com/2026/05/15/announcing-zulip-foundation/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'element',
    name: 'Element',
    initials: 'El',
    color: '#bcebdd',
    category: 'company',
    description:
      'Work on messaging built around open, decentralized communication.',
    tags: ['Messaging', 'Open standards', 'Privacy'],
    reason:
      'Communication built on the Matrix standard gives people more options about how their conversations are hosted and connected.',
    governance:
      'A commercial company in the Matrix ecosystem. Its careers page says almost all software written at Element is open source; that is not a claim that every product or feature is open source.',
    participation:
      'Use the official careers page for current openings and role requirements. Explore the work and product model before deciding whether the team fits your priorities.',
    actions: [
      {
        label: 'Explore careers',
        url: 'https://element.io/en/careers',
        intent: 'careers',
      },
    ],
    sources: [
      {
        label: 'Careers and open-source work',
        url: 'https://element.io/en/careers',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'openproject',
    name: 'OpenProject',
    initials: 'OP',
    color: '#d9d0ff',
    category: 'company',
    description:
      'Help teams organize their work with open-source project management.',
    tags: ['Project management', 'Product & UX', 'Engineering'],
    reason:
      'The tools teams rely on to coordinate work can be shared infrastructure too. OpenProject connects paid product work with publicly available source code.',
    governance:
      'A commercial open-source software company. Its careers page describes a free Community version and work across engineering, product, design, and customer-facing teams.',
    participation:
      'Review the official careers page for openings and location requirements. Team descriptions show the range of work; they do not guarantee a vacancy in every discipline.',
    actions: [
      {
        label: 'Explore careers',
        url: 'https://www.openproject.org/careers/',
        intent: 'careers',
      },
    ],
    sources: [
      {
        label: 'Teams, open-source model, and careers',
        url: 'https://www.openproject.org/careers/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'access-now',
    name: 'Access Now',
    initials: 'AN',
    color: '#ffc5b8',
    category: 'nonprofit',
    description: 'Defend the digital rights of people and communities at risk.',
    tags: ['Human rights', 'Policy', 'Digital security'],
    reason:
      'An open future also needs people who can challenge censorship, surveillance, and abuse. Rights advocacy creates ways to contribute beyond writing software.',
    governance:
      'A global human-rights organization with a distributed team and a public recruitment process. Its mission centers digital rights.',
    participation:
      'Check the official work-with-us page for roles, fellowships, and internships. Work authorization and location requirements vary; remote work does not automatically mean eligibility everywhere.',
    actions: [
      {
        label: 'Explore careers',
        url: 'https://www.accessnow.org/work-with-us/',
        intent: 'careers',
      },
    ],
    sources: [
      {
        label: 'Mission, employment, and application requirements',
        url: 'https://www.accessnow.org/work-with-us/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'open-knowledge',
    name: 'Open Knowledge Foundation',
    initials: 'OK',
    color: '#f2d8a5',
    category: 'nonprofit',
    description:
      'Make public knowledge something people can actually use and share.',
    tags: ['Open data', 'Public interest', 'Education'],
    reason:
      'Open knowledge needs usable tools, skills, and institutions. The Foundation combines these with a network of communities working for the public interest.',
    governance:
      'A not-for-profit organization incorporated in England and Wales, with published governance, board, and funder information. It combines foundation work with services.',
    participation:
      'Use the jobs and opportunities page to see what is currently available. This is an organization to explore, not a claim that it is hiring for a particular role today.',
    actions: [
      {
        label: 'Explore careers',
        url: 'https://okfn.org/en/jobs/',
        intent: 'careers',
      },
    ],
    sources: [
      {
        label: 'Mission, organization, and governance links',
        url: 'https://okfn.org/en/who-we-are/',
      },
      { label: 'Jobs and opportunities', url: 'https://okfn.org/en/jobs/' },
    ],
    reviewedAt: '2026-09-08',
  },
  {
    id: 'framasoft',
    name: 'Framasoft',
    initials: 'Fr',
    color: '#e2d4f0',
    category: 'nonprofit',
    description: 'Help communities take back their everyday digital tools.',
    tags: ['Free software', 'Community', 'Translation'],
    reason:
      'Framasoft turns its critique of concentrated technology power into software, services, and public education people can use.',
    governance:
      'A French nonprofit association that develops free software and runs community-oriented services, supported by donations, employees, and volunteers.',
    participation:
      'The participation portal explains ways to help, with an English section and further resources that may be in French. Read the guidance for each project before starting.',
    actions: [
      {
        label: 'Explore ways to help',
        url: 'https://participer.framasoft.org/en/',
        intent: 'volunteer',
      },
    ],
    sources: [
      {
        label: 'Association, mission, and projects',
        url: 'https://framasoft.org/en/',
      },
      {
        label: 'Participation guide',
        url: 'https://participer.framasoft.org/en/',
      },
    ],
    reviewedAt: '2026-09-08',
  },
];
export type DirectoryFilters = {
  query?: string;
  category?: Category;
  intent?: Intent;
};
export function filterOrganizations(
  records: Organization[],
  filters: DirectoryFilters = {},
) {
  const terms = (filters.query ?? '')
    .trim()
    .toLocaleLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  return records.filter((org) => {
    if (
      filters.category &&
      filters.category !== 'all' &&
      org.category !== filters.category
    )
      return false;
    if (
      filters.intent &&
      filters.intent !== 'all' &&
      !org.actions.some((action) => action.intent === filters.intent)
    )
      return false;
    const searchable = [
      org.id,
      org.initials,
      org.name,
      org.description,
      ...org.tags,
      org.governance,
      org.participation,
    ]
      .join(' ')
      .toLocaleLowerCase();
    return terms.every((term) => searchable.includes(term));
  });
}

export function getPrimaryAction(org: Organization, intent: Intent = 'all') {
  return (
    org.actions.find((action) => action.intent === intent) ?? org.actions[0]
  );
}

export function parseFilters(input: unknown): Required<DirectoryFilters> {
  if (!input || typeof input !== 'object' || Array.isArray(input))
    throw new Error('Expected an object of directory filters.');
  const values = input as Record<string, unknown>;
  if (
    Object.keys(values).some(
      (key) => !['query', 'category', 'intent'].includes(key),
    )
  )
    throw new Error('Unknown filter.');
  const { query = '', category = 'all', intent = 'all' } = values;
  if (typeof query !== 'string' || query.length > 300)
    throw new Error('Search must be text of at most 300 characters.');
  if (!categories.some((item) => item.value === category))
    throw new Error('Unknown organization type.');
  if (!intents.some((item) => item.value === intent))
    throw new Error('Unknown participation route.');
  return { query, category: category as Category, intent: intent as Intent };
}
