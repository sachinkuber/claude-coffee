import Image from "next/image";
import type { MenuItem } from "../_lib/menu";
import { getMenuItemImage } from "../_lib/menu-images";

export function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col gap-4 rounded-card bg-paper p-5 shadow-soft transition-all duration-240 ease-brew hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-square overflow-hidden rounded-card bg-cream-deep">
        <Image
          src={getMenuItemImage(item)}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover [filter:sepia(8%)_saturate(115%)]"
        />
        {item.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-espresso px-3 py-1 font-mono text-xs uppercase tracking-wider text-paper">
            {item.badge}
          </span>
        )}
      </div>
      <h3 className="font-display text-display-md text-espresso">{item.name}</h3>
      <p className="text-sm leading-relaxed text-roast">{item.description}</p>
      <span className="font-mono text-lg font-semibold tabular-nums text-terracotta">
        ${item.price}
      </span>
    </article>
  );
}
