# Style Guide

Source of truth for tokens: [`tokens.css`](./tokens.css). Component specs: [`components.md`](./components.md). Live preview: [`preview.html`](./preview.html). Reference: [`references/1.png`](./references/1.png).

## Brand premise

An independent specialty coffeehouse — small-batch, a little playful, more interested in being a good counter than a big brand. The site's one job is to make the menu look good enough to order from and easy enough to order from in three taps. Audience is the regular checking what's new today, not a tourist being sold a lifestyle.

## Principles

- **Warm, not loud.** Cream and espresso carry the page; terracotta is spent on a handful of moments per screen, never as a wash.
- **Round vessels.** Cups, lids, mugs are round. Buttons, badges, and cards borrow that geometry instead of sharp corners.
- **Illustration over stock photography.** The product art is painterly and a little hand-made, not studio photography — see [Imagery](#imagery--iconography).
- **One hand-drawn accent, used sparingly.** The steam mark (see [Signature](#signature-the-steam-mark)) is the brand's single whimsical flourish. It doesn't compete with anything else.
- **Plain, active copy.** See [Voice](#voice--microcopy).

## Color

| Token | Hex | Role |
|---|---|---|
| `--color-paper` | `#FBF4EC` | Card and panel surfaces sitting on the cream background |
| `--color-cream` | `#F6E8D6` | Page background |
| `--color-cream-deep` | `#EFDBC0` | Banded sections (promo strips, footers), input fills |
| `--color-clay` | `#E3C29C` | Hairline borders, dividers, disabled fills |
| `--color-espresso` | `#2A1B12` | Primary text, headings, primary button fill |
| `--color-roast` | `#6B4E3D` | Secondary / muted text |
| `--color-terracotta` | `#D9713F` | Accent: CTA icon, price, link, active state |
| `--color-terracotta-deep` | `#B6552A` | Hover/active/focus on the accent |

Category accents — a small secondary palette for badges and filter chips only. Don't use these for body text, buttons, or links; they exist to tell menu categories apart at a glance, not to extend the core UI palette.

| Token | Hex | Suggested use |
|---|---|---|
| `--color-accent-olive` | `#A6873D` | Coffee |
| `--color-accent-pine` | `#3E7A5C` | Drinks / tea |
| `--color-accent-rose` | `#C5577A` | Bakery |
| `--color-accent-amber` | `#E0A23D` | Specials / seasonal |

**Contrast rules:**
- `espresso` and `roast` on `cream` / `paper` both clear 4.5:1 — safe for body text at any size.
- `terracotta` on `cream` sits close to 3:1. Use it for large/bold display text (≥24px or ≥18px bold), icons, and graphical accents only. Never for body copy, never for small labels.
- Category accents are fills behind white or espresso icon glyphs, not text colors.

## Typography

Two faces, used off-label in one place on purpose:

| Role | Font | Weight | Size / leading / tracking | Used for |
|---|---|---|---|---|
| Display XL | Unbounded | 700 | `text-display-xl` — 72px / 1.02 / -2% | Hero headline |
| Display LG | Unbounded | 700 | `text-display-lg` — 44px / 1.05 / -1.5% | Section headings |
| Display MD | Unbounded | 600 | `text-display-md` — 28px / 1.15 / -1% | Card / feature titles |
| Body LG | Geist Sans | 400 | 18px / 1.6 | Intro paragraphs, hero subhead |
| Body MD | Geist Sans | 400 | 16px / 1.6 | Default body copy |
| Body SM | Geist Sans | 400 | 14px / 1.5 | Secondary copy, helper text |
| Label | Geist Mono | 500 | 12px / 1.4 / +4%, uppercase | Eyebrows, nav links, category labels |
| Price | Geist Mono | 600 | 16–20px / 1 | Prices, anywhere a number needs to read like a menu board |

**Pairing rationale.** Unbounded's letterforms are rounded and a little blobby — the same geometry as the cups and lids this brand sells — so it's reserved for headlines where that personality reads as intentional, not used at body size where it would slow reading down. Geist Sans stays quiet for everything else; it's already wired into the project via `next/font/google`, so body text costs nothing new. Geist Mono — also already loaded — gets repurposed off its usual "code" role into the brand's "menu board" voice: prices, eyebrows, and category labels all get the tabular, slightly mechanical rhythm of a chalkboard menu or a receipt, which is a real texture in a coffee shop and a free reuse of a font this project doesn't need to add.

Unbounded is the one new font this system asks for. Add it via `next/font/google` next to the existing Geist imports in `app/layout.tsx` (see the header comment in `tokens.css`).

## Shape & elevation

- **Pills** (`rounded-full`) — buttons, search fields, filter chips.
- **Circles** (`rounded-full` + `aspect-square`) — category badges, icon buttons, avatar-style product thumbnails.
- **Cards** (`rounded-card`, 28px) — the one custom radius in the system; for anything bigger than a chip but not a full circle.
- No hard 1px borders on cards — separation comes from `shadow-soft` and the `paper`/`cream` surface shift. Reserve hairline borders (`--color-clay`) for dividers and input outlines.
- Shadows are warm-tinted (`shadow-soft` resting, `shadow-lift` on hover), never neutral black — keeps elevation consistent with the palette instead of looking bolted on.

## Motion

| Token | Value | Use |
|---|---|---|
| `--ease-brew` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default easing — decelerates without overshoot, reads as a pour rather than a bounce |
| `duration-150` | 150ms | Hover/focus state changes |
| `duration-240` | 240ms | Card lift, menu open/close |
| `duration-420` (slow) | 420ms | The steam mark's ambient loop only |

One orchestrated moment beats several small ones: if the hero animates on load, stagger the headline, then the product art, then the CTA — don't animate every element independently. Wrap all non-essential motion (the steam mark, hover lifts beyond a simple color change) in `prefers-reduced-motion: reduce` and fall back to instant state changes.

## Imagery & iconography

Primary direction: painterly, warm-graded illustration (as in the reference), not studio photography and not flat vector icons — drinks should look hand-painted, with visible brushwork and a moody backlight, not airbrushed. Each hero/feature illustration sits on a soft accent-colored disc (one of the category accents at low opacity, or `cream-deep`), occasionally with a hand-drawn crumb, leaf, or steam-mark flourish at the edge — never centered, never more than one per image.

Category badges pair a solid accent-colored circle with a simple two-tone icon (line + one fill, not three) and a Geist Mono uppercase label beneath. See [`components.md`](./components.md#category-badge).

If illustrated assets aren't available for a given product, the fallback is photography, warm-graded to match the palette, cropped to a circle or soft rounded square on a `cream-deep` backdrop, with the same `shadow-soft` treatment as illustrated art — never a hard rectangular product photo dropped onto the cream background.

## Signature: the steam mark

A thin, hand-drawn wavy line — the one whimsical flourish the brand is allowed. It's literally what rises off a good cup of coffee, so it's earned rather than decorative.

- 2px stroke, single color (`espresso` on light fills, `terracotta` as a rarer highlight), never filled.
- Three approved uses: (1) a section divider in place of a hard rule, (2) an ambient rise-and-fade loop above a cup icon or hero illustration, (3) a hover trace under a nav link or footer CTA.
- One instance visible at a time per viewport. If the hero already has one, the divider below it stays a plain rule.
- Never use it as generic decoration to fill empty space — if it's not doing one of the three jobs above, leave the space empty.

## Voice & microcopy

Plain, active, specific. Name things by what the person is doing, not by what the system is doing.

| Generic | This brand |
|---|---|
| "Submit order" | "Place order" |
| "Item added to cart successfully" | "Added to your order" |
| "Error: payment failed" | "That card didn't go through. Try another." |
| "No items found" | "Nothing here yet. Try a different filter." |

- Buttons say what happens, and the confirmation echoes the button's own word ("Add to order" → toast reads "Added to order", not "Item successfully added").
- Errors state what went wrong and what to do next, in the brand's plain voice — never an apology, never a stack trace.
- Empty states are an invitation, not a dead end: say what's missing and offer the next action (clear filters, browse the full menu).

## Accessibility floor

- Text contrast per the [Color](#color) rules above; don't use terracotta for small or normal-weight text.
- Visible focus on every interactive element: 2px solid `terracotta-deep` ring, 2px offset, on cream/paper surfaces; 2px `cream` ring on espresso-filled surfaces (e.g. the primary button).
- Minimum 44×44px hit target for icon buttons and category badges, even where the visible circle is smaller.
- All ambient motion (steam mark, hero stagger) respects `prefers-reduced-motion: reduce`.
- Illustrations are decorative by default (`alt=""`) unless they're the only signal for a product name/price, in which case the surrounding text carries that information instead of relying on alt text.
