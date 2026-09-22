import type { UICopy } from '../copy.ts';
import type { OrganizationTranslation } from '../directory-zh.ts';
import type { NewsTranslation } from '../news-zh.ts';

export const ui: UICopy = {
  language: 'Idioma',
  automatic: 'Automático',
  pageTitle: 'FORK YOU — Otro futuro está en nuestras manos.',
  pageDescription:
    'Quieren comérselo todo. Busquemos otro camino. Encuentra proyectos de código abierto, empresas y organizaciones de interés público donde aportar lo que sabes.',
  skip: 'Ir al directorio',
  home: 'Inicio de FORK YOU',
  navigation: 'Navegación principal',
  news: 'Noticias',
  manifesto: 'Por qué estamos aquí',
  directory: 'Encuentra tu gente',
  contribute: 'Ayuda con la lista',
  kicker: 'EL FUTURO TODAVÍA ESTÁ POR DECIDIR',
  headline: 'Quieren comérselo todo.',
  headlineAccent: 'Abramos otro camino.',
  intro:
    'Un futuro abierto necesita gente que lo construya. Aquí hay proyectos de código abierto, empresas que trabajan en abierto y organizaciones de interés público donde puedes aportar lo que sabes.',
  places: (n) => n + ' lugares por donde empezar',
  concernTitle: '¿Qué nos preocupa?',
  concern:
    'Partamos de una idea: las grandes empresas de IA intentarán comérselo todo. Las herramientas que usamos, nuestro trabajo y la atención que nos queda. ¿Qué pasa si para hacer cualquier cosa tenemos que pasar por unas pocas empresas?',
  possibility:
    'Esa es nuestra hipótesis de partida. El futuro aún se puede cambiar. Queremos herramientas que podamos examinar, comunidades con voz y trabajos que podamos llevarnos al dejar una plataforma.',
  motto: 'Código abierto. Poder compartido. Personas de verdad.',
  forkTitle: '¿Por qué «FORK YOU»?',
  fork: 'En programación, hacer un fork es tomar código compartido y darle otro rumbo. Te invitamos a hacer lo mismo con el futuro. Escribe código, diseña algo útil, traduce una guía o defiende los derechos de alguien. Ayuda a que siga habiendo alternativas.',
  participateTitle: '¿Qué puedo hacer?',
  projectAction: 'Echa una mano en un proyecto abierto.',
  projectHelp: 'Código, documentación, diseño, traducción y mucho más.',
  careerAction: 'Busca un trabajo remunerado en el que creas.',
  careerHelp:
    'Explora empresas, cooperativas y organizaciones sin ánimo de lucro.',
  volunteerAction: 'Dedica tiempo a algo que te importe.',
  volunteerHelp: 'Apoya a una comunidad o una causa cercana a ti.',
  directoryTitle: 'Encuentra tu gente.',
  curated: 'Una selección con fuentes.',
  search: 'Buscar organizaciones, causas o habilidades',
  searchPlaceholder: 'Busca una causa, habilidad o nombre…',
  clearSearch: 'Borrar búsqueda',
  involvement: 'Cómo quieres participar',
  organizationType: 'Tipo de organización',
  matches: (n) => n + (n === 1 ? ' resultado' : ' resultados'),
  emptyTitle: 'Todavía no encontramos nada.',
  emptyHelp: 'Prueba otra palabra o una forma distinta de participar.',
  clearFilters: 'Quitar todos los filtros',
  directoryNote:
    'Los enlaces de empleo llevan a páginas oficiales. No significa que hoy tengan vacantes. Las contribuciones y el voluntariado pueden no ser remunerados.',
  communityTitle: 'Falta gente en esta lista. Ayúdanos a encontrarla.',
  community:
    '¿Conoces un proyecto que falta? ¿Viste algo desactualizado? Ayúdanos a mejorar el directorio y trae fuentes para comprobarlo.',
  suggest: 'Sugerir un proyecto',
  correction: 'Avisar de un error',
  submission:
    'Se abre un formulario público de GitHub. Necesitas una cuenta. Revisamos las sugerencias y correcciones antes de actualizar la lista.',
  standardsTitle: '¿Quién entra en la lista?',
  reasonTitle: 'Una razón para estar aquí',
  reason:
    'Trabajo de código abierto, propiedad compartida o una misión de interés público documentada. Explicamos el vínculo.',
  routeTitle: 'Una forma real de participar',
  route:
    'Una guía oficial de contribución, una página de empleo o una vía de voluntariado. Indicamos qué actividades son remuneradas y cuáles no.',
  evidenceTitle: 'Fuentes, no medallas',
  evidence:
    'Fuentes y fechas de revisión. Sin empleos inventados, notas de independencia ni promesas de estar «a salvo de la IA».',
  openTitle: '¿Abierto significa perfecto?',
  open: 'No. El código abierto también puede pagar las cuentas. Las organizaciones sin ánimo de lucro también se equivocan. Lee cómo se organizan y sus fuentes, pregunta y decide por tu cuenta. Estar en la lista no significa que apoyen a FORK YOU.',
  slogan: 'El futuro no es para llevar.',
  forkSite: 'Haz un fork de esta web',
  back: 'Volver al directorio',
  categories: {
    all: 'Todas',
    project: 'Proyectos abiertos',
    company: 'Empresas y cooperativas',
    nonprofit: 'ONG y entidades sin lucro',
  },
  singular: {
    project: 'Proyecto abierto',
    company: 'Empresa / cooperativa',
    nonprofit: 'ONG / entidad sin lucro',
  },
  intents: {
    all: 'Cualquier forma',
    contribute: 'Contribuir a un proyecto',
    careers: 'Buscar trabajo remunerado',
    volunteer: 'Hacer voluntariado',
  },
  whyListed: (name) => 'Por qué incluimos a ' + name,
  whyButton: '¿Por qué está aquí?',
  receipts: 'LAS FUENTES',
  whyPicked: 'Por qué la elegimos',
  editorial: 'Nuestra valoración',
  governance: 'Cómo se organiza',
  wayIn: 'Cómo puedes participar',
  sources: 'Consulta las fuentes',
  reviewed: (date) =>
    'Fuentes revisadas el ' + date + '. Las oportunidades pueden cambiar.',
  detailNote:
    'Esta lista es un punto de partida para investigar. No certifica a ningún empleador ni implica que la organización respalde nuestro manifiesto.',
  correctionFor: (name) => 'Corregir información sobre ' + name + ' en GitHub',
  publicForm: 'Formulario público de GitHub. Hay que iniciar sesión.',
  close: 'Cerrar',
  newsKicker: 'NOTICIAS / PODER / RESPONSABILIDAD',
  newsTitle: 'Noticias, con fuentes.',
  newsIntro:
    'IA, dinero y quién tiene voz. Qué pasó, qué sigue en disputa y por qué nos importa.',
  readContext: 'Ver el contexto',
  contextFor: (title) => 'Ver el contexto: ' + title,
  sourceCount: (n) => n + (n === 1 ? ' fuente' : ' fuentes'),
  sourceLabel: (n, label) => 'Fuente ' + n + ': ' + label,
  editorialView: 'Nuestra opinión',
  ourTake: 'Lo que pensamos · Opinión',
  sourceKinds: {
    'Primary source': 'Fuente primaria',
    Reporting: 'Información periodística',
    Opinion: 'Opinión',
  },
  checked: 'Fuentes comprobadas el',
  datedBrief:
    '(UTC). Este resumen refleja ese momento; los acontecimientos posteriores pueden cambiar la situación.',
  newsCorrection: (title) => 'Corregir esta noticia: ' + title,
  bringStory: 'Trae una historia. Y sus fuentes.',
  newsSubmission:
    'Las sugerencias y correcciones abren formularios públicos de GitHub y requieren iniciar sesión. Revisamos las fuentes antes de publicar o actualizar.',
};

