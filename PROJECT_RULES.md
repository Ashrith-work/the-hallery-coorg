<!--
  THE HALLERY — PROJECT RULES
  The permanent design brain for this project.
  Every human and every AI agent working on The Hallery MUST read and obey this document.
  When a request conflicts with these rules, surface the conflict — do not silently break the system.
-->

# THE HALLERY — Design Brain & Project Rules

> A luxury resort. A quiet masterpiece. Every pixel earns its place.

This document is the single source of truth for how The Hallery looks, moves, reads, and behaves. It is not a suggestion. It is the standard. If you are an AI agent contributing to this project, treat every section below as a hard constraint on your output.

---

## 0. The North Star

The Hallery must feel like the intersection of five references. Internalize each — they are the taste we are calibrated to:

| Reference | What we take from it |
|-----------|----------------------|
| **Aman Resorts** | Stillness. Negative space as luxury. Restraint. The confidence to show almost nothing. |
| **Apple** | Precision. Obsessive alignment. Scroll-driven storytelling. Product shown like a hero. |
| **Four Seasons** | Warmth. Human hospitality. Photography of people and place, not just architecture. |
| **National Geographic** | Editorial gravity. Full-bleed imagery. Typography that respects the reader. Story first. |
| **Louis Vuitton** | Craft. Monogram-level attention to detail. Motion that feels expensive, never busy. |

### We NEVER ship anything that reads as:
- Bootstrap or any visible CSS framework
- WordPress / page-builder aesthetics
- Generic hotel-booking-site tropes (rotating carousels of stock smiles, TripAdvisor badges, cluttered CTAs)
- Template UI (default rounded cards, drop shadows on everything, "hero + 3 features + testimonials")
- Basic cards with a border, a shadow, and centered text

**The test:** *Would this appear on aman.com or louisvuitton.com?* If not, it does not ship. Every component must feel handcrafted. Every animation must have a purpose. Every scroll must tell a story.

---

## 1. Brand Vision

- **Who we are:** The Hallery is a rare, place-driven luxury resort. It is not a hotel that happens to be nice — it is a destination with a soul, a landscape, and a point of view.
- **The feeling we sell:** *Arrival.* The moment the noise of the world drops away. Space, light, quiet, and a sense that everything has been considered on the guest's behalf.
- **Voice:** Understated, literary, confident. We speak the way a great host speaks — warm but never eager, precise but never clinical. We do not sell; we invite.
- **What we are not:** Loud, discounted, urgent, gimmicky, or busy. No exclamation marks. No "Book now and save!" No countdown timers. Scarcity is implied by quality, never manufactured.
- **The one-line promise:** *Somewhere the world finally goes quiet.*

## 2. Design Philosophy

1. **Space is the primary material.** Negative space is not empty — it is luxury made visible. When in doubt, remove, don't add.
2. **Photography leads; UI serves.** The imagery is the hero. Interface elements are quiet supporting cast — thin, minimal, deferential.
3. **One idea per view.** Each screen/section makes a single point. We never crowd two competing messages into one moment.
4. **Story over layout.** The page is a narrative sequence, not a bento box of features. Scroll is the plot.
5. **Restraint is the flex.** The confidence to leave things out is what separates us from every "premium template." Less, but better.
6. **Craft is felt, not seen.** Optical alignment, letter-spacing, easing curves — the details no one names but everyone feels.

## 3. UI Rules

- **Full-bleed imagery** is the default hero treatment. Images run edge-to-edge; never box a photo inside a card with a border.
- **Thin, quiet chrome.** Lines are hairlines (1px, low-opacity gold/ink). Borders are rare and deliberate. No drop shadows for decoration — shadow only implies real elevation and stays soft and diffuse.
- **No rounded-corner card grids.** Prefer sharp or barely-softened edges (0–2px radius). Rounded "app card" aesthetics are banned.
- **Asymmetry over centered symmetry.** Offset compositions, editorial grids, generous margins. Centered layouts are used sparingly and intentionally (e.g., a single statement).
- **Text over image** must always have guaranteed contrast via a gradient scrim, never a flat 50% black box.
- **CTAs are rare and calm.** One primary action per view. Buttons are text-forward, letter-spaced, understated — never a loud pill with a gradient.
- **No visual clutter:** no badges, no ribbons, no "as seen in" logo soups, no social-proof widgets crammed above the fold.

