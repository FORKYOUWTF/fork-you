import type { UICopy } from '../copy.ts';
import type { OrganizationTranslation } from '../directory-zh.ts';
import type { NewsTranslation } from '../news-zh.ts';

export const ui: UICopy = {
  language: 'Lingua',
  automatic: 'Automatica',
  pageTitle: 'FORK YOU — Apriamo un’altra strada.',
  pageDescription:
    'Vogliono mangiarsi tutto. Apriamo un’altra strada. Trova progetti open source, aziende e organizzazioni di interesse pubblico a cui dare una mano.',
  skip: 'Vai all’elenco',
  home: 'Home di FORK YOU',
  navigation: 'Navigazione principale',
  news: 'Notizie',
  manifesto: 'Perché siamo qui',
  directory: 'Trova la tua comunità',
  contribute: 'Completiamo la lista',
  kicker: 'IL FUTURO È ANCORA DA SCRIVERE',
  headline: 'Vogliono mangiarsi tutto.',
  headlineAccent: 'Apriamo un’altra strada.',
  intro:
    'Un futuro aperto ha bisogno di persone che lo costruiscano. Qui trovi progetti open source, aziende che lavorano in modo aperto e organizzazioni di interesse pubblico a cui dedicare le tue capacità.',
  places: (n) => n + ' punti da cui partire',
  concernTitle: 'Che cosa ci preoccupa?',
  concern:
    'Partiamo da un’ipotesi: le grandi aziende di IA proveranno a mangiarsi tutto. Gli strumenti che usiamo, il nostro lavoro e l’attenzione che ci resta. Che succede se per fare qualsiasi cosa dobbiamo passare da una manciata di aziende?',
  possibility:
    'È il nostro punto di partenza. Possiamo ancora dare forma al futuro. Vogliamo strumenti che si possano esaminare, comunità che abbiano voce e lavori che possiamo portarci via quando lasciamo una piattaforma.',
  motto: 'Codice aperto. Potere condiviso. Persone vere.',
  forkTitle: 'Perché «FORK YOU»?',
  fork: 'Nel software, fare un fork significa prendere codice condiviso e dargli una nuova direzione. L’invito è a fare lo stesso con il futuro. Scrivi codice, progetta qualcosa di utile, traduci una guida o difendi i diritti di qualcuno. Aiuta a tenere viva un’alternativa.',
  participateTitle: 'Che cosa posso fare?',
  projectAction: 'Dai una mano a un progetto aperto.',
  projectHelp: 'Codice, documentazione, design, traduzioni e molto altro.',
  careerAction: 'Cerca un lavoro retribuito in cui credi.',
  careerHelp: 'Scopri aziende, cooperative e organizzazioni non profit.',
  volunteerAction: 'Dedica tempo a qualcosa che ti sta a cuore.',
  volunteerHelp: 'Aiuta una comunità o una causa che senti vicina.',
  directoryTitle: 'Trova la tua comunità.',
  curated: 'Una selezione con le fonti.',
  search: 'Cerca organizzazioni, cause o competenze',
  searchPlaceholder: 'Una causa, una competenza, un nome…',
  clearSearch: 'Cancella la ricerca',
  involvement: 'Come vuoi partecipare',
  organizationType: 'Tipo di organizzazione',
  matches: (n) => n + (n === 1 ? ' risultato' : ' risultati'),
  emptyTitle: 'Per ora, nessun risultato.',
  emptyHelp: 'Prova una ricerca più ampia o un altro modo di partecipare.',
  clearFilters: 'Rimuovi tutti i filtri',
  directoryNote:
    'I link portano alle pagine ufficiali di lavoro, ma non garantiscono che oggi ci siano posizioni aperte. Contributi e volontariato possono essere non retribuiti.',
  communityTitle: 'Conosci qualcuno da aggiungere?',
  community:
    'Manca un progetto? Hai trovato un’informazione vecchia? Aiutaci a rendere l’elenco più utile, con fonti che permettano di verificare.',
  suggest: 'Proponi un progetto',
  correction: 'Segnala un errore',
  submission:
    'Si apre un modulo pubblico su GitHub. Serve un account. Verifichiamo suggerimenti e correzioni prima di aggiornare la lista.',
  standardsTitle: 'Chi entra nella lista?',
  reasonTitle: 'Un motivo per esserci',
  reason:
    'Lavoro open source, proprietà condivisa o una missione di interesse pubblico documentata. Spieghiamo il collegamento.',
  routeTitle: 'Un modo concreto per partecipare',
  route:
    'Una guida ufficiale ai contributi, una pagina di lavoro o un percorso di volontariato. Distinguiamo le attività retribuite da quelle non retribuite.',
  evidenceTitle: 'Fonti, non aureole',
  evidence:
    'Fonti e date di verifica. Niente posti inventati, punteggi di indipendenza o promesse di essere «al riparo dall’IA».',
  openTitle: 'Aperto vuol dire perfetto?',
  open: 'No. Con l’open source si possono pagare le bollette. Anche le organizzazioni non profit possono sbagliare. Leggi come sono gestite e le loro fonti, fai domande e decidi tu. Essere qui non significa sostenere FORK YOU.',
  slogan: 'Il futuro non è da asporto.',
  forkSite: 'Crea un fork di questo sito',
  back: 'Torna all’elenco',
  categories: {
    all: 'Tutte',
    project: 'Progetti aperti',
    company: 'Aziende e cooperative',
    nonprofit: 'ONG e non profit',
  },
  singular: {
    project: 'Progetto aperto',
    company: 'Azienda / cooperativa',
    nonprofit: 'ONG / non profit',
  },
  intents: {
    all: 'Qualsiasi modo',
    contribute: 'Contribuire a un progetto',
    careers: 'Cercare lavoro retribuito',
    volunteer: 'Fare volontariato',
  },
  whyListed: (name) => 'Perché abbiamo incluso ' + name,
  whyButton: 'Perché è qui?',
  receipts: 'LE FONTI',
  whyPicked: 'Perché l’abbiamo scelto',
  editorial: 'La nostra valutazione',
  governance: 'Come è organizzato',
  wayIn: 'Come partecipare',
  sources: 'Leggi le fonti',
  reviewed: (date) =>
    'Fonti verificate il ' + date + '. Le opportunità possono cambiare.',
  detailNote:
    'Questa lista è un punto di partenza per informarsi. Non certifica i datori di lavoro e non implica che le organizzazioni approvino il nostro manifesto.',
  correctionFor: (name) => 'Correggi le informazioni su ' + name + ' su GitHub',
  publicForm: 'Modulo pubblico su GitHub. È necessario accedere.',
  close: 'Chiudi',
  newsKicker: 'NOTIZIE / POTERE / RESPONSABILITÀ',
  newsTitle: 'Notizie, con le fonti.',
  newsIntro:
    'IA, soldi e chi ha voce in capitolo. Che cosa è successo, che cosa resta controverso e perché ci interessa.',
  readContext: 'Leggi il contesto',
  contextFor: (title) => 'Leggi il contesto: ' + title,
  sourceCount: (n) => n + (n === 1 ? ' fonte' : ' fonti'),
  sourceLabel: (n, label) => 'Fonte ' + n + ': ' + label,
  editorialView: 'Il nostro punto di vista',
  ourTake: 'Come la vediamo · Opinione',
  sourceKinds: {
    'Primary source': 'Fonte primaria',
    Reporting: 'Articolo giornalistico',
    Opinion: 'Opinione',
  },
  checked: 'Fonti verificate il',
  datedBrief:
    '(UTC). Questa sintesi fotografa quel momento; gli sviluppi successivi possono cambiare il quadro.',
  newsCorrection: (title) => 'Correggi questa notizia: ' + title,
  bringStory: 'Hai una storia? Porta anche le fonti.',
  newsSubmission:
    'Suggerimenti e correzioni aprono moduli pubblici su GitHub e richiedono l’accesso. Controlliamo le fonti prima di pubblicare o aggiornare.',
};

