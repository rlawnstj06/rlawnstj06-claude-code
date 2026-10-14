import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import "../globals.css";
import { restaurant } from "@/data/restaurant";
import { dict, isLang, languages } from "@/lib/i18n";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    title: `${restaurant.name[lang]} | ${restaurant.tagline[lang]}`,
    description: restaurant.tagline[lang],
    alternates: { languages: { ko: "/ko", en: "/en" } },
    // Demo site: keep it out of search results.
    robots: restaurant.isDemo ? { index: false, follow: false } : undefined,
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = dict[lang];
  const other = lang === "ko" ? "en" : "ko";

  return (
    <html lang={lang} className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
        >
          {t.skipToContent}
        </a>

        {restaurant.isDemo && (
          <p className="bg-stone-900 px-4 py-1 text-center text-xs text-stone-100">{t.demoBanner}</p>
        )}

        <header className="sticky top-0 z-30 border-b border-stone-200 bg-[var(--background)]/95 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
            <Link href={`/${lang}`} className="text-lg font-bold text-[var(--brand)]">
              {restaurant.name[lang]}
            </Link>
            <ul className="flex items-center gap-4 text-sm">
              <li className="hidden sm:block">
                <a href={`/${lang}#menu`} className="hover:underline">{t.nav.menu}</a>
              </li>
              <li className="hidden sm:block">
                <a href={`/${lang}#hours`} className="hover:underline">{t.nav.hours}</a>
              </li>
              <li>
                <a href={`/${lang}#reserve`} className="hover:underline">{t.nav.reserve}</a>
              </li>
              <li>
                <Link href={`/${other}`} hrefLang={other} className="rounded border border-stone-300 px-2 py-1">
                  {t.switchLang}
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main id="main" className="flex-1">
          {children}
        </main>

        <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-600">
          <p>
            © {restaurant.name[lang]}. {t.footer.rights}{" "}
            <Link href={`/${lang}/privacy`} className="underline">
              {t.nav.privacy}
            </Link>
          </p>
          {restaurant.isDemo && <p className="mt-1">{t.footer.demo}</p>}
        </footer>
      </body>
    </html>
  );
}
