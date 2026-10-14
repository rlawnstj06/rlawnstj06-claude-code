"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/data/restaurant";
import { dict } from "@/lib/i18n";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget({ lang }: { lang: Lang }) {
  const t = dict[lang].chat;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(event: React.FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || busy) return;

    // Only the last 11 turns go to the server (it accepts up to 12).
    const history: Message[] = [...messages, { role: "user" as const, content: text }].slice(-11);
    while (history.length && history[0].role !== "user") history.shift();

    setMessages((m) => [...m, { role: "user", content: text }, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    const append = (chunk: string) =>
      setMessages((m) => {
        const next = [...m];
        const last = next[next.length - 1];
        next[next.length - 1] = { ...last, content: last.content + chunk };
        return next;
      });

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, messages: history }),
      });
      if (!res.ok || !res.body) throw new Error(`status ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        append(decoder.decode(value, { stream: true }));
      }
    } catch {
      append(t.error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-40 rounded-full bg-[var(--brand)] px-5 py-3 font-semibold text-white shadow-lg hover:bg-[var(--brand-dark)] focus-visible:outline-offset-4"
        >
          💬 {t.open}
        </button>
      )}

      {open && (
        <section
          role="dialog"
          aria-label={t.title}
          className="fixed inset-x-3 bottom-3 z-50 flex max-h-[80vh] flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-96"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        >
          <header className="flex items-center justify-between bg-[var(--brand)] px-4 py-3 text-white">
            <h2 className="font-semibold">{t.title}</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded px-2 py-1 hover:bg-white/20"
              aria-label={t.close}
            >
              ✕
            </button>
          </header>

          <p className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-xs text-amber-900">
            {t.disclosure}
          </p>

          <div ref={logRef} className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            <Bubble role="assistant" content={t.greeting} />
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} content={m.content || "…"} />
            ))}
          </div>

          <form onSubmit={send} className="flex gap-2 border-t border-stone-200 p-3">
            <label htmlFor="chat-input" className="sr-only">
              {t.placeholder}
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={500}
              placeholder={t.placeholder}
              className="min-w-0 flex-1 rounded-lg border border-stone-300 px-3 py-2 text-sm"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              {t.send}
            </button>
          </form>
        </section>
      )}
    </>
  );
}

function Bubble({ role, content }: Message) {
  const mine = role === "user";
  return (
    <div className={mine ? "flex justify-end" : "flex justify-start"}>
      <p
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm ${
          mine ? "bg-[var(--brand)] text-white" : "bg-stone-100 text-stone-900"
        }`}
      >
        {content}
      </p>
    </div>
  );
}