export const organizationTranslations: Record<string, OrganizationTranslation> =
  {
    godot: {
      name: 'Godot',
      description:
        'Un motor de juegos abierto para quienes tienen mundos por crear.',
      tags: ['Videojuegos', 'C++', 'Documentación'],
      reason:
        'Un motor compartido permite examinar, adaptar y seguir usando las herramientas. Hay muchas formas de ayudar, más allá de programar.',
      governance:
        'La fundación sin ánimo de lucro Godot Foundation apoya el proyecto. Cada colaborador conserva los derechos de su código; el motor usa la licencia MIT.',
      participation:
        'Empieza por la guía: desarrollo del motor, documentación, demos, tutoriales y apoyo a la comunidad. Son vías de colaboración, no ofertas de empleo.',
    },
    igalia: {
      name: 'Igalia',
      description:
        'Construye una web abierta en una consultora que pertenece a sus trabajadores.',
      tags: ['Propiedad de los trabajadores', 'Navegadores', 'Ingeniería'],
      reason:
        'Igalia une el desarrollo remunerado de código abierto con una empresa de propiedad de sus empleados y gestión democrática.',
      governance:
        'Una consultora de código abierto propiedad de sus trabajadores. Se describe públicamente como una organización horizontal y cooperativa.',
      participation:
        'Consulta las oportunidades y el proceso de selección en la web oficial. Los requisitos y la remuneración dependen de cada puesto.',
    },
    eff: {
      name: 'Electronic Frontier Foundation (EFF)',
      description:
        'Defiende la privacidad, la libertad de expresión y nuestros derechos digitales.',
      tags: ['Derechos digitales', 'Políticas públicas', 'Activismo'],
      reason:
        'Además de buen software, necesitamos derechos. EFF abre vías de participación en defensa pública, derecho y tecnología.',
      governance:
        'Una organización sin ánimo de lucro dedicada a los derechos digitales, con información pública sobre su dirección, documentos y finanzas.',
      participation:
        'Su página de oportunidades reúne empleo, prácticas y voluntariado. Comprueba los requisitos y si cada actividad es remunerada.',
    },
    mastodon: {
      name: 'Mastodon',
      description:
        'Redes sociales donde las comunidades pueden gestionar su propio rincón de internet.',
      tags: ['Redes sociales', 'Federación', 'Ruby'],
      reason:
        'El software social abierto y federado permite elegir servidores y reglas propias sin depender de una única plataforma central.',
      governance:
        'El proyecto principal se presenta como desarrollado por una entidad sin ánimo de lucro. Cada servidor tiene sus propios responsables y normas de moderación.',
      participation:
        'Empieza en el repositorio oficial y lee la guía antes de proponer cambios. Las contribuciones comunitarias suelen ser no remuneradas.',
    },
    codeberg: {
      name: 'Codeberg',
      description:
        'Un hogar para proyectos abiertos, sostenido por una comunidad sin ánimo de lucro.',
      tags: ['Herramientas de desarrollo', 'Comunidad', 'Infraestructura'],
      reason:
        'La infraestructura de desarrollo sostenida por la comunidad ofrece una alternativa práctica a las plataformas comerciales de alojamiento de código.',
      governance:
        'Codeberg e.V. es una asociación sin ánimo de lucro. Los miembros activos pueden votar sobre sus asuntos; los miembros de apoyo tienen otros derechos.',
      participation:
        'Consulta la información sobre afiliación y voluntariado. Puede haber cuotas; confirma con Codeberg las funciones disponibles y la capacidad actual para acoger voluntarios.',
    },
    collabora: {
      name: 'Collabora',
      description:
        'Cobra por construir sistemas abiertos sobre los que otras personas puedan seguir trabajando.',
      tags: ['Linux', 'Infraestructura', 'Ingeniería'],
      reason:
        'El trabajo comercial puede financiar el mantenimiento de proyectos abiertos originales. Collabora sitúa ese trabajo en el centro de su actividad.',
      governance:
        'Una consultora comercial de código abierto. La incluimos por su trabajo abierto documentado, no como entidad sin lucro ni empresa de propiedad de sus empleados.',
      participation:
        'Mira los puestos y ubicaciones en su página oficial de empleo. Incluir la empresa aquí no garantiza que tenga vacantes hoy.',
    },
    blender: {
      name: 'Blender',
      description:
        'Herramientas de creación 3D que sus usuarios pueden hacer suyas.',
      tags: ['3D y arte', 'Diseño', 'Documentación'],
      reason:
        'Las herramientas creativas compartidas ofrecen alternativas a las suscripciones de software propietario. Diseño, código, pruebas y documentación también necesitan manos.',
      governance:
        'Blender Foundation apoya este proyecto de software libre y abierto. El desarrollo se organiza por módulos con responsabilidades públicas.',
      participation:
        'La guía de participación incluye desarrollo, documentación y traducción. Lee las indicaciones del equipo que te interese antes de empezar.',
    },
    nextcloud: {
      name: 'Nextcloud',
      description:
        'Crea herramientas de colaboración para quienes quieren decidir dónde quedan sus datos.',
      tags: ['Autoalojamiento', 'PHP', 'Colaboración'],
      reason:
        'La colaboración abierta y autoalojada da a las organizaciones más opciones sobre dónde guardar archivos y conversaciones.',
      governance:
        'Una empresa comercial de código abierto con una comunidad de colaboradores y productos y servicios de pago. Estar aquí no implica que rechace la IA.',
      participation:
        'Mira la página de empleo para puestos remunerados y la guía para código, pruebas, traducción y comunidad. Colaborar en la comunidad no equivale a ser contratado.',
    },
    tor: {
      name: 'Proyecto Tor',
      description: 'Ayuda a comunicarse y navegar sin vigilancia ni censura.',
      tags: ['Privacidad', 'Contra la censura', 'Traducción'],
      reason:
        'La infraestructura de privacidad importa cuando el control de internet se concentra. Tor ofrece formas de ayudar con y sin conocimientos técnicos.',
      governance:
        'Una organización sin ánimo de lucro con un consejo directivo y una amplia comunidad voluntaria. Empleo y participación comunitaria tienen páginas separadas.',
      participation:
        'El portal comunitario incluye traducción, difusión, investigación y voluntariado técnico; los puestos remunerados están en empleo. Cada actividad tiene sus propias pautas.',
    },
    wikimedia: {
      name: 'Fundación Wikimedia',
      description:
        'Apoya a las personas y la infraestructura que hacen posible compartir conocimiento libre.',
      tags: ['Conocimiento', 'Educación', 'Interés público'],
      reason:
        'El conocimiento compartido necesita cuidados e infraestructura. La fundación ofrece trabajo remunerado para apoyar la tecnología y las comunidades de Wikipedia y otros proyectos.',
      governance:
        'La Fundación Wikimedia, sin ánimo de lucro, apoya los proyectos Wikimedia. Trabajar para ella es distinto de editar como voluntario en la comunidad.',
      participation:
        'Consulta puestos actuales, ubicaciones y detalles de solicitud en la página de empleo de la fundación. No garantizamos vacantes concretas.',
    },
    libreoffice: {
      name: 'LibreOffice',
      description:
        'Mejoremos entre todos las herramientas de oficina que usamos a diario.',
      tags: ['Ofimática', 'Diseño', 'Traducción'],
      reason:
        'Los documentos forman parte de la vida cotidiana. Una suite comunitaria permite estudiar, mejorar y compartir las herramientas que usamos.',
      governance:
        'Un proyecto de software libre y abierto apoyado por The Document Foundation y una comunidad de colaboradores.',
      participation:
        'La guía incluye diseño, traducción, documentación, desarrollo, pruebas y tareas para empezar. Recomienda hablar primero con los mentores del proyecto.',
    },
    openstreetmap: {
      name: 'OpenStreetMap',
      description:
        'Convierte lo que sabes de tu barrio en un mapa que todos puedan usar.',
      tags: ['Datos abiertos', 'Cartografía', 'Comunidad'],
      reason:
        'Los mapas compartidos ofrecen una alternativa a los servicios propietarios. Conocer el lugar donde vives ya es una aportación útil.',
      governance:
        'Un proyecto comunitario de cartografía. La fundación OpenStreetMap opera el sitio principal y servicios relacionados para la comunidad. Los datos tienen su propia licencia abierta y requisitos de atribución.',
      participation:
        'Empieza con la guía de bienvenida para aprender a mapear y apoyar a la comunidad. Es una vía de participación en datos abiertos, no hace falta saber programar.',
    },
    zulip: {
      name: 'Zulip',
      description:
        'Chat de equipo abierto, con una empresa propiedad de una fundación sin ánimo de lucro.',
      tags: ['Chat de equipo', 'Autoalojamiento', 'Propiedad de una fundación'],
      reason:
        'El chat abierto y la propiedad sin ánimo de lucro ofrecen otra forma de mantener herramientas colaborativas. Esa estructura merece examinarse; no es un sello automático de independencia.',
      governance:
        'El anuncio de mayo de 2026 dice que Kandra Labs, la empresa detrás de Zulip, pertenece a la fundación independiente y sin ánimo de lucro Zulip Foundation. También anuncia la salida del fundador y tres miembros veteranos hacia Anthropic.',
      participation:
        'Consulta los puestos y requisitos en la página oficial. Describimos la empresa y su propiedad; no afirmamos que su equipo carezca de vínculos personales con empresas de IA.',
    },
    element: {
      name: 'Element',
      description:
        'Trabaja en mensajería basada en comunicaciones abiertas y descentralizadas.',
      tags: ['Mensajería', 'Estándares abiertos', 'Privacidad'],
      reason:
        'La comunicación basada en Matrix permite elegir mejor dónde se alojan las conversaciones y cómo se conectan los servicios.',
      governance:
        'Una empresa comercial del ecosistema Matrix. Su página de empleo dice que casi todo el software que crea es abierto, no que cada producto o función lo sea.',
      participation:
        'Consulta vacantes y requisitos en la página oficial. Conoce el trabajo y el modelo de producto antes de decidir si encaja contigo.',
    },
    openproject: {
      name: 'OpenProject',
      description:
        'Ayuda a los equipos a organizarse con gestión de proyectos de código abierto.',
      tags: ['Gestión de proyectos', 'Producto y UX', 'Ingeniería'],
      reason:
        'Las herramientas para coordinar equipos también pueden ser infraestructura compartida. OpenProject une trabajo de producto remunerado y código público.',
      governance:
        'Una empresa comercial de software abierto. Su página de empleo describe una edición Community gratuita y equipos de ingeniería, producto, diseño y atención al cliente.',
      participation:
        'Consulta vacantes y requisitos de ubicación en la web oficial. La descripción de equipos no implica que todos estén contratando.',
    },
    'access-now': {
      name: 'Access Now',
      description:
        'Defiende los derechos digitales de personas y comunidades en riesgo.',
      tags: ['Derechos humanos', 'Políticas públicas', 'Seguridad digital'],
      reason:
        'Un futuro abierto también necesita gente que se enfrente a la censura, la vigilancia y los abusos. Defender derechos es otra forma de aportar, más allá del software.',
      governance:
        'Una organización global de derechos humanos centrada en los derechos digitales, con equipo distribuido y proceso de selección público.',
      participation:
        'Consulta empleos, programas de becas y prácticas en la web oficial. Los permisos de trabajo y requisitos de ubicación varían: «remoto» no significa elegible desde cualquier lugar.',
    },
    'open-knowledge': {
      name: 'Open Knowledge Foundation',
      description:
        'Haz que el conocimiento público se pueda usar y compartir de verdad.',
      tags: ['Datos abiertos', 'Interés público', 'Educación'],
      reason:
        'El conocimiento abierto necesita herramientas, habilidades e instituciones. La fundación conecta ese trabajo con comunidades de interés público en distintos lugares.',
      governance:
        'Una entidad sin ánimo de lucro registrada en Inglaterra y Gales que publica información de gobierno, consejo y financiadores. Combina trabajo de fundación con servicios.',
      participation:
        'Consulta la página de empleos y oportunidades. Es una organización que merece explorar, no una garantía de que hoy haya un puesto concreto.',
    },
    framasoft: {
      name: 'Framasoft',
      description:
        'Ayuda a las comunidades a recuperar el control de sus herramientas digitales.',
      tags: ['Software libre', 'Comunidad', 'Traducción'],
      reason:
        'Framasoft transforma la crítica a la concentración tecnológica en software, servicios y recursos educativos que se pueden usar.',
      governance:
        'Una asociación francesa sin ánimo de lucro que crea software libre y servicios comunitarios, con donaciones, personal y voluntariado.',
      participation:
        'La entrada para colaborar está en inglés; algunos materiales más detallados están en francés. Revisa las instrucciones de cada proyecto antes de elegir cómo ayudar.',
    },
  };

