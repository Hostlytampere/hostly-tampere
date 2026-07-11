import { t } from "@/content";
import { Logo } from "./Logo";

/**
 * Kelluva pilleri-navigaatio (kuten referenssissä: vaalea pilleri tumman
 * heron päällä). Ei client-komponenttia — mobiilivalikon avaus hoituu
 * layoutin inline-skriptillä, joten JS-bundle pysyy nollassa.
 */
export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-5">
      <div className="container-x">
        <div className="nav-shell relative rounded-[22px] border border-transparent px-4 py-3 md:rounded-full md:px-5">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="shrink-0 rounded-lg"
              aria-label={`${t.site.name} — etusivu`}
            >
              <Logo variant="light" />
            </a>

            {/* Työpöytä */}
            <nav aria-label="Päävalikko" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {t.nav.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-full px-4 py-2 text-[0.9375rem] text-grey transition-colors duration-[400ms] hover:bg-cream-dark hover:text-petrol"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:block">
              <a
                href="#yhteys"
                className="group btn-sheen relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-petrol-dark px-5 py-2.5 text-[0.875rem] font-medium text-cream transition-colors duration-[400ms] hover:bg-petrol"
              >
                <span className="relative z-10">{t.nav.cta}</span>
                <svg
                  className="btn-arrow relative z-10 size-3.5 text-terracotta-tint"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 8h11m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Mobiili */}
            <button
              id="menu-button"
              type="button"
              aria-expanded="false"
              aria-controls="mobile-menu"
              aria-label={t.nav.menuOpen}
              className="relative flex size-10 items-center justify-center rounded-full border border-line text-petrol md:hidden"
            >
              <span className="sr-only">{t.nav.menuOpen}</span>
              <span aria-hidden="true" className="flex flex-col items-center justify-center gap-[5px]">
                <span className="menu-bar block h-[1.5px] w-4 rounded-full bg-current transition-transform duration-[400ms]" />
                <span className="menu-bar block h-[1.5px] w-4 rounded-full bg-current transition-all duration-[400ms]" />
              </span>
            </button>
          </div>

          <div
            id="mobile-menu"
            hidden
            className="mobile-menu overflow-hidden md:hidden"
          >
            <nav aria-label="Päävalikko (mobiili)" className="pt-2 pb-1">
              <ul className="flex flex-col">
                {t.nav.links.map((link, i) => (
                  <li key={link.href} style={{ "--i": i } as React.CSSProperties}>
                    <a
                      href={link.href}
                      className="menu-item block border-t border-line py-3.5 text-[1.0625rem] text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#yhteys"
                className="menu-item mt-4 flex w-full items-center justify-center rounded-full bg-petrol-dark px-5 py-3.5 text-[0.9375rem] font-medium text-cream"
                style={{ "--i": t.nav.links.length } as React.CSSProperties}
              >
                {t.nav.cta}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
