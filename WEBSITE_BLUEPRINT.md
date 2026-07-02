<!--
  THE HALLERY — WEBSITE BLUEPRINT (CREATIVE DIRECTION)
  A cinematic scroll-journey blueprint for the landing page. This is a vision & UX
  document — NOT code. It is authored to the real brand (see BRAND_CONTEXT.md) and the
  design standards (see PROJECT_RULES.md). Ambition: the finest luxury-resort landing
  page in India — a film you scroll through, not a website you read.
-->

# The Hallery — Website Blueprint
### The Cinematic Scroll Journey

> A 260-acre heritage coffee estate in the hills of Coorg — once the seat of the Haleri kings, growing coffee since 1863. This page should not *describe* that. It should let you *feel* it: mist lifting off the plantation, the hush of the hills, the warmth of an old bungalow at dusk. The visitor arrives carrying the noise of the world. By the time they reach "Book Now," the noise should be gone.

---

## Creative North Star

- **The idea:** *A place where the hills fall quiet.* Every section is a breath in that stillness.
- **Reference register:** Aman (restraint, negative space) · Apple (scroll storytelling, precision) · National Geographic (editorial photography, gravity) · Louis Vuitton (craft, expensive motion) · Four Seasons (human warmth).
- **The rule:** the photography is the film; type and UI are subtitles. We never crowd the frame. We let images breathe and let silence do the selling.
- **Art direction:** natural, earthy, misted. Plantation greens, coffee browns, warm bungalow gold, cream, and near-black charcoal. No pure black or white. Gold is a seasoning, never a sauce.
- **Type system:** a high-contrast serif for emotion and display (editorial, literary); a quiet humanist sans for orientation and UI (wide-tracked uppercase eyebrows are the signature). Hierarchy through scale and space, not weight.
- **Motion language:** slow, filmic, purposeful. Long dissolves, gentle parallax that echoes drifting mist, reveals that feel like breathing. Nothing bounces, nothing snaps. Every animation has a narrative reason — and a graceful `prefers-reduced-motion` fallback where content simply appears, fully legible.
- **Sound (optional, opt-in):** an ambient bed — birdsong, distant water, rain on leaves — behind a small, unobtrusive mute toggle. Never autoplays with volume; silence is the default and the luxury.

---

# THE SCROLL JOURNEY

---

## 1 · Loading Experience

- **Purpose:** Convert the unavoidable load wait into the first beat of the story — a threshold the visitor crosses, not a spinner they endure.
- **User Emotion:** Anticipation. A held breath. "I'm about to arrive somewhere."
- **Story:** The world goes dark and quiet. A single monogram catches the light — *TH* — as if a lantern were lit on a dark verandah. The estate name settles beneath it. Then the dark lifts like morning mist, and the hills appear.
- **Layout Description:** Full-screen charcoal field. Dead-centre: the *TH* mark, hairline-drawn, with "The Hallery · Coorg" beneath in wide-tracked caps. A slim progress hairline (not a percentage) breathes along the base.
- **Animation Ideas:** Monogram strokes draw themselves in; a soft gold glow blooms once. On completion, the whole overlay lifts/fades upward (a mist-clearing wipe) to unveil the hero already settling behind it — a seamless cut, not a jump.
- **Background:** Solid charcoal (`--ink`/`--charcoal`), faint film grain, optional slow-drifting mist texture at low opacity.
- **Typography Style:** Serif monogram; sans, wide-tracked, uppercase for the name. Small, centered, weightless.
- **CTA:** None. The only action is patience. (The overlay auto-dismisses; it never traps.)
- **Mobile Behaviour:** Identical, simplified — smaller monogram, the mist-clear wipe kept short (≤1.2s) so mobile visitors aren't delayed. If assets are cached, the loader is skipped entirely; it must never gate a returning visitor.

---

## 2 · Hero

