import type { Metadata } from "next";
import { Manrope, Instrument_Serif, Anton, Silkscreen, Rubik } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/lib/i18n/context";
import { siteMeta } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["200", "400", "500", "600", "700", "800"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

// Accent faces: Rubik for Seafood, Anton for Creative & Content, Silkscreen for AI labels.
const anton = Anton({ subsets: ["latin"], variable: "--font-anton", weight: "400", preload: false });
const pixel = Silkscreen({ subsets: ["latin"], variable: "--font-pixel", weight: "400", preload: false });

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik", weight: ["700", "900"], preload: false });

const fontVars = `${anton.variable} ${pixel.variable} ${rubik.variable}`;

export const metadata: Metadata = {
  title: {
    default: `${siteMeta.name} — ${siteMeta.taglineEn}`,
    template: `%s · ${siteMeta.name}`,
  },
  description: siteMeta.subtaglineEn,
  metadataBase: new URL(siteMeta.url),
  openGraph: {
    title: `${siteMeta.name} — ${siteMeta.taglineEn}`,
    description: siteMeta.subtaglineEn,
    type: "website",
    url: siteMeta.url,
    locale: "en_GB",
    alternateLocale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${fontVars}`}
    >
      <body className="flex min-h-screen flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <LocaleProvider>
          <Navigation />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
