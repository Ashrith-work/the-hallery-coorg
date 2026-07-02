import { SITE } from "@/config/site";

/**
 * Foundation footer shell. The full "Footer" section (WEBSITE_BLUEPRINT §12) —
 * columns, closing line, quiet motion — is composed during the section build.
 * TODO: expand to the blueprint footer.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-7 py-12 text-cream">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 text-center">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-xl">{SITE.name}</span>
          <span className="text-[0.6rem] uppercase tracking-[0.4em] text-gold">{SITE.subName}</span>
        </div>
        <p className="text-xs text-cream/45">
          © {year} {SITE.name}, {SITE.subName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
