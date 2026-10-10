"use client";

import { Container } from "@/components/Container";
import { Eyebrow, SplitTitle } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { useT } from "@/lib/i18n/context";
import { ui } from "@/lib/i18n/strings";

export default function NotFound() {
  const t = useT();
  return (
    <section className="py-32 md:py-48">
      <Container size="narrow">
        <Eyebrow>{t(ui.notFound.label)}</Eyebrow>
        <SplitTitle
          as="h1"
          className="mt-6 text-[clamp(2.75rem,7vw,6rem)]"
          a={t(ui.notFound.titleA)}
          b={t(ui.notFound.titleEm)}
        />
        <p className="mt-6 max-w-reading text-lg text-muted">{t(ui.notFound.body)}</p>
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
