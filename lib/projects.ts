import type { Bilingual } from "./i18n/types";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

export type ProjectCategory =
  | "Campaign"
  | "Editorial"
  | "Brand"
  | "Science communication"
  | "Initiative"
  | "Personal"
  | "Speculative";

export type GalleryItem = {
  caption: Bilingual;
  tone: "sea" | "shell" | "clay" | "sand" | "deep";
};

export type Project = {
  slug: string;
  year: string;
  category: ProjectCategory;
  client: Bilingual;
  disciplines: Bilingual<string[]>;
  title: Bilingual;
  summary: Bilingual;
  overview: Bilingual;
  context: Bilingual;
  role: Bilingual;
  approach: Bilingual<string[]>;
  execution: Bilingual<string[]>;
  outcome: Bilingual<string[]>;
  takeaway?: Bilingual;
  gallery?: GalleryItem[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "biofarm-campaign",
    year: "2024",
    category: "Campaign",
    title: b("BioFarm", "BioFarm"),
    client: b("BioFarm Aquaculture", "BioFarm Aquaculture"),
    disciplines: b(
      ["Brand narrative", "Integrated campaign", "Copywriting"],
      ["Narrativa de marca", "Campaña integrada", "Redacción"]
    ),
    summary: b(
      "Repositioning a working fish farm as a transparent, science-led producer for a European B2B audience.",
      "Reposicionar una piscifactoría en activo como productor transparente y con base científica para una audiencia B2B europea."
    ),
    overview: b(
      "A six-month integrated campaign rebuilding the voice and storyline behind a mid-size European aquaculture producer, moving it from a production-first message to a clear, grounded narrative about origin, method and responsibility.",
      "Una campaña integrada de seis meses que reconstruye la voz y el relato de un productor acuícola europeo de tamaño medio, pasando de un mensaje centrado en la producción a una narrativa clara y aterrizada sobre origen, método y responsabilidad."
    ),
    context: b(
      "BioFarm had built a technically strong operation but its communication leaned on generic sustainability language and stock imagery. Buyers, retailers and journalists were asking sharper questions. The brand needed a story that matched the rigour of its practice without drifting into greenwashing.",
      "BioFarm tenía una operativa técnicamente sólida, pero su comunicación se apoyaba en un lenguaje de sostenibilidad genérico y en imágenes de banco. Compradores, distribuidores y periodistas hacían preguntas cada vez más afiladas. La marca necesitaba un relato a la altura del rigor de su práctica, sin caer en greenwashing."
    ),
    role: b(
      "Lead strategist and writer. Worked directly with the commercial director and farm team to translate technical detail into a usable brand language, and coordinated design and photography partners.",
      "Estratega y redactora principal. Trabajé directamente con la dirección comercial y el equipo de granja para traducir el detalle técnico a un lenguaje de marca utilizable, y coordiné a los socios de diseño y fotografía."
    ),
    approach: b(
      [
        "Spent two weeks on site documenting the production cycle, feed programme and traceability system in plain language.",
        "Defined a narrative frame — Origin, Method, Responsibility — that the team could actually use in sales meetings, decks and media responses.",
        "Built a messaging matrix for three audiences: buyers, retailers, and press, with calibrated depth for each.",
      ],
      [
        "Dos semanas en la granja documentando el ciclo productivo, el programa de alimentación y el sistema de trazabilidad en lenguaje llano.",
        "Definimos un marco narrativo — Origen, Método, Responsabilidad — que el equipo pudiera usar de verdad en reuniones comerciales, presentaciones y respuestas a medios.",
        "Construimos una matriz de mensajes para tres audiencias: compradores, distribuidores y prensa, con profundidad ajustada para cada una.",
      ]
    ),
    execution: b(
      [
        "Campaign manifesto and long-form brand narrative.",
        "Launch article series for trade press and LinkedIn.",
        "Sales deck, one-pagers and a press kit with photography direction.",
        "Internal language guide so the team could speak consistently without a script.",
      ],
      [
        "Manifiesto de campaña y narrativa de marca de fondo.",
        "Serie de artículos de lanzamiento para prensa sectorial y LinkedIn.",
        "Presentación comercial, fichas y dossier de prensa con dirección de fotografía.",
        "Guía interna de lenguaje para que el equipo hablara con coherencia sin necesidad de un guion.",
      ]
    ),
    outcome: b(
      [
        "Rolled out across three European markets and adopted as the internal reference for external communication.",
        "Picked up in trade press coverage quoting the new narrative framing verbatim.",
        "Became the baseline story for retailer pitches the following year.",
      ],
      [
        "Desplegada en tres mercados europeos y adoptada como referencia interna para toda la comunicación externa.",
        "Recogida por la prensa sectorial citando el nuevo marco narrativo casi literalmente.",
        "Se convirtió en el relato base para las presentaciones a distribuidores del año siguiente.",
      ]
    ),
    takeaway: b(
      "Good aquaculture communication starts on the farm, not in the deck. The job is translation, not invention.",
      "La buena comunicación en acuicultura empieza en la granja, no en la presentación. El trabajo es traducir, no inventar."
    ),
    gallery: [
      { caption: b("Campaign manifesto spread", "Doble página del manifiesto"), tone: "sea" },
      { caption: b("Press kit, cover page", "Dossier de prensa, portada"), tone: "shell" },
      { caption: b("Origin, Method, Responsibility", "Origen, Método, Responsabilidad"), tone: "clay" },
      { caption: b("Sales deck, opening chapter", "Presentación comercial, capítulo de apertura"), tone: "deep" },
    ],
    featured: true,
  },
  {
    slug: "science-communication",
    year: "2023 — present",
    category: "Science communication",
    title: b("Science communication practice", "Práctica de comunicación científica"),
    client: b("Various clients and in-house", "Varios clientes y trabajo interno"),
    disciplines: b(
      ["Editorial", "Translation of research", "Visual direction"],
      ["Editorial", "Traducción de investigación", "Dirección visual"]
    ),
    summary: b(
      "An ongoing body of work translating research, feed trials and environmental data into readable articles, briefings and visuals.",
      "Una línea de trabajo continua que traduce investigación, ensayos de alimentación y datos ambientales en artículos, briefings y materiales visuales legibles."
    ),
    overview: b(
      "A running practice rather than a single project: editorial work that takes technical material — feed trial results, welfare indicators, water quality data — and turns it into something a retailer, policymaker or general reader can actually use.",
      "Más una práctica continua que un proyecto único: trabajo editorial que toma material técnico — resultados de ensayos de pienso, indicadores de bienestar, datos de calidad del agua — y lo convierte en algo que un distribuidor, un regulador o un lector general pueda usar de verdad."
    ),
    context: b(
      "Technical teams often hold the most interesting part of the story and the least accessible version of it. Across several clients the same pattern appeared: strong science, weak surface. The brief, repeatedly, was to keep the substance and fix the surface.",
      "Los equipos técnicos suelen tener la parte más interesante de la historia y la versión menos accesible de la misma. En varios clientes apareció el mismo patrón: ciencia sólida, superficie débil. El encargo, una y otra vez, era mantener la sustancia y arreglar la superficie."
    ),
    role: b(
      "Writer and editor. Sometimes brought in at draft stage, sometimes from the brief. Work closely with researchers, vets and sustainability leads.",
      "Redactora y editora. A veces entro en la fase de borrador, a veces desde el brief inicial. Trabajo cerca de investigadores, veterinarios y responsables de sostenibilidad."
    ),
    approach: b(
      [
        "Start from the primary source — the study, the dataset, the protocol — not the summary slide.",
        "Write a first plain-language version, then check it back with the technical lead before design.",
        "Keep uncertainty visible. Do not smooth over what the data does not yet show.",
      ],
      [
        "Empezar desde la fuente primaria — el estudio, el dataset, el protocolo — no desde la diapositiva resumen.",
        "Escribir una primera versión en lenguaje llano y validarla con el responsable técnico antes de pasar a diseño.",
        "Mantener visible la incertidumbre. No suavizar lo que los datos aún no muestran.",
      ]
    ),
    execution: b(
      [
        "Research briefings for non-technical stakeholders.",
        "Long-form articles and explainers for trade and general audiences.",
        "Visual direction for diagrams and data summaries.",
        "Q&A and interview formats with scientists and farm managers.",
      ],
      [
        "Briefings de investigación para audiencias no técnicas.",
        "Artículos largos y explicadores para prensa sectorial y público general.",
        "Dirección visual para diagramas y resúmenes de datos.",
        "Formatos de Q&A y entrevistas con científicos y responsables de granja.",
      ]
    ),
    outcome: b(
      [
        "Material has been used in investor briefings, retailer meetings and policy consultations.",
        "Repeated commissioning from the same technical teams, which tends to be the honest metric.",
      ],
      [
        "El material se ha usado en briefings a inversores, reuniones con distribuidores y consultas regulatorias.",
        "Encargos repetidos por parte de los mismos equipos técnicos, que suele ser la métrica honesta.",
      ]
    ),
    takeaway: b(
      "Clarity is an editorial choice, not a simplification. Precision survives the edit if you start from the source.",
      "La claridad es una decisión editorial, no una simplificación. La precisión sobrevive a la edición si empiezas desde la fuente."
    ),
    featured: true,
  },
  {
    slug: "better-feed-better-food",
    year: "2024",
    category: "Campaign",
    title: b("Better Feed, Better Food", "Better Feed, Better Food"),
    client: b("Feed sector coalition", "Coalición del sector del pienso"),
    disciplines: b(
      ["Editorial campaign", "Messaging", "Long-form writing"],
      ["Campaña editorial", "Mensajes", "Textos largos"]
    ),
    summary: b(
      "An editorial campaign on the link between aquafeed ingredients, fish welfare and the quality of the final product.",
      "Una campaña editorial sobre la relación entre los ingredientes del pienso, el bienestar de los peces y la calidad del producto final."
    ),
    overview: b(
      "A campaign built around the argument that feed is where most of aquaculture's sustainability story is actually decided. Structured as a series of articles, interviews and social content running across four months.",
      "Una campaña construida alrededor de un argumento: la mayor parte de la historia de sostenibilidad en acuicultura se decide en el pienso. Estructurada como una serie de artículos, entrevistas y contenido social a lo largo de cuatro meses."
    ),
    context: b(
      "Feed is technical, fragmented and under-reported. The coalition wanted to take the conversation out of closed industry circles and into a space where buyers, chefs and journalists could follow it.",
      "El pienso es un tema técnico, fragmentado y poco cubierto. La coalición quería sacar la conversación de los círculos cerrados del sector y llevarla a un espacio donde compradores, cocineros y periodistas pudieran seguirla."
    ),
    role: b(
      "Concept lead, writer, and editorial coordinator.",
      "Responsable de concepto, redacción y coordinación editorial."
    ),
    approach: b(
      [
        "Anchored the campaign to one argument: what goes into the fish shapes everything downstream.",
        "Built a publishing rhythm of one long article and one short accompanying piece per month, so the argument could compound.",
        "Commissioned interviews with a nutritionist, a welfare researcher, a retailer buyer and a chef — one voice per function.",
      ],
      [
        "Anclamos la campaña a un único argumento: lo que entra en el pez condiciona todo lo que viene después.",
        "Establecimos un ritmo de publicación de un artículo largo y uno corto al mes, para que el argumento se acumulara.",
        "Encargamos entrevistas a un nutricionista, una investigadora de bienestar, un comprador de distribución y un cocinero — una voz por función.",
      ]
    ),
    execution: b(
      [
        "Four long-form articles.",
        "Four shorter companion pieces for social and newsletter.",
        "A campaign landing page with a simple reading order.",
        "Light visual system — no stock imagery, no hero shots of fish.",
      ],
      [
        "Cuatro artículos largos.",
        "Cuatro piezas más cortas que los acompañan, para redes y newsletter.",
        "Una landing de campaña con un orden de lectura claro.",
        "Sistema visual ligero — sin imágenes de banco, sin planos heroicos de peces.",
      ]
    ),
    outcome: b(
      [
        "Read and shared across retail, feed and NGO circles.",
        "Two articles were syndicated by trade publications.",
        "Became a reference document internally for the coalition's next funding round.",
      ],
      [
        "Leída y compartida en círculos de distribución, pienso y ONG.",
        "Dos artículos fueron republicados por publicaciones sectoriales.",
        "Se convirtió en documento de referencia interna para la siguiente ronda de financiación de la coalición.",
      ]
    ),
    takeaway: b(
      "An argument held across several pieces lands harder than a one-off hero article. Editorial discipline beats volume.",
      "Un argumento sostenido en varias piezas aterriza con más fuerza que un único artículo estrella. La disciplina editorial gana al volumen."
    ),
    featured: true,
  },
  {
    slug: "sustainability-report",
    year: "2024",
    category: "Editorial",
    title: b("Sustainability report, editorial lead", "Informe de sostenibilidad, dirección editorial"),
    client: b("Aquaculture producer", "Productor acuícola"),
    disciplines: b(
      ["Editorial direction", "Writing", "Stakeholder interviews"],
      ["Dirección editorial", "Redacción", "Entrevistas a partes interesadas"]
    ),
    summary: b(
      "Reworking a compliance-heavy sustainability report into a readable, structured narrative without losing the reporting rigour.",
      "Reescribir un informe de sostenibilidad muy denso en cumplimiento normativo y convertirlo en una narrativa legible y estructurada, sin perder rigor."
    ),
    overview: b(
      "Led the editorial side of an annual sustainability report. The brief was to keep every data point and every framework reference, and still make the document one people would actually read.",
      "Dirigí la parte editorial de un informe anual de sostenibilidad. El encargo era mantener cada dato y cada referencia normativa, y aun así hacer un documento que la gente quisiera leer de verdad."
    ),
    context: b(
      "The previous year's report was technically correct and almost unread. The ESG team was frustrated that the real work — welfare progress, feed transition, community programmes — was getting buried under indicators.",
      "El informe del año anterior era técnicamente correcto y casi nadie lo leía. El equipo ESG estaba frustrado porque el trabajo real — avances en bienestar, transición de pienso, programas comunitarios — quedaba enterrado bajo los indicadores."
    ),
    role: b(
      "Editorial lead, working alongside the ESG team, finance and design.",
      "Dirección editorial, trabajando con el equipo ESG, finanzas y diseño."
    ),
    approach: b(
      [
        "Mapped the document around three human questions before getting to indicators: what did we commit to, what did we actually do, what did we learn.",
        "Wrote an opening letter that named the hard parts honestly, not just the wins.",
        "Kept all the standard disclosures — they live in their own section, clearly signposted.",
      ],
      [
        "Estructuramos el documento alrededor de tres preguntas humanas antes de entrar en indicadores: a qué nos comprometimos, qué hicimos de verdad, qué aprendimos.",
        "Escribí una carta de apertura que nombraba honestamente las partes difíciles, no solo las victorias.",
        "Mantuvimos todas las divulgaciones estándar — viven en su propia sección, claramente señalizada.",
      ]
    ),
    execution: b(
      [
        "Full editorial structure and flow.",
        "Writing and editing across all narrative sections.",
        "Interviews with farm managers, the vet team and community partners.",
        "Close work with design on hierarchy, pacing and typography.",
      ],
      [
        "Estructura y flujo editorial completos.",
        "Redacción y edición de todas las secciones narrativas.",
        "Entrevistas con responsables de granja, el equipo veterinario y socios comunitarios.",
        "Trabajo estrecho con diseño sobre jerarquía, ritmo y tipografía.",
      ]
    ),
    outcome: b(
      [
        "Report opened and read end-to-end by retailers and investors where previous editions had been skimmed.",
        "Used as onboarding material for new commercial staff.",
        "Format retained for the following year.",
      ],
      [
        "El informe se abrió y leyó completo por distribuidores e inversores; las ediciones anteriores apenas se hojeaban.",
        "Usado como material de onboarding para nuevos miembros del equipo comercial.",
        "El formato se mantuvo al año siguiente.",
      ]
    ),
    takeaway: b(
      "A sustainability report is a piece of editorial work before it is a compliance document. Treat it that way and people read it.",
      "Un informe de sostenibilidad es una pieza editorial antes que un documento de cumplimiento. Si lo tratas así, la gente lo lee."
    ),
  },
  {
    slug: "women-in-aquaculture",
    year: "2023 — present",
    category: "Initiative",
    title: b("Women in Aquaculture", "Mujeres en Acuicultura"),
    client: b("Independent initiative", "Iniciativa independiente"),
    disciplines: b(
      ["Editorial", "Community", "Brand"],
      ["Editorial", "Comunidad", "Marca"]
    ),
    summary: b(
      "A running editorial initiative documenting the work of women across the aquaculture value chain — from hatcheries to policy.",
      "Una iniciativa editorial continua que documenta el trabajo de mujeres a lo largo de la cadena de valor acuícola — desde los criaderos hasta la regulación."
    ),
    overview: b(
      "A long-form interview and portrait series, published in instalments, that records the careers and thinking of women working across aquaculture: technicians, researchers, farm managers, regulators, founders.",
      "Una serie de entrevistas y retratos largos, publicados por entregas, que recoge las trayectorias y formas de pensar de mujeres que trabajan en acuicultura: técnicas, investigadoras, responsables de granja, reguladoras, fundadoras."
    ),
    context: b(
      "The sector's public story is narrow. The people inside it are not. The initiative started from a simple observation that the range of voices in rooms I was working in was not showing up in the sector's communication.",
      "La historia pública del sector es estrecha. La gente que está dentro no lo es. La iniciativa salió de una observación sencilla: la diversidad de voces que veía en las salas en las que trabajaba no aparecía en la comunicación del sector."
    ),
    role: b(
      "Founder, editor and interviewer.",
      "Fundadora, editora y entrevistadora."
    ),
    approach: b(
      [
        "One subject at a time. No composite profiles.",
        "Interviews focused on the work itself — decisions, trade-offs, day-to-day — not personal branding.",
        "A calm, consistent visual identity. No overdesigned treatments.",
      ],
      [
        "Una persona por entrega. Sin perfiles compuestos.",
        "Entrevistas centradas en el trabajo — decisiones, compromisos, día a día — no en la marca personal.",
        "Una identidad visual tranquila y constante. Sin tratamientos sobrediseñados.",
      ]
    ),
    execution: b(
      [
        "Interview series published on a dedicated channel.",
        "Accompanying short-form content on LinkedIn and Instagram.",
        "Live conversations at industry events.",
      ],
      [
        "Serie de entrevistas publicada en un canal propio.",
        "Contenido corto que la acompaña en LinkedIn e Instagram.",
        "Conversaciones en directo en eventos del sector.",
      ]
    ),
    outcome: b(
      [
        "Growing reader base across Europe and Latin America.",
        "Invitations to moderate panels and contribute to sector publications.",
        "Used by companies as an internal reference for their own communication.",
      ],
      [
        "Una base de lectores que crece en Europa y América Latina.",
        "Invitaciones a moderar mesas y a colaborar en publicaciones del sector.",
        "Usada por empresas como referencia interna para su propia comunicación.",
      ]
    ),
    takeaway: b(
      "Representation gets real when the editorial craft matches the intent. Otherwise it reads as a gesture.",
      "La representación se vuelve real cuando el oficio editorial está a la altura de la intención. Si no, queda en gesto."
    ),
    featured: true,
  },
  {
    slug: "seafood-on-nerea",
    year: "2022 — present",
    category: "Personal",
    title: b("Seafood on Nerea", "Seafood on Nerea"),
    client: b("Personal project", "Proyecto personal"),
    disciplines: b(
      ["Personal brand", "Editorial", "Recipe development"],
      ["Marca personal", "Editorial", "Desarrollo de recetas"]
    ),
    summary: b(
      "A personal platform exploring how seafood is bought, cooked and talked about — written from inside the industry.",
      "Una plataforma personal sobre cómo se compra, se cocina y se habla del producto del mar — escrita desde dentro del sector."
    ),
    overview: b(
      "An ongoing personal project sitting between editorial, recipe and field notes. Seafood on Nerea is where I work out the ideas that show up later in client work — and test whether I can make aquaculture feel close to people's kitchens.",
      "Un proyecto personal continuo que está entre lo editorial, la receta y la nota de campo. Seafood on Nerea es donde elaboro las ideas que después aparecen en el trabajo de cliente — y donde compruebo si puedo hacer que la acuicultura se sienta cerca de la cocina de la gente."
    ),
    context: b(
      "Most seafood content online sits either in the trade press or on food blogs. Very little moves between the two. The project exists in that gap, and uses it as a creative brief.",
      "La mayor parte del contenido sobre producto del mar online está o en la prensa sectorial o en blogs de cocina. Muy poco se mueve entre ambos. El proyecto vive en ese hueco y lo usa como brief creativo."
    ),
    role: b(
      "Writer, photographer, editor. Everything visible on the platform is my own.",
      "Redactora, fotógrafa, editora. Todo lo que se ve en la plataforma es mío."
    ),
    approach: b(
      [
        "Cook first, write second. If the dish does not work, the article does not exist.",
        "Keep the sourcing honest. Say what I bought, where, and why.",
        "Write in British English with a Mediterranean tilt, which is the honest register.",
      ],
      [
        "Cocinar primero, escribir después. Si el plato no funciona, el artículo no existe.",
        "Mantener la trazabilidad honesta. Decir qué compré, dónde y por qué.",
        "Escribir en inglés británico con inclinación mediterránea — es el registro honesto.",
      ]
    ),
    execution: b(
      [
        "Long-form entries on species, seasonality and provenance.",
        "Recipes with short sourcing notes.",
        "Field entries from ports, markets and farms I visit for client work.",
      ],
      [
        "Entradas largas sobre especies, temporada y origen.",
        "Recetas con notas breves sobre dónde he comprado.",
        "Notas de campo desde puertos, mercados y granjas que visito por trabajo.",
      ]
    ),
    outcome: b(
      [
        "Steady, slow-growing audience across industry and food readers.",
        "Several direct client enquiries have come through the platform.",
        "A useful creative counterweight to corporate work.",
      ],
      [
        "Audiencia estable y de crecimiento lento entre lectores del sector y lectores de cocina.",
        "Varias consultas de cliente directas han llegado por la plataforma.",
        "Un contrapeso creativo útil al trabajo corporativo.",
      ]
    ),
    takeaway: b(
      "The personal project is not separate from the professional practice. It is where the voice gets tuned.",
      "El proyecto personal no está separado de la práctica profesional. Es donde se afina la voz."
    ),
    featured: true,
  },
  {
    slug: "speculative-seafarm",
    year: "2024",
    category: "Speculative",
    title: b("SeaFarm — speculative rebrand", "SeaFarm — rebranding especulativo"),
    client: b("Speculative", "Especulativo"),
    disciplines: b(
      ["Brand strategy", "Naming", "Narrative"],
      ["Estrategia de marca", "Naming", "Narrativa"]
    ),
    summary: b(
      "A speculative brand and narrative exercise for a next-generation recirculating aquaculture operator.",
      "Un ejercicio especulativo de marca y narrativa para un operador de acuicultura de recirculación de nueva generación."
    ),
    overview: b(
      "A self-initiated brand and narrative project exploring how a recirculating aquaculture company could position itself without the usual tech-startup register.",
      "Un proyecto propio de marca y narrativa que explora cómo podría posicionarse una empresa de acuicultura de recirculación sin caer en el registro habitual de tech-startup."
    ),
    context: b(
      "A lot of land-based aquaculture communication borrows from software branding — gradients, abstractions, future tense. The speculative brief here was to see what it looks like to communicate the same sector from a place of craft and restraint.",
      "Mucha comunicación de acuicultura en tierra toma prestado del branding de software — degradados, abstracciones, futuro permanente. El brief especulativo aquí era ver cómo se ve comunicar el mismo sector desde el oficio y la contención."
    ),
    role: b(
      "Concept, strategy and writing.",
      "Concepto, estrategia y redacción."
    ),
    approach: b(
      [
        "Wrote the brand from the operator outwards, not from the investor deck inwards.",
        "Stripped the language back to working verbs: grow, filter, circulate, feed.",
        "Built a narrative where efficiency is a consequence of care, not the headline.",
      ],
      [
        "Escribí la marca desde el operador hacia fuera, no desde la presentación a inversores hacia dentro.",
        "Reduje el lenguaje a verbos de trabajo: criar, filtrar, recircular, alimentar.",
        "Construí una narrativa donde la eficiencia es consecuencia del cuidado, no el titular.",
      ]
    ),
    execution: b(
      [
        "Name, positioning statement and brand narrative.",
        "Mock press release and investor-facing summary.",
        "A short manifesto, designed as a printable broadsheet.",
      ],
      [
        "Nombre, declaración de posicionamiento y narrativa de marca.",
        "Nota de prensa simulada y resumen para inversores.",
        "Un manifiesto breve, diseñado como una hoja imprimible.",
      ]
    ),
    outcome: b(
      [
        "Used as a reference piece in new business conversations.",
        "Continues to evolve as a testing ground for sector-specific brand ideas.",
      ],
      [
        "Usado como pieza de referencia en conversaciones de nuevo negocio.",
        "Sigue evolucionando como banco de pruebas para ideas de marca específicas del sector.",
      ]
    ),
    takeaway: b(
      "Sector conventions are a starting point, not a constraint. The interesting brief is always one layer deeper.",
      "Las convenciones del sector son un punto de partida, no una restricción. El brief interesante está siempre una capa más abajo."
    ),
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const categories: ProjectCategory[] = [
  "Campaign",
  "Editorial",
  "Brand",
  "Science communication",
  "Initiative",
  "Personal",
  "Speculative",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
