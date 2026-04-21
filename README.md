# Nerea Clemente — Portfolio

A personal portfolio website for a marketing and communications professional working at the intersection of aquaculture, seafood, sustainability and science communication.

Editorial, minimal, Mediterranean. Built to be extended with real projects and writing over time.

## Stack

- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS** with a bespoke editorial scale and colour palette
- **next/font** — Fraunces (display serif) & Inter (body) & JetBrains Mono

Everything static-renderable. No CMS wired in; project and writing content live as typed data in `lib/` so pages stay easy to edit without touching templates.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build and run the production bundle:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx              Site shell — fonts, metadata, nav, footer
  page.tsx                Home
  about/page.tsx          About
  work/page.tsx           Work index, with filters and grid/index views
  work/[slug]/page.tsx    Case study pages, generated from lib/projects.ts
  writing/page.tsx        Writing index
  contact/page.tsx        Contact
  not-found.tsx           404
  globals.css             Base styles, reveal animation, selection colour

components/
  Container.tsx           Responsive page width wrapper (default / narrow / wide)
  Navigation.tsx          Sticky header + mobile menu with transitions
  Footer.tsx              Site footer with CTA, index and elsewhere links
  SectionHeader.tsx       Reusable section headers (left / split), Eyebrow
  ProjectCard.tsx         Three variants: default, featured, compact
  Button.tsx              Primary / ghost / quiet button styles

lib/
  site.ts                 Global copy and nav items
  projects.ts             Project data — title, summary, context, approach, execution, outcome, takeaway
  writing.ts              Article list
  expertise.ts            Expertise groups, sectors, working principles
```

## Adding a new project

1. Add a new entry to `projects` in `lib/projects.ts`.
2. If you want it in the home page "Selected work" section, set `featured: true`.
3. The dynamic route at `app/work/[slug]/page.tsx` will render the case study automatically.

Each project supports these sections — only `overview`, `context`, `role`, `approach`, `execution` and `outcome` are required. `takeaway` and `gallery` are optional.

## Adding a new article

Add a new entry to `articles` in `lib/writing.ts`. The writing page renders the list automatically. When a full article is ready, swap the placeholder behaviour for a link or dedicated page.

## Design system

- **Palette**: `bone`, `shell`, `sand` (warm neutrals) · `ink` (near-black) · `sea`, `deep` (deep teal) · `clay`, `rust` (terracotta accent) · `muted`, `line` (secondary).
- **Typography**: Fraunces for display, Inter for body, JetBrains Mono for small meta and numbers.
- **Scale**: fluid `display-xl / lg / md / sm` set in `tailwind.config.ts`.
- **Motion**: subtle — staggered fade-up on the home hero and gentle hover transitions. Respects `prefers-reduced-motion`.

## Tone and language

All copy is written in British English. The voice aims to be clear, confident and restrained — avoiding generic marketing language. The existing copy can be lifted and adapted for new sections.
