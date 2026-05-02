import type { Bilingual } from "./types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export const ui = {
  // Top brand strip / marquee
  ticker: {
    folio: b("Folio 2026 · Vol. 04", "Folio 2026 · Vol. 04"),
    location: b("Denmark ↔ Valencia", "Dinamarca ↔ Valencia"),
    languages: b("EN · ES · VAL", "EN · ES · VAL"),
  },

  // Navigation
  nav: {
    role: b("Marketing & comms", "Marketing y comunicación"),
    primary: [
      { href: "/", label: b("Index", "Inicio") },
      { href: "/about", label: b("About", "Sobre mí") },
      { href: "/work", label: b("Work", "Proyectos") },
      { href: "/writing", label: b("Writing", "Escritos") },
      { href: "/contact", label: b("Contact", "Contacto") },
    ],
    toggleLabel: b("Switch language", "Cambiar idioma"),
  },

  // Common
  common: {
    readCase: b("Read the case study", "Leer el caso completo"),
    allProjects: b("All projects", "Todos los proyectos"),
    allWriting: b("All writing", "Todos los escritos"),
    moreAbout: b("More about how I work", "Más sobre cómo trabajo"),
    nextProject: b("Next project", "Siguiente proyecto"),
    available: b("Available", "Disponible"),
    note: b("Note", "Nota"),
    contact: b("Contact", "Contacto"),
    writeToMe: b("Write to me.", "Escríbeme."),
    inProgress: b("In progress", "En curso"),
    placeholders: b("Placeholders", "Marcadores"),
  },

  // Home — hero
  hero: {
    badge: b("Independent practice", "Práctica independiente"),
    badgeMeta: b("/ Denmark — Valencia", "/ Dinamarca — Valencia"),
    headline: {
      l1: b("An independent", "Una práctica"),
      l2a: b("communications", "independiente"),
      l2b: b(" practice", " de comunicación"),
      l3: b("for aquaculture,", "para acuicultura,"),
      l4: b("seafood &", "pesca y"),
      l5: b("sustainability.", "sostenibilidad."),
    },
    sub: b(
      "Run by Nerea Clemente, working from Denmark with a Mediterranean register from Valencia. Mostly long-form: brand narrative, campaigns, science communication and the editorial side of sustainability reporting.",
      "Llevada por Nerea Clemente, desde Dinamarca y con registro mediterráneo de Valencia. Sobre todo trabajo de fondo: narrativa de marca, campañas, comunicación científica y la parte editorial de los informes de sostenibilidad."
    ),
    ctaPrimary: b("See the work", "Ver el trabajo"),
    ctaGhost: b("Start a conversation", "Empezar una conversación"),
  },

  // Home — sections
  home: {
    selectedStrip: b(
      "Selected projects, 2024 — 2026",
      "Proyectos seleccionados, 2024 — 2026"
    ),
    selectedCount: b(
      "07 case studies in the index",
      "07 casos de estudio en el índice"
    ),
    selectedTitle: {
      a: b("Three projects that say ", "Tres proyectos que dicen "),
      em: b("most", "casi todo"),
      b: b(" of it.", "."),
    },
    selectedLede: b(
      "A short selection across campaigns, editorial and science communication. The full index lives on the work page.",
      "Una pequeña selección entre campañas, editorial y comunicación científica. El índice completo está en la página de proyectos."
    ),
    profileEyebrow: b("Profile", "Perfil"),
    profileLeadA: b(
      "I'm a marketing and communications professional working mainly with companies and projects in ",
      "Soy una profesional del marketing y la comunicación que trabaja sobre todo con empresas y proyectos de "
    ),
    profileLeadEm: b(
      "aquaculture, seafood",
      "acuicultura, pesca"
    ),
    profileLeadB: b(
      " and adjacent technical sectors.",
      " y sectores técnicos adyacentes."
    ),
    profileBody: b(
      "My work sits between strategy and editorial: brand narratives, campaigns, long-form writing, science communication and sustainability reporting. I spend time on site with the people doing the work, then translate that into language buyers, retailers, journalists and the wider public can use. Alongside client work, I run Seafood on Nerea, a personal editorial project, and Women in Aquaculture, a small interview series.",
      "Mi trabajo está entre la estrategia y la edición: narrativas de marca, campañas, textos largos, comunicación científica e informes de sostenibilidad. Paso tiempo en el terreno con las personas que hacen el trabajo y después lo traduzco a un lenguaje que puedan usar compradores, distribuidores, periodistas y el público general. Además del trabajo de cliente, llevo Seafood on Nerea, un proyecto editorial personal, y Mujeres en Acuicultura, una serie de entrevistas."
    ),
    practiceEyebrow: b("Practice", "Práctica"),
    practiceTitle: b("What I actually do.", "Lo que hago, en concreto."),
    practiceLede: b(
      "Four overlapping disciplines. Most engagements combine two or three, and most begin with a few weeks of listening before any writing happens.",
      "Cuatro disciplinas que se solapan. La mayoría de los encargos combinan dos o tres y casi todos empiezan con unas semanas de escucha antes de escribir nada."
    ),
    services: b("services", "servicios"),

    manifestoEyebrow: b("Working note", "Nota de trabajo"),
    manifestoMeta: b("Pinned above the desk", "Colgada sobre la mesa"),
    manifestoQuote: b(
      "I'd rather write one careful sentence about a fish farm than ten clever ones about something I don't know. The work begins on the dock, in someone else's vocabulary, and ends on the page in ",
      "Prefiero escribir una frase precisa sobre una piscifactoría que diez ingeniosas sobre algo que no entiendo. El trabajo empieza en el muelle, en el vocabulario de otra persona, y termina en la página, en el "
    ),
    manifestoEm: b("mine", "mío"),
    manifestoTrail: b(".", "."),
    manifestoSign: b("— N.C.", "— N.C."),
    manifestoLocation: b("Denmark · 2026", "Dinamarca · 2026"),

    preocEyebrow: b("Recurring interests", "Intereses recurrentes"),
    preocTitleA: b("What I keep", "A lo que vuelvo"),
    preocTitleEm: b("coming back to.", "una y otra vez."),
    preocLede: b(
      "The recurring interests behind most of the work. Not a list of services. A list of obsessions — and a quick note on why each one stuck.",
      "Los intereses que están detrás de casi todo el trabajo. No es una lista de servicios. Es una lista de obsesiones — con una nota breve sobre por qué cada una se ha quedado."
    ),
    preocChip: b("Recurring interest", "Interés recurrente"),

    writingEyebrow: b("Writing", "Escritos"),
    writingTitleA: b("Recent ", "Notas y "),
    writingTitleEm: b("notes", "ensayos"),
    writingTitleB: b(" & essays.", " recientes."),
    writingLede: b(
      "Short pieces on communication, feed, welfare and the editorial side of sustainability.",
      "Piezas breves sobre comunicación, alimentación animal, bienestar y la parte editorial de la sostenibilidad."
    ),
  },

  // About
  about: {
    eyebrow: b("Profile / Perfil", "Profile / Perfil"),
    titleL1: b("A communicator", "Una comunicadora"),
    titleL2: b("for sectors", "para sectores"),
    titleL3: b("that are usually", "que casi siempre"),
    titleL4: b("explained badly.", "están mal explicados."),
    intro: b(
      "I'm Nerea Clemente. I work in marketing and communications, mostly with companies and projects in aquaculture, seafood, food systems and sustainability. My practice sits between strategy and editorial — brand narrative, campaigns, long-form writing and science communication — with a consistent interest in the parts of these sectors that tend not to be communicated well.",
      "Soy Nerea Clemente. Trabajo en marketing y comunicación, sobre todo con empresas y proyectos de acuicultura, pesca, sistemas alimentarios y sostenibilidad. Mi práctica está entre la estrategia y la edición — narrativa de marca, campañas, textos largos y comunicación científica — con un interés constante por las partes de estos sectores que no suelen comunicarse bien."
    ),
    portraitTag: b("Portrait", "Retrato"),
    portraitNote: b("Drop in real photo", "Sustituir por foto real"),
    portraitPlaceholder: b("Placeholder", "Marcador"),
    portraitCaption: b("Denmark, March 2026", "Dinamarca, marzo de 2026"),
    portraitCredit: b("Photo · A. Lund", "Foto · A. Lund"),

    bgEyebrow: b("Background", "Trayectoria"),
    bgTitle: b("The shorter version.", "La versión corta."),
    bgP1: b(
      "I started in corporate communications inside the aquaculture industry, working across campaigns, press, sustainability reporting and internal communication. That gave me a working understanding of how producers, feed companies, retailers and regulators actually talk to each other — and where the conversation tends to break.",
      "Empecé en comunicación corporativa dentro del sector acuícola, en campañas, prensa, informes de sostenibilidad y comunicación interna. Eso me dio una comprensión real de cómo se hablan productores, empresas de pienso, distribuidores y reguladores — y de dónde suele romperse la conversación."
    ),
    bgP2a: b(
      "Over the last few years I've moved towards editorial and strategic work: brand narratives, long-form articles and campaigns, editorial direction on sustainability reports, and interviews with scientists, vets and farm managers. In parallel I run ",
      "En los últimos años me he movido hacia el trabajo editorial y estratégico: narrativas de marca, artículos largos y campañas, dirección editorial de informes de sostenibilidad y entrevistas con científicos, veterinarios y responsables de granja. En paralelo llevo "
    ),
    bgP2em1: b("Seafood on Nerea", "Seafood on Nerea"),
    bgP2b: b(", a personal editorial project, and ", ", un proyecto editorial personal, y "),
    bgP2em2: b("Women in Aquaculture", "Mujeres en Acuicultura"),
    bgP2c: b(", an interview series.", ", una serie de entrevistas."),
    bgP3: b(
      "I'm from Valencia and based in Denmark — the Mediterranean register stays, even when the weather doesn't. I write mainly in British English, work internationally and remotely, with a few days on site for each serious project.",
      "Soy de Valencia y vivo en Dinamarca — el registro mediterráneo se queda, aunque el tiempo no. Escribo sobre todo en inglés británico, trabajo internacionalmente y en remoto, con unos días en el terreno para cada proyecto serio."
    ),

    princEyebrow: b("Principles", "Principios"),
    princTitleA: b("Four working", "Cuatro principios"),
    princTitleEm: b("principles.", "de trabajo."),

    sectorsEyebrow: b("Sectors", "Sectores"),
    sectorsTitleA: b("Where the", "Dónde aterriza"),
    sectorsTitleEm: b("work", "el trabajo"),
    sectorsTitleB: b(" tends", " "),
    sectorsTitleC: b("to land.", "normalmente."),
    sectorsBody: b(
      "Most of my work has been in aquaculture and seafood, but the practice travels well into adjacent technical sectors — fisheries, food systems, marine sciences — and into any brief where a team has a real story and needs help saying it without losing the substance.",
      "La mayor parte de mi trabajo ha sido en acuicultura y pesca, pero la práctica viaja bien a sectores técnicos cercanos — pesquerías, sistemas alimentarios, ciencias marinas — y a cualquier encargo donde un equipo tiene una historia real y necesita ayuda para contarla sin perder la sustancia."
    ),

    servicesEyebrow: b("Services", "Servicios"),
    servicesTitleA: b("What an engagement", "Cómo se ve"),
    servicesTitleEm: b("looks like.", "un encargo."),
    services: [
      {
        n: "01",
        t: b("Retained advisory", "Asesoría continua"),
        d: b(
          "Ongoing editorial and strategic support for a communications or ESG team. Monthly retainer, defined outputs.",
          "Apoyo editorial y estratégico continuado para un equipo de comunicación o ESG. Cuota mensual, entregables definidos."
        ),
      },
      {
        n: "02",
        t: b("Campaign or report", "Campaña o informe"),
        d: b(
          "Fixed-scope projects: a campaign, a sustainability report, a messaging system. Clear brief, clear deliverables.",
          "Proyectos de alcance cerrado: una campaña, un informe de sostenibilidad, un sistema de mensajes. Brief claro, entregables claros."
        ),
      },
      {
        n: "03",
        t: b("Editorial lead", "Dirección editorial"),
        d: b(
          "Writing and editorial direction on long-form pieces, interview series, or content systems.",
          "Escritura y dirección editorial sobre piezas largas, series de entrevistas o sistemas de contenido."
        ),
      },
      {
        n: "04",
        t: b("Brand and narrative", "Marca y narrativa"),
        d: b(
          "Positioning, narrative and voice work for producers and initiatives. Usually a 6–10 week engagement.",
          "Trabajo de posicionamiento, narrativa y voz para productores e iniciativas. Suele durar entre 6 y 10 semanas."
        ),
      },
    ],

    ctaEyebrow: b("Get in touch", "Hablamos"),
    ctaText: b(
      "If you're putting together a campaign, report or editorial project in seafood, aquaculture or sustainability — ",
      "Si estás preparando una campaña, un informe o un proyecto editorial en pesca, acuicultura o sostenibilidad — "
    ),
    ctaEm: b("write to me.", "escríbeme."),
  },

  // Work
  work: {
    badge: b("Index", "Índice"),
    badgeMeta: b("/ 2022 — 2026", "/ 2022 — 2026"),
    titleA: b("A selection of projects across ", "Una selección de proyectos en "),
    titleEm1: b("campaigns,", "campañas,"),
    titleMid: b(" editorial &", " editorial y"),
    titleEm2: b("science communication.", "comunicación científica."),
    lede: b(
      "Both client work and self-initiated projects. Use the filters to browse by category, or switch to index view for a faster scan.",
      "Trabajo de cliente y proyectos propios. Usa los filtros para navegar por categoría, o cambia a vista de índice para un repaso rápido."
    ),
    filterLabel: b("Filter →", "Filtrar →"),
    countLabel: b("projects", "proyectos"),
    grid: b("Grid", "Cuadrícula"),
    index: b("Index", "Índice"),
    all: b("All", "Todo"),
    empty: b(
      "No projects in this category yet.",
      "No hay proyectos en esta categoría todavía."
    ),
    alsoEyebrow: b("Also", "Además"),
    alsoTitle: b(
      "Not everything lives on the site.",
      "No todo está aquí en la web."
    ),
    alsoLede: b(
      "Some of the most interesting work — confidential strategy decks, internal narrative systems, crisis communication — doesn't make it into a public portfolio. If a specific brief overlaps with one of those, I'm happy to walk through it privately.",
      "Una parte del trabajo más interesante — presentaciones estratégicas confidenciales, sistemas narrativos internos, comunicación de crisis — no entra en un portfolio público. Si tu encargo encaja con algo así, lo repasamos en privado."
    ),
  },

  // Writing
  writing: {
    badge: b("Writing & Insights", "Escritos e ideas"),
    badgeMeta: b("/ Vol. 04", "/ Vol. 04"),
    titleA: b("Notes on", "Notas sobre"),
    titleB: b("communication in ", "comunicación en "),
    titleEm: b("technical sectors.", "sectores técnicos."),
    lede: b(
      "Short essays, field notes and briefings. Published when the thinking is ready, not on a schedule.",
      "Ensayos cortos, notas de campo y briefings. Publicados cuando la idea está lista, no por calendario."
    ),
    themesLabel: b("Themes", "Temas"),
    themes: [
      b("Communicating aquaculture to wider audiences", "Comunicar acuicultura al público general"),
      b("Science communication in food systems", "Comunicación científica en sistemas alimentarios"),
      b("Seafood storytelling", "Narrativa del producto del mar"),
      b("Content strategy in technical sectors", "Estrategia de contenido en sectores técnicos"),
      b("Sustainability communication without greenwashing", "Sostenibilidad sin greenwashing"),
    ],
    noteText: b(
      "These essays live alongside the work. Most start as a working note on a client project. When the argument generalises, it becomes an essay. When it's narrower, a briefing. Nothing is published until it holds up on its own.",
      "Estos ensayos viven junto al trabajo. La mayoría empiezan como notas internas en un proyecto de cliente. Cuando el argumento se generaliza, se vuelve ensayo. Cuando es más estrecho, un briefing. Nada se publica hasta que se sostiene por sí solo."
    ),
  },

  // Contact
  contact: {
    badge: b("Contact / Contacto", "Contact / Contacto"),
    badgeMeta: b("/ Denmark · Valencia", "/ Dinamarca · Valencia"),
    titleA: b("Let's talk", "Hablemos"),
    titleB: b("about the ", "del "),
    titleEm: b("brief.", "encargo."),
    lede: b(
      "The best way to start is a short email with the project, the timing and what you've already got in place. I reply within a few working days. If it's a fit for the next intake, we'll set up a call.",
      "Lo mejor es empezar por un correo breve con el proyecto, los plazos y lo que ya tienes en marcha. Respondo en unos días laborables. Si encaja con la próxima ventana, organizamos una llamada."
    ),
    direct: b("Direct", "Directo"),
    cardTitle: b("Briefing card", "Ficha del encargo"),
    capacity: b("Capacity", "Disponibilidad"),
    capacityValue: b(
      "Selective freelance projects from June 2026. Retainers and editorial leads year-round.",
      "Proyectos freelance seleccionados desde junio de 2026. Iguala continua y dirección editorial todo el año."
    ),
    goodFit: b("Good fit", "Encaja bien"),
    goodFitItems: [
      b("— Aquaculture & seafood producers", "— Productores de acuicultura y pesca"),
      b("— Feed and ingredient companies", "— Empresas de pienso e ingredientes"),
      b("— NGOs and sector coalitions", "— ONG y coaliciones sectoriales"),
      b("— Retailers working on provenance", "— Distribuidores que trabajan la trazabilidad"),
      b("— Publishers and editorial teams", "— Editoriales y equipos editoriales"),
    ],
    lessFit: b("Less good fit", "Encaja menos"),
    lessFitItems: [
      b("— One-off social posts with no brief", "— Posts sueltos en redes sin brief"),
      b("— Pure performance marketing mandates", "— Encargos puros de performance marketing"),
      b("— Work that requires overclaiming", "— Trabajos que exigen exagerar"),
    ],
    languages: b("Languages", "Idiomas"),
    languagesValue: b(
      "English · Spanish · Valenciano",
      "Inglés · Español · Valenciano"
    ),
  },

  // Currently panel
  currently: {
    label: b("Currently", "Ahora mismo"),
    items: [
      { label: b("Right now", "Ahora"), value: b("A flat in Denmark", "Un piso en Dinamarca") },
      {
        label: b("Missing", "Echo de menos"),
        value: b("Late lunches in El Cabanyal, Valencia", "Comer tarde en El Cabanyal, Valencia"),
      },
      {
        label: b("Reading", "Leyendo"),
        value: b("A long essay on salt and trade routes", "Un ensayo largo sobre la sal y las rutas comerciales"),
      },
      {
        label: b("Cooking", "Cocinando"),
        value: b("Arròs a banda, slowly", "Arròs a banda, sin prisa"),
      },
      {
        label: b("Working on", "Trabajando en"),
        value: b("Building a cool brand", "Construyendo una marca chula"),
      },
      {
        label: b("On loop", "En bucle"),
        value: b(
          "Field recordings, Baltic & Med ports",
          "Grabaciones de puertos, Báltico y Mediterráneo"
        ),
      },
    ],
  },

  // Footer
  footer: {
    open: b("Open for briefs · 2026", "Abierta a encargos · 2026"),
    cta: b(
      "Working on something at the intersection of seafood, science and story?",
      "¿Estás con algo que cruza pesca, ciencia y narrativa?"
    ),
    ctaEm: b("Tell me about it.", "Cuéntamelo."),
    index: b("Index", "Inicio"),
    elsewhere: b("Elsewhere", "En otros sitios"),
    rights: b("All rights reserved.", "Todos los derechos reservados."),
    set: b(
      "Set in Poppins & Instrument Serif",
      "Compuesta en Poppins e Instrument Serif"
    ),
    marqueeTagline: b(
      "Aquaculture, seafood & sustainability",
      "Acuicultura, pesca y sostenibilidad"
    ),
  },

  // Case study labels
  caseStudy: {
    backIndex: b("← Index", "← Índice"),
    metaClient: b("Client", "Cliente"),
    metaYear: b("Year", "Año"),
    metaCategory: b("Category", "Categoría"),
    metaDisciplines: b("Disciplines", "Disciplinas"),
    coverTag: b("Case study · Folio 2026", "Caso de estudio · Folio 2026"),
    sections: {
      context: b("Context", "Contexto"),
      contextTitle: b("The situation when we started.", "La situación al empezar."),
      role: b("Role", "Rol"),
      roleTitle: b("What I actually did.", "Lo que hice, en concreto."),
      approach: b("Approach", "Enfoque"),
      approachTitle: b("How we set the work up.", "Cómo planteamos el trabajo."),
      execution: b("Execution", "Ejecución"),
      executionTitle: b("What got made.", "Lo que se hizo."),
      outcome: b("Outcome", "Resultado"),
      outcomeTitle: b("Where it landed.", "Dónde aterrizó."),
    },
    visuals: b("Selected visuals", "Imágenes seleccionadas"),
    takeaway: b("Takeaway", "Aprendizaje"),
    figure: b("Fig.", "Fig."),
    interestedIn: b("Interested in something in this space? ", "¿Te interesa algo en este terreno? "),
  },

  // 404
  notFound: {
    badge: b("404", "404"),
    titleA: b("This page has ", "Esta página se ha "),
    titleEm: b("drifted.", "alejado."),
    body: b(
      "The link you followed may be out of date. Head back to the index or the work page.",
      "El enlace que has seguido puede estar desactualizado. Vuelve al inicio o a la página de proyectos."
    ),
    home: b("Home →", "Inicio →"),
    work: b("Work →", "Proyectos →"),
  },

  // Project category labels
  categoryLabels: {
    Campaign: b("Campaign", "Campaña"),
    Editorial: b("Editorial", "Editorial"),
    Brand: b("Brand", "Marca"),
    "Science communication": b("Science communication", "Comunicación científica"),
    Initiative: b("Initiative", "Iniciativa"),
    Personal: b("Personal", "Personal"),
    Speculative: b("Speculative", "Especulativo"),
  } as const,
};