- **Purpose:** The establishing shot. Place the visitor *in* Coorg, above the estate, in one breath — and state who we are with total confidence.
- **User Emotion:** Awe, then calm. The exhale. "Oh."
- **Story:** You are floating above a sea of forested hills at dusk. Mist pools in the valleys; a pink-gold sky burns low. Far below, half-hidden in the trees, the lit roofs of an old bungalow. That is where you are going.
- **Layout Description:** Full-bleed cinematic image (the aerial estate at dusk). Content sits lower-left / lower-centre with generous margin: a gold eyebrow ("Haleri · Coorg · Since 1863"), a large serif headline with one italic gold word, a single quiet lead line, and two calm CTAs. A minimal scroll cue at the base.
- **Animation Ideas:** Slow, almost imperceptible Ken Burns push-in on the image (a breath, not a zoom). Headline rises word-by-word on a soft ease. Scroll cue drifts gently. On scroll-out, the hero holds slightly (parallax lag) as the next section slides over it — a film dissolve between scenes.
- **Background:** The dusk aerial, with a top-and-bottom gradient scrim (never a flat box) guaranteeing text contrast.
- **Typography Style:** Oversized high-contrast serif headline; wide-tracked uppercase eyebrow; small sans lead. Maximum air around every line.
- **CTA:** Primary — **"Enquire About a Stay"** (solid gold). Secondary — **"Explore the Estate"** (ghost). Both understated, letter-spaced, calm.
- **Mobile Behaviour:** Image re-composes to a portrait crop that keeps the bungalow and horizon; headline scales fluidly but stays a statement; CTAs stack full-width with comfortable tap targets. Ken Burns reduced; scrim strengthened for readability on smaller screens.

---

## 3 · Introduction

- **Purpose:** The soft landing after the awe — orient the visitor emotionally and set the tone of voice. Answer "what is this feeling?" before "what is this place?"
- **User Emotion:** Reassurance, intimacy. The sense of being personally welcomed.
- **Story:** A quiet, first-person welcome. Not a sales pitch — a host speaking softly: *this is a place that has been kept, not built; a working estate where time slows and everything has been considered on your behalf.*
- **Layout Description:** Deliberately sparse. A single short paragraph of serif prose, centred or set left with vast negative space around it — one idea alone on a generous canvas. Perhaps one small, off-centre supporting image (a bungalow verandah at dusk) to anchor the eye.
- **Animation Ideas:** Text fades up line-by-line as it enters view (slow, ~1s). The supporting image reveals with a gentle mask-wipe or slow parallax drift. White space itself is part of the choreography — nothing rushes to fill it.
- **Background:** Warm paper / cream. Calm, bright, breathing — a deliberate tonal lift after the dark hero.
- **Typography Style:** Larger-than-usual serif body, literary and unhurried; a wide-tracked eyebrow ("Welcome") above. Short lines, generous leading.
- **CTA:** None, or a single quiet text link ("Read our story ↓") that simply nudges the scroll onward.
- **Mobile Behaviour:** Full-width single column, ample vertical padding preserved (do not crush the air). Supporting image moves above or below the text; type stays generous — the calm must survive the small screen.

---

## 4 · The Estate Story

- **Purpose:** Convey scale, authenticity, and place — this is a *real* 260-acre working coffee and spice estate, not a resort dressed as one.
- **User Emotion:** Immersion and spaciousness. "This is vast, real, and alive."
- **Story:** The land itself. Coffee and spice under shade forest; twelve-plus acres you could walk for days; a private waterfall in the trees; birdsong, mist, red earth. A place with weather and seasons, tended by a family.
- **Layout Description:** Editorial, asymmetric. Full-bleed or large landscape imagery interleaved with short text blocks that sit *within* the imagery's negative space. A running set of quiet facts (260 acres · working plantation · private waterfall) anchored as a thin figure row.
- **Animation Ideas:** Layered parallax — foreground foliage, midground plantation, background hills drift at different speeds as you scroll, recreating depth and the feel of moving through the estate. Numbers count up softly once in view. A horizontal image band may pan slightly with scroll.
- **Background:** Plantation greens and earthy tones; imagery-led. May transition from cream into a deeper natural tone as you descend "into" the estate.
- **Typography Style:** Serif sub-headlines; small sans captions and figure labels. Text is deferential to the photography.
- **CTA:** Soft — **"Wander the Estate"** or a scroll-onward cue. No hard ask here; we're still immersing.
- **Mobile Behaviour:** Parallax reduced to simple, tasteful offsets (performance-safe); images stack full-width; the fact row wraps to a tidy stacked trio. Depth is implied through sequence rather than heavy motion.

