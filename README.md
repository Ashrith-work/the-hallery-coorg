# The Hallery — Coorg

Cinematic luxury landing page for **The Hallery**, a heritage coffee & spice estate in Coorg. This repo is the **project foundation**: the full toolchain, theme, providers, and structure are in place; the 12 cinematic sections (see `WEBSITE_BLUEPRINT.md`) are built on top of it.

## Source of truth

Read these before writing UI:

- **PROJECT_RULES.md** — design system, tokens, code standards, accessibility & performance rules.
- **BRAND_CONTEXT.md** — brand story, audience, voice, canonical facts, per-section emotion.
- **WEBSITE_BLUEPRINT.md** — the cinematic scroll journey (the 12 sections + user journey).

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · GSAP · Framer Motion · Lenis · React Three Fiber · Three.js.

## Scripts

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint (next)
npm run typecheck  # tsc --noEmit
npm run format     # prettier
```

Copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_SITE_URL`.

## Structure

```
src/
  app/                 # App Router: layout, page, loading/error/not-found, sitemap/robots/manifest, globals.css
  components/
    ui/                # shadcn/ui primitives (Button, …)
    layout/            # Header, Footer (shells)
    sections/          # the 12 cinematic sections (to be built — see index.ts)
    providers/         # AppProviders → MotionProvider + SmoothScrollProvider
    three/             # React Three Fiber canvas foundation
    common/            # shared building blocks (SectionPlaceholder, …)
  context/             # SmoothScrollProvider (Lenis + GSAP ScrollTrigger)
  hooks/               # useMediaQuery, usePrefersReducedMotion, useScrollProgress, useLenis, …
  lib/                 # utils (cn), fonts, metadata
  config/              # site config + brand facts, animation tokens
  types/               # shared TypeScript types
public/images/         # estate photography (WebP + JPG)
legacy/                # the original static prototype (archived)
```

## Conventions

- **Design tokens** live in `src/app/globals.css` (`@theme`). Never hard-code colors, fonts, or the easing curve.
- **Motion** uses the signature easing `cubic-bezier(0.16, 1, 0.3, 1)` and honors `prefers-reduced-motion` everywhere.
- Fonts: **Cormorant Garamond** (serif/display) + **Jost** (sans/UI) via `next/font`.
- Breakpoints: `phone` (560px) and `tablet` (900px), plus Tailwind defaults.
