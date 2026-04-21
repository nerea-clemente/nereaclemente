export type ProjectCategory =
  | "Campaign"
  | "Editorial"
  | "Brand"
  | "Science communication"
  | "Initiative"
  | "Personal"
  | "Speculative";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  disciplines: string[];
  summary: string;
  overview: string;
  context: string;
  role: string;
  approach: string[];
  execution: string[];
  outcome: string[];
  takeaway?: string;
  gallery?: { caption: string; tone: "sea" | "shell" | "clay" | "sand" | "deep" }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "biofarm-campaign",
    title: "BioFarm",
    client: "BioFarm Aquaculture",
    year: "2024",
    category: "Campaign",
    disciplines: ["Brand narrative", "Integrated campaign", "Copywriting"],
    summary:
      "Repositioning a working fish farm as a transparent, science-led producer for a European B2B audience.",
    overview:
      "A six-month integrated campaign rebuilding the voice and storyline behind a mid-size European aquaculture producer, moving it from a production-first message to a clear, grounded narrative about origin, method and responsibility.",
    context:
      "BioFarm had built a technically strong operation but its communication leaned on generic sustainability language and stock imagery. Buyers, retailers and journalists were asking sharper questions. The brand needed a story that matched the rigour of its practice without drifting into greenwashing.",
    role: "Lead strategist and writer. Worked directly with the commercial director and farm team to translate technical detail into a usable brand language, and coordinated design and photography partners.",
    approach: [
      "Spent two weeks on site documenting the production cycle, feed programme and traceability system in plain language.",
      "Defined a narrative frame — Origin, Method, Responsibility — that the team could actually use in sales meetings, decks and media responses.",
      "Built a messaging matrix for three audiences: buyers, retailers, and press, with calibrated depth for each.",
    ],
    execution: [
      "Campaign manifesto and long-form brand narrative.",
      "Launch article series for trade press and LinkedIn.",
      "Sales deck, one-pagers and a press kit with photography direction.",
      "Internal language guide so the team could speak consistently without a script.",
    ],
    outcome: [
      "Rolled out across three European markets and adopted as the internal reference for external communication.",
      "Picked up in trade press coverage quoting the new narrative framing verbatim.",
      "Became the baseline story for retailer pitches the following year.",
    ],
    takeaway:
      "Good aquaculture communication starts on the farm, not in the deck. The job is translation, not invention.",
    gallery: [
      { caption: "Campaign manifesto spread", tone: "sea" },
      { caption: "Press kit, cover page", tone: "shell" },
      { caption: "Origin, Method, Responsibility", tone: "clay" },
      { caption: "Sales deck, opening chapter", tone: "deep" },
    ],
    featured: true,
  },
  {
    slug: "science-communication",
    title: "Science communication practice",
    client: "Various clients and in-house",
    year: "2023 — present",
    category: "Science communication",
    disciplines: ["Editorial", "Translation of research", "Visual direction"],
    summary:
      "An ongoing body of work translating research, feed trials and environmental data into readable articles, briefings and visuals.",
    overview:
      "A running practice rather than a single project: editorial work that takes technical material — feed trial results, welfare indicators, water quality data — and turns it into something a retailer, policymaker or general reader can actually use.",
    context:
      "Technical teams often hold the most interesting part of the story and the least accessible version of it. Across several clients the same pattern appeared: strong science, weak surface. The brief, repeatedly, was to keep the substance and fix the surface.",
    role: "Writer and editor. Sometimes brought in at draft stage, sometimes from the brief. Work closely with researchers, vets and sustainability leads.",
    approach: [
      "Start from the primary source — the study, the dataset, the protocol — not the summary slide.",
      "Write a first plain-language version, then check it back with the technical lead before design.",
      "Keep uncertainty visible. Do not smooth over what the data does not yet show.",
    ],
    execution: [
      "Research briefings for non-technical stakeholders.",
      "Long-form articles and explainers for trade and general audiences.",
      "Visual direction for diagrams and data summaries.",
      "Q&A and interview formats with scientists and farm managers.",
    ],
    outcome: [
      "Material has been used in investor briefings, retailer meetings and policy consultations.",
      "Repeated commissioning from the same technical teams, which tends to be the honest metric.",
    ],
    takeaway:
      "Clarity is an editorial choice, not a simplification. Precision survives the edit if you start from the source.",
    featured: true,
  },
  {
    slug: "better-feed-better-food",
    title: "Better Feed, Better Food",
    client: "Feed sector coalition",
    year: "2024",
    category: "Campaign",
    disciplines: ["Editorial campaign", "Messaging", "Long-form writing"],
    summary:
      "An editorial campaign on the link between aquafeed ingredients, fish welfare and the quality of the final product.",
    overview:
      "A campaign built around the argument that feed is where most of aquaculture's sustainability story is actually decided. Structured as a series of articles, interviews and social content running across four months.",
    context:
      "Feed is technical, fragmented and under-reported. The coalition wanted to take the conversation out of closed industry circles and into a space where buyers, chefs and journalists could follow it.",
    role: "Concept lead, writer, and editorial coordinator.",
    approach: [
      "Anchored the campaign to one argument: what goes into the fish shapes everything downstream.",
      "Built a publishing rhythm of one long article and one short accompanying piece per month, so the argument could compound.",
      "Commissioned interviews with a nutritionist, a welfare researcher, a retailer buyer and a chef — one voice per function.",
    ],
    execution: [
      "Four long-form articles.",
      "Four shorter companion pieces for social and newsletter.",
      "A campaign landing page with a simple reading order.",
      "Light visual system — no stock imagery, no hero shots of fish.",
    ],
    outcome: [
      "Read and shared across retail, feed and NGO circles.",
      "Two articles were syndicated by trade publications.",
      "Became a reference document internally for the coalition's next funding round.",
    ],
    takeaway:
      "An argument held across several pieces lands harder than a one-off hero article. Editorial discipline beats volume.",
    featured: true,
  },
  {
    slug: "sustainability-report",
    title: "Sustainability report, editorial lead",
    client: "Aquaculture producer",
    year: "2024",
    category: "Editorial",
    disciplines: ["Editorial direction", "Writing", "Stakeholder interviews"],
    summary:
      "Reworking a compliance-heavy sustainability report into a readable, structured narrative without losing the reporting rigour.",
    overview:
      "Led the editorial side of an annual sustainability report. The brief was to keep every data point and every framework reference, and still make the document one people would actually read.",
    context:
      "The previous year's report was technically correct and almost unread. The ESG team was frustrated that the real work — welfare progress, feed transition, community programmes — was getting buried under indicators.",
    role: "Editorial lead, working alongside the ESG team, finance and design.",
    approach: [
      "Mapped the document around three human questions before getting to indicators: what did we commit to, what did we actually do, what did we learn.",
      "Wrote an opening letter that named the hard parts honestly, not just the wins.",
      "Kept all the standard disclosures — they live in their own section, clearly signposted.",
    ],
    execution: [
      "Full editorial structure and flow.",
      "Writing and editing across all narrative sections.",
      "Interviews with farm managers, the vet team and community partners.",
      "Close work with design on hierarchy, pacing and typography.",
    ],
    outcome: [
      "Report opened and read end-to-end by retailers and investors where previous editions had been skimmed.",
      "Used as onboarding material for new commercial staff.",
      "Format retained for the following year.",
    ],
    takeaway:
      "A sustainability report is a piece of editorial work before it is a compliance document. Treat it that way and people read it.",
  },
  {
    slug: "women-in-aquaculture",
    title: "Women in Aquaculture",
    client: "Independent initiative",
    year: "2023 — present",
    category: "Initiative",
    disciplines: ["Editorial", "Community", "Brand"],
    summary:
      "A running editorial initiative documenting the work of women across the aquaculture value chain — from hatcheries to policy.",
    overview:
      "A long-form interview and portrait series, published in instalments, that records the careers and thinking of women working across aquaculture: technicians, researchers, farm managers, regulators, founders.",
    context:
      "The sector's public story is narrow. The people inside it are not. The initiative started from a simple observation that the range of voices in rooms I was working in was not showing up in the sector's communication.",
    role: "Founder, editor and interviewer.",
    approach: [
      "One subject at a time. No composite profiles.",
      "Interviews focused on the work itself — decisions, trade-offs, day-to-day — not personal branding.",
      "A calm, consistent visual identity. No overdesigned treatments.",
    ],
    execution: [
      "Interview series published on a dedicated channel.",
      "Accompanying short-form content on LinkedIn and Instagram.",
      "Live conversations at industry events.",
    ],
    outcome: [
      "Growing reader base across Europe and Latin America.",
      "Invitations to moderate panels and contribute to sector publications.",
      "Used by companies as an internal reference for their own communication.",
    ],
    takeaway:
      "Representation gets real when the editorial craft matches the intent. Otherwise it reads as a gesture.",
    featured: true,
  },
  {
    slug: "seafood-on-nerea",
    title: "Seafood on Nerea",
    client: "Personal project",
    year: "2022 — present",
    category: "Personal",
    disciplines: ["Personal brand", "Editorial", "Recipe development"],
    summary:
      "A personal platform exploring how seafood is bought, cooked and talked about — written from inside the industry.",
    overview:
      "An ongoing personal project sitting between editorial, recipe and field notes. Seafood on Nerea is where I work out the ideas that show up later in client work — and test whether I can make aquaculture feel close to people's kitchens.",
    context:
      "Most seafood content online sits either in the trade press or on food blogs. Very little moves between the two. The project exists in that gap, and uses it as a creative brief.",
    role: "Writer, photographer, editor. Everything visible on the platform is my own.",
    approach: [
      "Cook first, write second. If the dish does not work, the article does not exist.",
      "Keep the sourcing honest. Say what I bought, where, and why.",
      "Write in British English with a Mediterranean tilt, which is the honest register.",
    ],
    execution: [
      "Long-form entries on species, seasonality and provenance.",
      "Recipes with short sourcing notes.",
      "Field entries from ports, markets and farms I visit for client work.",
    ],
    outcome: [
      "Steady, slow-growing audience across industry and food readers.",
      "Several direct client enquiries have come through the platform.",
      "A useful creative counterweight to corporate work.",
    ],
    takeaway:
      "The personal project is not separate from the professional practice. It is where the voice gets tuned.",
    featured: true,
  },
  {
    slug: "speculative-seafarm",
    title: "SeaFarm — speculative rebrand",
    client: "Speculative",
    year: "2024",
    category: "Speculative",
    disciplines: ["Brand strategy", "Naming", "Narrative"],
    summary:
      "A speculative brand and narrative exercise for a next-generation recirculating aquaculture operator.",
    overview:
      "A self-initiated brand and narrative project exploring how a recirculating aquaculture company could position itself without the usual tech-startup register.",
    context:
      "A lot of land-based aquaculture communication borrows from software branding — gradients, abstractions, future tense. The speculative brief here was to see what it looks like to communicate the same sector from a place of craft and restraint.",
    role: "Concept, strategy and writing.",
    approach: [
      "Wrote the brand from the operator outwards, not from the investor deck inwards.",
      "Stripped the language back to working verbs: grow, filter, circulate, feed.",
      "Built a narrative where efficiency is a consequence of care, not the headline.",
    ],
    execution: [
      "Name, positioning statement and brand narrative.",
      "Mock press release and investor-facing summary.",
      "A short manifesto, designed as a printable broadsheet.",
    ],
    outcome: [
      "Used as a reference piece in new business conversations.",
      "Continues to evolve as a testing ground for sector-specific brand ideas.",
    ],
    takeaway:
      "Sector conventions are a starting point, not a constraint. The interesting brief is always one layer deeper.",
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