---

## 5 · Heritage Timeline

- **Purpose:** Establish depth and legitimacy — a lineage no new resort can manufacture: royalty, colonial-era coffee, and family restoration.
- **User Emotion:** Reverence and intrigue. "This place has *history*."
- **Story:** Four movements in one continuous thread of custodianship: **the Haleri kings** (Coorg's last sovereigns, whose seat this was) → **1863**, when the English planter **Frank Mangles** brought coffee to these slopes → **the 1960s restoration** of the planter bungalows by the family → **today**, a living, working heritage estate.
- **Layout Description:** A vertical (desktop: alternating left/right) timeline. Each milestone: a year set large in serif, a short caption, and a single archival-feeling image (sepia-warm, grainy). A hairline spine runs down the centre, drawn as you scroll.
- **Animation Ideas:** The timeline spine "draws" downward tied to scroll progress; each milestone fades and rises as it's reached, its year settling with weight. Images develop from desaturated to warm tone as they enter view (a photograph coming to life). Subtle pinned-scroll: the section may hold while the eras advance.
- **Background:** Deep charcoal or aged-paper — an archival, museum-like hush. Warm, dim, considered.
- **Typography Style:** Very large serif years; small wide-tracked sans labels; short serif captions. The dates are the heroes.
- **CTA:** None — this is a moment to absorb, not act.
- **Mobile Behaviour:** Timeline collapses to a single left-aligned spine with milestones stacked vertically; years remain large; images full-width between them. Scroll-draw kept lightweight; under reduced-motion the full timeline is simply present and readable.

---

## 6 · Coffee Journey

- **Purpose:** Turn the estate's defining craft into a sensory experience — from crop to cup — and root it in heritage (this is where Coorg's coffee story began).
- **User Emotion:** Curiosity and craft-appreciation; a warm, sensory awakening.
- **Story:** Follow the bean through the year: blossom (white flowers, heady scent) → cherry (red, ripening in shade) → harvest (hands, baskets) → drying → roast → the cup in your hand on a misted verandah. A ritual, understood.
- **Layout Description:** A horizontal or step-pinned sequence — the visitor scrolls *through* the stages like frames of a reel. Each stage: one full-bleed macro image + one short line of text. Ends on the finished cup, warm and close.
- **Animation Ideas:** Scroll-driven horizontal progression (pinned section, vertical scroll advances stages). Macro images cross-dissolve; steam rises softly on the final cup; a thin "crop → cup" progress indicator advances. Optional: warm colour temperature increases slightly stage by stage, ending golden.
- **Background:** Earthy greens deepening to warm roast-brown and candlelit gold by the final frame.
- **Typography Style:** Small serif stage titles ("Blossom", "Harvest", "The Cup"); minimal sans sub-captions. Sparse — the macro imagery carries it.
- **CTA:** **"Walk the Plantation with Us"** — invites the guided crop-to-cup experience.
- **Mobile Behaviour:** Horizontal pinning converts to a clean vertical stack of full-screen stages (swipe/scroll one to the next), preserving the frame-by-frame rhythm without fragile pinning. Steam/transition effects simplified.

---

## 7 · Luxury Accommodation

