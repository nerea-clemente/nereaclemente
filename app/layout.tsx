import type { Metadata } from "next";
import { Poppins, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/lib/i18n/context";
import { siteMeta } from "@/lib/site";
import "./globals.css";

const display = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
      className={`${display.variable} ${serif.variable} ${mono.variable}`}
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