export const actionLabels: Record<string, string> = {
  'Find a contribution': 'Encuentra cómo colaborar',
  'Explore careers': 'Ver oportunidades de empleo',
  'Find volunteer routes': 'Ver opciones de voluntariado',
  'Explore the source': 'Ver código y participación',
  'Explore ways to help': 'Ver cómo ayudar',
  'Start mapping': 'Empieza a mapear',
};
export const sourceLabels: Record<string, string> = {
  'Ways to contribute': 'Formas de contribuir',
  'Governance model': 'Modelo de gobierno',
  'Igalia values and cooperative decision-making':
    'Valores y decisiones cooperativas en Igalia',
  'Working at Igalia': 'Trabajar en Igalia',
  'Official opportunities and volunteer links':
    'Oportunidades oficiales y voluntariado',
  'Mastodon: software, federation, and organization':
    'Mastodon: software, federación y organización',
  'Membership, voting rights, and volunteering':
    'Afiliación, derecho de voto y voluntariado',
  'Careers and open-source engineering':
    'Empleo e ingeniería de código abierto',
  'Ways to get involved': 'Formas de participar',
  'Blender Foundation': 'Fundación Blender',
  'Jobs and company description': 'Empleos y presentación de la empresa',
  'Community contribution guide': 'Guía de contribución comunitaria',
  'Tor community portal': 'Portal comunitario de Tor',
  'Jobs and organization': 'Empleos y organización',
  'Foundation careers and mission': 'Empleo y misión de la fundación',
  'Community and contribution routes': 'Comunidad y formas de colaborar',
  'Community, open data, and Foundation role':
    'Comunidad, datos abiertos y papel de la fundación',
  'Welcome and ways to contribute': 'Bienvenida y formas de contribuir',
  'Jobs and current stewardship': 'Empleo y gestión actual',
  'Foundation ownership and leadership transition':
    'Propiedad de la fundación y cambios de dirección',
  'Careers and open-source work': 'Empleo y trabajo de código abierto',
  'Teams, open-source model, and careers': 'Equipos, modelo abierto y empleo',
  'Mission, employment, and application requirements':
    'Misión, empleo y requisitos',
  'Mission, organization, and governance links':
    'Misión, organización y gobierno',
  'Jobs and opportunities': 'Empleos y oportunidades',
  'Association, mission, and projects': 'Asociación, misión y proyectos',
  'Participation guide': 'Guía de participación',
};

