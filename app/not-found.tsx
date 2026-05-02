"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";

export default function NotFound() {
  const t = useT();
  return (
    <section className="py-32 md:py-48">
      <Container size="narrow">
        <span className="font-mono text-[11px] uppercase tracking-caps text-sea">
          {t(ui.notFound.badge)}
        </span>
        <h1 className="mt-6 font-display-tight text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
          {t(ui.notFound.titleA)}
          <span className="italic-serif text-sea">
            {t(ui.notFound.titleEm)}
          </span>
        </h1>
        <p className="mt-6 max-w-reading text-lg text-muted">
          {t(ui.notFound.body)}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="bg-ink px-6 py-3.5 text-[13px] uppercase tracking-caps text-paper hover:bg-sea"
          >
            {t(ui.notFound.home)}
          </Link>
          <Link
            href="/work"
            className="border border-ink px-6 py-3.5 text-[13px] uppercase tracking-caps text-ink hover:bg-ink hover:text-paper"
          >
            {t(ui.notFound.work)}
          </Link>
        </div>
      </Container>
    </section>
  );
}