export const organizationTranslations: Record<string, OrganizationTranslation> =
  {
    godot: {
      name: 'Godot',
      description: 'Un motore di gioco aperto per chi ha mondi da creare.',
      tags: ['Videogiochi', 'C++', 'Documentazione'],
      reason:
        'Un motore condiviso offre strumenti da esaminare, modificare e continuare a usare. Per aiutare non serve soltanto saper programmare.',
      governance:
        'La Godot Foundation, non profit, sostiene il progetto. Chi contribuisce mantiene i diritti sul proprio codice; il motore usa la licenza MIT.',
      participation:
        'Parti dalla guida: motore, documentazione, demo, tutorial e supporto alla comunità. Sono percorsi di collaborazione, non offerte di lavoro.',
    },
    igalia: {
      name: 'Igalia',
      description:
        'Costruisci il web aperto in una società di consulenza che appartiene a chi ci lavora.',
      tags: ['Proprietà dei lavoratori', 'Browser', 'Ingegneria'],
      reason:
        'Igalia unisce sviluppo open source retribuito, proprietà dei dipendenti e gestione democratica.',
      governance:
        'Una società di consulenza open source di proprietà dei lavoratori. Si descrive pubblicamente come un’organizzazione orizzontale e cooperativa.',
      participation:
        'Consulta opportunità e modalità di candidatura sulla pagina ufficiale. Requisiti e retribuzione dipendono dalla singola posizione.',
    },
    eff: {
      name: 'Electronic Frontier Foundation (EFF)',
      description:
        'Difendi la privacy, la libertà di espressione e i nostri diritti digitali.',
      tags: ['Diritti digitali', 'Politiche pubbliche', 'Attivismo'],
      reason:
        'Servono buoni software, ma anche diritti tutelati. EFF offre modi per contribuire attraverso attività pubbliche, legali e tecnologiche.',
      governance:
        'Un’organizzazione non profit per i diritti digitali, con informazioni pubbliche su dirigenti, documenti organizzativi e bilanci.',
      participation:
        'La pagina delle opportunità raccoglie lavoro, tirocini e volontariato. Controlla i requisiti e l’eventuale retribuzione di ciascuna attività.',
    },
    mastodon: {
      name: 'Mastodon',
      description:
        'Social network dove le comunità gestiscono il proprio angolo di internet.',
      tags: ['Social network', 'Federazione', 'Ruby'],
      reason:
        'Un social aperto e federato permette di scegliere server e regole proprie senza dipendere da un’unica piattaforma centrale.',
      governance:
        'Il progetto principale si presenta come sviluppato da una realtà non profit. Ogni server ha i propri gestori e regole di moderazione.',
      participation:
        'Inizia dal repository ufficiale e leggi la guida prima di proporre modifiche. I contributi della comunità sono in genere non retribuiti.',
    },
    codeberg: {
      name: 'Codeberg',
      description:
        'Una casa per i progetti aperti, sostenuta da una comunità non profit.',
      tags: ['Strumenti di sviluppo', 'Comunità', 'Infrastruttura'],
      reason:
        'Un’infrastruttura di sviluppo sostenuta dalla comunità offre un’alternativa concreta alle piattaforme commerciali che ospitano codice.',
      governance:
        'Codeberg e.V. è un’associazione non profit. I soci attivi votano sulle sue attività; i soci sostenitori hanno diritti diversi.',
      participation:
        'Leggi le informazioni su adesione e volontariato. Possono esserci quote associative; verifica con Codeberg ruoli disponibili e possibilità attuali di accoglienza.',
    },
    collabora: {
      name: 'Collabora',
      description:
        'Lavora su sistemi aperti che altre persone possano riprendere e migliorare.',
      tags: ['Linux', 'Infrastruttura', 'Ingegneria'],
      reason:
        'Il lavoro commerciale può finanziare la manutenzione dei progetti open source a monte. Collabora mette questo impegno al centro delle sue attività tecniche.',
      governance:
        'Una società commerciale di consulenza open source. La includiamo per il lavoro aperto documentato, non come non profit o azienda di proprietà dei lavoratori.',
      participation:
        'Consulta ruoli e sedi sulla pagina ufficiale di lavoro. Essere in questa lista non garantisce posizioni aperte oggi.',
    },
    blender: {
      name: 'Blender',
      description: 'Strumenti 3D che chi crea può davvero fare propri.',
      tags: ['3D e arte', 'Design', 'Documentazione'],
      reason:
        'Strumenti creativi condivisi offrono alternative agli abbonamenti proprietari. Si può contribuire con design, codice, test e documentazione.',
      governance:
        'Blender Foundation sostiene questo progetto libero e open source. Lo sviluppo è diviso in moduli con responsabilità pubblicamente documentate.',
      participation:
        'La guida include sviluppo, documentazione, traduzione e altre attività. Leggi prima le indicazioni del gruppo che ti interessa.',
    },
    nextcloud: {
      name: 'Nextcloud',
      description:
        'Crea strumenti di collaborazione per chi vuole decidere dove restano i propri dati.',
      tags: ['Self-hosting', 'PHP', 'Collaborazione'],
      reason:
        'Strumenti aperti e installabili sui propri server danno alle organizzazioni più scelta su dove conservare file e conversazioni.',
      governance:
        'Un’azienda commerciale open source con una comunità di collaboratori e offerte a pagamento. Essere qui non implica che rifiuti l’IA.',
      participation:
        'Consulta i posti retribuiti nella pagina di lavoro e la guida per codice, test, traduzioni e comunità. Contribuire alla comunità non significa essere assunti.',
    },
    tor: {
      name: 'Progetto Tor',
      description:
        'Aiuta le persone a comunicare e navigare lontano da sorveglianza e censura.',
      tags: ['Privacy', 'Contro la censura', 'Traduzione'],
      reason:
        'Quando il controllo di internet si concentra, l’infrastruttura per la privacy conta. Tor offre modi tecnici e non tecnici per contribuire.',
      governance:
        'Un’organizzazione non profit con un consiglio direttivo e una comunità più ampia di volontari. Lavoro e partecipazione comunitaria hanno pagine separate.',
      participation:
        'Il portale della comunità include traduzione, divulgazione, ricerca e volontariato tecnico. I posti retribuiti sono nella pagina di lavoro. Ogni attività ha le proprie indicazioni.',
    },
    wikimedia: {
      name: 'Wikimedia Foundation',
      description:
        'Sostieni le persone e le infrastrutture che rendono possibile il sapere libero.',
      tags: ['Conoscenza', 'Istruzione', 'Interesse pubblico'],
      reason:
        'Il sapere condiviso ha bisogno di infrastrutture curate. La fondazione offre lavoro retribuito per sostenere tecnologia e comunità di Wikipedia e altri progetti.',
      governance:
        'La Wikimedia Foundation, non profit, sostiene i progetti Wikimedia. Lavorare per la fondazione è diverso dal contribuire ai contenuti come volontari nella comunità.',
      participation:
        'Consulta posizioni, sedi e modalità di candidatura sulla pagina della fondazione. Questa scheda non garantisce una specifica posizione aperta.',
    },
    libreoffice: {
      name: 'LibreOffice',
      description:
        'Miglioriamo insieme gli strumenti da ufficio che usiamo tutti i giorni.',
      tags: ['Produttività', 'Design', 'Traduzione'],
      reason:
        'I documenti fanno parte della vita quotidiana. Una suite comunitaria permette di studiare, migliorare e condividere gli strumenti che usiamo.',
      governance:
        'Un progetto libero e open source sostenuto da The Document Foundation e da una comunità di collaboratori.',
      participation:
        'La guida include design, traduzione, documentazione, sviluppo, test e piccoli compiti iniziali. Consiglia di parlare prima con i mentori del progetto.',
    },
    openstreetmap: {
      name: 'OpenStreetMap',
      description:
        'Trasforma la tua conoscenza del quartiere in una mappa utile a tutti.',
      tags: ['Dati aperti', 'Mappe', 'Comunità'],
      reason:
        'I dati cartografici condivisi offrono un’alternativa ai servizi proprietari. Conoscere bene il posto in cui vivi è già un contributo prezioso.',
      governance:
        'Un progetto cartografico comunitario. La fondazione OpenStreetMap gestisce il sito principale e i servizi collegati per la comunità. I dati hanno una propria licenza aperta e obblighi di attribuzione.',
      participation:
        'Parti dalla guida di benvenuto per imparare a mappare e aiutare la comunità. È un percorso nei dati aperti: non serve saper programmare.',
    },
    zulip: {
      name: 'Zulip',
      description:
        'Chat di gruppo aperta, con un’azienda di proprietà di una fondazione non profit.',
      tags: ['Chat di gruppo', 'Self-hosting', 'Proprietà di una fondazione'],
      reason:
        'Codice aperto e proprietà non profit offrono un altro modo di sostenere strumenti collaborativi. La struttura va comunque esaminata, non è un certificato automatico di indipendenza.',
      governance:
        'L’annuncio di maggio 2026 dice che Kandra Labs, l’azienda dietro Zulip, appartiene alla fondazione indipendente e non profit Zulip Foundation. Annuncia anche il passaggio del fondatore e di tre membri esperti ad Anthropic.',
      participation:
        'Consulta ruoli e requisiti sulla pagina ufficiale. Descriviamo l’azienda e la sua proprietà, senza affermare che i suoi membri non abbiano legami personali con società di IA.',
    },
    element: {
      name: 'Element',
      description:
        'Lavora su messaggistica basata su comunicazioni aperte e decentralizzate.',
      tags: ['Messaggistica', 'Standard aperti', 'Privacy'],
      reason:
        'Lo standard Matrix offre più scelta su dove ospitare le conversazioni e come collegare i servizi.',
      governance:
        'Un’azienda commerciale nell’ecosistema Matrix. La pagina di lavoro dice che quasi tutto il software sviluppato è open source, non che ogni prodotto o funzione lo sia.',
      participation:
        'Consulta posizioni e requisiti ufficiali. Esplora il lavoro e il modello dei prodotti per capire se corrispondono alle tue priorità.',
    },
    openproject: {
      name: 'OpenProject',
      description:
        'Aiuta i gruppi a organizzarsi con strumenti di gestione progetti open source.',
      tags: ['Gestione progetti', 'Prodotto e UX', 'Ingegneria'],
      reason:
        'Gli strumenti di coordinamento possono essere infrastrutture condivise. OpenProject lega lavoro di prodotto retribuito e codice pubblico.',
      governance:
        'Un’azienda commerciale di software open source. La pagina di lavoro descrive una versione Community gratuita e gruppi di ingegneria, prodotto, design e assistenza clienti.',
      participation:
        'Consulta posizioni e requisiti geografici sul sito ufficiale. La descrizione dei gruppi non garantisce che ogni ambito stia assumendo.',
    },
    'access-now': {
      name: 'Access Now',
      description:
        'Difendi i diritti digitali di persone e comunità a rischio.',
      tags: ['Diritti umani', 'Politiche pubbliche', 'Sicurezza digitale'],
      reason:
        'Un futuro aperto ha bisogno anche di chi contrasta censura, sorveglianza e abusi. La difesa dei diritti permette di contribuire oltre il software.',
      governance:
        'Un’organizzazione globale per i diritti umani, concentrata sui diritti digitali, con gruppo distribuito e selezione pubblica.',
      participation:
        'Consulta lavoro, programmi di fellowship e tirocini sul sito ufficiale. Permessi di lavoro e requisiti geografici variano: «da remoto» non significa candidabile da ogni paese.',
    },
    'open-knowledge': {
      name: 'Open Knowledge Foundation',
      description:
        'Rendi il sapere pubblico davvero utilizzabile e condivisibile.',
      tags: ['Dati aperti', 'Interesse pubblico', 'Istruzione'],
      reason:
        'Il sapere aperto ha bisogno di strumenti, capacità e istituzioni. La fondazione collega questo lavoro a comunità di interesse pubblico in diversi paesi.',
      governance:
        'Un’organizzazione non profit registrata in Inghilterra e Galles, con informazioni pubbliche su governance, consiglio e finanziatori. Svolge attività di fondazione e offre servizi.',
      participation:
        'Consulta la pagina di lavoro e opportunità. È un’organizzazione da esplorare, non una garanzia di una specifica posizione disponibile oggi.',
    },
    framasoft: {
      name: 'Framasoft',
      description:
        'Aiuta le comunità a riprendere il controllo degli strumenti digitali quotidiani.',
      tags: ['Software libero', 'Comunità', 'Traduzione'],
      reason:
        'Framasoft trasforma la critica alla concentrazione del potere tecnologico in software, servizi e risorse educative concrete.',
      governance:
        'Un’associazione francese non profit che sviluppa software libero e servizi comunitari, sostenuta da donazioni, dipendenti e volontari.',
      participation:
        'La pagina iniziale per partecipare è disponibile in inglese; i materiali più dettagliati possono essere in francese. Leggi le indicazioni dei singoli progetti prima di scegliere come aiutare.',
    },
  };
