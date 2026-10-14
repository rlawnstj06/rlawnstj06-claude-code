import { notFound } from "next/navigation";
import ChatWidget from "@/components/ChatWidget";
import ReservationForm from "@/components/ReservationForm";
import { allergenLabels, dayNames, formatPrice, restaurant } from "@/data/restaurant";
import { dict, isLang } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = dict[lang];
  const { address } = restaurant;
  const fullAddress = `${address.street}, ${address.city}, ${address.province} ${address.postalCode}`;

  // schema.org data helps Google show hours and address in search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name.en,
    alternateName: restaurant.name.ko,
    servesCuisine: "Korean",
    telephone: restaurant.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.province,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    openingHoursSpecification: restaurant.hours
      .filter((h) => h.open)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayNames.en[h.day]}`,
        opens: h.open,
        closes: h.close,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] px-4 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold sm:text-5xl">{restaurant.name[lang]}</h1>
          <p className="mt-4 text-lg text-white/90 sm:text-xl">{restaurant.tagline[lang]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reserve" className="rounded-lg bg-white px-5 py-3 font-semibold text-[var(--brand-dark)]">
              {t.nav.reserve}
            </a>
            <a href={`tel:${restaurant.phone}`} className="rounded-lg border border-white/70 px-5 py-3 font-semibold">
              📞 {restaurant.phone}
            </a>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16">
        <h2 className="text-3xl font-bold">{t.menuTitle}</h2>
        {restaurant.menu.map((section) => (
          <div key={section.id} className="mt-10">
            <h3 className="border-b border-stone-200 pb-2 text-xl font-semibold">{section.title[lang]}</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {section.items.map((item) => (
                <li key={item.id} className="rounded-xl border border-stone-200 bg-white p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-semibold">
                      {item.name[lang]}
                      {item.spicy && <span className="ml-2 text-xs text-red-700">🌶 {t.spicy}</span>}
                      {item.vegetarian && <span className="ml-2 text-xs text-green-700">🌱 {t.vegetarian}</span>}
                    </h4>
                    <span className="shrink-0 font-semibold">{formatPrice(item.priceCad, lang)}</span>
                  </div>
                  <p className="mt-2 text-sm text-stone-700">{item.description[lang]}</p>
                  <p className="mt-3 text-xs text-stone-600">
                    {t.allergensLabel}: {item.allergens.map((a) => allergenLabels[a][lang]).join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="mt-6 rounded-lg bg-amber-50 p-4 text-sm text-amber-900">{restaurant.policies.allergies[lang]}</p>
      </section>

      <section id="hours" className="scroll-mt-20 bg-stone-100 px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">{t.hoursTitle}</h2>
            <table className="mt-6 w-full text-sm">
              <tbody>
                {restaurant.hours.map((h) => (
                  <tr key={h.day} className="border-b border-stone-200">
                    <th scope="row" className="py-2 text-left font-medium">{dayNames[lang][h.day]}</th>
                    <td className="py-2 text-right">{h.open ? `${h.open} – ${h.close}` : t.closed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <address className="mt-6 not-italic">
              {fullAddress}
              <br />
              <a href={`tel:${restaurant.phone}`} className="underline">{restaurant.phone}</a>
            </address>
          </div>
          <div>
            <h2 className="text-3xl font-bold">{t.infoTitle}</h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm">
              {(["reservations", "takeout", "parking", "payment"] as const).map((key) => (
                <li key={key}>{restaurant.policies[key][lang]}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="reserve" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16">
        <h2 className="text-3xl font-bold">{t.reserveTitle}</h2>
        <p className="mt-3 mb-8 text-stone-700">{t.reserveIntro}</p>
        <ReservationForm lang={lang} />
      </section>

      <ChatWidget lang={lang} />
    </>
  );
}
