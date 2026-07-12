import { t } from "@/content";
import { Arch } from "./Arch";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden rounded-t-[var(--radius-hero)] bg-petrol-deep pt-16 pb-10 md:pt-20">
      <div aria-hidden="true" className="absolute inset-0">
        <Arch
          className="absolute -bottom-[45%] left-1/2 h-[180%] w-auto -translate-x-1/2 opacity-[0.05]"
          strokeClassName="stroke-cream"
          strokeWidth={2}
          showDot={false}
        />
        <div className="noise absolute inset-0 opacity-25" />
      </div>

      <div className="container-x relative">
        <div data-stagger className="grid gap-12 md:grid-cols-12">
          <div data-reveal className="md:col-span-5">
            <Logo variant="dark" />
            <p className="font-display mt-6 max-w-xs text-[1.0625rem] leading-snug text-cream/90">
              {t.footer.tagline}
            </p>
            <p className="mt-3 max-w-sm text-[0.875rem] leading-relaxed text-cream/45">
              {t.footer.description}
            </p>
          </div>

          <nav data-reveal className="md:col-span-3 md:col-start-7" aria-label="Alatunniste">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-terracotta-tint/70">
              {t.footer.columns.site}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-[0.9375rem] text-cream/65 transition-colors duration-[400ms] hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div data-reveal className="md:col-span-3">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-terracotta-tint/70">
              {t.footer.columns.contact}
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-[0.9375rem]">
              <li>
                <a
                  href={`mailto:${t.site.email}`}
                  className="link-underline text-cream/65 transition-colors duration-[400ms] hover:text-cream"
                >
                  {t.site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.site.phoneHref}`}
                  className="link-underline text-cream/65 transition-colors duration-[400ms] hover:text-cream"
                >
                  {t.site.phone}
                </a>
              </li>
              <li className="text-cream/45">{t.footer.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark/60 pt-7 text-[0.8125rem] text-cream/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {t.footer.copyright}
          </p>
          <nav aria-label="Lakisivut" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {t.footer.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-cream/50 transition-colors duration-[400ms] hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            {/* TODO(asiakas): lisää Y-tunnus tähän kun se on olemassa. */}
          </nav>
        </div>
      </div>
    </footer>
  );
}
