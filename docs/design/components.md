# Component Specs

Tailwind class recipes assume [`tokens.css`](./tokens.css) is merged into `app/globals.css`. Roles and rationale are in [`style-guide.md`](./style-guide.md). Live versions of every component below are in [`preview.html`](./preview.html).

## Button — Primary

Pill, espresso fill, cream text, terracotta icon accent. The default "do the thing" action (Add to order, Get promo, Checkout).

- **Anatomy:** label (Body MD, 500) + optional trailing icon in a terracotta circle.
- **Sizing:** height 48px, horizontal padding 24px (20px if an icon is present), icon circle 32px.
- **States:** default `bg-espresso`; hover `bg-roast` + `shadow-lift` + `-translate-y-0.5`; active `translate-y-0`; focus-visible `ring-2 ring-cream ring-offset-2 ring-offset-espresso`; disabled `bg-clay text-roast/60`, no hover/shadow.

```html
<button class="inline-flex items-center gap-3 h-12 pl-6 pr-2 rounded-full bg-espresso text-paper font-medium
               shadow-soft transition-all duration-150 ease-brew
               hover:bg-roast hover:shadow-lift hover:-translate-y-0.5
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso
               disabled:bg-clay disabled:text-roast/60 disabled:shadow-none disabled:hover:translate-y-0">
  Get promo
  <span class="grid place-items-center size-8 rounded-full bg-terracotta text-paper">
    <svg class="size-4" ...>...</svg>
  </span>
</button>
```

## Button — Secondary

Pill, transparent, espresso border + text. Lower-emphasis actions next to a primary button (View menu, Cancel).

```html
<button class="inline-flex items-center h-12 px-6 rounded-full border border-espresso text-espresso font-medium
               transition-colors duration-150 ease-brew
               hover:bg-espresso hover:text-paper
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep focus-visible:ring-offset-2">
  View full menu
</button>
```

## Button — Ghost / text link

