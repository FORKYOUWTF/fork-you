import type { UICopy } from '../copy.ts';
import type { OrganizationTranslation } from '../directory-zh.ts';
import type { NewsTranslation } from '../news-zh.ts';

export const ui: UICopy = {
  language: 'Langue',
  automatic: 'Automatique',
  pageTitle: 'FORK YOU — Prenons un autre chemin.',
  pageDescription:
    'Ils veulent tout dévorer. Prenons un autre chemin. Trouve des projets libres, des entreprises et des associations d’intérêt général où mettre tes compétences à profit.',
  skip: 'Aller à l’annuaire',
  home: 'Accueil de FORK YOU',
  navigation: 'Navigation principale',
  news: 'Actualités',
  manifesto: 'Pourquoi ce site',
  directory: 'Trouve ta communauté',
  contribute: 'Compléter la liste',
  kicker: 'L’AVENIR N’EST PAS ENCORE ÉCRIT',
  headline: 'Ils veulent tout dévorer.',
  headlineAccent: 'Prenons un autre chemin.',
  intro:
    'Un avenir ouvert, ça se construit ensemble. Trouve un projet libre, une entreprise qui travaille au grand jour ou une association d’intérêt général à laquelle tu as envie de contribuer.',
  places: (n) => n + ' pistes pour commencer',
  concernTitle: 'Qu’est-ce qui nous inquiète ?',
  concern:
    'Partons d’une hypothèse : les grandes entreprises d’IA vont vouloir tout dévorer. Nos outils, notre travail et le peu d’attention qu’il nous reste. Que se passe-t-il si une poignée d’entreprises devient le passage obligé pour tout le reste ?',
  possibility:
    'C’est notre point de départ. On peut encore peser sur l’avenir. Nous voulons des outils qu’on peut examiner, des communautés qui ont leur mot à dire et un travail qu’on peut emporter en quittant une plateforme.',
  motto: 'Du code ouvert. Du pouvoir partagé. De vraies personnes.',
  forkTitle: 'Pourquoi « FORK YOU » ?',
  fork: 'En informatique, un fork reprend du code partagé pour lui donner une autre direction. On t’invite à faire pareil avec l’avenir. Écris du code, conçois quelque chose d’utile, traduis un guide ou défends les droits de quelqu’un. Aide à faire vivre une autre possibilité.',
  participateTitle: 'Qu’est-ce que je peux faire ?',
  projectAction: 'Donne un coup de main à un projet libre.',
  projectHelp: 'Code, documentation, design, traduction… il y a de quoi faire.',
  careerAction: 'Trouve un emploi rémunéré auquel tu crois.',
  careerHelp: 'Découvre des entreprises, des coopératives et des associations.',
  volunteerAction: 'Donne du temps à une cause qui compte.',
  volunteerHelp:
    'Soutiens une communauté ou un engagement qui te tient à cœur.',
  directoryTitle: 'Trouve ta communauté.',
  curated: 'Une sélection, avec ses sources.',
  search: 'Rechercher une organisation, une cause ou une compétence',
  searchPlaceholder: 'Une cause, une compétence, un nom…',
  clearSearch: 'Effacer la recherche',
  involvement: 'Comment tu souhaites participer',
  organizationType: 'Type d’organisation',
  matches: (n) => n + (n > 1 ? ' résultats' : ' résultat'),
  emptyTitle: 'Rien trouvé pour l’instant.',
  emptyHelp:
    'Essaie une recherche plus large ou une autre façon de participer.',
  clearFilters: 'Effacer tous les filtres',
  directoryNote:
    'Les liens d’emploi mènent aux pages officielles. Ils ne garantissent pas un recrutement en cours. Les contributions et le bénévolat peuvent être non rémunérés.',
  communityTitle: 'Tu connais du monde à ajouter ?',
  community:
    'Un projet manque à l’appel ? Une information n’est plus à jour ? Aide-nous à rendre cet annuaire plus utile, avec des sources pour vérifier.',
  suggest: 'Proposer un projet',
  correction: 'Signaler une erreur',
  submission:
    'Ouvre un formulaire public sur GitHub. Un compte est nécessaire. Nous examinons les propositions et corrections avant de modifier la liste.',
  standardsTitle: 'Qui figure dans la liste ?',
  reasonTitle: 'Une bonne raison d’être là',
  reason:
    'Du travail open source, une propriété partagée ou une mission d’intérêt général documentée. Nous expliquons le lien.',
  routeTitle: 'Une vraie porte d’entrée',
  route:
    'Un guide officiel de contribution, une page d’emploi ou une possibilité de bénévolat. Les activités rémunérées et non rémunérées sont distinguées.',
  evidenceTitle: 'Des sources, pas des auréoles',
  evidence:
    'Des sources et des dates de vérification. Pas de postes inventés, de notes d’indépendance ni de promesses d’être « à l’abri de l’IA ».',
  openTitle: 'Ouvert, ça veut dire parfait ?',
  open: 'Non. Le logiciel libre peut aussi payer les factures. Les associations peuvent prendre de mauvaises décisions. Lis les informations sur leur fonctionnement et leurs sources, pose des questions et fais-toi ton avis. Figurer ici ne signifie pas soutenir FORK YOU.',
  slogan: 'L’avenir n’est pas un plat à emporter.',
  forkSite: 'Créer un fork de ce site',
  back: 'Retour à l’annuaire',
  categories: {
    all: 'Tout',
    project: 'Projets libres',
    company: 'Entreprises et coopératives',
    nonprofit: 'ONG et associations',
  },
  singular: {
    project: 'Projet libre',
    company: 'Entreprise / coopérative',
    nonprofit: 'ONG / association',
  },
  intents: {
    all: 'Toutes les possibilités',
    contribute: 'Contribuer à un projet',
    careers: 'Chercher un emploi rémunéré',
    volunteer: 'Faire du bénévolat',
  },
  whyListed: (name) => 'Pourquoi ' + name + ' figure ici',
  whyButton: 'Pourquoi ce choix ?',
  receipts: 'LES SOURCES',
  whyPicked: 'Pourquoi nous l’avons choisi',
  editorial: 'Notre appréciation',
  governance: 'Comment ça fonctionne',
  wayIn: 'Comment participer',
  sources: 'Lire les sources',
  reviewed: (date) =>
    'Sources vérifiées le ' + date + '. Les possibilités peuvent évoluer.',
  detailNote:
    'Cette liste est un point de départ pour te renseigner. Elle ne certifie pas les employeurs et n’implique pas que ces organisations approuvent notre manifeste.',
  correctionFor: (name) =>
    'Corriger les informations sur ' + name + ' sur GitHub',
  publicForm: 'Formulaire public sur GitHub. Connexion nécessaire.',
  close: 'Fermer',
  newsKicker: 'ACTUALITÉS / POUVOIR / RESPONSABILITÉ',
  newsTitle: 'Des nouvelles, avec leurs sources.',
  newsIntro:
    'L’IA, l’argent et qui a voix au chapitre. Ce qui s’est passé, ce qui reste contesté et pourquoi on s’y intéresse.',
  readContext: 'Voir le contexte',
  contextFor: (title) => 'Voir le contexte : ' + title,
  sourceCount: (n) => n + (n > 1 ? ' sources' : ' source'),
  sourceLabel: (n, label) => 'Source ' + n + ' : ' + label,
  editorialView: 'Notre point de vue',
  ourTake: 'Ce qu’on en pense · Opinion',
  sourceKinds: {
    'Primary source': 'Source primaire',
    Reporting: 'Article de presse',
    Opinion: 'Opinion',
  },
  checked: 'Sources vérifiées le',
  datedBrief:
    '(UTC). Cette brève reflète la situation à cette date ; des évolutions ultérieures peuvent changer la donne.',
  newsCorrection: (title) => 'Corriger cette brève : ' + title,
  bringStory: 'Une info à partager ? Apporte les sources.',
  newsSubmission:
    'Les suggestions et corrections ouvrent des formulaires publics sur GitHub et nécessitent une connexion. Nous vérifions les sources avant toute publication ou mise à jour.',
};

