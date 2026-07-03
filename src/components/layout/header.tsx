"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { BOOK_NOW_URL, NAV_LINKS, SITE } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Fixed header: transparent over the hero's light sky, then a soft cream bar with a
 * subtle shadow after ~80px. Dark ink text throughout. Mobile is a full-height
 * slide-in panel.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-hallery",
        scrolled
          ? "bg-cream/95 py-3 shadow-[0_8px_30px_rgba(26,23,18,0.08)] backdrop-blur-md"
          : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-[75rem] items-center justify-between px-5 tablet:px-7">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="The Hallery by Old Kent — home"
          className="flex items-center"
        >
          {/* TODO(logo): swap this text wordmark back to the dark/gold logo image
              (e.g. /logo/hallery-dark.png) once the dark-on-light asset is provided.
              The old white logo is invisible on the light header. */}
          <span className="flex items-baseline gap-2">
            <span className="font-serif text-xl leading-none text-ink tablet:text-2xl">
              {SITE.name}
            </span>
            <span className="text-[0.55rem] uppercase tracking-[0.35em] text-gold-ink tablet:text-[0.62rem]">
              {SITE.subName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 tablet:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.8rem] uppercase tracking-[0.14em] text-ink transition-colors hover:text-gold-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold px-5 py-2.5 text-[0.8rem] uppercase tracking-[0.14em] text-gold-ink transition-colors hover:bg-gold hover:text-ink"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ink tablet:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-40 flex w-[min(20rem,80vw)] flex-col justify-center gap-8 border-l border-line bg-cream/98 px-8 backdrop-blur-md transition-transform duration-500 ease-hallery tablet:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold-ink"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={BOOK_NOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="border border-gold px-5 py-3 text-center text-sm uppercase tracking-[0.14em] text-gold-ink transition-colors hover:bg-gold hover:text-ink"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
