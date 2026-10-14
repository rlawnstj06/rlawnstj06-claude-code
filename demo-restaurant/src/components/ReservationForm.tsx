"use client";

import Link from "next/link";
import { useState } from "react";
import type { Lang } from "@/data/restaurant";
import { dict } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

const field = "w-full rounded-lg border border-stone-300 bg-white px-3 py-2";

export default function ReservationForm({ lang }: { lang: Lang }) {
  const t = dict[lang].form;
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email") ?? "",
          date: data.get("date"),
          time: data.get("time"),
          partySize: data.get("partySize"),
          notes: data.get("notes") ?? "",
          marketingConsent: data.get("marketingConsent") === "on",
          website: data.get("website") ?? "",
        }),
      });
      const json = (await res.json()) as { ok: boolean };
      if (!json.ok) throw new Error("rejected");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1 text-sm font-medium">
        {t.name}
        <input name="name" required maxLength={80} autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        {t.phone}
        <input name="phone" type="tel" required autoComplete="tel" pattern="[0-9+()\-\s]{7,20}" className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium sm:col-span-2">
        {t.email}
        <input name="email" type="email" maxLength={120} autoComplete="email" className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        {t.date}
        <input name="date" type="date" required className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        {t.time}
        <input name="time" type="time" required min="11:30" max="21:30" step={900} className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        {t.partySize}
        <input name="partySize" type="number" required min={1} max={10} defaultValue={2} className={field} />
      </label>
      <label className="grid gap-1 text-sm font-medium sm:col-span-2">
        {t.notes}
        <textarea name="notes" maxLength={500} rows={3} className={field} />
      </label>

      {/* Honeypot: hidden from people and screen readers. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-2 text-sm sm:col-span-2">
        <input name="marketingConsent" type="checkbox" className="mt-1 h-4 w-4" />
        <span>{t.marketingConsent}</span>
      </label>

      <p className="text-xs text-stone-600 sm:col-span-2">
        {t.privacyNotice}{" "}
        <Link href={`/${lang}/privacy`} className="underline">
          {dict[lang].nav.privacy}
        </Link>
      </p>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-[var(--brand)] px-6 py-3 font-semibold text-white hover:bg-[var(--brand-dark)] disabled:opacity-60"
        >
          {status === "sending" ? t.sending : t.submit}
        </button>
        <p role="status" aria-live="polite" className="mt-3 text-sm">
          {status === "success" && <span className="text-green-700">{t.success}</span>}
          {status === "error" && <span className="text-red-700">{t.error}</span>}
        </p>
      </div>
    </form>
  );
}