## 4. Typography Rules

- **Type pairing:**
  - **Display / headings:** a high-contrast serif (currently **Cormorant Garamond**) — editorial, literary, National-Geographic-adjacent. Weights 400–600.
  - **Body / UI:** a clean humanist/geometric sans (currently **Jost**) — quiet, modern, Apple-adjacent. Weight 300 for body, 400 for UI labels.
- **Hierarchy is created by scale and space, not weight.** We rarely go bold; we go bigger and give it room.
- **Fluid type:** use `clamp()` for all headings and lead paragraphs so type scales smoothly across viewports.
- **Letter-spacing:**
  - Serif headings: near-default to slightly tight (`0.01em`).
  - Sans eyebrows/labels/nav: wide tracking (`0.14em`–`0.4em`), uppercase, small size. This is a signature detail — use it consistently.
- **Line length:** body copy caps at ~60–70ch. Never let paragraphs run the full width of a wide viewport.
- **Line height:** body `1.7`; headings `1.05–1.15`.
- **Italics** of the serif, colored in gold, are our accent device for a single emphasized word. Use sparingly.
- **No** more than two typefaces. **No** system-font fallbacks as the primary look. **No** all-caps body copy.

## 5. Color Palette

The palette is warm, earthy, and low-contrast-by-default — think stone, linen, candlelight, and gold leaf. Defined as tokens in `:root` (`styles.css`). **Always use the token; never hard-code a hex.**

| Token | Value | Role |
|-------|-------|------|
| `--ink` | `#1a1712` | Primary text, deepest dark |
| `--charcoal` | `#211d18` | Dark section backgrounds |
| `--gold` | `#c6a15b` | Accent, eyebrows, hairlines, emphasis |
| `--gold-soft` | `#d9be86` | Hover/lighter gold |
| `--gold-ink` | `#8a6a2c` | Darker gold — small text/labels on light surfaces (meets AA) |
| `--cream` | `#f6f1e7` | Light text on dark, soft surfaces |
| `--cream-dark` | `#ece3d2` | Alt light surface |
| `--paper` | `#fbf9f4` | Default page background |
| `--muted` | `#8b8175` | Secondary text, captions |
| `--line` | `rgba(198,161,91,0.28)` | Hairline dividers/borders |

**Rules:**
- The site breathes on **paper/cream** with **ink** text, punctuated by **charcoal** dark sections for drama.
- **Gold is a seasoning, not a sauce** — accents, hairlines, one emphasized word. Never large gold fills of text or gold gradients.
- **No pure black (`#000`) and no pure white (`#fff`).** Everything is warmed.
- No new colors without updating this table and the `:root` tokens together. No per-component one-off colors.

## 6. Animation Rules

Motion is expensive-feeling, slow, and purposeful — closer to a film dissolve than a UI "pop."

- **Purpose test:** every animation must answer *what story beat does this serve?* Decoration-only motion is rejected.
- **Signature easing:** `--ease: cubic-bezier(0.16, 1, 0.3, 1)` (a soft, confident deceleration). Use it for essentially all transitions. Avoid linear and avoid bouncy/overshoot easings.
- **Durations:** entrances `0.8–1.2s`; hovers/UI `0.3–0.4s`. Nothing snappy or springy. Luxury moves slowly.
- **Scroll storytelling:** content reveals gently on scroll (fade + small upward translate, ~24–28px). Reveals fire once, then persist. Parallax and pinned sequences are allowed **only** when they advance the narrative, never as gimmicks.
- **Hover:** subtle — a 2–8px lift, a slow image scale (≤1.03), a gold underline drawing in. No color inversions that flash.
- **No** carousels that auto-rotate aggressively, no marquees, no confetti, no attention-grabbing loops (the hero scroll-cue is the one small ambient exception).
- **Reduced motion is a first-class path** — see §10. Every animation must have a graceful, fully-visible reduced-motion fallback.

## 7. Spacing Rules