export const newsTranslations: Record<string, NewsTranslation> = {
  'zcode-git-workspace-uploads': {
    title: 'ZCode no solo subía código: también incluía el historial de .git.',
    topic: 'Privacidad del código y consentimiento',
    summary:
      'Varios investigadores encontraron que ZCode empaquetaba archivos del proyecto e historial de Git para subirlos en segundo plano. Z.ai pidió disculpas y una versión posterior modificó el mecanismo. Sigue sin verificarse qué pasó con las copias anteriores en la nube.',
    status: 'Subidas detectadas; corrección reportada',
    context: {
      'What was packaged': {
        label: 'Qué incluía el paquete',
        text: 'En su análisis del 18 de septiembre de ZCode 3.12.3, ferstar describe copias cifradas del espacio de trabajo destinadas a Alibaba Cloud. El listado incluía código, objetos de Git, archivos LFS y reflogs. La carpeta .git representaba el 86,6 % de la copia medida.',
      },
      'An attempted upload is not a completed upload': {
        label: 'Intentar subir algo no significa haberlo subido',
        text: 'En una aclaración del 19 de septiembre, el autor dice que el archivo de 313 MB de un proyecto comercial nunca llegó a subirse correctamente. Otro repositorio público, de 538 archivos, sí recibió confirmación del servidor. Encontrar un archivo grande en el disco no demuestra por sí solo que llegara a la nube.',
      },
      'A separate local inspection': {
        label: 'Otra revisión, en otro equipo',
        text: 'Silent Star encontró listados con muchos datos de Git en la versión 3.10.1: el servidor aceptó copias pequeñas, mientras un repositorio privado seguía pendiente. Según su análisis, los metadatos de Git eludían los filtros de archivos normales. Eso podría incluir secretos guardados en commits antiguos, aunque el autor no encontró credenciales reales en los repositorios revisados.',
      },
      'The company’s response': {
        label: 'Qué respondió la empresa',
        text: 'IT Home informó de las disculpas de Z.ai del 18 de septiembre. La empresa atribuyó el problema a la indexación del código y a Repo Wiki, activado por defecto al principio. Afirma que destruye los datos subidos al terminar de generar las páginas wiki en la nube. También prometió abrir el código de ZCode y recurrir a revisores externos; son compromisos, no auditorías ya realizadas.',
      },
      'What changed in 3.14.0': {
        label: 'Qué cambió en la versión 3.14.0',
        text: 'Las notas del 19 de septiembre indican una corrección de la subida para la wiki del repositorio. La revisión posterior de ferstar dice que la versión 3.14.0 eliminó ese mecanismo. Esto describe un cambio en el cliente, pero no verifica de forma independiente el borrado de datos anteriores. FORK YOU revisó las fuentes; no reprodujo el análisis del cliente.',
      },
    },
    ourTake:
      'El historial de un repositorio necesita el mismo consentimiento que los archivos actuales. Las herramientas deberían mostrar qué sale del equipo, permitir desactivar las subidas de verdad y ofrecer pruebas de sus políticas de conservación. Publicar el código y una auditoría independiente daría a los usuarios algo concreto que examinar.',
    sourceLabels: {
      ferstar:
        'ferstar: análisis original y aclaración del 19 de septiembre (inglés)',
      'silent-star': 'Silent Star: inspección local independiente (chino)',
      ithome: 'IT Home: disculpas y respuesta de Z.ai (chino)',
      'zcode-changelog': 'ZCode: notas oficiales de la versión 3.14.0 (inglés)',
    },
  },
  'openai-project-lily-chat-review': {
    title: 'Proyecto Lily: ¿quién lee tus conversaciones con ChatGPT?',
    topic: 'Privacidad y trabajo de revisión',
    summary:
      '404 Media informa de que contratistas de OpenAI revisan conversaciones reales de ChatGPT, a veces con información sensible. Las preguntas frecuentes para consumidores de OpenAI contemplan un acceso humano limitado para mejorar los modelos y otros fines concretos.',
    status: 'Práctica descrita en una investigación periodística',
    context: {
      'The original investigation': {
        label: 'Qué encontró la investigación original',
        text: 'El reportaje de Joseph Cox del 14 de septiembre describe a cientos de contratistas puntuando respuestas dentro del Proyecto Lily. Se basa en documentos internos y consultas reales que vio 404 Media. El objetivo es mejorar las respuestas, por ejemplo reduciendo el asentimiento excesivo al usuario y las afirmaciones de experiencias humanas.',
      },
      'More than a single prompt': {
        label: 'Puede haber más que una sola pregunta',
        text: 'El seguimiento de Tom’s Hardware, que cita a 404 Media, describe el acceso a conversaciones y a un resumen de la memoria del usuario, con posibles datos personales como su ubicación. Habla de la misma investigación, no de otra filtración independiente.',
      },
      'OpenAI’s response and disclosures': {
        label: 'Qué dice OpenAI',
        text: 'Según 404 Media, los revisores no ven nombres de usuario. OpenAI dice que intenta retirar datos personales, aunque reconoce que algunos pueden pasar el filtro. Su FAQ permite el acceso de personal autorizado y proveedores por investigaciones de abuso, soporte, asuntos legales o mejora del modelo, salvo que se rechace este último uso. Describe obligaciones de confidencialidad, controles y registros de acceso.',
      },
      'What filtering can miss': {
        label: 'Lo que puede escaparse al filtro',
        text: 'La documentación de Privacy Filter de OpenAI advierte que la herramienta no garantiza el anonimato y puede omitir identificadores poco habituales o referencias privadas ambiguas. Eso aconseja cautela con la eliminación de datos, pero no mide los fallos dentro del Proyecto Lily.',
      },
      'What you can control': {
        label: 'Qué puedes cambiar tú',
        text: 'OpenAI permite excluir las conversaciones del entrenamiento en Settings → Data Controls → Improve the model for everyone. Su FAQ dice que los chats temporales no se usan para entrenar, pero pueden revisarse por abuso. Rechazar el entrenamiento no garantiza que nadie acceda al contenido para los otros fines indicados.',
      },
    },
    ourTake:
      'Si una interfaz invita a contar cosas personales, también debe explicar quién podría leerlas. Deberías poder entender y decidir qué aceptas antes de compartir información sensible. Las personas que hacen ese trabajo de revisión también merecen visibilidad.',
    sourceLabels: {
      '404-media':
        '404 Media: investigación original del Proyecto Lily (inglés)',
      'toms-hardware':
        'Tom’s Hardware: acceso de revisores y resúmenes de memoria (inglés)',
      'consumer-faq':
        'OpenAI: uso de datos en servicios para consumidores (inglés)',
      'privacy-filter': 'OpenAI: Privacy Filter y sus límites (inglés)',
      'data-controls':
        'OpenAI: preguntas frecuentes sobre controles de datos (inglés)',
    },
  },
  'anthropic-slowdown-ipo': {
    title: 'Anthropic pide frenar la IA mientras prepara su salida a bolsa.',
    topic: 'Seguridad y dinero',
    summary:
      'Dario Amodei quiere una carrera de IA más lenta mientras Anthropic busca salir a bolsa. Quién se beneficia merece debate. Las fuentes de abajo no demuestran que la salida a bolsa sea el único motivo.',
    status: 'Motivo bursátil no demostrado',
    context: {
      'The proposal': {
        label: 'Qué propone',
        text: 'En su ensayo del 12 de septiembre, Amodei pide frenar el crecimiento de capacidades, integrar evaluadores externos y coordinar empresas y gobiernos. Dice que busca dar tiempo a la seguridad para ponerse al día y que este ritmo no detendría el entrenamiento de modelos.',
      },
      'The money': {
        label: 'Mientras tanto, la salida a bolsa',
        text: 'Reuters informó el 11 de septiembre de conversaciones de Nvidia para invertir en la salida a bolsa prevista de Anthropic. Cita fuentes anónimas, señala que los planes podrían cambiar y recoge que Anthropic declinó comentar.',
      },
      'The criticism': {
        label: 'Dónde está la discusión',
        text: 'En una columna del 15 de septiembre, Nicolas Chapuis, de Le Monde, describe la sospecha de que la regulación proteja a las empresas líderes frente a modelos abiertos más baratos. También expone otra lectura: preocupaciones sinceras de seguridad bajo presión competitiva. Ninguna demuestra un motivo bursátil oculto.',
      },
    },
    ourTake:
      'Las reglas de seguridad necesitan supervisión independiente y voz pública. Fijémonos en quién las escribe, quién puede costear su cumplimiento y si dejan espacio para alternativas abiertas.',
    sourceLabels: {
      amodei: 'Dario Amodei: We Must Pace the Frontier (inglés)',
      reuters:
        'Reuters, vía Investing.com: Nvidia y la salida a bolsa de Anthropic (inglés)',
      'le-monde':
        'Le Monde: el dinero tras el debate sobre frenar la IA (inglés)',
    },
  },
  'openai-buckmaster-math-credit': {
    title: 'OpenAI anuncia un avance matemático. La autoría está en disputa.',
    topic: 'Investigación y poder',
    summary:
      'OpenAI anunció una demostración de Navier–Stokes. Tristan Buckmaster, matemático de la Universidad de Nueva York, cuestionó su conducta respecto a su trabajo relacionado con Levent Alpöge. OpenAI discrepa; no se ha demostrado el uso de su investigación privada.',
    status: 'Versiones enfrentadas',
    context: {
      'The announcement': {
        label: 'Qué anunció OpenAI',
        text: 'El 8 de septiembre, OpenAI publicó lo que presenta como una solución al problema del milenio de Navier–Stokes, con un artículo y una formalización en Lean. Es una afirmación matemática de la empresa; este resumen no valida de forma independiente la demostración.',
      },
      'Buckmaster’s account': {
        label: 'Qué cuenta Buckmaster',
        text: 'Buckmaster dice que OpenAI propuso un artículo sin su colaborador Alpöge, empleado de Anthropic. También dice que sus preguntas sobre el uso para entrenamiento de los borradores en Codex no recibieron respuesta al principio. Su declaración aclara que no sabe si se usaron sus datos. Los resultados publicados de ambos tratan ecuaciones de fluidos relacionadas, incluida la ecuación de Euler con forzamiento.',
      },
      'OpenAI’s response': {
        label: 'La respuesta de OpenAI',
        text: 'OpenAI niega haber visto su trabajo antes de la publicación. En su actualización del 10 de septiembre dice que una investigación descartó la influencia de las consultas de Buckmaster a Codex durante los dos meses anteriores, también a través del entrenamiento. WIRED recoge además que Sébastien Bubeck negó que OpenAI intentara retirar el nombre de Alpöge.',
      },
    },
    ourTake:
      'Si la empresa que ofrece las herramientas de investigación también compite por los descubrimientos, hacen falta límites claros. La autoría, el uso de datos y el acceso a cómputo merecen tanta atención como el resultado.',
    sourceLabels: {
      openai:
        'OpenAI: anuncio y respuesta actualizada del 10 de septiembre (inglés)',
      buckmaster: 'Tristan Buckmaster: declaración pública (PDF en inglés)',
      wired: 'WIRED: el anuncio y las versiones de ambas partes (inglés)',
    },
  },
};