- **Purpose:** Present the eight rooms as characterful, private, heritage spaces — desirable, intimate, and rare — without ever feeling like a room-rate grid.
- **User Emotion:** Longing and intimacy. "I want to wake up *there*."
- **Story:** Three named homes, not room types. **Mangles Bungalow** — four interconnected suites, four-poster beds, antiques, named for the man who first grew coffee here. **Rosarium Cottage** — rustic elegance, vaulted wood ceilings, opening toward the roses. **Cinnamon Cottage** — the same rustic grace, set among the spice trees. Eight rooms in all; every one opens to the plantation.
- **Layout Description:** Full-height, editorial "room stories" — one immersive image per stay with a small floating card of name, a sensory line, and understated details (four-poster beds, plantation views, vaulted ceilings). Not a 3-up card grid; each stay gets its own cinematic panel.
- **Animation Ideas:** Slow image scale on view; the detail card slides in gently from the frame edge. As you scroll between stays, images cross-fade. Hover (desktop) reveals a second interior frame with a slow dissolve. Light "warms" on the image as it settles, mimicking lamps coming on at dusk.
- **Background:** Warm interiors dominate; alternating light/dark panels to separate the three stays and keep rhythm.
- **Typography Style:** Serif stay names, wide-tracked uppercase detail tags, small sans descriptive line. Prices absent — "Rates on request" only.
- **CTA:** Per stay: **"Enquire"** (quiet, gold). No "Book Now" yet — desire first, transaction later.
- **Mobile Behaviour:** Each stay becomes a full-screen panel: image, then floating card beneath it. Hover-reveal replaced by a small swipeable image pair. Detail tags wrap; tap targets generous.

---

## 8 · Signature Experiences

- **Purpose:** Show that a stay here is a set of curated, personal moments — the estate arranged around the guest's pace.
- **User Emotion:** Warmth and anticipation; a little romance. "Imagine our evenings here."
- **Story:** Days shaped by hand: a guided coffee & spice walk at dawn; a private waterfall reached through the trees; a candlelight dinner beneath the stars; a bonfire after dark; a curated plantation picnic; sunrise yoga with the hills for company; the farm, the bees, the dairy.
- **Layout Description:** An immersive mosaic / editorial grid of experience moments — mixed portrait and landscape frames, each with a short evocative label. One "hero experience" (candlelight dinner or waterfall) may span full width as an anchor.
- **Animation Ideas:** Tiles reveal in a soft staggered cascade as the grid enters view. Gentle hover scale + a drawing-in gold underline on labels. The hero experience frame may hold a subtle looping ambient motion (firelight flicker, falling water) at low intensity.
- **Background:** Rich and varied — twilight blues, firelit ambers, forest greens. The most emotionally colourful section.
- **Typography Style:** Small serif experience titles over imagery; wide-tracked sans micro-labels. Restrained text; imagery leads the feeling.
- **CTA:** **"Plan Your Days"** — invites the concierge to curate a stay.
- **Mobile Behaviour:** Mosaic reflows to a single elegant column (or 2-up for small tiles); the hero experience stays full-width. Staggered reveals kept light; looping ambient motion disabled on mobile/reduced-motion for performance.

---

## 9 · Estate Gallery

- **Purpose:** A pure, wordless immersion — let the visitor simply *look*, and fall the rest of the way in.
- **User Emotion:** Wonder and desire; a wandering, unhurried gaze.
- **Story:** No narration. A curated sequence of the estate's best frames — mist, architecture, the Rosarium, coffee, interiors, water, light — as if flipping through a beautiful private album.
- **Layout Description:** An asymmetric editorial grid with varied spans (some tall, some wide), generous gutters, on a dark field so images glow. A lightbox opens any frame full-screen with quiet arrows.
- **Animation Ideas:** Images reveal with a gentle scale/opacity as they enter; slow hover zoom within their frame. Lightbox transitions are soft cross-fades, never hard cuts. Optional slow auto-drift for a marquee row. A subtle grain over the dark field for a filmic feel.
- **Background:** Deep charcoal — a gallery wall that makes the photography the only light in the room.
- **Typography Style:** Minimal — a small serif section title ("A Glimpse of the Estate"); optional whisper-light captions in the lightbox only.
- **CTA:** Soft — **"See More of the Estate"** (opens the full gallery / lightbox). No pressure.
- **Mobile Behaviour:** Grid becomes a 2-up masonry or a swipeable full-screen carousel; lightbox is full-screen with swipe. Hover zoom replaced by tap-to-open. Auto-drift disabled.

