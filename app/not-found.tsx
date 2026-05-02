import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-32 md:py-48">
      <Container size="narrow">
        <span className="font-mono text-[11px] uppercase tracking-caps text-electric">
          ◆ 404
        </span>
        <h1 className="mt-6 font-display-tight text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
          This page has{" "}
          <span className="italic-serif text-electric">drifted.</span>
        </h1>
        <p className="mt-6 max-w-reading text-lg text-muted">
          The link you followed may be out of date. Head back to the index or the work page.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="bg-ink px-6 py-3.5 text-[13px] uppercase tracking-caps text-paper hover:bg-electric"
          >
            Home →
          </Link>
          <Link
            href="/work"
            className="border border-ink px-6 py-3.5 text-[13px] uppercase tracking-caps text-ink hover:bg-ink hover:text-paper"
          >
            Work →
          </Link>
        </div>
      </Container>
    </section>
  );
}
