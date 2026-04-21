import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-32 md:py-48">
      <Container size="narrow">
        <span className="text-xs uppercase tracking-caps text-sea">404</span>
        <h1 className="mt-6 font-display text-display-lg text-ink">
          This page has drifted.
        </h1>
        <p className="mt-6 max-w-reading text-lg text-muted">
          The link you followed may be out of date. Head back to the index or the work page.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="border border-ink bg-ink px-6 py-3 text-sm uppercase tracking-caps text-bone hover:bg-transparent hover:text-ink"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="border border-ink/30 px-6 py-3 text-sm uppercase tracking-caps text-ink hover:border-ink hover:bg-ink hover:text-bone"
          >
            Work
          </Link>
        </div>
      </Container>
    </section>
  );
}
