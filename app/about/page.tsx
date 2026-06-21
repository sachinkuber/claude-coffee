import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "../_components/site-nav";
import { SiteFooter } from "../_components/site-footer";
import { SteamDivider } from "../_components/steam-mark";

export const metadata: Metadata = {
  title: "About — Brew & Co.",
  description: "The story behind Brew & Co., a coffee shop on Vanderbilt Avenue in Brooklyn.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 lg:px-10">
        <SiteNav />

        <header className="flex flex-col gap-6 py-16">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-terracotta">
            Brooklyn, since 2019
          </p>
          <h1 className="font-display text-display-lg text-espresso sm:text-display-xl">
            Two people, one counter.
          </h1>
          <p className="text-lg leading-relaxed text-roast">
            Brew &amp; Co. started with a five-pound bag of beans, a
            secondhand espresso machine, and a folding table on the sidewalk.
          </p>
        </header>

        <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-cream-deep shadow-soft">
          <Image
            src="/images/about-founders.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover [filter:sepia(8%)_saturate(115%)]"
          />
        </div>

        <SteamDivider />

        <div className="flex flex-col gap-6 pb-20 text-lg leading-relaxed text-roast">
          <p>
            Marisol Vega had been pulling shots at other people&rsquo;s cafés
            for six years before she finally ran the numbers on her own.
            Tomás Reyes, her downstairs neighbor at the time, had spent a
            decade baking bread at 4 a.m. for a bakery that closed twice a
            week. Neither of them had savings worth mentioning. What they had
            was a corner storefront on Vanderbilt Avenue that had sat empty
            for a year, and a landlord willing to take rent in installments.
          </p>
          <p>
            They opened in the fall of 2019 with four tables, a menu written
            in chalk, and a rule they still keep: nothing goes out that they
            wouldn&rsquo;t order themselves. The espresso is roasted ten
            minutes away and changes with the season. The croissants get made
            at dawn, in the same ovens Tomás learned to trust years before
            Brew &amp; Co. existed.
          </p>
          <p>
            What grew out of that first folding table is still mostly the
            same — a counter that remembers your order, a Friday night that
            turns into an open mic, a Saturday morning set aside for tasting
            whatever&rsquo;s new. Marisol still pulls the morning shots.
            Tomás still gets there before the trucks do.
          </p>
        </div>

        <SiteFooter />
      </div>
    </div>
  );
}
