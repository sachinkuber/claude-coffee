import type { MenuCategory } from "../_lib/menu";
import { IconCup, IconDrink, IconCupcake, IconSandwich } from "./icons";

const CATEGORY_STYLE: Record<MenuCategory, { icon: typeof IconCup; bg: string }> = {
  Espresso: { icon: IconCup, bg: "bg-accent-olive" },
  "Espresso Drinks": { icon: IconDrink, bg: "bg-accent-pine" },
  Pastries: { icon: IconCupcake, bg: "bg-accent-rose" },
  Sandwiches: { icon: IconSandwich, bg: "bg-espresso" },
  "Cold Drinks": { icon: IconDrink, bg: "bg-accent-amber" },
};

export function CategoryBadge({ category }: { category: MenuCategory }) {
  const { icon: Icon, bg } = CATEGORY_STYLE[category];
  return (
    <span
      aria-hidden="true"
      className={`grid size-16 shrink-0 place-items-center rounded-full text-paper shadow-soft ${bg}`}
    >
      <Icon className="size-7" />
    </span>
  );
}
