import Link from "next/link";
import { ReserveTableTrigger } from "./reserve-table-trigger";
import { IconArrowRight } from "./icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  return (
    <nav className="flex items-center justify-between gap-6 border-b border-clay/60 py-6">
      <Link
        href="/"
        className="rounded-sm font-display text-xl text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        Brew &amp; Co.
      </Link>
      <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider text-espresso md:flex">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="rounded-sm transition-colors hover:text-terracotta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <ReserveTableTrigger className="inline-flex h-11 items-center gap-2 rounded-full bg-espresso pl-5 pr-2 font-medium text-paper shadow-soft transition-all duration-150 ease-brew hover:-translate-y-0.5 hover:bg-roast hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso">
        <span className="hidden sm:inline">Reserve a table</span>
        <span className="sm:hidden">Reserve</span>
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-terracotta text-paper">
          <IconArrowRight className="size-4" />
        </span>
      </ReserveTableTrigger>
    </nav>
  );
}
