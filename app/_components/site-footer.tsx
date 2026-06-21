export function SiteFooter() {
  return (
    <footer className="border-t border-clay py-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-xl text-espresso">Brew &amp; Co.</p>
          <p className="mt-2 text-sm text-roast">
            Small-batch coffee and a warm seat, every morning on Vanderbilt
            Avenue.
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-wider text-roast">Visit</p>
            <p className="text-sm text-espresso">412 Vanderbilt Ave</p>
            <p className="text-sm text-espresso">Brooklyn, NY 11238</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-wider text-roast">Hours</p>
            <p className="text-sm text-espresso">Mon–Fri, 7am–6pm</p>
            <p className="text-sm text-espresso">Sat–Sun, 8am–6pm</p>
          </div>
        </div>
      </div>
      <p className="mt-10 font-mono text-xs text-roast">© 2026 Brew &amp; Co.</p>
    </footer>
  );
}
