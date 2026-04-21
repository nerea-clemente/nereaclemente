type Item = { label: string; value: string };

const items: Item[] = [
  { label: "Right now", value: "A flat near the harbour, A Coruña" },
  { label: "Reading", value: "A long essay on salt and trade routes" },
  { label: "Cooking", value: "Razor clams, plancha, lemon" },
  { label: "Working on", value: "BioFarm, vol. II" },
  { label: "On loop", value: "Field recordings of Atlantic ports" },
];

export function Currently({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`relative rounded-sm bg-paper p-7 ring-1 ring-line md:p-8 ${className}`}
    >
      <div className="absolute -top-3 left-7 bg-paper px-2 font-script text-2xl text-tide leading-none">
        currently
      </div>
      <dl className="mt-3 flex flex-col divide-y divide-line">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1 py-3 first:pt-2 last:pb-1"
          >
            <dt className="text-[10px] uppercase tracking-caps text-muted">
              {item.label}
            </dt>
            <dd className="text-base text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
