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
      "Hi, I'm Nerea. I grew up by the sea in Valencia, I now live in Denmark, and I spend my days turning complicated things into stories people actually want to read. Some days that's fish farms; other days it's a brand, an AI tool or a slightly wild idea. Come in and have a look around.",
      "Hola, soy Nerea. Crecí junto al mar en Valencia, ahora vivo en Dinamarca y me paso los días convirtiendo cosas complicadas en historias que la gente quiere leer. Unos días son piscifactorías; otros, una marca, una herramienta de IA o una idea un poco loca. Pasa y curiosea."
    ),
    sticker: b("5 worlds · 1 mind ·", "5 mundos · 1 mente ·"),
  },

  // Home — sections
  home: {
    worldsLabel: b("The worlds", "Los mundos"),
    worldsTitleA: b(
      "Five ways",
      "Cinco puertas"
    ),
    worldsTitleB: b(
      "into how I think.",
      "a cómo pienso."
    ),
    worldsLede: b(
      "I never managed to fit into one box, so I stopped trying. These are the five places my work lives — and most projects wander through more than one.",
      "Nunca he conseguido caber en una sola caja, así que dejé de intentarlo. Estos son los cinco sitios donde vive mi trabajo, y casi todos los proyectos pasan por más de uno."
    ),
    enter: b("Enter", "Entrar"),
    selectedLabel: b("Selected work", "Trabajo seleccionado"),
    selectedTitleA: b(
      "A few things",
      "Algunas cosas"
    ),
    selectedTitleB: b(
      "I'm proud of.",
      "de las que estoy orgullosa."
    ),
    profileLabel: b("About", "Sobre mí"),
    profileLeadA: b(
      "I'm happiest somewhere between ",
      "Donde mejor estoy es entre "
    ),
    profileLeadEm: b(
      "strategy and play",
      "la estrategia y el juego"
    ),
    profileLeadB: b(
      ".",
      "."
    ),
    profileBody: b(
      "I started out in aquaculture — yes, fish farms — learning how to explain feed trials, science and sustainability to people who don't speak lab. Turns out I love that: listening first, then finding the right words. That curiosity pulled me into brand strategy, campaigns and content, and lately into building AI tools that give teams their time back. Different worlds, same me.",
      "Empecé en la acuicultura —sí, piscifactorías— aprendiendo a explicar ensayos de pienso, ciencia y sostenibilidad a gente que no habla «laboratorio». Y resulta que me encanta: escuchar primero y después encontrar las palabras. Esa curiosidad me llevó a la estrategia de marca, las campañas y el contenido, y últimamente a crear herramientas de IA que devuelven tiempo a los equipos. Mundos distintos, la misma yo."
    ),
    contactLabel: b("Contact", "Contacto"),
    contactA: b(
      "Have something in mind? ",
      "¿Tienes algo en mente? "
    ),
    contactEm: b(
      "Let's grab a coffee — virtual or real.",
      "Nos tomamos un café, virtual o de verdad."
    ),
  },

  // About
  about: {
    label: b("About / Sobre mí", "About / Sobre mí"),
    titleA: b(
      "Hi, I'm Nerea.",
      "Hola, soy Nerea."
    ),
    titleEm: b(
      "Nice to meet you.",
      "Encantada."
    ),
    intro: b(
      "I work in marketing and communications, and I have a soft spot for the stories nobody is telling well. I learned the job inside aquaculture and seafood — technical, international, close to the people doing the real work — and I've carried that with me ever since: into brands, campaigns, content and the AI tools I build.",
      "Trabajo en marketing y comunicación, y tengo debilidad por las historias que nadie está contando bien. Aprendí el oficio dentro de la acuicultura y el sector del mar —técnico, internacional, cerca de la gente que hace el trabajo de verdad— y desde entonces lo llevo conmigo a todo: marcas, campañas, contenido y las herramientas de IA que construyo."
    ),
    portraitTag: b("Portrait", "Retrato"),
    portraitNote: b("Drop in real photo", "Sustituir por foto real"),
    portraitPlaceholder: b("Placeholder", "Marcador"),
    portraitCaption: b("Denmark, 2026", "Dinamarca, 2026"),

    bgLabel: b("Trajectory", "Trayectoria"),
    bgTitle: b("The shorter version.", "La versión corta."),
    bgP1: b(
      "I started in corporate communications inside the aquaculture industry: campaigns, press, sustainability reports, internal comms. It taught me how producers, feed companies, retailers and regulators really talk to each other — and, more usefully, where those conversations tend to break.",
      "Empecé en comunicación corporativa dentro del sector acuícola: campañas, prensa, informes de sostenibilidad, comunicación interna. Ahí aprendí cómo se hablan de verdad productores, empresas de pienso, distribuidores y reguladores, y, lo más útil, dónde suelen romperse esas conversaciones."
    ),
    bgP2a: b(
      "From there I moved into brand strategy and creative work — positioning, campaigns, long reads and social. And because I can't seem to stop making things, I also run ",
      "Desde ahí di el salto a la estrategia de marca y el trabajo creativo: posicionamiento, campañas, textos largos y redes. Y como no sé estarme quieta, también llevo "
    ),
    bgP2em1: b("Seafood on Nerea", "Seafood on Nerea"),
    bgP2b: b(
      ", my own little editorial corner about seafood, and ",
      ", mi pequeño rincón editorial sobre el mar, y "
    ),
    bgP2em2: b("Women in Aquaculture", "Mujeres en Acuicultura"),
    bgP2c: b(
      ", an interview series with women who make the sector work.",
      ", una serie de entrevistas a mujeres que hacen funcionar el sector."
    ),
    bgP3: b(
      "Lately I've fallen for AI and automation — not the hype, the useful bit. I build agents and small tools that take the boring work off people's plates.",
      "Últimamente me he enamorado de la IA y la automatización; no del ruido, sino de la parte útil. Construyo agentes y pequeñas herramientas que quitan de en medio el trabajo aburrido."
    ),
    bgP4: b(
      "I'm from Valencia and I live in Denmark. The Mediterranean came with me — the light, sadly, didn't. I work in English, Spanish and Valenciano, from wherever the project needs me.",
      "Soy de Valencia y vivo en Dinamarca. El Mediterráneo se vino conmigo; la luz, por desgracia, no. Trabajo en inglés, español y valenciano, desde donde el proyecto me necesite."
    ),

    princLabel: b("How I work", "Cómo trabajo"),
    princTitleA: b(
      "Things I",
      "Cosas en las"
    ),
    princTitleEm: b(
      "believe in.",
      "que creo."
    ),

    worldsLabel: b("The worlds", "Los mundos"),
    worldsTitleA: b(
      "Where you'll",
      "Dónde me"
    ),
    worldsTitleEm: b(
      "find me.",
      "vas a encontrar."
    ),

    ctaLabel: b("Get in touch", "Hablamos"),
    ctaText: b(
      "Working on a brand, a campaign, a tool or an idea that doesn't fit in a box yet? I'd love to hear about it — ",
      "¿Estás con una marca, una campaña, una herramienta o una idea que aún no cabe en ninguna caja? Me encantará escucharla — "
    ),
    ctaEm: b("write to me.", "escríbeme."),
  },

  // Work
  work: {
    label: b("Work / 2022 — 2026", "Trabajo / 2022 — 2026"),
    titleA: b(
      "Everything I've made,",
      "Todo lo que he hecho,"
    ),
    titleEm: b(
      "in one place.",
      "en un solo sitio."
    ),
    lede: b(
      "Client projects and things I started simply because I couldn't not. Filter by world, or switch to the index if you're in a hurry.",
      "Proyectos para clientes y cosas que empecé porque no podía no hacerlas. Filtra por mundo o cambia al índice si vas con prisa."
    ),
    filterLabel: b("World", "Mundo"),
    countLabel: b("cases", "casos"),
    grid: b("Grid", "Cuadrícula"),
    index: b("Index", "Índice"),
    all: b("All", "Todos"),
    empty: b(
      "I'm still putting this world together — come back soon.",
      "Todavía estoy montando este mundo. Vuelve pronto."
    ),
    alsoLabel: b("Also", "Además"),
    alsoTitle: b(
      "Some of my favourite work isn't here.",
      "Parte de mi trabajo favorito no está aquí."
    ),
    alsoLede: b(
      "Confidential strategy, internal systems, tools built for one team — not everything can go public. If your project sounds like one of those, ask me and I'll happily tell you all about it.",
      "Estrategia confidencial, sistemas internos, herramientas hechas para un solo equipo: no todo puede ser público. Si tu proyecto se parece a algo así, pregúntame y te lo cuento encantada."
    ),
  },

  // World pages
  world: {
    label: b("World", "Mundo"),
    whatLabel: b("What lives here", "Qué vas a encontrar"),
    casesLabel: b("Cases", "Casos"),
    alsoTagged: b("Also touches this world", "También toca este mundo"),
    emptyTitle: b(
      "Work in progress.",
      "Trabajo en marcha."
    ),
    emptyBody: b(
      "I'm filling this world with real projects. In the meantime, just ask — some of this is much more fun to show over a call.",
      "Estoy llenando este mundo de proyectos reales. Mientras tanto, pregúntame: hay cosas que se enseñan mucho mejor en una llamada."
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
    titleA: b(
      "Let's talk.",
      "Hablemos."
    ),
    titleEm: b(
      "Tell me everything.",
      "Cuéntamelo todo."
    ),
    lede: b(
      "Send me a few lines about your project: what it is, when you need it and what you've got so far. No perfect brief needed. I'll reply within a few days and, if it clicks, we'll set up a call.",
      "Escríbeme unas líneas sobre tu proyecto: qué es, para cuándo lo necesitas y qué tienes ya. No hace falta un brief perfecto. Te respondo en unos días y, si hay chispa, organizamos una llamada."
    ),
    direct: b("Direct", "Directo"),
    cardTitle: b(
      "Before you write",
      "Antes de escribirme"
    ),
    capacity: b("Capacity", "Disponibilidad"),
    capacityValue: b(
      "Taking on a few freelance projects from June 2026. Ongoing and editorial work all year round.",
      "Acepto algunos proyectos freelance desde junio de 2026. Trabajo continuo y editorial durante todo el año."
    ),
    goodFit: b(
      "I love working with",
      "Me encanta trabajar con"
    ),
    goodFitItems: [
      b("— Aquaculture & seafood companies", "— Empresas de acuicultura y producto del mar"),
      b("— Brands that need positioning or a campaign", "— Marcas que necesitan posicionamiento o una campaña"),
      b("— Teams wanting to work better with AI", "— Equipos que quieren trabajar mejor con IA"),
      b("— NGOs, coalitions and editorial teams", "— ONG, coaliciones y equipos editoriales"),
    ],
    lessFit: b(
      "Probably not for me",
      "Probablemente no es lo mío"
    ),
    lessFitItems: [
      b("— Posts with no idea behind them", "— Posts sin una idea detrás"),
      b("— Pure performance marketing", "— Performance marketing puro"),
      b("— Anything that asks me to exaggerate", "— Cualquier cosa que me pida exagerar"),
    ],
    languages: b("Languages", "Idiomas"),
    languagesValue: b(
      "English · Spanish · Valenciano",
      "Inglés · Español · Valenciano"
    ),
  },

  // Footer
  footer: {
    open: b(
      "Open for projects · 2026",
      "Abierta a proyectos · 2026"
    ),
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
    interestedIn: b(
      "Fancy something like this? ",
      "¿Te apetece algo así? "
    ),
  },

  // 404
  notFound: {
    label: b("404", "404"),
    titleA: b("This page is ", "Esta página está "),
    titleEm: b("between worlds.", "entre mundos."),
    body: b(
      "Oops — this link drifted off somewhere. Let's get you back.",
      "Vaya, este enlace se ha ido a la deriva. Te llevo de vuelta."
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