---

## 10 · Testimonials

- **Purpose:** Provide quiet, credible human proof — reassurance from people like the visitor — without breaking the spell.
- **User Emotion:** Trust and belonging. "People like me came here, and it changed them."
- **Story:** A few short, genuine guest voices — a honeymoon that went silent and slow; a family that fed the calves at dawn; a traveller who finally stopped checking their phone. Real, specific, understated.
- **Layout Description:** One testimonial at a time, centred, set as large serif pull-quotes with vast surrounding space — a single voice given room, like a line of poetry. A small attribution (first name, context) beneath. A faint estate image or texture may sit far behind.
- **Animation Ideas:** Quotes cross-fade slowly on an unhurried auto-advance (with a discreet manual control); each fades up as a whole, held long enough to actually read. No carousel arrows shouting for attention — the change is a slow dissolve.
- **Background:** Muted — soft cream or a very dark, dim image with heavy scrim. Calm and contemplative.
- **Typography Style:** Large italic serif for the quote; small wide-tracked sans for attribution. The words are the image here.
- **CTA:** None, or a gentle **"Read More Stories"** text link.
- **Mobile Behaviour:** Single quote, full-width, generous padding; auto-advance slowed further; swipe to change. Type remains large enough to feel like a statement, not a caption.

---

## 11 · Booking Experience

- **Purpose:** Turn accumulated desire into a personal enquiry — the emotional climax of the journey, framed as an invitation, never a transaction.
- **User Emotion:** Readiness and ease. "Yes. I want this. And it feels effortless."
- **Story:** The host extends a hand: *tell us your dates, and we'll craft the stay around you.* No prices, no urgency, no upsells — a considered, personal beginning to a real conversation.
- **Layout Description:** A calm, spacious form on a warm field, framed by a final atmospheric estate image (dusk verandah / mist). Fields are flat and hairline-bordered, grouped logically (name, contact, preferred stay, dates, guests, occasion, a note). A single confident primary action anchors it.
- **Animation Ideas:** The section arrives as a gentle settling, not a slam. Fields focus with a soft gold hairline (no harsh glow). On submit: a graceful confirmation that feels like a warm reply — a line of serif text fading in ("Thank you — our team will write to you personally"), not a jarring alert. Micro-feedback is calm and immediate.
- **Background:** Warm cream or a softly-scrimmed dusk image — inviting, intimate, safe.
- **Typography Style:** Serif section headline ("Plan Your Stay"), wide-tracked sans field labels, human helper text. Nothing clinical.
- **CTA:** Primary — **"Send Enquiry"** / **"Begin Your Stay"** (solid gold, confident, singular). This is the moment the whole page has been walking toward.
- **Mobile Behaviour:** Single-column form, large tap targets, native date/select controls, sticky primary button within thumb reach. Validation guidance is gentle and inline; the confirmation message replaces the form in place. A persistent slim "Enquire" bar may follow the visitor from mid-scroll on mobile so the action is always one tap away.

---

## 12 · Footer

