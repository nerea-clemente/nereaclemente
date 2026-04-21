export type Expertise = {
  title: string;
  description: string;
  items: string[];
};

export const expertise: Expertise[] = [
  {
    title: "Strategy & positioning",
    description:
      "Working out what a company or project actually stands for, before writing a single word.",
    items: [
      "Brand narrative",
      "Messaging frameworks",
      "Audience mapping",
      "Launch strategy",
    ],
  },
  {
    title: "Editorial & content",
    description:
      "Long-form writing and editorial direction for technical sectors, in British English.",
    items: [
      "Long-form articles",
      "Reports and briefings",
      "Interview series",
      "Editorial direction",
    ],
  },
  {
    title: "Science communication",
    description:
      "Translating research, trials and data into material that non-technical audiences can use.",
    items: [
      "Research briefings",
      "Explainers",
      "Plain-language summaries",
      "Visual direction for data",
    ],
  },
  {
    title: "Campaigns & social",
    description:
      "Integrated campaigns that run across channels without losing tone.",
    items: [
      "Campaign concept",
      "LinkedIn and Instagram editorial",
      "Newsletter content",
      "Press and PR support",
    ],
  },
];

export const sectors = [
  "Aquaculture",
  "Seafood",
  "Sustainability",
  "Food systems",
  "Fisheries",
  "Marine sciences",
  "Technical B2B",
];

export const principles = [
  {
    n: "01",
    title: "Start on the farm, not in the deck.",
    body: "The best communication in technical sectors comes from time on site. I spend time with the people actually doing the work before I write for them.",
  },
  {
    n: "02",
    title: "Translate, do not simplify.",
    body: "Clarity is an editorial craft. Precision survives the edit when the first draft starts from the primary source.",
  },
  {
    n: "03",
    title: "Keep the uncertainty visible.",
    body: "Greenwash happens in the gap between what is known and what is claimed. I keep that gap named and honest.",
  },
  {
    n: "04",
    title: "One argument, several pieces.",
    body: "A campaign is an argument held across formats. Editorial discipline beats volume, and compounds over a year.",
  },
];
