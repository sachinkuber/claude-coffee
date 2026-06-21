import type { Metadata } from "next";
import { SiteNav } from "../_components/site-nav";
import { SiteFooter } from "../_components/site-footer";
import { ProductCard } from "../_components/product-card";
import { CategoryBadge } from "../_components/category-badge";
import { getMenuByCategory } from "../_lib/menu";

export const metadata: Metadata = {
  title: "Menu — Brew & Co.",
  description: "Specialty coffee, fresh pastries, and light lunches at Brew & Co. in Brooklyn.",
};

export default async function MenuPage() {
  const sections = await getMenuByCategory();

  return (
    <div className="flex flex-1 flex-col bg-cream">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <SiteNav />

        <header className="py-16">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-terracotta">
            On the board today
          </p>
          <h1 className="font-display text-display-lg text-espresso sm:text-display-xl">
            The full menu
          </h1>
        </header>

        {sections.map(({ category, items }) => (
          <section key={category} className="py-12">
            <div className="flex items-center gap-4">
              <CategoryBadge category={category} />
              <h2 className="font-display text-display-lg text-espresso">{category}</h2>
            </div>

            {items.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <ProductCard key={item.slug} item={item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 py-12 text-center">
                <p className="font-display text-display-md text-espresso">
                  Nothing here yet.
                </p>
                <p className="text-roast">Check back soon — the board changes often.</p>
              </div>
            )}
          </section>
        ))}

        <SiteFooter />
      </div>
    </div>
  );
}
