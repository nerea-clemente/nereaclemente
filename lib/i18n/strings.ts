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

  // Home: hero
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

  // Home: sections
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
      "I never managed to fit into one box, so I stopped trying. These are the five places my work lives, and most projects wander through more than one.",
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
      "I started out in aquaculture (yes, fish farms), learning how to explain feed trials, science and sustainability to people who don't speak lab. Turns out I love that: listening first, then finding the right words. That curiosity pulled me into brand strategy, campaigns and content, and lately into building AI tools that give teams their time back. Different worlds, same me.",
      "Empecé en la acuicultura (sí, piscifactorías) aprendiendo a explicar ensayos de pienso, ciencia y sostenibilidad a gente que no habla «laboratorio». Y resulta que me encanta: escuchar primero y después encontrar las palabras. Esa curiosidad me llevó a la estrategia de marca, las campañas y el contenido, y últimamente a crear herramientas de IA que devuelven tiempo a los equipos. Mundos distintos, la misma yo."
    ),
    contactLabel: b("Contact", "Contacto"),
    contactA: b(
      "Have something in mind? ",
      "¿Tienes algo en mente? "
    ),
    contactEm: b(
      "Let's grab a coffee, virtual or real.",
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
      "I was born in Spain and now live in Denmark. I work in marketing, branding and communication, and more and more with AI and automation too. What ties it all together is curiosity: understanding something properly and turning it into something useful.",
      "Nací en España y ahora vivo en Dinamarca. Trabajo en marketing, branding y comunicación, y cada vez más también con IA y automatización. Lo que lo une todo es la curiosidad: entender algo a fondo y convertirlo en algo útil."
    ),
    portraitTag: b("Portrait", "Retrato"),
    portraitNote: b("Drop in real photo", "Sustituir por foto real"),
    portraitPlaceholder: b("Placeholder", "Marcador"),
    portraitCaption: b("Denmark, 2026", "Dinamarca, 2026"),
    facts: [
      { k: b("Born on", "Nací un"), v: b("Holy Thursday", "Jueves Santo") },
      { k: b("Named after", "Me llamo como"), v: b("Nereus, god of the sea", "Nereo, el dios del mar") },
      { k: b("From Spain,", "De España,"), v: b("living in Denmark", "vivo en Dinamarca") },
    ],

    bgLabel: b("A little more about me", "Un poco más sobre mí"),
    bgTitle: b("The sea runs in the family.", "El mar viene de familia."),
    story: [
      b(
        "I grew up in a family that has always worked with seafood, so this world has been part of my story for as long as I can remember.",
        "Crecí en una familia que siempre ha trabajado en el sector de los productos del mar, así que este mundo forma parte de mi historia desde que tengo memoria."
      ),
      b(
        "And the connection seems to have been decided early. I was born on Holy Thursday, right in the middle of Easter week, when fish takes centre stage on Spanish tables. On top of that, I was named Nerea after Nereus, the god of the sea. With a start like that, ending up in this industry makes a lot of sense.",
        "Y parece que la conexión venía bastante decidida: nací un Jueves Santo, en plena Semana Santa, cuando el pescado tiene tanto protagonismo en las mesas españolas. Además, me pusieron Nerea por Nereo, el dios del mar. Con esos antecedentes, acabar trabajando en este sector tiene bastante sentido."
      ),
      b(
        "Marketing and branding have always been there too, even before I had a name for them. I've always wanted to understand why we connect with certain brands, what makes a message stick and how an idea manages to spark interest.",
        "El marketing y el branding también han estado presentes desde siempre, aunque al principio no supiera ponerles nombre. Siempre me ha interesado entender por qué conectamos con ciertas marcas, qué hace que un mensaje se nos quede en la cabeza y cómo una idea consigue despertar interés."
      ),
      b(
        "That curiosity took me to an AP Degree in Marketing Management, a bachelor's in International Business and a master's in Brand Management. It has shaped my career too, where strategy, communication and creative content meet a growing and very practical interest in AI and automation.",
        "Esa curiosidad me llevó a estudiar un AP Degree en Marketing Management, un grado en International Business y un máster en Brand Management. También ha marcado mi trayectoria profesional, en la que se cruzan la estrategia, la comunicación, el contenido creativo y un interés cada vez más práctico por la inteligencia artificial y la automatización."
      ),
      b(
        "At BioMar I work on global marketing projects, together with researchers, teams and markets, to get to grips with complex topics and find the best way to communicate them. Projects like BioRetain bring together a lot of what I love: understanding an innovation with the R&D team, bringing in the views of different divisions and markets, and shaping it all into one consistent global brand.",
        "En BioMar trabajo en proyectos de marketing global, colaborando con investigadores, equipos y mercados para comprender temas complejos y encontrar la mejor manera de comunicarlos. Proyectos como BioRetain reúnen muchas de las cosas que me gustan: entender una innovación con el equipo de I+D, integrar las perspectivas de distintas divisiones y mercados y darle forma como una marca global coherente."
      ),
      b(
        "What I enjoy most is understanding something properly, finding the connections and turning it into something useful. Sometimes that's a brand strategy. Other times it's a story, a campaign or a tool that makes work easier.",
        "Lo que más disfruto es entender algo a fondo, encontrar conexiones y convertirlo en algo útil. A veces es una estrategia de marca; otras, una historia, una campaña o una herramienta que facilita el trabajo."
      ),
      b(
        "Outside work, I love travelling and discovering neighbourhoods, markets, little streets and everyday details. There's always something new to notice.",
        "Fuera del trabajo, me encanta viajar y descubrir barrios, mercados, pequeñas calles y detalles cotidianos. Siempre hay algo nuevo en lo que fijarse."
      ),
      b(
        "This portfolio brings all of that together: the projects I work on, the ideas I'm exploring and the different worlds that feed my curiosity.",
        "Este portfolio reúne todo eso: los proyectos en los que trabajo, las ideas que estoy explorando y los distintos mundos que alimentan mi curiosidad."
      ),
    ],

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
      "Working on a brand, a campaign, a tool or an idea that doesn't fit in a box yet? I'd love to hear about it. ",
      "¿Estás con una marca, una campaña, una herramienta o una idea que aún no cabe en ninguna caja? Me encantará escucharla. "
    ),
    ctaEm: b("write to me.", "escríbeme."),
  },

  // Work
  work: {
    label: b("Work / 2022 to 2026", "Trabajo / 2022 a 2026"),
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
      "I'm still putting this world together. Come back soon.",
      "Todavía estoy montando este mundo. Vuelve pronto."
    ),
    alsoLabel: b("Also", "Además"),
    alsoTitle: b(
      "Some of my favourite work isn't here.",
      "Parte de mi trabajo favorito no está aquí."
    ),
    alsoLede: b(
      "Confidential strategy, internal systems, tools built for one team. Not everything can go public. If your project sounds like one of those, ask me and I'll happily tell you all about it.",
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
      "I'm filling this world with real projects. In the meantime, just ask. Some of this is much more fun to show over a call.",
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
      b("Aquaculture & seafood companies", "Empresas de acuicultura y producto del mar"),
      b("Brands that need positioning or a campaign", "Marcas que necesitan posicionamiento o una campaña"),
      b("Teams wanting to work better with AI", "Equipos que quieren trabajar mejor con IA"),
      b("NGOs, coalitions and editorial teams", "ONG, coaliciones y equipos editoriales"),
    ],
    lessFit: b(
      "Probably not for me",
      "Probablemente no es lo mío"
    ),
    lessFitItems: [
      b("Posts with no idea behind them", "Posts sin una idea detrás"),
      b("Pure performance marketing", "Performance marketing puro"),
      b("Anything that asks me to exaggerate", "Cualquier cosa que me pida exagerar"),
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
      "Oops, this link drifted off somewhere. Let's get you back.",
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
