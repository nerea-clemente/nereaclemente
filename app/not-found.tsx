"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";

export default function NotFound() {
  const t = useT();
  return (
    <section className="py-32 md:py-48">
      <Container size="narrow">
        <p className="italic-serif text-base text-clay md:text-lg">
          {t(ui.notFound.badge)}
        </p>
        <h1 className="mt-4 font-display-tight text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] text-ink">
          {t(ui.notFound.titleA)}
          <span className="italic-serif text-clay">
            {t(ui.notFound.titleEm)}
          </span>
        </h1>
        <p className="mt-6 max-w-reading text-lg text-muted">
          {t(ui.notFound.body)}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/">{t(ui.notFound.home)}</Button>
          <Button href="/work" variant="ghost">
            {t(ui.notFound.work)}
          </Button>
        </div>
      </Container>
    </section>
  );
}
