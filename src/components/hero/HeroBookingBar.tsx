"use client";

import { useState } from "react";
import { CalendarCheck, Minus, Plus, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useBooking } from "@/context/booking-context";

function guestSummary(adults: number, children: number): string {
  const a = `${adults} adult${adults === 1 ? "" : "s"}`;
  if (!children) return a;
  return `${a} · ${children} child${children === 1 ? "" : "ren"}`;
}

/**
 * Hero booking bar — check-in / check-out / guests, then "Book Now" opens the
 * engine pre-filled from the shared booking selection (context/booking-context).
 * The same selection drives the header and room-card "Book Now" links.
 * Zero extra deps: native date inputs + a small guests stepper.
 */
export function HeroBookingBar() {
  const {
    checkIn,
    checkOut,
    adults,
    children,
    setCheckIn,
    setCheckOut,
    setAdults,
    setChildren,
    minCheckIn,
    minCheckOut,
    bookingUrl,
  } = useBooking();
  const [guestsOpen, setGuestsOpen] = useState(false);

  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5 rounded-2xl border border-white/15 bg-ink/35 p-1.5 shadow-xl backdrop-blur-md md:w-auto md:max-w-none md:flex-row md:items-stretch md:gap-0">
      {/* Check-in */}
      <label className="flex flex-col gap-0.5 px-3 py-2 md:py-1.5">
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-cream/70">
          Check-in
        </span>
        <input
          type="date"
          value={checkIn}
          min={minCheckIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="bg-transparent text-sm text-cream [color-scheme:dark] focus:outline-none"
          aria-label="Check-in date"
        />
      </label>

      <div className="hidden w-px self-stretch bg-white/10 md:block" aria-hidden="true" />

      {/* Check-out */}
      <label className="flex flex-col gap-0.5 px-3 py-2 md:py-1.5">
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-cream/70">
          Check-out
        </span>
        <input
          type="date"
          value={checkOut}
          min={minCheckOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="bg-transparent text-sm text-cream [color-scheme:dark] focus:outline-none"
          aria-label="Check-out date"
        />
      </label>

      <div className="hidden w-px self-stretch bg-white/10 md:block" aria-hidden="true" />

      {/* Guests */}
      <div className="relative flex flex-col justify-center px-3 py-2 md:py-1.5">
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-cream/70">
          Guests
        </span>
        <button
          type="button"
          onClick={() => setGuestsOpen((o) => !o)}
          className="flex items-center gap-1.5 text-left text-sm text-cream focus:outline-none"
          aria-haspopup="dialog"
          aria-expanded={guestsOpen}
        >
          <Users className="size-3.5 shrink-0 text-cream/70" aria-hidden="true" />
          <span>{guestSummary(adults, children)}</span>
        </button>

        {guestsOpen && (
          <>
            {/* Click-away backdrop */}
            <button
              type="button"
              className="fixed inset-0 z-10 cursor-default"
              aria-hidden="true"
              tabIndex={-1}
              onClick={() => setGuestsOpen(false)}
            />
            <div
              role="dialog"
              aria-label="Select guests"
              className="absolute bottom-full left-0 z-20 mb-2 w-56 rounded-xl border border-white/15 bg-ink/95 p-3 shadow-xl backdrop-blur-md"
            >
              <Stepper label="Adults" value={adults} min={1} max={16} onChange={setAdults} />
              <div className="my-2 h-px bg-white/10" />
              <Stepper label="Children" value={children} min={0} max={12} onChange={setChildren} />
            </div>
          </>
        )}
      </div>

      {/* Book Now */}
      <div className="flex md:items-center md:pl-1.5">
        <Button asChild variant="gold" size="sm" className="w-full shadow-md md:w-auto">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book Now — opens the booking engine in a new tab with your dates"
          >
            <CalendarCheck aria-hidden="true" />
            <span>Book Now</span>
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
    <div className="flex items-center justify-between">
      <span className="text-sm text-cream">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="flex size-7 items-center justify-center rounded-full border border-cream/40 text-cream transition-colors hover:border-cream disabled:opacity-30"
          aria-label={`Decrease ${label.toLowerCase()}`}
        >
          <Minus className="size-3.5" aria-hidden="true" />
        </button>
        <span className="w-5 text-center text-sm tabular-nums text-cream" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="flex size-7 items-center justify-center rounded-full border border-cream/40 text-cream transition-colors hover:border-cream disabled:opacity-30"
          aria-label={`Increase ${label.toLowerCase()}`}
        >
          <Plus className="size-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
