"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { buildBookingUrl } from "@/content/sections";

/** Local YYYY-MM-DD for a Date, without UTC drift (native date inputs use this format). */
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

export interface BookingSelection {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  setCheckIn: (value: string) => void;
  setCheckOut: (value: string) => void;
  setAdults: (n: number) => void;
  setChildren: (n: number) => void;
  /** Earliest selectable check-in (today, "" during SSR). Feed to input `min`. */
  minCheckIn: string;
  /** Earliest selectable check-out (day after check-in). Feed to input `min`. */
  minCheckOut: string;
  /** Booking-engine URL pre-filled with the current selection; bare URL when dates are invalid. */
  bookingUrl: string;
}

const BookingContext = createContext<BookingSelection | null>(null);

/**
 * Shared booking selection (dates + guests) so the hero picker, header, and
 * room-card "Book Now" links all point at one pre-filled engine URL.
 * Throws if used outside <BookingProvider> — mount it once in AppProviders.
 */
export function useBooking(): BookingSelection {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within <BookingProvider>");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [checkIn, setCheckInState] = useState("");
  const [checkOut, setCheckOutState] = useState("");
  const [adults, setAdults] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [today, setToday] = useState("");

  // Client-only defaults: today → tomorrow. Kept out of the initial render so the
  // server and first client paint match (both empty).
  useEffect(() => {
    const iso = toISODate(new Date());
    setToday(iso);
    setCheckInState(iso);
    setCheckOutState(addDays(iso, 1));
  }, []);

  // Keep check-out strictly after check-in whenever check-in moves.
  function setCheckIn(value: string) {
    setCheckInState(value);
    setCheckOutState((prev) => (value && (!prev || prev <= value) ? addDays(value, 1) : prev));
  }

  const value = useMemo<BookingSelection>(() => {
    const datesValid = Boolean(checkIn && checkOut && checkOut > checkIn);
    const bookingUrl = datesValid
      ? buildBookingUrl({ arrival: checkIn, departure: checkOut, adults, children: childCount })
      : buildBookingUrl();
    return {
      checkIn,
      checkOut,
      adults,
      children: childCount,
      setCheckIn,
      setCheckOut: setCheckOutState,
      setAdults,
      setChildren: setChildCount,
      minCheckIn: today,
      minCheckOut: checkIn ? addDays(checkIn, 1) : today,
      bookingUrl,
    };
  }, [checkIn, checkOut, adults, childCount, today]);

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}