- **Purpose:** Close the film gracefully — leave the visitor grounded, oriented, and quietly reassured, with every practical detail within reach.
- **User Emotion:** Calm resolution. The lights coming up softly after a good film.
- **Story:** The estate signs off like a gracious host at the door: where to find us, how to reach us, who we are (part of the Old Kent family of estates), and a last whisper of the promise — *somewhere the hills fall quiet.*
- **Layout Description:** A quiet dark field. The monogram/wordmark, a short closing line, and three tidy columns: Estate (address, Coorg), Reservations (phones, email), Getting Here (near Madikeri, ~5–6h from Bengaluru). Slim social links. A hairline separates a minimal legal line.
- **Animation Ideas:** Almost none — a gentle fade-up on entry. Perhaps the faintest slow mist drift behind the wordmark. Stillness is the statement; the motion budget is spent elsewhere.
- **Background:** Deepest charcoal / ink — the theatre lights down. Warm gold accents only.
- **Typography Style:** Serif wordmark; small wide-tracked sans for links and columns; whisper-light legal line. Understated to the last pixel.
- **CTA:** A final quiet **"Enquire"** and a tel/email — the door left open, not pushed.
- **Mobile Behaviour:** Columns stack into a clean single column; wordmark centred; tap-friendly phone/email links; legal line last. Restraint preserved — no dense link-farm footer.

---

# THE COMPLETE USER JOURNEY
### From the first second to "Book Now"

**Second 0 — the threshold.** The screen is dark and quiet. A lantern-lit monogram draws itself in. The visitor, still carrying the noise of wherever they came from, instinctively slows. *Something considered is about to begin.*

**The reveal.** The dark lifts like morning mist and the hills appear — a sea of forest at dusk, a bungalow glowing far below. The visitor exhales. This first *awe* is the hook: not a headline, a feeling. They understand in one breath that this place is real, remote, and rare.

**The welcome.** As they scroll, the tone softens to cream and a single quiet line speaks to them like a host. The pressure to evaluate drops away; they stop *shopping* and start *feeling*. Trust begins — not because we claimed anything, but because we didn't oversell.

**Into the land.** The estate opens around them — 260 acres, parallax depth, a working plantation, a private waterfall. *Immersion.* The place is vast and alive; they begin to imagine themselves inside it, small and calm beneath the trees.

**The lineage.** The heritage timeline gives that feeling *weight* — Haleri kings, 1863, Frank Mangles, a family's restoration. Now the calm has provenance. This isn't a resort that opened last year; it's a place that has been *kept*. Desire gains legitimacy.

**The craft.** The coffee journey turns knowledge into the senses — blossom to cherry to the warm cup on a misted verandah. The visitor can almost smell it. Appreciation deepens into wanting; the estate is no longer scenery, it's an experience they can taste.

**The longing.** The rooms arrive as homes, not products — four-poster beds, vaulted ceilings, roses and spice trees at the door. "I want to wake up *there*." This is where abstract desire becomes specific: a bed, a morning, a view. Crucially, we ask only for *interest* here ("Enquire"), never the sale.

**The life they'd live.** Signature experiences paint the days — dawn walks, a waterfall, candlelight under the stars, a bonfire. Romance and anticipation peak. They're no longer imagining a *stay*; they're imagining *their* stay — an anniversary, a honeymoon, a long-overdue silence.

**The wordless fall.** The gallery lets them simply look, and looking finishes the seduction. Then a few honest voices in the testimonials remove the last doubt: *people like me came here, and it was everything.* Trust is now complete.

**The invitation.** By the booking section, the visitor is emotionally ready before they see a single field. The form doesn't *convert* them — it *receives* them. No prices ambushed them, no timers pressured them; instead a host says "tell us your dates and we'll craft it around you." Saying yes feels like exhaling, not deciding.

**The close.** They click **Send Enquiry**. A warm serif line fades in — a personal reply, not a receipt. The footer lowers the lights gently, the door left open. They leave the page calmer than they arrived, already half-living a morning on the plantation.

**The arc, in one line:** *Awe → calm → immersion → reverence → craving → belonging → yes.* The visitor should never feel *sold to*. They should feel *invited* — and by the final section, the only natural response to an invitation this quiet and this considered is to accept.

---

*Grounded in [BRAND_CONTEXT.md] (story, facts, voice) and built to [PROJECT_RULES.md] (design system, motion, accessibility). Every animation here assumes a graceful reduced-motion fallback; the story must land fully even with all motion stripped away.*
