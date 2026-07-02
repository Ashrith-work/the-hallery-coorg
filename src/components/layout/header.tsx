"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { BOOK_NOW_URL, NAV_LINKS, SITE } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Fixed header: transparent over the hero, condensing to a translucent charcoal
 * bar on scroll (transform-based, not layout — PROJECT_RULES §3/§11). Mobile is a
 * full-height slide-in panel.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-hallery",
        scrolled
          ? "bg-charcoal/95 py-3 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
          : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-[75rem] items-center justify-between px-5 tablet:px-7">
        <Link href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3 text-cream">
          <span
            className={cn(
              "grid place-items-center border border-gold font-serif text-gold transition-all duration-500 ease-hallery",
              scrolled ? "size-9 text-sm" : "size-10 text-base",
            )}
          >
            TH
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-wide">{SITE.name}</span>
            <span className="mt-0.5 text-[0.6rem] uppercase tracking-[0.4em] text-gold">
              {SITE.subName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 tablet:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.8rem] uppercase tracking-[0.14em] text-cream transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold px-5 py-2.5 text-[0.8rem] uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-cream tablet:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-40 flex w-[min(20rem,80vw)] flex-col justify-center gap-8 bg-charcoal/98 px-8 backdrop-blur-md transition-transform duration-500 ease-hallery tablet:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:text-gold"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={BOOK_NOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="border border-gold px-5 py-3 text-center text-sm uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
