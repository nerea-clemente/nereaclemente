import Link from "next/link";
import { Container } from "./Container";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-line bg-bone">
      <Container>
        <div className="grid gap-16 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-6">
            <p className="max-w-xl font-display text-display-sm text-ink">
              Working on something at the intersection of seafood, science and story? Let&rsquo;s talk.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-1 text-lg text-ink transition-opacity hover:opacity-70"
            >
              {site.email}
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-caps text-muted">
              Index
            </div>
            <ul className="mt-6 flex flex-col gap-3 text-base">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink transition-opacity hover:opacity-60"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-caps text-muted">
              Elsewhere
            </div>
            <ul className="mt-6 flex flex-col gap-3 text-base">
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink transition-opacity hover:opacity-60"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink transition-opacity hover:opacity-60"
                >
                  Seafood on Nerea
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink transition-opacity hover:opacity-60"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>{site.location}</span>
        </div>
      </Container>
    </footer>
  );
}