export const organizationTranslations: Record<string, OrganizationTranslation> =
  {
    godot: {
      name: 'Godot',
      description:
        'Un moteur de jeu libre pour celles et ceux qui ont des mondes à créer.',
      tags: ['Jeux vidéo', 'C++', 'Documentation'],
      reason:
        'Un moteur partagé donne aux créateurs des outils qu’ils peuvent examiner, adapter et continuer à utiliser. Il y a bien d’autres façons d’aider que de programmer.',
      governance:
        'La fondation à but non lucratif Godot Foundation soutient le projet. Les contributeurs gardent les droits sur leur code ; le moteur utilise la licence MIT.',
      participation:
        'Commence par le guide : moteur, documentation, démos, tutoriels et entraide. Ce sont des possibilités de contribution communautaire, pas des offres d’emploi.',
    },
    igalia: {
      name: 'Igalia',
      description:
        'Construis le Web ouvert dans une société de conseil détenue par ses salariés.',
      tags: ['Propriété salariée', 'Navigateurs', 'Ingénierie'],
      reason:
        'Igalia associe développement open source rémunéré, propriété salariée et gestion démocratique.',
      governance:
        'Cette société de conseil open source appartient à ses salariés. Elle décrit publiquement son organisation comme horizontale et coopérative.',
      participation:
        'Consulte la page officielle de recrutement et les modalités de candidature. Les conditions et la rémunération dépendent de chaque poste.',
    },
    eff: {
      name: 'Electronic Frontier Foundation (EFF)',
      description:
        'Défends la vie privée, la liberté d’expression et nos droits numériques.',
      tags: ['Droits numériques', 'Politiques publiques', 'Plaidoyer'],
      reason:
        'Il faut de bons logiciels, mais aussi des droits protégés. L’EFF offre des possibilités d’engagement en plaidoyer, droit et technologie.',
      governance:
        'Une organisation à but non lucratif consacrée aux droits numériques, avec des informations publiques sur sa direction, ses documents et ses finances.',
      participation:
        'La page des opportunités regroupe emplois, stages et bénévolat. Vérifie les conditions et la rémunération éventuelle de chaque activité.',
    },
    mastodon: {
      name: 'Mastodon',
      description:
        'Des réseaux sociaux où les communautés gèrent leur propre coin d’Internet.',
      tags: ['Réseaux sociaux', 'Fédération', 'Ruby'],
      reason:
        'Un réseau social ouvert et fédéré permet aux communautés de choisir leurs serveurs et leurs règles, sans dépendre d’une plateforme centrale unique.',
      governance:
        'Le projet principal indique être développé par une structure à but non lucratif. Chaque serveur a ses responsables et ses règles de modération.',
      participation:
        'Pars du dépôt officiel et lis le guide avant de proposer des changements. Les contributions communautaires sont généralement bénévoles.',
    },
    codeberg: {
      name: 'Codeberg',
      description:
        'Un foyer pour les projets libres, porté par une communauté sans but lucratif.',
      tags: ['Outils de développement', 'Communauté', 'Infrastructure'],
      reason:
        'Une infrastructure de développement soutenue par la communauté offre une vraie alternative aux plateformes commerciales d’hébergement de code.',
      governance:
        'Codeberg e.V. est une association à but non lucratif. Les membres actifs votent sur ses affaires ; les membres de soutien ont des droits différents.',
      participation:
        'Lis les informations sur l’adhésion et le bénévolat. Une cotisation peut être demandée ; vérifie les rôles disponibles et les capacités d’accueil auprès de Codeberg.',
    },
    collabora: {
      name: 'Collabora',
      description:
        'Travaille sur des systèmes ouverts que d’autres pourront reprendre et améliorer.',
      tags: ['Linux', 'Infrastructure', 'Ingénierie'],
      reason:
        'L’activité commerciale peut financer la maintenance des projets open source en amont. Collabora place ce travail au cœur de son ingénierie.',
      governance:
        'Une société commerciale de conseil open source. Elle figure ici pour son travail ouvert documenté, pas en tant qu’association ou entreprise détenue par ses salariés.',
      participation:
        'Consulte les postes et lieux de travail sur la page officielle. Sa présence ici ne garantit pas qu’un poste soit ouvert aujourd’hui.',
    },
    blender: {
      name: 'Blender',
      description:
        'Des outils de création 3D que leurs utilisateurs peuvent s’approprier.',
      tags: ['3D et création', 'Design', 'Documentation'],
      reason:
        'Des outils créatifs partagés offrent une alternative aux abonnements propriétaires. Design, code, tests et documentation ont besoin de contributions.',
      governance:
        'Blender Foundation soutient ce projet libre et open source. Le développement est organisé en modules aux responsabilités documentées publiquement.',
      participation:
        'Le guide propose développement, documentation, traduction et d’autres activités. Lis les consignes de l’équipe concernée avant de commencer.',
    },
    nextcloud: {
      name: 'Nextcloud',
      description:
        'Crée des outils de collaboration pour choisir où restent ses données.',
      tags: ['Auto-hébergement', 'PHP', 'Collaboration'],
      reason:
        'Des outils collaboratifs ouverts et auto-hébergeables donnent aux organisations davantage de choix pour leurs fichiers et conversations.',
      governance:
        'Une entreprise commerciale open source, avec une communauté de contributeurs et des offres payantes. Sa présence ici ne signifie pas qu’elle refuse l’IA.',
      participation:
        'Consulte les emplois pour les postes rémunérés et le guide pour le code, les tests, la traduction et la communauté. Contribuer n’équivaut pas à être embauché.',
    },
    tor: {
      name: 'Projet Tor',
      description:
        'Aide à communiquer et à naviguer à l’abri de la surveillance et de la censure.',
      tags: ['Vie privée', 'Contre la censure', 'Traduction'],
      reason:
        'Quand le contrôle d’Internet se concentre, les infrastructures de confidentialité comptent. Tor propose des façons d’aider, techniques ou non.',
      governance:
        'Une organisation à but non lucratif avec un conseil d’administration et une large communauté bénévole. Les pages d’emploi et de communauté distinguent les possibilités.',
      participation:
        'Le portail communautaire propose traduction, sensibilisation, recherche et bénévolat technique. Les postes rémunérés sont sur la page d’emploi. Chaque activité a ses consignes.',
    },
    wikimedia: {
      name: 'Fondation Wikimedia',
      description:
        'Soutiens les personnes et les infrastructures qui rendent le savoir libre possible.',
      tags: ['Savoir', 'Éducation', 'Intérêt général'],
      reason:
        'Le savoir partagé a besoin d’infrastructures entretenues. La fondation propose des emplois pour soutenir la technologie et les communautés de Wikipédia et d’autres projets.',
      governance:
        'La fondation Wikimedia, à but non lucratif, soutient les projets Wikimedia. Y travailler est différent de contribuer bénévolement aux contenus dans la communauté.',
      participation:
        'Consulte les postes, lieux et modalités de candidature sur la page de recrutement. Cette fiche ne garantit aucune vacance précise.',
    },
    libreoffice: {
      name: 'LibreOffice',
      description:
        'Améliorons ensemble les outils de bureautique dont on se sert tous les jours.',
      tags: ['Bureautique', 'Design', 'Traduction'],
      reason:
        'Les documents font partie du quotidien. Une suite communautaire permet d’étudier, d’améliorer et de partager ses outils.',
      governance:
        'Un projet libre et open source soutenu par The Document Foundation et une communauté de contributeurs.',
      participation:
        'Le guide couvre design, traduction, documentation, développement, tests et premières petites tâches. Il recommande de contacter les mentors du projet.',
    },
    openstreetmap: {
      name: 'OpenStreetMap',
      description:
        'Transforme ta connaissance du quartier en une carte que tout le monde peut utiliser.',
      tags: ['Données ouvertes', 'Cartographie', 'Communauté'],
      reason:
        'Des données cartographiques partagées offrent une alternative aux services propriétaires. Bien connaître son quartier est déjà une contribution utile.',
      governance:
        'Un projet cartographique communautaire. La fondation OpenStreetMap exploite le site principal et les services associés pour la communauté. Les données ont leur propre licence ouverte et des obligations d’attribution.',
      participation:
        'Commence par le guide d’accueil pour cartographier et aider la communauté. C’est une contribution aux données ouvertes, sans obligation de savoir programmer.',
    },
    zulip: {
      name: 'Zulip',
      description:
        'Une messagerie d’équipe ouverte, portée par une entreprise détenue par une fondation sans but lucratif.',
      tags: [
        'Messagerie d’équipe',
        'Auto-hébergement',
        'Propriété d’une fondation',
      ],
      reason:
        'Un logiciel ouvert et une propriété non lucrative proposent un autre modèle pour les outils de collaboration. Cette structure mérite un examen, pas un brevet automatique d’indépendance.',
      governance:
        'L’annonce de mai 2026 indique que Kandra Labs, derrière Zulip, appartient à la fondation indépendante et sans but lucratif Zulip Foundation. Elle annonce aussi le départ du fondateur et de trois membres expérimentés vers Anthropic.',
      participation:
        'Consulte les postes et conditions sur la page officielle. Nous décrivons l’entreprise et sa propriété, sans affirmer que ses membres n’ont aucun lien personnel avec des sociétés d’IA.',
    },
    element: {
      name: 'Element',
      description:
        'Travaille sur une messagerie fondée sur des communications ouvertes et décentralisées.',
      tags: ['Messagerie', 'Standards ouverts', 'Vie privée'],
      reason:
        'Le standard Matrix donne davantage de choix sur l’hébergement des conversations et la connexion entre services.',
      governance:
        'Une entreprise commerciale de l’écosystème Matrix. Sa page de recrutement dit que presque tous ses logiciels sont open source ; cela ne couvre pas forcément chaque produit ou fonction.',
      participation:
        'Consulte les postes et conditions officiels. Renseigne-toi sur le travail et le modèle des produits pour voir s’ils correspondent à tes priorités.',
    },
    openproject: {
      name: 'OpenProject',
      description:
        'Aide les équipes à s’organiser avec une gestion de projet open source.',
      tags: ['Gestion de projet', 'Produit et UX', 'Ingénierie'],
      reason:
        'Les outils de coordination peuvent aussi être une infrastructure partagée. OpenProject associe travail produit rémunéré et code public.',
      governance:
        'Une entreprise commerciale de logiciels open source. Sa page de recrutement présente une version Community gratuite et des équipes d’ingénierie, de produit, de design et de relation client.',
      participation:
        'Consulte les postes et contraintes géographiques officiels. La présentation d’une équipe n’assure pas qu’elle recrute actuellement.',
    },
    'access-now': {
      name: 'Access Now',
      description:
        'Défends les droits numériques des personnes et communautés menacées.',
      tags: ['Droits humains', 'Politiques publiques', 'Sécurité numérique'],
      reason:
        'Un avenir ouvert a aussi besoin de gens qui contestent censure, surveillance et abus. La défense des droits permet d’agir au-delà du logiciel.',
      governance:
        'Une organisation mondiale de défense des droits humains, centrée sur le numérique, avec une équipe répartie et un recrutement public.',
      participation:
        'Consulte emplois, programmes de bourses et stages sur le site officiel. Les autorisations de travail et les lieux admissibles varient ; à distance ne veut pas dire depuis n’importe où.',
    },
    'open-knowledge': {
      name: 'Open Knowledge Foundation',
      description:
        'Fais en sorte que le savoir public puisse vraiment être utilisé et partagé.',
      tags: ['Données ouvertes', 'Intérêt général', 'Éducation'],
      reason:
        'Le savoir ouvert a besoin d’outils, de compétences et d’institutions. La fondation relie ces efforts à des communautés d’intérêt général à travers le monde.',
      governance:
        'Une organisation à but non lucratif enregistrée en Angleterre et au pays de Galles, qui publie des informations sur sa gouvernance, son conseil et ses financeurs. Elle mène un travail de fondation et fournit des services.',
      participation:
        'Consulte la page des emplois et opportunités. C’est une organisation à découvrir, pas la promesse d’un poste précis disponible aujourd’hui.',
    },
    framasoft: {
      name: 'Framasoft',
      description:
        'Aide les communautés à reprendre la main sur leurs outils numériques.',
      tags: ['Logiciel libre', 'Communauté', 'Traduction'],
      reason:
        'Framasoft transforme la critique du pouvoir technologique concentré en logiciels, services et ressources pédagogiques utilisables.',
      governance:
        'Une association française à but non lucratif qui développe du logiciel libre et des services communautaires, grâce aux dons, aux salariés et aux bénévoles.',
      participation:
        'Le point d’entrée pour participer existe en anglais ; certaines ressources détaillées sont en français. Lis les consignes de chaque projet pour choisir où aider.',
    },
  };
