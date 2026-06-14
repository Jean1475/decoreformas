<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Decorreformas
description: Renovation and decoration studio — convert visitors into leads through craft, photography, and earned trust.
---

# Design System: Decorreformas

## 1. Overview

**Creative North Star: "The Arquitecta's Method"**

The measured precision of Spanish architectural practice applied to a renovation studio's landing page. Every section has one purpose. Photography is the primary evidence: finished spaces speak more than copy. The deep teal acts as a signature mark — the architect's ink — reserved for moments that demand attention: the hero, the primary CTA, key accent moments within sections. Against pure white, it commands without shouting.

The references are Linear, Vercel, and Stripe: typographic precision, clear hierarchy, trust communicated through restraint and competence. This system borrows that discipline and applies it to a physical craft. No SaaS ornament, no floating illustrations, no identical card grids. The design earns its complexity from photography and space, not decoration.

The system is choreographed: scroll-driven entrances are orchestrated to build a narrative, not applied uniformly as a mechanical reflex. Each section's reveal fits what it reveals — a portfolio image enters differently than a testimonial, which enters differently than a contact CTA. Reduced-motion users see a static version with no gating; content is always visible.

**Key Characteristics:**
- Deep teal on pure white — committed brand color used at 30–60% of surface on key screens
- Photography as the primary design element; layout clears the way for images
- Humanist sans typography with strong weight contrast — one family, no decorative mixing
- Choreographed scroll motion using a library (Framer Motion), never CSS-only
- Spanish copy, direct and conversational — no corporate filler
- One action per section — no double-purpose screens

## 2. Colors: The Arquitecta's Palette

The palette is built on a single committed brand color — deep teal (hue 188°, the anchor) — against pure white. A warm secondary acts as a counterpoint, used exclusively for small-scale accents (badges, pills, subtle links) to prevent monochrome flatness.

### Primary
- **Deep Architectural Teal** (`oklch(~0.34 0.090 188)` — [resolve to exact hex at implementation]): The primary brand color. Used for hero section backgrounds, primary CTA buttons (white text on teal fill), and key visual anchors. The signature of the studio. Dark enough to carry large type in white comfortably.

- **Teal Hover** (`oklch(~0.42 0.090 188)` — [resolve at implementation]): Hover state for primary buttons and interactive teal surfaces. Lighter by ~0.08 L.

### Secondary
- **Sage Olive** (`oklch(~0.62 0.110 140)` — [resolve at implementation]): A warm sage used exclusively for small accent elements: badges, status labels, secondary links. Hue 140° is Mediterranean — olive trees, botanical references — without crossing into "construction site" territory. White text on all filled badges.

### Neutral
- **Ink** (`oklch(~0.17 0.014 188)` — [resolve at implementation]): Body text. Near-black with a trace of the brand teal. Target ≥ 7:1 against white background.
- **Muted** (`oklch(~0.47 0.012 188)` — [resolve at implementation]): Secondary text, captions, metadata. Target ≥ 3.5:1 against white background.
- **Surface** (`oklch(~0.97 0.010 188)` — [resolve at implementation]): Alternate section background, sidebar panels, card fills. Barely-visible teal tint, never cream or sand. Distinguished from pure white only by feel, not by clear color.
- **Pure White** (`oklch(1.000 0.000 0)`, `#ffffff`): The primary background. Not 0.99, not warm-tinted. Exactly white.

### Named Rules
**The Committed Rule.** The deep teal is not a highlight; it is the identity. It is present on the page as a committed surface — hero, full-section bg, CTA fill — not as a border or accent stripe. If it appears in less than 20% of a screen's area, rethink the layout.

**The Anti-Cream Rule.** The page background is pure `#ffffff`. Any background shift toward sand, linen, parchment, or "warm white" (OKLCH chroma > 0.015 toward warm hues) is a failure mode. Warmth is carried by the sage accent and photography, not by the background.

## 3. Typography

**Body Font:** Single humanist sans — DM Sans or Plus Jakarta Sans preferred; Geist Sans (already installed) is the fallback if switching fonts is deferred. [Exact font confirmed at implementation.]

**Character:** One family, three weights. The hierarchy is built entirely on scale and weight contrast — no second family, no display serif, no decorative mixing. The precision references (Linear, Vercel, Stripe) all run on a single sans family; Decorreformas does the same with a warmer, less-geometric variant that stays professional without reading as a tech startup.

