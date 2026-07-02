import Link from "next/link";

import { NAV_LINKS, SITE } from "@/config/site";

/**
 * Foundation header shell (brand mark + nav). The cinematic behaviour — transparent
 * over the hero, transform-based condense on scroll, mobile slide-in panel
 * (PROJECT_RULES §3, WEBSITE_BLUEPRINT §2) — is layered on during the section build.
 * TODO: convert to a client component with scroll + mobile-nav behaviour.
 */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-7 py-5">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link href="#home" className="flex items-center gap-3 text-cream">
          <span className="grid size-10 place-items-center border border-gold font-serif text-base text-gold">
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
          <Link
            href="#booking"
            className="border border-gold px-5 py-2.5 text-[0.8rem] uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