export const actionLabels: Record<string, string> = {
  'Find a contribution': 'Trouver comment contribuer',
  'Explore careers': 'Voir les offres d’emploi',
  'Find volunteer routes': 'Voir les possibilités de bénévolat',
  'Explore the source': 'Voir le code et comment participer',
  'Explore ways to help': 'Voir comment aider',
  'Start mapping': 'Commencer à cartographier',
};
export const sourceLabels: Record<string, string> = {
  'Ways to contribute': 'Façons de contribuer',
  'Governance model': 'Modèle de gouvernance',
  'Igalia values and cooperative decision-making':
    'Valeurs et décisions coopératives d’Igalia',
  'Working at Igalia': 'Travailler chez Igalia',
  'Official opportunities and volunteer links':
    'Emplois et bénévolat officiels',
  'Mastodon: software, federation, and organization':
    'Mastodon : logiciel, fédération et organisation',
  'Membership, voting rights, and volunteering': 'Adhésion, vote et bénévolat',
  'Careers and open-source engineering': 'Emplois et ingénierie open source',
  'Ways to get involved': 'Façons de participer',
  'Blender Foundation': 'Fondation Blender',
  'Jobs and company description': 'Emplois et présentation de l’entreprise',
  'Community contribution guide': 'Guide de contribution communautaire',
  'Tor community portal': 'Portail communautaire de Tor',
  'Jobs and organization': 'Emplois et organisation',
  'Foundation careers and mission': 'Emplois et mission de la fondation',
  'Community and contribution routes': 'Communauté et contributions',
  'Community, open data, and Foundation role':
    'Communauté, données ouvertes et rôle de la fondation',
  'Welcome and ways to contribute': 'Accueil et contributions',
  'Jobs and current stewardship': 'Emplois et gestion actuelle',
  'Foundation ownership and leadership transition':
    'Propriété de la fondation et changement de direction',
  'Careers and open-source work': 'Emplois et travail open source',
  'Teams, open-source model, and careers': 'Équipes, modèle ouvert et emplois',
  'Mission, employment, and application requirements':
    'Mission, emplois et conditions de candidature',
  'Mission, organization, and governance links':
    'Mission, organisation et gouvernance',
  'Jobs and opportunities': 'Emplois et opportunités',
  'Association, mission, and projects': 'Association, mission et projets',
  'Participation guide': 'Guide de participation',
};

