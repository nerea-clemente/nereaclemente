"use client";

import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";

export function Currently({ className = "" }: { className?: string }) {
  const t = useT();
  return (
    <aside className={`relative bg-ink p-7 text-paper md:p-9 ${className}`}>
      <div className="flex items-center justify-between border-b border-paper/15 pb-4">
        <span className="font-mono text-[10px] uppercase tracking-caps text-lemon">
          {t(ui.currently.label)}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
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
            className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-paper/10 py-3 last:border-b-0"
          >
            <dt className="font-mono text-[10px] uppercase tracking-caps text-paper/50">
              {t(item.label)}
            </dt>
            <dd className="text-base text-paper">{t(item.value)}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
