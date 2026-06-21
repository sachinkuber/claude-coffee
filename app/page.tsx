import Image from "next/image";
import { SiteNav } from "./_components/site-nav";
import { SiteFooter } from "./_components/site-footer";
import { ReserveTableTrigger } from "./_components/reserve-table-trigger";
import { ProductCard } from "./_components/product-card";
import { SteamDivider } from "./_components/steam-mark";
import { IconArrowRight } from "./_components/icons";
import { getFeaturedItems } from "./_lib/menu";
import { getUpcomingEvents } from "./_lib/events";

export default async function Home() {
  const featured = await getFeaturedItems(4);
  const events = getUpcomingEvents();

  return (
    <div className="flex flex-1 flex-col bg-cream">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <SiteNav />
      </div>

      <div className="relative isolate overflow-hidden">
        <Image
          src="/images/hero-bar.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover [filter:sepia(8%)_saturate(115%)]"
        />
        <div className="absolute inset-0 bg-espresso/55" />
        <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
          <section className="flex max-w-xl flex-col gap-6 py-24 lg:py-32">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-terracotta">
              Brooklyn, est. 2019
            </p>
            <h1 className="font-display text-display-lg text-cream sm:text-display-xl">
              Good coffee, around the corner.
            </h1>
            <p className="text-lg leading-relaxed text-cream/90">
              Small-batch roasts, fresh pastries, and a counter that knows
              your order. Stop by, or save a table for tonight.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ReserveTableTrigger className="inline-flex h-12 items-center gap-3 rounded-full bg-cream pl-6 pr-2 font-medium text-espresso shadow-soft transition-all duration-150 ease-brew hover:-translate-y-0.5 hover:bg-paper hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso">
                Reserve a table
                <span className="grid size-8 place-items-center rounded-full bg-terracotta text-paper">
                  <IconArrowRight className="size-4" />
                </span>
              </ReserveTableTrigger>
            </div>
          </section>
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <h2 className="font-display text-display-lg text-espresso">
          Most loved on the counter
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <ProductCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <SteamDivider />

      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
          <h2 className="font-display text-display-lg text-espresso">
            This week at the shop
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {events.map((event) => (
              <article
                key={event.name}
                className="rounded-card bg-paper p-6 shadow-soft"
              >
                <h3 className="font-display text-display-md text-espresso">
                  {event.name}
                </h3>
                <p className="mt-2 font-mono text-sm text-terracotta">
                  {event.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <SiteFooter />
      </div>
    </div>
  );
}