- **Generosity is the rule.** White space is the luxury signal. When unsure, add space.
- **Section rhythm:** vertical section padding via `clamp(4.5rem, 9vw, 8rem)`. Sections are large, calm, and well-separated.
- **Spacing scale** (use these steps, avoid arbitrary values): `0.5, 1, 1.4, 2, 2.6, 4, 6, 8 rem`.
- **Container:** max width `1200px`, gutter `28px` desktop / `20px` mobile. Content never touches the viewport edge except deliberate full-bleed media.
- **Alignment discipline:** everything snaps to a consistent baseline/grid. Optical alignment beats mathematical alignment when they disagree.
- **Breathing room around type:** headings get space above and below; eyebrows sit ~`1.1rem` above their heading.

## 8. Component Rules

Every component is bespoke. Before building, ask: *does this already exist in the system, and does it feel handcrafted?*

- **Buttons:** text-forward, uppercase, wide-tracked, hairline or solid-gold fill for the single primary action. No gradients, no heavy radii, no icon clutter. Variants: `.btn-gold` (primary), `.btn-ghost` (on dark imagery), `.btn-sm` (inline).
- **Eyebrow:** small uppercase gold label above headings — a signature motif. Use to title sections.
- **Suite / room "cards":** editorial panels, not template cards — full-bleed image, restrained metadata as tracked-uppercase tags, one price, one quiet CTA. No border-box-shadow-center-text cards.
- **Section header:** eyebrow + serif `h2` + optional muted sub-line, centered only when making a single statement.
- **Navigation:** fixed, transparent over the hero, condensing to a translucent charcoal bar on scroll. Wide-tracked uppercase links. Mobile = full-height slide-in panel.
- **Forms:** flat, hairline-bordered inputs, uppercase tracked labels, gold focus ring (border, not glow). Zero rounded "material" fields.
- **Galleries:** asymmetric editorial grid (varied spans), slow hover scale. Never a uniform equal-box thumbnail grid.
- **New components** must be documented here and built from existing tokens/patterns. No importing a UI library.

## 9. Interaction Rules

- **Feedback is immediate but calm** — state changes ease in over 0.3–0.4s, never instant-snap, never slow enough to feel laggy.
- **Focus is always visible** and beautiful (gold hairline focus states), never removed.
- **Forms:** validate on submit, guide gently, surface a single clear message in an `aria-live` region. Dates enforce logic (checkout after checkin, no past dates). Confirmations are warm and human ("Thank you, {name}. Our concierge will confirm…").
- **Scroll is the primary interaction** — the page rewards it with story. Anchored in-page nav uses smooth scroll (disabled under reduced motion).
- **No dark patterns.** No fake urgency, no pre-checked upsells, no guilt-decline copy, no interstitials that trap the user.
- **Nothing blocks the user:** no auto-popups, no modal newsletter traps on load, no autoplaying audio.

## 10. Accessibility Rules

Accessibility is part of luxury — it is hospitality for everyone. Target **WCAG 2.1 AA**.

- **Contrast:** all text meets AA. Be especially careful with **gold on light** — verify each usage; reserve small gold for large/decorative text and use `--ink`/`--muted` for readable body.
- **Semantics:** correct landmarks (`header`, `nav`, `main` sections, `footer`), logical heading order, meaningful `alt` on real images, labels on every field.
- **Keyboard:** every interactive element reachable and operable by keyboard; visible focus; logical tab order; mobile nav toggle exposes `aria-expanded`.
- **Motion:** honor `prefers-reduced-motion: reduce` — neutralize transitions/animations, disable smooth scroll, show all `.reveal` content immediately, remove hover lifts/scales. This is implemented in both CSS and JS and must stay working.
- **Status messages** use `aria-live`. Icons that carry meaning get accessible names.
- **Progressive enhancement:** the site is readable and usable with JS disabled or failed.

## 11. Performance Rules

Fast is elegant. A luxury site that hangs is a contradiction.

- **Budgets:** aim for LCP < 2.5s, CLS < 0.1, and a lean payload. Hero image is the LCP element — optimize it hardest.
- **Images:** serve modern formats (WebP/AVIF), correctly sized per breakpoint, `loading="lazy"` for below-the-fold, explicit dimensions to prevent layout shift. Compress ruthlessly; luxury ≠ heavy.
- **No frameworks/bundlers** unless a documented decision changes the stack. Ship only the CSS/JS actually used.
- **Fonts:** subset and `preconnect`; use `font-display: swap`; limit weights loaded to those in use.
- **Motion is GPU-friendly:** animate `transform`/`opacity` only. Never animate layout properties (top/left/width/height) in loops.
- **No render-blocking third-party scripts** above the fold. Analytics and non-critical scripts load deferred/async.

