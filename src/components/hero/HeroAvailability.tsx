"use client";

import { useEffect, useState } from "react";
import { MapPin, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/content/sections";

/** Local YYYY-MM-DD for a Date, without UTC drift (native date inputs use this). */
function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number) as [number, number, number];
  return toISODate(new Date(y, m - 1, d + days));
}

/**
 * Hero availability widget — a frosted card (bg-white/85 + backdrop-blur) on the
 * lower hero: fixed "The Hallery, Coorg" label, check-in / check-out (native date
 * inputs, default today → tomorrow), Adults / Children / Rooms steppers, and a
 * gold serif "Check Availability" that opens the booking engine in a new tab.
 *
 * NOTE: The Hallery's booking engine keeps its search in server-side session state
 * and ignores check-in/out/guest URL params (verified 2026-07), so we open the bare
 * BOOKING_URL and the guest re-confirms dates in the engine.
 * TODO: if the vendor ever documents a deep-link param format, append arrival /
 * departure / adults / children / rooms from this widget's state to BOOKING_URL.
 */
export function HeroAvailability() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [today, setToday] = useState("");

  // Client-only defaults (today → tomorrow), set on mount so SSR and the first
  // client paint match (both empty) — no hydration mismatch, no layout shift.
  useEffect(() => {
    const iso = toISODate(new Date());
    setToday(iso);
    setCheckIn(iso);
    setCheckOut(addDays(iso, 1));
  }, []);

  // Keep check-out strictly after check-in.
  function handleCheckIn(value: string) {
    setCheckIn(value);
    if (value && (!checkOut || checkOut <= value)) setCheckOut(addDays(value, 1));
  }

  return (
    <div className="w-full max-w-4xl rounded-2xl border border-white/60 bg-white/85 p-4 shadow-xl backdrop-blur-md md:p-5">
      {/* Fixed property — no destination field; the property is The Hallery, Coorg. */}
      <div className="mb-3 flex items-center gap-1.5 text-ink/70">
        <MapPin className="size-4 shrink-0 text-gold-ink" aria-hidden="true" />
        <span className="font-serif text-sm tracking-wide">The Hallery, Coorg</span>
      </div>

      {/* md: force a single row (no wrap) down to 768px — the two date fields
          grow/shrink to absorb slack while steppers + button stay fixed-width. */}
      <div className="flex flex-col gap-3 md:flex-row md:flex-nowrap md:items-end md:gap-3">
        {/* Check-in */}
        <label className="flex flex-col gap-1 md:min-w-[6rem] md:flex-1">
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink/60">
            Check-in
          </span>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => handleCheckIn(e.target.value)}
            aria-label="Check-in date"
            className="w-full min-w-0 rounded-lg border border-ink/15 bg-white/70 px-3 py-2 text-sm text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
          />
        </label>

        {/* Check-out */}
        <label className="flex flex-col gap-1 md:min-w-[6rem] md:flex-1">
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink/60">
            Check-out
          </span>
          <input
            type="date"
            value={checkOut}
            min={checkIn ? addDays(checkIn, 1) : today}
            onChange={(e) => setCheckOut(e.target.value)}
            aria-label="Check-out date"
            className="w-full min-w-0 rounded-lg border border-ink/15 bg-white/70 px-3 py-2 text-sm text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
          />
        </label>

        {/* Guests + Rooms */}
        <div className="grid grid-cols-3 gap-2 md:flex md:flex-none md:gap-2">
          <Stepper label="Adults" value={adults} min={1} max={16} onChange={setAdults} />
          <Stepper label="Children" value={children} min={0} max={12} onChange={setChildren} />
          <Stepper label="Rooms" value={rooms} min={1} max={10} onChange={setRooms} />
        </div>

        {/* Submit — opens the engine in a new tab (see NOTE above re: params). */}
        <Button
          asChild
          variant="gold"
          size="sm"
          className="w-full font-serif md:w-auto md:flex-none md:px-4"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check availability — opens the booking engine in a new tab"
          >
            Check Availability
          </a>
        </Button>
      </div>
    </div>
  );
}

interface StepperProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (next: number) => void;
}

function Stepper({ label, value, min, max, onChange }: StepperProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink/60">{label}</span>
      <div className="flex items-center justify-between gap-0.5 rounded-lg border border-ink/15 bg-white/70 px-1.5 py-1.5">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Decrease ${label.toLowerCase()}`}
          className="flex size-5 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:opacity-30"
        >
          <Minus className="size-3" aria-hidden="true" />
        </button>
        <span className="min-w-[1rem] text-center text-sm tabular-nums text-ink" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`Increase ${label.toLowerCase()}`}
          className="flex size-5 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:opacity-30"
        >
          <Plus className="size-3" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
