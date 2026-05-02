"use client";

import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";

export function Currently({ className = "" }: { className?: string }) {
  const t = useT();
  return (
    <aside
      className={`relative border border-line bg-paper p-7 md:p-9 ${className}`}
    >
      <p className="italic-serif text-2xl text-clay md:text-3xl">
        {t(ui.currently.label)}
      </p>
      <dl className="mt-6 flex flex-col">
        {ui.currently.items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-t border-line py-3"
          >
            <dt className="italic-serif text-base text-muted">
              {t(item.label)}
            </dt>
            <dd className="text-base text-ink">{t(item.value)}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