export const actionLabels: Record<string, string> = {
  'Find a contribution': 'Trova come contribuire',
  'Explore careers': 'Esplora le opportunità di lavoro',
  'Find volunteer routes': 'Trova percorsi di volontariato',
  'Explore the source': 'Esplora il codice e come partecipare',
  'Explore ways to help': 'Scopri come aiutare',
  'Start mapping': 'Inizia a mappare',
};
export const sourceLabels: Record<string, string> = {
  'Ways to contribute': 'Modi per contribuire',
  'Governance model': 'Modello di governance',
  'Igalia values and cooperative decision-making':
    'Valori e decisioni cooperative di Igalia',
  'Working at Igalia': 'Lavorare in Igalia',
  'Official opportunities and volunteer links':
    'Opportunità ufficiali e volontariato',
  'Mastodon: software, federation, and organization':
    'Mastodon: software, federazione e organizzazione',
  'Membership, voting rights, and volunteering':
    'Adesione, diritto di voto e volontariato',
  'Careers and open-source engineering': 'Lavoro e ingegneria open source',
  'Ways to get involved': 'Modi per partecipare',
  'Blender Foundation': 'Fondazione Blender',
  'Jobs and company description': 'Lavoro e presentazione dell’azienda',
  'Community contribution guide': 'Guida ai contributi della comunità',
  'Tor community portal': 'Portale della comunità Tor',
  'Jobs and organization': 'Lavoro e organizzazione',
  'Foundation careers and mission': 'Lavoro e missione della fondazione',
  'Community and contribution routes': 'Comunità e percorsi di collaborazione',
  'Community, open data, and Foundation role':
    'Comunità, dati aperti e ruolo della fondazione',
  'Welcome and ways to contribute': 'Benvenuto e modi per contribuire',
  'Jobs and current stewardship': 'Lavoro e gestione attuale',
  'Foundation ownership and leadership transition':
    'Proprietà della fondazione e cambi di direzione',
  'Careers and open-source work': 'Lavoro e attività open source',
  'Teams, open-source model, and careers': 'Gruppi, modello aperto e lavoro',
  'Mission, employment, and application requirements':
    'Missione, lavoro e requisiti di candidatura',
  'Mission, organization, and governance links':
    'Missione, organizzazione e governance',
  'Jobs and opportunities': 'Lavoro e opportunità',
  'Association, mission, and projects': 'Associazione, missione e progetti',
  'Participation guide': 'Guida alla partecipazione',
};

