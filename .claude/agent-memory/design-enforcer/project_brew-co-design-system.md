---
name: brew-co-design-system
description: Brew & Co. coffee-shop marketing site — design system source of truth, stack, and known token/spec edge cases
metadata:
  type: project
---

Brew & Co. is a 3-page coffee-shop marketing site (Home, About, Menu). Stack: Next.js 16 App Router + Tailwind v4 (CSS-first `@theme` in `app/globals.css`), Geist Sans/Mono + Unbounded via `next/font/google`. No dark mode, no next-themes, no shadcn/ui, no `src/lib/constants.ts` — ignore the generic design-enforcer prompt boilerplate about those for this project.

**Source of truth:** `docs/design/style-guide.md`, `docs/design/components.md`, `docs/design/tokens.css`. Do not edit anything under `docs/design`.

**Token model:** tokens.css is already merged into `app/globals.css`. Colors exposed as Tailwind utilities via `@theme inline` (e.g. `bg-espresso`, `text-terracotta`, `bg-accent-pine`). Custom radius `rounded-card` (28px). Warm shadows `shadow-soft`/`shadow-lift` (never neutral black). `--ease-brew` easing. Display type scale `text-display-xl/lg/md` (Unbounded). Steam animation `animate-steam` defined in globals.css.

**Known edge cases / resolved judgment calls:**
- **5 menu categories, only 4 accent tokens.** Mapping in `app/_components/category-badge.tsx`: Espresso→olive, Espresso Drinks→pine, Pastries→rose, Cold Drinks→amber, Sandwiches→`bg-espresso` (neutral ink fallback). Accepted as reasonable — espresso is a core token, reads as intentional, not a broken accent. Better long-term fix would be adding a 5th accent token to docs, but that requires editing docs/design.
- **Category badge used inline beside a Display LG `<h2>` on the menu page**, NOT as the spec's standalone stacked circle+icon+label trio. Adding the spec's mono label inside the badge duplicates the category name next to the heading. Resolution: badge stays icon-only + `aria-hidden` (decorative; the `<h2>` carries the name). This is a deliberate divergence from components.md's "Category badge" anatomy, justified by the layout context.
- **Focus-ring offset color:** Tailwind `ring-offset-2` defaults offset-color to white, which breaks the warm palette on cream/paper. Always pair with `ring-offset-cream` (on cream surfaces) or `ring-offset-paper` (on paper, e.g. dialog). Espresso-filled surfaces use `ring-cream ring-offset-espresso` per spec.

**Photography deviation (sanctioned by user):** User chose "photos everywhere" over the style guide's illustration-first preference. Real Pexels photos get circle/rounded-card crop + shadow-soft + `[filter:sepia(8%)_saturate(115%)]` warm-grading on `cream-deep` backdrop. This is an accepted interpretation of the style guide's photography-FALLBACK rules applied as the primary treatment.
