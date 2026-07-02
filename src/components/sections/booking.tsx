"use client";

import { useState, type FormEvent, type ReactNode } from "react";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { OCCASIONS, STAYS } from "@/config/content";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold";

/**
 * Section 11 — Booking Experience (WEBSITE_BLUEPRINT §11). A calm, personal
 * enquiry — no prices, no urgency. Client-side validation only for now;
 * wire to a real endpoint later (see WEBSITE_BLUEPRINT roadmap).
 */
export function Booking() {
  const [message, setMessage] = useState<{ text: string; error: boolean } | null>(null);
  const today = new Date().toISOString().split("T")[0] ?? "";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const checkin = String(data.get("checkin") ?? "");
    const checkout = String(data.get("checkout") ?? "");
    const stay = String(data.get("stay") ?? "");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !checkin || !checkout) {
      setMessage({ text: "Please complete your name, a valid email, and both dates.", error: true });
      return;
    }
    if (checkout <= checkin) {
      setMessage({ text: "Departure must be after arrival.", error: true });
      return;
    }
    setMessage({
      text: `Thank you, ${name}. We've received your enquiry for the ${stay} and will reply personally, shortly.`,
      error: false,
    });
    form.reset();
  }

  return (
    <section id="booking" className="bg-cream py-[clamp(5rem,10vw,9rem)]">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <Eyebrow>Enquiries</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">Plan Your Stay</h2>
          <p className="mt-4 text-ink-soft">
            Share your dates and we&apos;ll craft a stay around them. Our team replies personally.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <form onSubmit={onSubmit} noValidate className="grid gap-6 tablet:grid-cols-2">
            <Field label="Full Name">
              <input name="name" required placeholder="Your name" className={inputCls} />
            </Field>
            <Field label="Email">
              <input type="email" name="email" required placeholder="you@example.com" className={inputCls} />
            </Field>
            <Field label={<>Phone <Optional /></>}>
              <input type="tel" name="phone" placeholder="+91 ..." className={inputCls} />
            </Field>
            <Field label="Preferred Stay">
              <select name="stay" defaultValue={STAYS[0]!.name} className={inputCls}>
                {STAYS.map((stay) => (
                  <option key={stay.slug}>{stay.name}</option>
                ))}
                <option>Undecided — please advise</option>
              </select>
            </Field>
            <Field label="Arrival">
              <input type="date" name="checkin" required min={today} className={inputCls} />
            </Field>
            <Field label="Departure">
              <input type="date" name="checkout" required min={today} className={inputCls} />
            </Field>
            <Field label="Guests">
              <select name="guests" className={inputCls}>
                {["1", "2", "3", "4", "5+"].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </Field>
            <Field label={<>Occasion <Optional /></>}>
              <select name="occasion" className={inputCls}>
                <option value="">—</option>
                {OCCASIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <div className="tablet:col-span-2">
              <Field label="Anything we should know">
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Dietary preferences, experiences you'd like, arrival details…"
                  className={cn(inputCls, "resize-none")}
                />
              </Field>
            </div>
            <div className="tablet:col-span-2">
              <Button type="submit" variant="gold" size="block">
                Send Enquiry
              </Button>
              {message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={cn("mt-4 text-sm", message.error ? "text-danger" : "text-gold-ink")}
                >
                  {message.text}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[0.72rem] uppercase tracking-[0.16em] text-stone">{label}</span>
      {children}
    </label>
  );
}

function Optional() {
  return <span className="tracking-normal text-stone/70 lowercase">(optional)</span>;
}
