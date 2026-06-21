import type { SVGProps } from "react";

export function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3.5" y1="10" x2="15" y2="10" />
      <path d="M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

export function IconPlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" {...props}>
      <line x1="10" y1="4" x2="10" y2="16" />
      <line x1="4" y1="10" x2="16" y2="10" />
    </svg>
  );
}

export function IconCup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 8.5h12v6a4.5 4.5 0 0 1-4.5 4.5h-3A4.5 4.5 0 0 1 5 14.5v-6Z" />
      <path d="M17 10h1.5a2 2 0 1 1 0 4H17" />
      <line x1="8" y1="5" x2="8" y2="6.5" />
      <line x1="12" y1="4.5" x2="12" y2="6" />
    </svg>
  );
}

export function IconDrink(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7.5 5h9l-1.2 13.3a2 2 0 0 1-2 1.7h-2.6a2 2 0 0 1-2-1.7L7.5 5Z" />
      <line x1="6.5" y1="5" x2="17.5" y2="5" />
      <line x1="15" y1="2" x2="17.5" y2="5" />
    </svg>
  );
}

export function IconCupcake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5.5 11.5h13l-1.4 7.8a2 2 0 0 1-2 1.7H8.9a2 2 0 0 1-2-1.7l-1.4-7.8Z" />
      <path d="M5 11.5a7 5.5 0 1 1 14 0" />
      <line x1="12" y1="6" x2="12" y2="4" />
    </svg>
  );
}

export function IconSandwich(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 12h16v3.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 15.5V12Z" />
      <path d="M4 12 11 6.5a1.5 1.5 0 0 1 2 0L20 12" />
      <line x1="5.5" y1="12" x2="5.5" y2="9.5" />
      <line x1="18.5" y1="12" x2="18.5" y2="9.5" />
    </svg>
  );
}
