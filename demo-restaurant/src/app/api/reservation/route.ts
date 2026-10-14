import { z } from "zod";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const reservationSchema = z.object({
  name: z.string().trim().min(1).max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+()\-\s]{7,20}$/),
  email: z.union([z.literal(""), z.email().max(120)]),
  date: z.iso.date(),
  time: z.string().regex(/^\d{2}:\d{2}$/),
  partySize: z.coerce.number().int().min(1).max(10),
  notes: z.string().trim().max(500),
  // CASL: marketing consent must be an explicit, unticked-by-default opt-in.
  marketingConsent: z.boolean(),
  // Honeypot: hidden from people, bots tend to fill it in.
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  if (!rateLimit(`reservation:${clientIp(request)}`, 5, 60 * 60 * 1000)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  // A filled honeypot gets a normal-looking success so bots learn nothing.
  if (raw && typeof raw === "object" && "website" in raw && raw.website) {
    return Response.json({ ok: true });
  }

  const parsed = reservationSchema.safeParse(raw);
  if (!parsed.success) {
    return Response.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const reservation = parsed.data;
  const today = new Date().toISOString().slice(0, 10);
  if (reservation.date < today) {
    return Response.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  // Demo: nothing is stored or sent. For a client site, deliver the request to
  // the restaurant here (e.g. email via Resend, or their booking system), and
  // record marketingConsent with a timestamp as CASL proof of consent.
  // Never write personal details to server logs.
  console.info(
    `reservation request received: party of ${reservation.partySize}, marketingConsent=${reservation.marketingConsent}`,
  );

  return Response.json({ ok: true });
}
