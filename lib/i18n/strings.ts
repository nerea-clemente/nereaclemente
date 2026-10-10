import type { Bilingual } from "./types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export const ui = {
  // Navigation
  nav: {
    primary: [
      { href: "/work", label: b("Work", "Trabajo") },
      { href: "/about", label: b("About", "Sobre mí") },
      { href: "/contact", label: b("Contact", "Contacto") },
    ],
    toggleLabel: b("Switch language", "Cambiar idioma"),
    menuOpen: b("Open menu", "Abrir menú"),
    menuClose: b("Close menu", "Cerrar menú"),
    activeWorld: b("Current world", "Mundo actual"),
  },

  // Common
  common: {
    readCase: b("Read the case", "Leer el caso"),
    allProjects: b("All work", "Todo el trabajo"),
    moreAbout: b("More about me", "Más sobre mí"),
    nextProject: b("Next case", "Siguiente caso"),
    available: b("Available", "Disponible"),
    note: b("Note", "Nota"),
    contact: b("Contact", "Contacto"),
    writeToMe: b("Write to me.", "Escríbeme."),
  },

  // Home — hero
  hero: {
    label: b("Portfolio · 2026", "Portfolio · 2026"),
    l1: b("One mind.", "One mind."),
    l2: b("Many worlds.", "Many worlds."),
    sub: b(
      "Strategy, creativity, innovation & everything in between.",
      "Estrategia, creatividad, innovación y todo lo que hay entre medias."
    ),
    intro: b(
      "I'm Nerea Clemente — marketing and communications, from Valencia, based in Denmark. One identity, five creative worlds: pick one, or wander through all of them.",
      "Soy Nerea Clemente — marketing y comunicación, de Valencia, viviendo en Dinamarca. Una identidad, cinco universos creativos: elige uno o recórrelos todos."
    ),
    sticker: b("5 worlds · 1 mind ·", "5 mundos · 1 mente ·"),
  },

  // Home — sections
  home: {
    worldsLabel: b("The worlds", "Los mundos"),
    worldsTitleA: b("Five ways", "Cinco formas"),
    worldsTitleB: b("of exploring the work.", "de explorar el trabajo."),
    worldsLede: b(
      "Not five equivalent services — five ways into the same practice. Each case has one main world and can touch the others.",
      "No son cinco servicios equivalentes, sino cinco puertas a la misma práctica. Cada caso tiene un mundo principal y puede tocar los demás."
    ),
    enter: b("Enter", "Entrar"),
    selectedLabel: b("Selected work", "Trabajo seleccionado"),
    selectedTitleA: b("A few cases", "Algunos casos"),
    selectedTitleB: b("to start with.", "para empezar."),
    profileLabel: b("About", "Sobre mí"),
    profileLeadA: b("Strategy and editorial at the core, ", "Estrategia y edición en el centro, "),
    profileLeadEm: b("curiosity", "curiosidad"),
    profileLeadB: b(" around the edges.", " en los bordes."),
    profileBody: b(
      "My roots are in aquaculture and seafood communication: years translating science, feed and sustainability into language people can use. From there the work has grown into brand strategy, creative campaigns and content, and more recently AI agents and automations that make teams faster. The thread is the same — understand first, then make it clear.",
      "Mis raíces están en la comunicación de acuicultura y producto del mar: años traduciendo ciencia, pienso y sostenibilidad a un lenguaje que la gente pueda usar. Desde ahí el trabajo ha crecido hacia la estrategia de marca, las campañas creativas y el contenido, y más recientemente hacia agentes de IA y automatizaciones que hacen más ágiles a los equipos. El hilo es el mismo: entender primero y después hacerlo claro."
    ),
    contactLabel: b("Contact", "Contacto"),
    contactA: b("Got a project in one of these worlds — ", "¿Tienes un proyecto en alguno de estos mundos — "),
    contactEm: b("or somewhere in between?", "o en algún punto entre ellos?"),
  },

  // About
  about: {
    label: b("About / Sobre mí", "About / Sobre mí"),
    titleA: b("One mind,", "Una mente,"),
    titleEm: b("several ways of thinking.", "varias formas de pensar."),
    intro: b(
      "I'm Nerea Clemente. I work in marketing and communications, between strategy and creativity. I started inside the aquaculture and seafood sector, and that grounding — technical, international, close to the people doing the work — still shapes everything: brand, campaigns, content and the AI tools I build.",
      "Soy Nerea Clemente. Trabajo en marketing y comunicación, entre la estrategia y la creatividad. Empecé dentro del sector de la acuicultura y el producto del mar, y esa base — técnica, internacional, cerca de las personas que hacen el trabajo — sigue marcándolo todo: marca, campañas, contenido y las herramientas de IA que construyo."
    ),
    portraitTag: b("Portrait", "Retrato"),
    portraitNote: b("Drop in real photo", "Sustituir por foto real"),
    portraitPlaceholder: b("Placeholder", "Marcador"),
    portraitCaption: b("Denmark, 2026", "Dinamarca, 2026"),

    bgLabel: b("Trajectory", "Trayectoria"),
    bgTitle: b("The shorter version.", "La versión corta."),
    bgP1: b(
      "I started in corporate communications inside the aquaculture industry, working across campaigns, press, sustainability reporting and internal communication. That gave me a working understanding of how producers, feed companies, retailers and regulators actually talk to each other — and where the conversation tends to break.",
      "Empecé en comunicación corporativa dentro del sector acuícola, en campañas, prensa, informes de sostenibilidad y comunicación interna. Eso me dio una comprensión real de cómo se hablan productores, empresas de pienso, distribuidores y reguladores — y de dónde suele romperse la conversación."
    ),
    bgP2a: b(
      "From there I moved into brand strategy, editorial and creative work: positioning, campaigns, long-form writing and social content. In parallel I run ",
      "Desde ahí pasé a la estrategia de marca, lo editorial y lo creativo: posicionamiento, campañas, textos largos y contenido social. En paralelo llevo "
    ),
    bgP2em1: b("Seafood on Nerea", "Seafood on Nerea"),
    bgP2b: b(", a personal editorial project, and ", ", un proyecto editorial personal, y "),
    bgP2em2: b("Women in Aquaculture", "Mujeres en Acuicultura"),
    bgP2c: b(", an interview series.", ", una serie de entrevistas."),
    bgP3: b(
      "More recently I've been designing AI agents and automations for real teams — practical tools that remove friction rather than add spectacle.",
      "Más recientemente diseño agentes de IA y automatizaciones para equipos reales — herramientas prácticas que quitan fricción en lugar de añadir espectáculo."
    ),
    bgP4: b(
      "I'm from Valencia and based in Denmark — the Mediterranean register stays, even when the weather doesn't. I work in English and Spanish, internationally and remotely.",
      "Soy de Valencia y vivo en Dinamarca — el registro mediterráneo se queda, aunque el tiempo no. Trabajo en inglés y español, de forma internacional y en remoto."
    ),

    princLabel: b("How I work", "Cómo trabajo"),
    princTitleA: b("Four working", "Cuatro principios"),
    princTitleEm: b("principles.", "de trabajo."),

    worldsLabel: b("The worlds", "Los mundos"),
    worldsTitleA: b("Where the work", "Dónde vive"),
    worldsTitleEm: b("lives.", "el trabajo."),

    ctaLabel: b("Get in touch", "Hablamos"),
    ctaText: b(
      "If you're working on a brand, a campaign, a tool or an idea that doesn't fit in a box yet — ",
      "Si estás con una marca, una campaña, una herramienta o una idea que todavía no cabe en ninguna caja — "
    ),
    ctaEm: b("write to me.", "escríbeme."),
  },

  // Work
  work: {
    label: b("Work / 2022 — 2026", "Trabajo / 2022 — 2026"),
    titleA: b("All the work,", "Todo el trabajo,"),
    titleEm: b("every world.", "todos los mundos."),
    lede: b(
      "Client work and self-initiated projects. Filter by world, or switch to the index for a faster scan. Each case lives in one main world and can touch others.",
      "Trabajo de cliente y proyectos propios. Filtra por mundo o cambia al índice para un repaso rápido. Cada caso vive en un mundo principal y puede tocar otros."
    ),
    filterLabel: b("World", "Mundo"),
    countLabel: b("cases", "casos"),
    grid: b("Grid", "Cuadrícula"),
    index: b("Index", "Índice"),
    all: b("All", "Todos"),
    empty: b(
      "Cases for this world are in progress.",
      "Los casos de este mundo están en preparación."
    ),
    alsoLabel: b("Also", "Además"),
    alsoTitle: b(
      "Not everything lives on the site.",
      "No todo está aquí en la web."
    ),
    alsoLede: b(
      "Some of the most interesting work — confidential strategy decks, internal narrative systems, internal tools — doesn't make it into a public portfolio. If a specific brief overlaps with one of those, I'm happy to walk through it privately.",
      "Una parte del trabajo más interesante — presentaciones estratégicas confidenciales, sistemas narrativos internos, herramientas internas — no entra en un portfolio público. Si tu encargo encaja con algo así, lo repasamos en privado."
    ),
  },

  // World pages
  world: {
    label: b("World", "Mundo"),
    whatLabel: b("What lives here", "Qué vas a encontrar"),
    casesLabel: b("Cases", "Casos"),
    alsoTagged: b("Also touches this world", "También toca este mundo"),
    emptyTitle: b("Cases in progress.", "Casos en preparación."),
    emptyBody: b(
      "This world is being filled with real work. In the meantime, ask me about it directly — some of it is easier to show in conversation.",
      "Este mundo se está llenando de trabajo real. Mientras tanto, pregúntame directamente — hay cosas que se enseñan mejor en una conversación."
    ),
    otherWorlds: b("Other worlds", "Otros mundos"),
    next: b("Next world", "Siguiente mundo"),
  },

  // Writing
  writing: {
    label: b("Writing / Notes", "Escritos / Notas"),
    titleA: b("Notes on", "Notas sobre"),
    titleB: b("communication in ", "comunicación en "),
    titleEm: b("technical sectors.", "sectores técnicos."),
    lede: b(
      "Short essays, field notes and briefings. Published when the thinking is ready, not on a schedule.",
      "Ensayos cortos, notas de campo y briefings. Publicados cuando la idea está lista, no por calendario."
    ),
    noteText: b(
      "These essays live alongside the work. Most start as a working note on a client project. When the argument generalises, it becomes an essay. When it's narrower, a briefing. Nothing is published until it holds up on its own.",
      "Estos ensayos viven junto al trabajo. La mayoría empiezan como notas internas en un proyecto de cliente. Cuando el argumento se generaliza, se vuelve ensayo. Cuando es más estrecho, un briefing. Nada se publica hasta que se sostiene por sí solo."
    ),
  },

  // Contact
  contact: {
    label: b("Contact / Contacto", "Contact / Contacto"),
    titleA: b("Let's talk", "Hablemos"),
    titleEm: b("about the brief.", "del encargo."),
    lede: b(
      "The best way to start is a short email with the project, the timing and what you've already got in place. I reply within a few working days. If it's a fit, we'll set up a call.",
      "Lo mejor es empezar por un correo breve con el proyecto, los plazos y lo que ya tienes en marcha. Respondo en unos días laborables. Si encaja, organizamos una llamada."
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
      b("— Aquaculture & seafood companies", "— Empresas de acuicultura y producto del mar"),
      b("— Brands that need positioning or a campaign", "— Marcas que necesitan posicionamiento o una campaña"),
      b("— Teams wanting to work better with AI", "— Equipos que quieren trabajar mejor con IA"),
      b("— NGOs, coalitions and editorial teams", "— ONG, coaliciones y equipos editoriales"),
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

  // Footer
  footer: {
    open: b("Open for briefs · 2026", "Abierta a encargos · 2026"),
    ctaA: b("One mind.", "One mind."),
    ctaB: b("Many worlds.", "Many worlds."),
    index: b("Index", "Índice"),
    home: b("Home", "Inicio"),
    writing: b("Writing", "Escritos"),
    worlds: b("Worlds", "Mundos"),
    elsewhere: b("Elsewhere", "En otros sitios"),
    set: b(
      "Set in Manrope & Instrument Serif",
      "Compuesta en Manrope e Instrument Serif"
    ),
  },

  // Case study labels
  caseStudy: {
    backIndex: b("← All work", "← Todo el trabajo"),
    metaClient: b("Client", "Cliente"),
    metaYear: b("Year", "Año"),
    metaFormat: b("Format", "Formato"),
    metaWorld: b("World", "Mundo"),
    metaDisciplines: b("Disciplines", "Disciplinas"),
    alsoIn: b("Also in", "También en"),
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
    label: b("404", "404"),
    titleA: b("This page is ", "Esta página está "),
    titleEm: b("between worlds.", "entre mundos."),
    body: b(
      "The link you followed may be out of date. Head back to the home page or the work index.",
      "El enlace que has seguido puede estar desactualizado. Vuelve al inicio o al índice de trabajo."
    ),
    home: b("Home", "Inicio"),
    work: b("Work", "Trabajo"),
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