## 12. SEO Rules

- **Every page** has a unique, human `<title>` and meta `description` written in brand voice.
- **Semantic HTML** and a single `<h1>` per page; descriptive headings that also serve search.
- **Open Graph + Twitter cards** with a striking share image for every shareable page.
- **Structured data:** `Hotel`/`Resort` + `LocalBusiness` JSON-LD (name, address, geo, price range, amenities) once real data exists.
- **Image SEO:** descriptive `alt` and filenames (see §15). **Canonical URLs**, clean human-readable slugs, and a sitemap when the site goes multi-page.
- **Performance is SEO** — the §11 budgets are also ranking factors. Don't sacrifice Core Web Vitals for decoration.
- Never keyword-stuff or write copy for robots over humans; brand voice always wins.

## 13. Mobile Rules

Mobile is not a shrink — it is a re-composition. It must feel as considered as desktop.

- **Breakpoints:** `900px` (tablet / nav collapses to slide-in panel) and `560px` (phone). Keep new rules inside these existing queries.
- **Touch targets** ≥ 44×44px; comfortable spacing; no hover-dependent functionality.
- **Full-bleed imagery still leads;** editorial layouts re-stack into a single elegant column, media often moving above text.
- **Type stays generous** — do not crush headings; let them remain the statement they are on desktop.
- **The mobile menu** is a full-height, quiet slide-in with wide-tracked links — never a cramped dropdown.
- **Test every change** at 360px, 560px, 900px, and wide desktop before it is "done."

## 14. Coding Standards

- **Stack:** semantic HTML5, modern CSS (custom properties, `clamp`, grid/flex), vanilla JS. **No jQuery, no CSS frameworks, no build step** unless this document is amended.
- **CSS:**
  - All design values come from `:root` tokens — **never hard-code colors, fonts, or the easing curve.**
  - Class naming is descriptive and consistent (component + role, e.g. `.room-card`, `.section-head`). Keep it readable; match existing style.
  - Group related rules; comment section boundaries (`/* ===== Name ===== */`). Keep specificity low; avoid `!important` except in the reduced-motion override.
- **JavaScript:**
  - Vanilla, progressively enhancing. Guard for missing elements. Feature blocks commented in the `// ===== Name =====` style.
  - No dependencies without a documented decision. Keep DOM queries at the top of each block.
- **HTML:** semantic elements, stable `id`s (they are nav anchors — renaming one means updating nav + footer), accessible attributes on every interactive/media element.
- **General:** small, purposeful diffs; match surrounding code; no dead code; no secrets committed (watch `.claude/`).

## 15. File Naming Standards

- **Case:** lowercase, hyphen-separated (kebab-case). No spaces, no camelCase, no PascalCase in asset/file names.
- **Structure (as the project grows):**
  ```
  /               index.html, styles.css, script.js, PROJECT_RULES.md
  /assets/img/    photography and graphics
  /assets/fonts/  self-hosted fonts (if adopted)
  /assets/icons/  svg icons
  ```
- **Images:** describe subject + context + variant, e.g. `suite-riverside-deluxe-terrace.webp`, `hero-estate-dusk.webp`. Include a size suffix only when multiple sizes exist: `hero-estate-dusk-1920.webp`.
- **Sections/pages** (if multi-page): `slug.html` matching the nav anchor (`dining.html`, `suites.html`).
- **No** generic names (`image1.jpg`, `final_v2.png`, `Untitled.css`). A filename should tell you what it is without opening it.
- **CSS/JS:** keep single-file for now; if split becomes necessary, name by concern (`nav.js`, `reveal.js`) and document the change here first.

---

## Amending This Document

This is a living standard, but not a casual one. To change a rule: update the relevant section **and** the corresponding code/token in the same change, and note *why*. Consistency across the system is worth more than any single clever exception.

*The Hallery is judged by what we had the discipline to leave out.*
