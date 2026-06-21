import type { MenuItem } from "./menu";

const IMAGE_BY_SLUG: Record<string, string> = {
  espresso: "/images/menu-espresso.webp",
  doppio: "/images/menu-espresso.webp",
  macchiato: "/images/menu-espresso.webp",
  americano: "/images/menu-espresso.webp",
  cortado: "/images/menu-cortado.webp",
  "maple-cortado": "/images/menu-cortado.webp",
  cappuccino: "/images/menu-cappuccino.webp",
  latte: "/images/menu-latte.webp",
  "brown-sugar-oat-latte": "/images/menu-latte.webp",
  "flat-white": "/images/menu-flat-white.webp",
  "butter-croissant": "/images/menu-croissant.webp",
  "almond-croissant": "/images/menu-croissant.webp",
  "cardamom-bun": "/images/menu-cardamom-bun.webp",
  "blueberry-scone": "/images/menu-scone.webp",
  "egg-cheddar-on-brioche": "/images/menu-egg-sandwich.webp",
  "turkey-swiss": "/images/menu-turkey-sandwich.webp",
  caprese: "/images/menu-caprese.webp",
  "iced-coffee": "/images/menu-iced-coffee.webp",
  "cardamom-cold-brew": "/images/menu-iced-coffee.webp",
  "iced-matcha-latte": "/images/menu-iced-matcha.webp",
};

export function getMenuItemImage(item: MenuItem): string {
  return IMAGE_BY_SLUG[item.slug] ?? "/images/menu-espresso.webp";
}