### Hierarchy
- **Display** (weight 700, `clamp(2.8rem, 6vw, 5.5rem)`, line-height 1.05, letter-spacing −0.03em): Hero headings only. `text-wrap: balance`. Never exceeds 5.5rem — above this it shouts. Dark teal or white depending on background.
- **Headline** (weight 600, `clamp(1.8rem, 3.5vw, 2.75rem)`, line-height 1.15): Section headings, major card headings. `text-wrap: balance`.
- **Title** (weight 600, `clamp(1.2rem, 2vw, 1.5rem)`, line-height 1.3): Sub-section titles, card headings, form labels.
- **Body** (weight 400, `1.0625rem` / `17px`, line-height 1.65): Primary prose. Max width 68ch. `text-wrap: pretty` on long blocks to prevent orphans.
- **Label** (weight 500, `0.8125rem` / `13px`, line-height 1.4, letter-spacing 0.01em): Buttons, navigation items, form field labels, metadata. No all-caps except deliberate short badges (≤ 3 words).

### Named Rules
**The One Family Rule.** One humanist sans, three weights (400 / 500–600 / 700). Adding a second typeface is prohibited unless it is a mono used exclusively for code or numerical data. Hierarchy through scale and weight only.

**The No-Caps Body Rule.** Uppercase is reserved for short labels and badges only. Sentences in all-caps are never used.

## 4. Elevation

The system uses **tonal layering, not shadows**, as the primary depth mechanism. The Surface token creates a mild lift without shadow; Committed teal sections create depth through color contrast, not shadow offset. A single shadow token — ambient-low — is reserved for floating elements only (modals, dropdowns, date pickers). Everything else is flat at rest.

### Shadow Vocabulary
- **Ambient Low** (`0 4px 24px oklch(0.17 0.014 188 / 0.10)` — [resolve at implementation]): Tinted shadow using the ink color at 10% opacity. Used only for elements that genuinely float: modal dialogs, dropdown menus. Not for cards.

### Named Rules
**The Flat-By-Default Rule.** Cards, panels, and section containers are flat at rest. Hover state may introduce Ambient Low only if the element is interactive and the shadow communicates lift. Static sections never cast shadows.

## 5. Components

*Components are not yet implemented. Re-run `/impeccable document` once code exists to capture real component tokens and HTML/CSS snippets for the live panel.*

## 6. Do's and Don'ts

### Do:
- **Do** use the deep teal as a committed background on the hero and at least one additional section. Its presence at scale is the brand identity.
- **Do** let photography dominate. Give images full-bleed or near-full-bleed treatment. Copy earns its presence; images do not need to earn theirs.
- **Do** use Framer Motion (or the `motion` package) for all scroll-driven animations. CSS-only transitions are permitted for hover/focus state changes only.
- **Do** write `@media (prefers-reduced-motion: reduce)` alternatives for every animated element. Never gate content visibility on a transition completing.
- **Do** set `lang="es"` on the root `<html>` element.
- **Do** write all copy in direct, conversational Spanish. Specific verbs, specific nouns. No anglicisms, no buzzwords.
- **Do** put white text on deep teal fills and sage olive badge fills. Both are saturated mid-to-dark tones; dark text on them reads muddy.
- **Do** keep body text at ≥ 4.5:1 contrast against its background at all times, including muted secondary text (verify `oklch(~0.47)` reaches ≥ 3.5:1).

### Don't:
- **Don't** use orange or yellow in any part of the palette. This is the construction company signal the brand explicitly rejects.
- **Don't** use corporate blue (hue ~220–240°) anywhere. The teal at 188° is the brand's cool color; a second blue-family color dilutes the identity and reads as startup-generic.
- **Don't** use ornamental serifs, gold tones, marble textures, or any visual language that reads as old-guard luxury real estate. The brand is modern and professional, not traditionalist.
- **Don't** build a hero with a big number, small label, and supporting stats. This is the SaaS metrics hero — a template with no place on a renovation landing page.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on any card or callout. Rewrite with a full border, a tinted background, or nothing.
- **Don't** apply `background-clip: text` with a gradient. Use a single solid color for all text.
- **Don't** place a small uppercase tracked eyebrow label above every section heading. One deliberate use is voice; a reflex on every section is AI grammar.
- **Don't** set the page background to anything other than pure `#ffffff`. Sand, cream, parchment, linen, "warm white" — all are prohibited. Photography and teal carry the warmth.
- **Don't** build a grid of identical cards with icon + heading + paragraph. Vary the layout; use photography, quotes, or numerical callouts to differentiate.
- **Don't** use glassmorphism (blurred translucent panels) decoratively. The system is flat with tonal layering; blur is not part of the vocabulary.
