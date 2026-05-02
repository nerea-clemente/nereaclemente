"use client";

import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";

export function Currently({ className = "" }: { className?: string }) {
  const t = useT();
  return (
    <aside
      className={`relative bg-blush p-7 text-ink md:p-9 ${className}`}
    >
      <div className="flex items-baseline justify-between border-b border-line/15 pb-4">
        <span className="italic-serif text-2xl text-clay md:text-3xl">
          {t(ui.currently.label).replace("◆ ", "")}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-caps text-ink/50">
          {new Date().toLocaleDateString("en-GB", {
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
      <dl className="mt-2 flex flex-col">
        {ui.currently.items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-line/10 py-3 last:border-b-0"
          >
            <dt className="font-mono text-[10px] uppercase tracking-caps text-ink/55">
              {t(item.label)}
            </dt>
            <dd className="text-base text-ink">{t(item.value)}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