export const newsTranslations: Record<string, NewsTranslation> = {
  'zcode-git-workspace-uploads': {
    title: 'ZCode caricava più del codice: c’era anche la cronologia .git.',
    topic: 'Privacy del codice e consenso',
    summary:
      'Alcuni ricercatori hanno trovato ZCode intento a raccogliere file di progetto e cronologia Git per caricarli in background. Z.ai si è scusata e una versione successiva ha modificato il meccanismo. Il destino delle vecchie copie nel cloud resta da verificare.',
    status: 'Caricamenti rilevati; correzione segnalata',
    context: {
      'What was packaged': {
        label: 'Che cosa finiva nel pacchetto',
        text: 'Nell’analisi del 18 settembre di ZCode 3.12.3, ferstar descrive copie cifrate dell’ambiente di lavoro destinate ad Alibaba Cloud. L’elenco includeva sorgenti, oggetti Git, file LFS e reflog. La cartella .git costituiva l’86,6% della copia misurata.',
      },
      'An attempted upload is not a completed upload': {
        label: 'Tentare un caricamento non vuol dire completarlo',
        text: 'Nella precisazione del 19 settembre, l’autore dice che l’archivio di 313 MB di un progetto commerciale non è mai stato caricato con successo. Un altro repository pubblico, con 538 file, ha invece ricevuto conferma dal server. Un grosso archivio sul disco, da solo, non dimostra che sia arrivato nel cloud.',
      },
      'A separate local inspection': {
        label: 'Un’altra verifica sul proprio computer',
        text: 'Silent Star riferisce di elenchi ricchi di dati Git nella versione 3.10.1: alcune copie più piccole sono state accettate dal server, mentre un repository privato era ancora in attesa. Secondo l’analisi, i metadati Git aggiravano i filtri dei normali file. Questo potrebbe esporre segreti salvati in vecchi commit, ma l’autore non ha trovato credenziali reali nei repository controllati.',
      },
      'The company’s response': {
        label: 'La risposta dell’azienda',
        text: 'IT Home riporta le scuse di Z.ai del 18 settembre. L’azienda attribuisce il problema all’indicizzazione del codice e a Repo Wiki, inizialmente attivo per impostazione predefinita. Dice di distruggere i dati caricati dopo la generazione delle pagine wiki nel cloud. Ha anche promesso di aprire il codice di ZCode e coinvolgere revisori esterni: sono impegni, non audit già conclusi.',
      },
      'What changed in 3.14.0': {
        label: 'Che cosa cambia con la versione 3.14.0',
        text: 'Le note del 19 settembre indicano una correzione del caricamento per la wiki del repository. La nuova verifica di ferstar dice che la versione 3.14.0 ha rimosso il meccanismo. Questo riguarda il client e non verifica in modo indipendente la cancellazione dei dati già caricati. FORK YOU ha esaminato le fonti, senza riprodurre l’analisi del client.',
      },
    },
    ourTake:
      'La cronologia di un repository merita lo stesso consenso dei file attuali. Gli strumenti dovrebbero mostrare cosa lascia il computer, offrire un interruttore che funzioni davvero e rendere verificabili le promesse sulla conservazione. Codice pubblico e un audit indipendente darebbero agli utenti qualcosa di concreto da esaminare.',
    sourceLabels: {
      ferstar:
        'ferstar: analisi originale e precisazione del 19 settembre (inglese)',
      'silent-star': 'Silent Star: verifica locale separata (cinese)',
      ithome: 'IT Home: scuse e risposta di Z.ai (cinese)',
      'zcode-changelog':
        'ZCode: note ufficiali della versione 3.14.0 (inglese)',
    },
  },
  'openai-project-lily-chat-review': {
    title: 'Progetto Lily: chi legge le tue conversazioni con ChatGPT?',
    topic: 'Privacy e lavoro di revisione',
    summary:
      '404 Media riporta che collaboratori esterni di OpenAI leggono conversazioni reali di ChatGPT, a volte con informazioni sensibili. Le FAQ per i consumatori prevedono un accesso umano limitato per migliorare i modelli e per altri scopi specifici.',
    status: 'Pratica descritta da un’inchiesta',
    context: {
      'The original investigation': {
        label: 'L’inchiesta originale',
        text: 'L’articolo di Joseph Cox del 14 settembre descrive centinaia di collaboratori esterni che valutano risposte nel Progetto Lily. Cita documenti interni e richieste reali visti da 404 Media. Il lavoro mira a migliorare le risposte, per esempio riducendo l’eccessivo assecondare gli utenti e le affermazioni di esperienze umane.',
      },
      'More than a single prompt': {
        label: 'A volte c’è più di una domanda',
        text: 'Il seguito di Tom’s Hardware, che cita 404 Media, descrive l’accesso a conversazioni e a un riepilogo della memoria dell’utente, potenzialmente con dati personali come la posizione. Riprende la stessa inchiesta, non una seconda fuga di informazioni indipendente.',
      },
      'OpenAI’s response and disclosures': {
        label: 'Che cosa dice OpenAI',
        text: 'Secondo 404 Media, i revisori non vedono i nomi utente. OpenAI dice di provare a rimuovere i dettagli personali, riconoscendo che alcuni possono sfuggire. Le sue FAQ consentono a personale autorizzato e fornitori di accedere per indagini sugli abusi, assistenza, questioni legali o miglioramento dei modelli, salvo rinuncia a quest’ultimo uso. Descrivono obblighi di riservatezza, controlli e registri degli accessi.',
      },
      'What filtering can miss': {
        label: 'Che cosa può sfuggire al filtro',
        text: 'La documentazione di Privacy Filter avverte che lo strumento non garantisce l’anonimato e può non rilevare identificatori insoliti o riferimenti privati ambigui. Questo invita alla cautela sulla rimozione dei dati, ma non misura gli errori all’interno del Progetto Lily.',
      },
      'What you can control': {
        label: 'Che cosa puoi scegliere',
        text: 'OpenAI permette di escludere i dati dall’addestramento in Settings → Data Controls → Improve the model for everyone. Le FAQ dicono che le chat temporanee non sono usate per addestrare, ma possono essere esaminate per rilevare abusi. Rinunciare all’addestramento non garantisce zero accessi umani per gli altri scopi elencati.',
      },
    },
    ourTake:
      'Un’interfaccia che invita a confidarsi deve spiegare chi potrebbe leggere quelle parole. Dovremmo poter capire e scegliere cosa accettiamo prima di condividere informazioni sensibili. Anche le persone che fanno questo lavoro di revisione meritano visibilità.',
    sourceLabels: {
      '404-media': '404 Media: inchiesta originale sul Progetto Lily (inglese)',
      'toms-hardware':
        'Tom’s Hardware: accesso dei revisori e riepiloghi di memoria (inglese)',
      'consumer-faq':
        'OpenAI: FAQ sull’uso dei dati nei servizi per consumatori (inglese)',
      'privacy-filter': 'OpenAI: Privacy Filter e i suoi limiti (inglese)',
      'data-controls': 'OpenAI: FAQ sui controlli dei dati (inglese)',
    },
  },
  'anthropic-slowdown-ipo': {
    title: 'Anthropic chiede di rallentare l’IA mentre prepara la quotazione.',
    topic: 'Sicurezza e denaro',
    summary:
      'Dario Amodei vuole una corsa all’IA più lenta mentre Anthropic cerca di quotarsi in Borsa. Chi ne trae vantaggio è una domanda legittima. Le fonti qui sotto non dimostrano che l’IPO sia l’unico motivo.',
    status: 'Il movente legato all’IPO non è dimostrato',
    context: {
      'The proposal': {
        label: 'La proposta',
        text: 'Nel saggio del 12 settembre, Amodei chiede una crescita più lenta delle capacità, valutatori esterni inseriti nel processo e coordinamento tra aziende e governi. La ragione dichiarata è dare alla sicurezza il tempo di recuperare. Dice che questo ritmo non fermerebbe l’addestramento dei modelli.',
      },
      'The money': {
        label: 'I soldi in gioco',
        text: 'L’11 settembre Reuters ha riportato trattative di Nvidia per investire nell’IPO prevista di Anthropic. L’articolo cita fonti anonime, avverte che i piani possono cambiare e riferisce che Anthropic ha rifiutato di commentare.',
      },
      'The criticism': {
        label: 'Il punto controverso',
        text: 'In una rubrica del 15 settembre, Nicolas Chapuis di Le Monde descrive il sospetto che le regole proteggano i laboratori leader dai modelli aperti meno costosi. Presenta anche un’altra lettura: preoccupazioni sincere per la sicurezza sotto pressione competitiva. Nessuna delle due dimostra un movente nascosto legato all’IPO.',
      },
    },
    ourTake:
      'Le regole di sicurezza hanno bisogno di controllo indipendente e di una voce pubblica. Guardiamo chi le scrive, chi può permettersi di rispettarle e se resta spazio per alternative aperte.',
    sourceLabels: {
      amodei: 'Dario Amodei: We Must Pace the Frontier (inglese)',
      reuters:
        'Reuters tramite Investing.com: Nvidia e l’IPO di Anthropic (inglese)',
      'le-monde':
        'Le Monde: i soldi dietro il dibattito sul rallentamento dell’IA (inglese)',
    },
  },
  'openai-buckmaster-math-credit': {
    title:
      'OpenAI annuncia una svolta matematica. L’attribuzione è contestata.',
    topic: 'Ricerca e potere',
    summary:
      'OpenAI ha annunciato una dimostrazione di Navier–Stokes. Tristan Buckmaster, matematico della New York University, ha contestato la sua condotta riguardo a lavori collegati con Levent Alpöge. OpenAI contesta il suo racconto; l’uso delle loro ricerche private non è stato accertato.',
    status: 'Versioni in contrasto',
    context: {
      'The announcement': {
        label: 'L’annuncio',
        text: 'L’8 settembre OpenAI ha pubblicato quella che descrive come una soluzione al problema del millennio di Navier–Stokes, con un articolo e una formalizzazione in Lean. È una rivendicazione matematica dell’azienda; questa sintesi non convalida autonomamente la dimostrazione.',
      },
      'Buckmaster’s account': {
        label: 'Il racconto di Buckmaster',
        text: 'Buckmaster dice che OpenAI ha proposto un articolo senza il suo collaboratore Alpöge, dipendente di Anthropic. Dice anche che le domande sull’addestramento a partire dalle loro bozze in Codex inizialmente non hanno ricevuto risposta. La dichiarazione precisa che non sa se i dati siano stati usati. I loro risultati pubblicati riguardano equazioni dei fluidi collegate, incluse quelle di Eulero con forzante.',
      },
      'OpenAI’s response': {
        label: 'La risposta di OpenAI',
        text: 'OpenAI nega di aver visto i loro lavori prima della pubblicazione. L’aggiornamento del 10 settembre dice che un’indagine ha escluso l’influenza delle richieste di Buckmaster a Codex nei due mesi precedenti, anche tramite addestramento. WIRED riporta inoltre che Sébastien Bubeck ha negato che OpenAI volesse togliere il nome di Alpöge.',
      },
    },
    ourTake:
      'Servono confini chiari quando chi fornisce gli strumenti di ricerca compete anche per le scoperte. Attribuzione, uso dei dati e accesso al calcolo meritano attenzione quanto il risultato.',
    sourceLabels: {
      openai:
        'OpenAI: annuncio e risposta aggiornata del 10 settembre (inglese)',
      buckmaster: 'Tristan Buckmaster: dichiarazione pubblica (PDF in inglese)',
      wired: 'WIRED: l’annuncio e le versioni delle due parti (inglese)',
    },
  },
};