No fill, no border. Inline nav links and tertiary actions. Underline is a steam-mark trace on hover/focus, not a straight line — see [Signature: steam mark divider](#signature-divider--steam-mark) for the SVG.

- States: default `text-espresso`; hover/focus reveal the steam-mark underline (`opacity-0 → opacity-100`, 150ms); never use `text-terracotta` here (fails body-text contrast).

## Icon button

Circular, for nav utilities (search, cart, account). 44×44px minimum hit target even when the visible circle is smaller, per the accessibility floor.

```html
<button aria-label="Search" class="grid place-items-center size-11 rounded-full text-espresso
               hover:bg-cream-deep transition-colors duration-150
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep focus-visible:ring-offset-2">
  <svg class="size-5" ...>...</svg>
</button>
```

## Category badge

Solid accent-colored circle + two-tone icon + Geist Mono uppercase label beneath. The component that carries the category accent palette — see [Color](./style-guide.md#color).

- **Anatomy:** circle (64px) → icon (28px, line + one fill) → 8px gap → label (Label token).
- **Color mapping:** pick one `--color-accent-*` per category and keep it consistent everywhere that category appears (don't reassign colors per page).
- **States:** default as above; hover `-translate-y-1` on the circle only, label unchanged; selected/active (in a filter context) adds a 2px `terracotta-deep` ring around the circle.

```html
<button class="flex flex-col items-center gap-2 group focus-visible:outline-none">
  <span class="grid place-items-center size-16 rounded-full bg-accent-olive text-paper
               transition-transform duration-150 ease-brew group-hover:-translate-y-1
               group-focus-visible:ring-2 group-focus-visible:ring-terracotta-deep group-focus-visible:ring-offset-2">
    <svg class="size-7" ...>...</svg>
  </span>
  <span class="font-mono text-xs font-medium uppercase tracking-wider text-espresso">Coffee</span>
</button>
```

## Product card

Illustration on an accent-tinted disc, Display MD title, mono price, primary action.

- **Anatomy:** disc (illustration, square aspect, `rounded-card`) → 16px gap → title (Display MD) → price (Price token, terracotta) → primary button or icon-button "add" in the corner.
- **Sizing:** card padding 20px, disc fills card width, min card width 240px.
- **States:** resting `shadow-soft`; hover `shadow-lift` + `-translate-y-1` on the whole card (one elevation change, not card + disc + button all moving independently).

```html
<article class="flex flex-col gap-4 p-5 rounded-card bg-paper shadow-soft
                 transition-all duration-240 ease-brew hover:shadow-lift hover:-translate-y-1">
  <div class="aspect-square rounded-card bg-accent-amber/20 grid place-items-center">
    <img src="/nutella-mudslide.png" alt="" class="w-3/4" />
  </div>
  <div class="flex items-center justify-between">
    <h3 class="font-display text-display-md text-espresso">Nutella Mudslide</h3>
  </div>
  <div class="flex items-center justify-between">
    <span class="font-mono text-lg font-semibold text-terracotta">$30.00</span>
    <button aria-label="Add Nutella Mudslide to order" class="grid place-items-center size-10 rounded-full bg-espresso text-paper hover:bg-roast transition-colors">
      <svg class="size-4" ...>...</svg>
    </button>
  </div>
</article>
```

## Price tag

Typographic only — no container. Geist Mono, 600, terracotta, tabular figures so prices in a list align on the decimal.

```html
<span class="font-mono text-lg font-semibold text-terracotta tabular-nums">$40.00</span>
```

## Nav bar

Wordmark + Display MD logotype, inline link list (Label token), search pill, icon-button cluster. Sits directly on `cream`, no background of its own; a `--color-clay` hairline marks the bottom edge.

- **Mobile:** links collapse behind a single icon button; search pill collapses to an icon button that expands the field on tap.

```html
<nav class="flex items-center justify-between gap-8 border-b border-clay/60 pb-4">
  <a href="/" class="font-display text-2xl text-espresso">Brand.</a>
  <ul class="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-espresso">
    <li><a href="/" class="hover:text-terracotta-deep">Home</a></li>
    <li><a href="/menu" class="hover:text-terracotta-deep">Menu</a></li>
  </ul>
  <div class="flex items-center gap-2">
    <!-- search field, icon buttons -->
  </div>
</nav>
```

## Search field

Pill input, leading icon, placeholder in `roast`. Fill is `cream-deep` (not `paper`) so it reads as recessed against the nav.

```html
<label class="flex items-center gap-2 h-11 px-4 rounded-full bg-cream-deep
               focus-within:ring-2 focus-within:ring-terracotta-deep focus-within:ring-offset-2 focus-within:ring-offset-cream">
  <svg class="size-4 text-roast" ...>...</svg>
  <input type="search" placeholder="Search the menu" class="bg-transparent outline-none text-sm text-espresso placeholder:text-roast/70 w-40" />
</label>
```

## Filter pill

Toggleable chip for menu filtering (Hot / Iced / Dairy-free). Unselected is outline-only so a row of filters doesn't compete with the primary button.

```html
<button aria-pressed="false" class="h-9 px-4 rounded-full border border-clay text-sm text-roast
               transition-colors duration-150
               aria-pressed:bg-espresso aria-pressed:text-paper aria-pressed:border-espresso
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep focus-visible:ring-offset-2">
  Iced
</button>
```

## Signature divider — steam mark

The brand's one hand-drawn flourish, as a section divider. Usage rules are in [style-guide.md](./style-guide.md#signature-the-steam-mark) — at most one visible instance per viewport.

```html
<div class="flex justify-center py-8" aria-hidden="true">
  <svg width="64" height="32" viewBox="0 0 64 32" fill="none" class="text-espresso motion-safe:animate-[steam_3.5s_ease-brew_infinite]">
    <path d="M2 28C10 28 10 16 18 16C26 16 26 28 34 28C42 28 42 16 50 16C58 16 58 28 62 28"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
</div>
```

```css
@keyframes steam {
  0%, 100% { opacity: 0.4; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-4px); }
}
```

## Promo / CTA band

Full-bleed section on `cream-deep` (the lighter band under a hero, in the reference). Holds a horizontal row of product cards or a single banner CTA. No card shadow needed if the whole band already sits a shade lighter than the page — let the color shift be the separation.

## Empty / error state

Plain text block, no illustration unless the illustration itself communicates the fix (e.g. an empty cup for "no items"). Follows the [voice rules](./style-guide.md#voice--microcopy): say what happened, in-brand, then offer the next action as a Secondary button.

```html
<div class="flex flex-col items-center gap-4 py-16 text-center">
  <p class="font-display text-display-md text-espresso">Nothing here yet.</p>
  <p class="text-roast">Try a different filter, or browse the full menu.</p>
  <button class="<!-- Secondary button recipe -->">Clear filters</button>
</div>
```
