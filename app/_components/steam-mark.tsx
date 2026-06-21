import type { SVGProps } from "react";

export function SteamMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M2 28C10 28 10 16 18 16C26 16 26 28 34 28C42 28 42 16 50 16C58 16 58 28 62 28" />
    </svg>
  );
}

export function SteamDivider() {
  return (
    <div className="flex justify-center py-8" aria-hidden="true">
      <SteamMark className="size-8 text-espresso motion-safe:animate-steam" />
    </div>
  );
}
