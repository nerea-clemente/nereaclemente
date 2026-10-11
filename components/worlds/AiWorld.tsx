"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { RealWork } from "./RealWork";
import { Asterisk, Hand, Photo } from "@/components/kit";
import { useT } from "@/lib/i18n/context";
import type { Bilingual } from "@/lib/i18n/types";
import { site } from "@/lib/site";
import { getWorld } from "@/lib/worlds";

const b = <T,>(en: T, es: T): Bilingual<T> => ({ en, es });

const c = {
  label: b("AI & Automation", "IA y Automatización"),
  h1a: b("Make", "Que"),
  h1b: b("it flow.", "fluya."),
  intro: b(
    "Ideas, tools and people in better connection. Exploring how AI and automation can create simpler, more human ways of working.",
    "Ideas, herramientas y personas mejor conectadas. Explorando cómo la IA y la automatización pueden crear formas de trabajar más sencillas y más humanas."
  ),
  note1: b("Fewer clicks. More thinking.", "Menos clics. Más pensar."),
  note2: b("Turn ideas into action.", "Convierte ideas en acción."),
  note3: b("Connect people, tools and ideas.", "Conecta personas, herramientas e ideas."),
  flow: b(["Idea", "Input", "Process", "Output", "Real possibilities"], ["Idea", "Entrada", "Proceso", "Resultado", "Posibilidades reales"]),
  concept: b("Concept preview", "Concept preview"),
  closeA: b("Practical tools.", "Herramientas prácticas."),
  closeB: b("Thoughtful decisions.", "Decisiones pensadas."),
  simplify: b("Let's simplify something.", "Simplifiquemos algo."),
};

const CASES = [
  {
    n: "01",
    title: b("AI claim review", "Revisión de reclamaciones con IA"),
    text: b("Structured checks for clearer communication.", "Comprobaciones estructuradas para una comunicación más clara."),
    note: b("Clearer conversations.", "Conversaciones más claras."),
    ui: "table" as const,
  },
  {
    n: "02",
    title: b("Everyday automation", "Automatización del día a día"),
    text: b("Connecting tools and reducing repetitive steps.", "Conectar herramientas y reducir pasos repetitivos."),
    note: b("Fewer repetitive steps.", "Menos pasos repetitivos."),
    ui: "flow" as const,
  },
  {
    n: "03",
    title: b("From idea to agent", "De la idea al agente"),
    text: b("Turning a useful idea into a working prototype.", "Convertir una idea útil en un prototipo que funciona."),
    note: b("A useful idea in action.", "Una idea útil en acción."),
    ui: "agent" as const,
  },
];

