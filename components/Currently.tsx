type Item = { label: string; value: string };

const items: Item[] = [
  { label: "Right now", value: "A flat in Nørrebro, Copenhagen" },
  { label: "Missing", value: "Late lunches in El Cabanyal, Valencia" },
  { label: "Reading", value: "A long essay on salt and trade routes" },
  { label: "Cooking", value: "Arròs a banda, slowly" },
  { label: "Working on", value: "BioFarm, vol. II" },
  { label: "On loop", value: "Field recordings, Baltic & Med ports" },
];

export function Currently({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`relative bg-ink p-7 text-paper md:p-9 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-paper/15 pb-4">
        <span className="font-mono text-[10px] uppercase tracking-caps text-lemon">
          ◆ Currently
        </span>
        <span className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
          {new Date().toLocaleDateString("en-GB", {
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
      <dl className="mt-2 flex flex-col">
        {items.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-paper/10 py-3 last:border-b-0"
          >
            <dt className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
              {item.label}
            </dt>
            <dd className="text-base text-paper">{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
