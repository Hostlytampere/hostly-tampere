import type { CSSProperties } from "react";
import { t } from "@/content";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Arch } from "./Arch";
import { Eyebrow } from "./ui";

type Block = { readonly p: string } | { readonly ul: readonly string[] };
type Section = { readonly heading: string; readonly blocks: readonly Block[] };
type Doc = {
  readonly eyebrow: string;
  readonly title: string;
  readonly intro: string;
  readonly sections: readonly Section[];
};

/**
 * Lakisivun runko (tietosuojaseloste / käyttöehdot). Sama premium-ilme
 * kuin muualla: tumma header-kortti, reveal-porrastus, kaari taustalla.
 * Ei client-komponenttia. Copy tulee content/fi.ts:stä.
 */
export function LegalDoc({ doc, showRegistrar = false }: { doc: Doc; showRegistrar?: boolean }) {
  const L = t.legal;
  return (
    <>
      <Nav />
      <main>
        {/* Header-kortti */}
        <section className="relative">
          <div className="relative overflow-hidden rounded-b-[var(--radius-hero)] bg-petrol-dark">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_75%_15%,#245448_0%,#1a3f37_38%,#0e211c_100%)]" />
              <Arch
                className="absolute -right-[6%] bottom-[-45%] hidden h-[150%] w-auto opacity-[0.05] md:block"
                strokeClassName="stroke-cream"
                strokeWidth={4}
                showDot={false}
              />
              <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,33,28,0.8)_0%,rgba(14,33,28,0.45)_60%,rgba(14,33,28,0.2)_100%)]" />
              <div className="noise absolute inset-0 opacity-[0.35]" />
            </div>

            <div className="container-x relative">
              <div data-stagger className="max-w-3xl pt-36 pb-14 md:pt-44 md:pb-20">
                <div data-reveal style={{ "--i": 0 } as CSSProperties}>
                  <Eyebrow tone="dark">{doc.eyebrow}</Eyebrow>
                </div>
                <h1
                  data-reveal
                  style={{ "--i": 1 } as CSSProperties}
                  className="mt-5 text-[clamp(2rem,1.1rem+3.6vw,3.25rem)] leading-[1.06] tracking-[-0.03em] text-cream"
                >
                  {doc.title}
                </h1>
                <p
                  data-reveal
                  style={{ "--i": 2 } as CSSProperties}
                  className="mt-4 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-terracotta-tint/80"
                >
                  {L.updatedLabel} {L.updated}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sisältö */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <div className="mx-auto max-w-2xl">
              <p data-reveal className="text-[1.0625rem] leading-[1.75] text-grey">
                {doc.intro}
              </p>

              {/* Rekisterinpitäjä-kortti (vain tietosuojaseloste) */}
              {showRegistrar && (
                <div
                  data-reveal
                  className="mt-10 rounded-[var(--radius-panel)] border border-line bg-cream-dark p-6 md:p-8"
                >
                  <h2 className="text-[1.125rem] text-petrol-dark">{L.registrarHeading}</h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-grey">{L.registrarNote}</p>
                  <dl className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5 text-[0.9375rem]">
                    <div className="flex flex-col gap-0.5">
                      <dt className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-petrol">
                        {t.site.name}
                      </dt>
                      <dd className="text-grey">{t.footer.location}</dd>
                    </div>
                    <div className="flex flex-wrap gap-x-2 pt-1">
                      <dt className="text-grey/70">{L.businessIdLabel}:</dt>
                      <dd className="text-ink/85">
                        {/* TODO(asiakas): täytä site.businessId kun Y-tunnus on olemassa */}
                        {t.site.businessId ?? L.businessIdTodo}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <a
                        href={`mailto:${t.site.email}`}
                        className="link-underline w-fit text-petrol transition-colors hover:text-terracotta-deep"
                      >
                        {t.site.email}
                      </a>
                      <a
                        href={`tel:${t.site.phoneHref}`}
                        className="link-underline w-fit text-petrol transition-colors hover:text-terracotta-deep"
                      >
                        {t.site.phone}
                      </a>
                    </div>
                  </dl>
                </div>
              )}

              {/* Osiot */}
              <div className="mt-4 flex flex-col">
                {doc.sections.map((section, i) => (
                  <section
                    key={section.heading}
                    data-reveal
                    style={{ "--reveal-delay": `${Math.min(i, 6) * 40}ms` } as CSSProperties}
                    className="border-t border-line py-8 first:border-t-0"
                  >
                    <h2 className="flex gap-3 text-[1.25rem] leading-snug text-petrol-dark">
                      <span
                        className="font-display mt-1 text-[0.75rem] font-semibold tabular-nums text-terracotta-deep"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{section.heading}</span>
                    </h2>
                    <div className="mt-4 flex flex-col gap-4 pl-[2.1rem]">
                      {section.blocks.map((block, j) =>
                        "ul" in block ? (
                          <ul key={j} className="flex flex-col gap-2.5">
                            {block.ul.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink/85"
                              >
                                <span
                                  className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-terracotta"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p key={j} className="text-[0.9375rem] leading-[1.7] text-grey">
                            {block.p}
                          </p>
                        )
                      )}
                    </div>
                  </section>
                ))}
              </div>

              {/* Paluu etusivulle */}
              <div data-reveal className="mt-12 border-t border-line pt-8">
                <a
                  href="/"
                  className="group inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-petrol transition-colors duration-[400ms] hover:text-terracotta-deep"
                >
                  <svg
                    className="size-4 shrink-0 rotate-180 transition-transform duration-[400ms] group-hover:-translate-x-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 8h11m0 0-4-4m4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="link-underline">{L.backToHome}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