/** Torn-paper scraps in greens, the collage texture of this world. */
function Scraps({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  const shapes = [
    { c: "#3E7D57", p: "0% 30%, 38% 8%, 62% 24%, 58% 100%, 4% 92%" },
    { c: "#C6EC6A", p: "30% 40%, 100% 20%, 92% 86%, 40% 100%" },
    { c: "#1E5A3E", p: "10% 0%, 70% 10%, 64% 70%, 0% 60%" },
    { c: "#DCEFB8", p: "50% 10%, 100% 0%, 100% 100%, 46% 80%" },
  ];
  return (
    <div aria-hidden className={`pointer-events-none relative ${className}`} style={flip ? { transform: "scaleX(-1)" } : undefined}>
      {shapes.map((s, i) => (
        <span key={i} className="absolute inset-0" style={{ backgroundColor: s.c, clipPath: `polygon(${s.p})`, opacity: 0.9 }} />
      ))}
    </div>
  );
}

function Card({ children }: { children: ReactNode }) {
  return <div className="lift rounded-md border border-black/5 bg-white p-4 text-[13px] text-[#1b2a22]">{children}</div>;
}

function ClaimTable() {
  const rows: [string, boolean][] = [
    ["Policy covers storm damage", true],
    ["Excess applies", false],
    ["Time limit met", true],
    ["Supporting documents", false],
  ];
  return (
    <Card>
      <div className="grid grid-cols-[1.4fr_1fr] gap-x-4 border-b border-black/10 pb-2 text-xs font-semibold">
        <span>Claim</span>
        <span>Review</span>
      </div>
      {rows.map(([claim, ok]) => (
        <div key={claim} className="grid grid-cols-[1.4fr_1fr] items-center gap-x-4 border-b border-black/5 py-2 last:border-0">
          <span>{claim}</span>
          <span className={`inline-flex w-fit items-center gap-1.5 rounded px-2 py-0.5 text-xs ${ok ? "bg-[#EAF6E5] text-[#2E7D3E]" : "bg-[#FFF3D6] text-[#9A6B00]"}`}>
            <span className={`h-2 w-2 rounded-full ${ok ? "bg-[#3DAA55]" : "bg-[#F2B320]"}`} />
            {ok ? "Looks clear" : "Needs review"}
          </span>
        </div>
      ))}
    </Card>
  );
}

const ICONS = {
  form: "M7 3h7l4 4v14H7zM14 3v4h4M9.5 12h6M9.5 15.5h6",
  check: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1",
  save: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3",
};

function MiniFlow() {
  const steps: [keyof typeof ICONS, string][] = [
    ["form", "Form"],
    ["check", "Check"],
    ["save", "Save"],
  ];
  return (
    <Card>
      <div className="flex items-center justify-between gap-2 py-2">
        {steps.map(([icon, name], i) => (
          <div key={name} className="flex items-center gap-2">
            <div className="flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-md border border-black/15">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={ICONS[icon]} />
              </svg>
              <span>{name}</span>
            </div>
            {i < steps.length - 1 && <span aria-hidden className="text-lg">→</span>}
          </div>
        ))}
      </div>
    </Card>
  );
}

function AgentBox() {
  return (
    <Card>
      <p className="font-semibold">Test your agent</p>
      <div className="mt-3 flex items-center gap-2">
        <span className="flex-1 rounded border border-black/15 px-3 py-2 text-xs text-black/45">Ask a question or describe the task…</span>
        <span className="flex h-8 w-8 items-center justify-center rounded bg-[#0F3D2A] text-white">→</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {["Summarise", "Find patterns", "Suggest next step"].map((x) => (
          <span key={x} className="rounded bg-black/5 px-2.5 py-1.5">{x}</span>
        ))}
      </div>
    </Card>
  );
}

export function AiWorld() {
  const t = useT();
  const p = getWorld("ai")!.palette;
  const flow = t(c.flow);

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: p.page, color: p.ink }}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="relative pt-10 md:pt-14">
          <p className="label">{t(c.label)}</p>
          <div className="mt-4 grid gap-8 md:grid-cols-12">
            <h1 className="display text-[clamp(4rem,12vw,11rem)] md:col-span-7">
              <span className="block">{t(c.h1a)}</span>
              <span className="block">{t(c.h1b)}</span>
            </h1>
            <div className="relative md:col-span-5">
              <Asterisk className="ml-auto h-20 w-20 md:h-28 md:w-28" color={p.ink} />
              <p className="mt-4 max-w-sm text-base leading-relaxed md:text-lg">{t(c.intro)}</p>
              <Hand arrow="down" className="ml-auto mt-6 w-44 rotate-[-6deg] text-2xl">
                {t(c.note1)}
              </Hand>
            </div>
          </div>

          {/* Flow diagram */}
          <div className="relative mt-10 md:mt-6">
            <Hand arrow="up-left" className="absolute -top-14 left-[16%] hidden w-40 rotate-[-4deg] text-xl md:block">
              {t(c.note2)}
            </Hand>
            <ol className="flex flex-wrap items-center justify-center gap-3 md:flex-nowrap md:justify-between">
              {flow.map((step, i) => {
                const round = i === 0 || i === flow.length - 1;
                return (
                  <li key={step} className="flex items-center gap-3">
                    <span
                      className={`flex shrink-0 items-center justify-center text-center text-xs font-bold uppercase tracking-[0.08em] ${
                        round ? "h-24 w-24 rounded-full md:h-36 md:w-36" : "h-20 w-20 text-white md:h-28 md:w-28"
                      }`}
                      style={{ backgroundColor: round ? p.light : p.mid, color: round ? p.ink : "#fff" }}
                    >
                      <span className="px-3">{step}</span>
                    </span>
                    {i < flow.length - 1 && <span aria-hidden className="text-2xl">→</span>}
                  </li>
                );
              })}
            </ol>
            <Hand arrow="up-left" className="ml-auto mt-4 w-56 rotate-[-3deg] text-xl md:mr-[18%]">
              {t(c.note3)}
            </Hand>
          </div>
        </Container>
        <Scraps className="mt-6 h-16 w-full" />
      </section>

      {/* Concept rows */}
      <section>
        {CASES.map((cs, i) => (
          <div key={cs.n} className="relative border-b border-black/10" style={{ backgroundColor: i % 2 ? p.page : p.tint }}>
            <Container className="grid gap-8 py-10 md:grid-cols-12 md:items-center md:py-12">
              <div className="flex items-start gap-6 md:col-span-5">
                <span className="cond text-[clamp(4.5rem,8vw,7rem)] leading-[0.8]">{cs.n}</span>
                <div className="pt-2">
                  <p className="label opacity-70">{t(c.concept)}</p>
                  <h3 className="serif mt-2 text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight">{t(cs.title)}</h3>
                  <p className="mt-2 max-w-xs text-sm">{t(cs.text)}</p>
                </div>
              </div>
              <div className="relative md:col-span-6 md:col-start-7">
                {cs.ui === "table" && <ClaimTable />}
                {cs.ui === "flow" && <MiniFlow />}
                {cs.ui === "agent" && <AgentBox />}
                <Hand arrow="down-left" className="absolute -right-2 -top-10 hidden w-36 rotate-[-6deg] text-xl lg:block lg:-right-24">
                  {t(cs.note)}
                </Hand>
              </div>
            </Container>
          </div>
        ))}
      </section>

      <RealWork slug="ai" />

      {/* Closing */}
      <section className="relative overflow-hidden">
        <div className="absolute -bottom-6 right-0 hidden h-48 w-40 md:block">
          <Photo name="ai-leaf" className="[mask-image:linear-gradient(90deg,transparent,black_30%)]" />
        </div>
        <Container className="relative grid gap-6 py-12 md:grid-cols-12 md:items-center md:py-16">
          <p className="serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] md:col-span-5">
            {t(c.closeA)}
            <br />
            {t(c.closeB)}
          </p>
          <Link href="/contact" className="group border-black/20 md:col-span-5 md:border-l md:pl-8">
            <span className="serif block text-xl md:text-2xl">{t(c.simplify)}</span>
            <span className="mt-1 block text-sm opacity-80 group-hover:underline">{site.email}</span>
          </Link>
        </Container>
      </section>
    </div>
  );
}
