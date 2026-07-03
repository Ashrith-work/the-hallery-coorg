import Link from "next/link";

import { NAV_LINKS, SITE } from "@/config/site";

/** Section 12 — Footer. Quiet close: brand, promise, and practical detail. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-cream-dark px-5 py-16 text-ink tablet:px-7">
      <div className="mx-auto max-w-[75rem]">
        <div className="grid gap-12 tablet:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl">{SITE.name}</span>
              <span className="text-[0.6rem] uppercase tracking-[0.4em] text-gold-ink">
                {SITE.subName}
              </span>
            </div>
            <p className="mt-4 max-w-xs font-serif text-lg italic text-ink-soft">{SITE.promise}</p>
          </div>

          <FooterCol title="Estate">
            {SITE.location.street}
            <br />
            {SITE.location.locality}, {SITE.location.region}
            <br />
            {SITE.location.postalCode}, India
          </FooterCol>

          <FooterCol title="Reservations">
            {SITE.contact.phones.map((phone) => (
              <span key={phone} className="block">
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold-ink"
                >
                  {phone}
                </a>
              </span>
            ))}
            <a
              href={`mailto:${SITE.contact.email}`}
              className="mt-1 block transition-colors hover:text-gold-ink"
            >
              {SITE.contact.email}
            </a>
          </FooterCol>

          <FooterCol title="Getting Here">
            Near Madikeri town
            <br />
            Approx. 5–6 hrs from Bengaluru
            <br />
            Part of the Old Kent family of estates
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-[0.75rem] text-stone tablet:flex-row">
          <p>
            © {year} {SITE.name}, {SITE.subName}. All rights reserved.
          </p>
          <nav className="flex gap-6" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-gold-ink">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-gold-ink">{title}</h4>
      <p className="text-sm leading-relaxed text-ink-soft">{children}</p>
    </div>
  );
}