export const newsTranslations: Record<string, NewsTranslation> = {
  'zcode-git-workspace-uploads': {
    title:
      'ZCode envoyait plus que le code : l’historique .git aussi était concerné.',
    topic: 'Confidentialité du code et consentement',
    summary:
      'Des chercheurs ont découvert que ZCode regroupait les fichiers et l’historique Git pour des envois en arrière-plan. Z.ai s’est excusé et une version ultérieure a modifié le mécanisme. Le sort des anciennes copies dans le cloud reste non vérifié.',
    status: 'Envois observés ; correctif signalé',
    context: {
      'What was packaged': {
        label: 'Ce que contenait l’archive',
        text: 'Dans son analyse du 18 septembre de ZCode 3.12.3, ferstar décrit des instantanés chiffrés de l’espace de travail destinés à Alibaba Cloud. L’inventaire contenait du code, des objets Git, des fichiers LFS et des reflogs. Le dossier .git représentait 86,6 % de l’instantané mesuré.',
      },
      'An attempted upload is not a completed upload': {
        label: 'Un envoi tenté n’est pas un envoi abouti',
        text: 'Dans sa précision du 19 septembre, l’auteur dit que l’archive de 313 Mo d’un projet commercial n’a jamais été envoyée avec succès. Un autre dépôt public de 538 fichiers a bien reçu une confirmation du serveur. Une grosse archive sur le disque ne prouve donc pas, à elle seule, qu’elle a atteint le cloud.',
      },
      'A separate local inspection': {
        label: 'Une autre vérification locale',
        text: 'Silent Star dit avoir trouvé des inventaires riches en données Git dans la version 3.10.1 : le serveur avait accepté de petits instantanés, tandis qu’un dépôt privé attendait encore. Selon cette analyse, les métadonnées Git contournaient les filtres des fichiers ordinaires. D’anciens secrets pourraient ainsi être inclus, mais l’auteur n’a trouvé aucun identifiant secret réel dans les dépôts examinés.',
      },
      'The company’s response': {
        label: 'La réponse de l’entreprise',
        text: 'IT Home rapporte les excuses de Z.ai du 18 septembre. L’entreprise attribue le problème à l’indexation du code et à Repo Wiki, activé par défaut au départ. Elle affirme détruire les données envoyées après la génération des pages wiki dans le cloud. Elle promet aussi d’ouvrir le code de ZCode et de faire appel à des évaluateurs externes : ce sont des engagements, pas des audits terminés.',
      },
      'What changed in 3.14.0': {
        label: 'Ce qui a changé dans la version 3.14.0',
        text: 'Les notes du 19 septembre mentionnent un correctif d’envoi pour le wiki des dépôts. La nouvelle inspection de ferstar indique que la version 3.14.0 a supprimé le mécanisme. Cela concerne le client, sans vérifier indépendamment la suppression des données déjà envoyées. FORK YOU a examiné les sources, sans reproduire l’analyse du client.',
      },
    },
    ourTake:
      'L’historique d’un dépôt mérite le même consentement que les fichiers actuels. Les outils devraient montrer ce qui quitte l’ordinateur, permettre de le désactiver réellement et rendre leurs promesses de conservation vérifiables. Du code public et un audit indépendant donneraient quelque chose de concret à examiner.',
    sourceLabels: {
      ferstar:
        'ferstar : analyse originale et précision du 19 septembre (anglais)',
      'silent-star': 'Silent Star : inspection locale distincte (chinois)',
      ithome: 'IT Home : excuses et réponse de Z.ai (chinois)',
      'zcode-changelog':
        'ZCode : notes officielles de la version 3.14.0 (anglais)',
    },
  },
  'openai-project-lily-chat-review': {
    title: 'Projet Lily : qui lit tes conversations avec ChatGPT ?',
    topic: 'Vie privée et travail de relecture',
    summary:
      'Selon 404 Media, des prestataires d’OpenAI examinent de vraies conversations ChatGPT, parfois sensibles. La FAQ grand public d’OpenAI prévoit un accès humain limité pour améliorer les modèles et pour d’autres usages précis.',
    status: 'Pratique rapportée par une enquête',
    context: {
      'The original investigation': {
        label: 'L’enquête d’origine',
        text: 'Le reportage de Joseph Cox du 14 septembre décrit des centaines de prestataires évaluant les réponses dans le cadre du projet Lily. Il s’appuie sur des documents internes et de vraies requêtes vus par 404 Media. Le but est d’améliorer les réponses, notamment en réduisant l’approbation excessive des utilisateurs et les affirmations d’expériences humaines.',
      },
      'More than a single prompt': {
        label: 'Parfois plus qu’une simple question',
        text: 'Le suivi de Tom’s Hardware, qui cite 404 Media, décrit un accès aux conversations et à un résumé de la mémoire de l’utilisateur pouvant contenir des éléments personnels comme sa localisation. Il reprend la même enquête ; ce n’est pas une autre fuite indépendante.',
      },
      'OpenAI’s response and disclosures': {
        label: 'Ce que dit OpenAI',
        text: 'Selon 404 Media, les relecteurs ne voient pas les noms d’utilisateur. OpenAI dit essayer de retirer les données personnelles, tout en reconnaissant que certaines peuvent passer. Sa FAQ autorise employés habilités et prestataires à accéder au contenu pour enquêter sur des abus, fournir de l’assistance, traiter des questions juridiques ou améliorer les modèles, sauf refus de ce dernier usage. Elle décrit confidentialité, contrôles d’accès et journalisation.',
      },
      'What filtering can miss': {
        label: 'Ce que le filtre peut laisser passer',
        text: 'La documentation de Privacy Filter avertit que l’outil ne garantit pas l’anonymat et peut manquer des identifiants inhabituels ou des références privées ambiguës. Cela invite à la prudence sur le masquage, sans mesurer le taux d’échec propre au projet Lily.',
      },
      'What you can control': {
        label: 'Ce que tu peux régler',
        text: 'OpenAI permet de refuser l’entraînement dans Settings → Data Controls → Improve the model for everyone. Sa FAQ indique que les conversations temporaires ne servent pas à l’entraînement, mais peuvent être examinées pour détecter des abus. Refuser l’entraînement ne garantit pas l’absence d’accès humain pour les autres usages cités.',
      },
    },
    ourTake:
      'Une interface qui invite aux confidences doit expliquer qui pourrait lire la conversation. On devrait pouvoir comprendre et choisir ce qu’on accepte avant de partager du contenu sensible. Les personnes qui effectuent ces relectures méritent aussi d’être visibles.',
    sourceLabels: {
      '404-media': '404 Media : enquête originale sur le projet Lily (anglais)',
      'toms-hardware':
        'Tom’s Hardware : accès des relecteurs et résumés de mémoire (anglais)',
      'consumer-faq':
        'OpenAI : FAQ sur les données des services grand public (anglais)',
      'privacy-filter': 'OpenAI : Privacy Filter et ses limites (anglais)',
      'data-controls': 'OpenAI : FAQ sur les contrôles des données (anglais)',
    },
  },
  'anthropic-slowdown-ipo': {
    title:
      'Anthropic veut ralentir l’IA tout en préparant son entrée en Bourse.',
    topic: 'Sécurité et argent',
    summary:
      'Dario Amodei veut ralentir la course à l’IA alors qu’Anthropic vise une introduction en Bourse. La question de savoir qui en profite mérite débat. Les sources ci-dessous n’établissent pas que l’opération boursière soit son seul motif.',
    status: 'Motif boursier non démontré',
    context: {
      'The proposal': {
        label: 'La proposition',
        text: 'Dans son texte du 12 septembre, Amodei appelle à ralentir la progression des capacités, à intégrer des évaluateurs externes et à coordonner entreprises et gouvernements. Il dit vouloir laisser la sécurité rattraper son retard. Selon lui, ce rythme n’arrêterait pas l’entraînement des modèles.',
      },
      'The money': {
        label: 'Les enjeux financiers',
        text: 'Reuters a rapporté le 11 septembre que Nvidia discutait d’un investissement dans l’introduction en Bourse prévue d’Anthropic. L’article cite des sources anonymes, précise que les plans peuvent changer et indique qu’Anthropic a refusé de commenter.',
      },
      'The criticism': {
        label: 'Ce qui fait débat',
        text: 'Dans sa chronique du 15 septembre, Nicolas Chapuis, du Monde, évoque le soupçon qu’une réglementation protège les grands laboratoires contre des modèles ouverts moins chers. Il présente aussi une autre lecture : de sincères inquiétudes de sécurité dans un contexte concurrentiel. Aucune de ces interprétations ne prouve un motif boursier caché.',
      },
    },
    ourTake:
      'Les règles de sécurité ont besoin d’un contrôle indépendant et d’une place pour le public. Regardons qui les écrit, qui peut payer pour s’y conformer et si les alternatives ouvertes gardent une place.',
    sourceLabels: {
      amodei: 'Dario Amodei : We Must Pace the Frontier (anglais)',
      reuters:
        'Reuters via Investing.com : Nvidia et l’introduction en Bourse d’Anthropic (anglais)',
      'le-monde':
        'Le Monde : l’argent derrière le débat sur le ralentissement de l’IA (édition anglaise)',
    },
  },
  'openai-buckmaster-math-credit': {
    title: 'OpenAI annonce une percée mathématique. L’attribution fait débat.',
    topic: 'Recherche et pouvoir',
    summary:
      'OpenAI a annoncé une preuve concernant Navier–Stokes. Tristan Buckmaster, mathématicien à l’université de New York, conteste sa conduite autour de travaux liés menés avec Levent Alpöge. OpenAI conteste son récit ; l’utilisation de leurs recherches privées n’est pas établie.',
    status: 'Des récits contestés',
    context: {
      'The announcement': {
        label: 'L’annonce',
        text: 'Le 8 septembre, OpenAI a publié ce qu’elle présente comme une solution au problème du prix du millénaire de Navier–Stokes, accompagnée d’un article et d’une formalisation Lean. Il s’agit de l’affirmation mathématique de l’entreprise ; cette brève ne valide pas indépendamment la preuve.',
      },
      'Buckmaster’s account': {
        label: 'Le récit de Buckmaster',
        text: 'Buckmaster affirme qu’OpenAI a proposé un article excluant son collaborateur Alpöge, salarié d’Anthropic, et que ses questions sur l’entraînement à partir de leurs brouillons dans Codex sont d’abord restées sans réponse. Il précise ne pas savoir si leurs données ont été utilisées. Leurs résultats publiés concernent des équations de fluides liées, dont les équations d’Euler forcées.',
      },
      'OpenAI’s response': {
        label: 'La réponse d’OpenAI',
        text: 'OpenAI nie avoir vu leurs travaux avant publication. Sa mise à jour du 10 septembre dit qu’une enquête a exclu toute influence des requêtes Codex de Buckmaster des deux mois précédents, y compris via l’entraînement. WIRED rapporte aussi que Sébastien Bubeck a contesté l’idée qu’OpenAI ait voulu retirer le nom d’Alpöge.',
      },
    },
    ourTake:
      'Il faut des limites claires quand le fournisseur des outils de recherche est aussi en compétition pour les découvertes. L’attribution, l’usage des données et l’accès au calcul méritent autant d’attention que le résultat.',
    sourceLabels: {
      openai:
        'OpenAI : annonce et réponse mise à jour du 10 septembre (anglais)',
      buckmaster: 'Tristan Buckmaster : déclaration publique (PDF en anglais)',
      wired: 'WIRED : l’annonce et les récits des deux parties (anglais)',
    },
  },
};
