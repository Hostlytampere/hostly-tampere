import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { t } from "@/content";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MoneyFlow } from "@/components/MoneyFlow";
import { Arch } from "@/components/Arch";
import { JsonLd } from "@/components/JsonLd";
import { ButtonPrimary, ButtonOnDark, Eyebrow, SectionHeading } from "@/components/ui";

const p = t.processPage;

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Etusivu", item: `${t.site.url}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: p.metaTitle,
      item: `${t.site.url}/nain-se-toimii/`,
    },
  ],
};

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: { canonical: "/nain-se-toimii/" },
  openGraph: {
    title: `${p.metaTitle} — ${t.site.name}`,
    description: p.metaDescription,
    url: "/nain-se-toimii/",
  },
};

/* Pieni check-merkki listojen edessä (sama kieli kuin Services). */
const Check = () => (
  <svg className="mt-[0.35em] size-3.5 shrink-0 text-terracotta" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2 7.4 5.2 10.5 12 3.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <Nav />
      <main>
        {/* ---------- Header-hero (tumma kortti, kuten etusivu) ---------- */}
        <section className="relative">
          <div className="relative overflow-hidden rounded-b-[var(--radius-hero)] bg-petrol-dark">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_75%_15%,#245448_0%,#1a3f37_38%,#0e211c_100%)]" />
              <div
                className="ambient-a parallax absolute -top-[20%] right-[-8%] size-[42rem] rounded-full bg-[radial-gradient(circle,rgba(200,103,74,0.18)_0%,transparent_62%)] blur-2xl"
                style={{ "--px-rate": 0.05 } as CSSProperties}
              />
              <Arch
                className="parallax absolute -right-[6%] bottom-[-40%] hidden h-[150%] w-auto opacity-[0.055] md:block"
                strokeClassName="stroke-cream"
                strokeWidth={4}
                showDot={false}
                style={{ "--px-rate": -0.04 } as CSSProperties}
              />
              <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,33,28,0.82)_0%,rgba(14,33,28,0.5)_50%,rgba(14,33,28,0.2)_100%)]" />
              <div className="noise absolute inset-0 opacity-[0.35]" />
            </div>

            <div className="container-x relative">
              <div className="flex flex-col justify-end pt-36 pb-16 md:min-h-[clamp(28rem,60svh,38rem)] md:pt-44 md:pb-24">
                <div data-stagger className="max-w-3xl">
                  <div data-reveal style={{ "--i": 0 } as CSSProperties}>
                    <Eyebrow tone="dark" pulse>
                      {p.hero.eyebrow}
                    </Eyebrow>
                  </div>

                  <h1 className="mt-6 text-[clamp(2.2rem,1.1rem+4.4vw,3.875rem)] leading-[1.05] tracking-[-0.03em] text-cream">
                    <span className="sr-only">{p.hero.srKeyword} </span>
                    {p.hero.headlineLines.map((line, i) => (
                      <span
                        key={line}
                        className="line-mask"
                        data-line
                        style={{ "--reveal-delay": `${180 + i * 130}ms` } as CSSProperties}
                      >
                        <span className={i === 1 ? "text-cream/55" : undefined}>{line}</span>
                      </span>
                    ))}
                  </h1>

                  <p
                    data-reveal
                    style={{ "--reveal-delay": "520ms" } as CSSProperties}
                    className="mt-8 max-w-2xl border-l-2 border-terracotta/60 pl-5 text-[1.0625rem] leading-[1.7] text-cream/70"
                  >
                    {p.hero.lead}
                  </p>

                  <div
                    data-reveal
                    style={{ "--reveal-delay": "640ms" } as CSSProperties}
                    className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
                  >
                    <ButtonPrimary href="/#yhteys" className="!bg-cream !text-petrol-dark hover:!bg-white">
                      {p.hero.ctaPrimary}
                    </ButtonPrimary>
                    <ButtonOnDark href="/" arrow={false}>
                      {p.hero.ctaSecondary}
                    </ButtonOnDark>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Detaljoitu timeline ---------- */}
        <section className="py-20 md:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow={p.timelineEyebrow}
              heading={p.timelineHeading}
            />

            <div id="timeline" className="relative mt-14 md:mt-20">
              {/* Kasvava viiva (sama moottori kuin etusivulla) */}
              <div className="timeline-track left-[19px] !bg-[color-mix(in_srgb,var(--color-petrol)_14%,transparent)]">
                <div className="timeline-fill" />
              </div>

              <ol data-stagger className="flex flex-col gap-14 md:gap-20">
                {p.steps.map((step, i) => (
                  <li
                    key={step.number}
                    data-reveal
                    style={{ "--i": i } as CSSProperties}
                    className="relative flex gap-6"
                  >
                    <div
                      data-node
                      className="timeline-node relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-petrol)_20%,transparent)] bg-cream"
                    >
                      <span className="node-dot size-2 rounded-full bg-[color-mix(in_srgb,var(--color-petrol)_30%,transparent)] transition-colors duration-[500ms]" />
                    </div>

                    <div className="min-w-0 flex-1 pt-1">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span className="font-display text-[0.75rem] font-semibold tracking-[0.18em] text-terracotta-deep">
                          {step.number}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-dark px-3 py-1 text-[0.75rem] font-medium text-grey">
                          <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
                          {step.timing}
                        </span>
                      </div>

                      <h3 className="mt-3 text-[1.375rem] leading-snug text-petrol-dark md:text-[1.625rem]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-[1rem] leading-relaxed text-grey">
                        {step.body}
                      </p>

                      <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
                        {/* Mitä me teemme */}
                        <div className="rounded-[var(--radius-card)] border border-line bg-cream-dark p-6">
                          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-petrol">
                            {p.stepWeDoLabel}
                          </p>
                          <ul className="mt-4 flex flex-col gap-3">
                            {step.weDo.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink/85"
                              >
                                <Check />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Mitä sinulta tarvitaan */}
                        <div className="flex flex-col rounded-[var(--radius-card)] border border-dashed border-line px-6 py-6">
                          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-terracotta-deep">
                            {p.stepFromYouLabel}
                          </p>
                          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/85">
                            {step.fromYou}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ---------- Rahaliikenne (jaettu komponentti) ---------- */}
        <MoneyFlow />

        {/* ---------- Hinnoittelun logiikka ---------- */}
        <section className="pb-20 md:pb-28">
          <div className="container-x">
            <SectionHeading
              eyebrow={t.pricing.eyebrow}
              heading={t.pricing.heading}
              lead={t.pricing.lead}
            />

            <div data-stagger className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
              {t.pricing.points.map((point, i) => (
                <article
                  key={point.title}
                  data-reveal
                  style={{ "--i": i } as CSSProperties}
                  className="lift relative overflow-hidden rounded-[var(--radius-panel)] border border-line bg-cream-dark p-7 md:p-8"
                >
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-[1.1875rem] text-petrol-dark">{point.title}</h3>
                    <span className="h-px flex-1 bg-line" />
                    <span className="font-display text-[0.75rem] font-semibold tracking-[0.18em] text-grey">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-grey">{point.body}</p>
                </article>
              ))}
            </div>

            <p
              data-reveal
              className="mt-6 flex items-center gap-3 rounded-[var(--radius-card)] border border-dashed border-line px-6 py-5 text-[0.9375rem] leading-relaxed text-ink/80"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
              {t.pricing.note}
            </p>
          </div>
        </section>

        {/* ---------- Turvallisuus-nosto + ankkuri etusivulle ---------- */}
        <section className="px-3 md:px-6">
          <div className="relative overflow-hidden rounded-[var(--radius-hero)] bg-petrol-dark py-16 md:py-20">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_20%_0%,#1f4b43_0%,#143029_45%,#0e211c_100%)]" />
              <Arch
                draw
                className="absolute left-1/2 top-1/2 h-[130%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
                strokeClassName="stroke-cream"
                strokeWidth={2.5}
                showDot={false}
              />
              <div className="noise absolute inset-0 opacity-30" />
            </div>

            <div className="container-x relative">
              <div data-stagger className="grid gap-8 md:grid-cols-12 md:items-center md:gap-10">
                <div className="md:col-span-7">
                  <div data-reveal style={{ "--i": 0 } as CSSProperties}>
                    <Eyebrow tone="dark">{p.securityTeaser.eyebrow}</Eyebrow>
                  </div>
                  <h2
                    data-reveal
                    style={{ "--i": 1 } as CSSProperties}
                    className="mt-4 text-[clamp(1.625rem,1.1rem+2.2vw,2.5rem)] leading-[1.14] text-cream"
                  >
                    {p.securityTeaser.heading}
                  </h2>
                  <p
                    data-reveal
                    style={{ "--i": 2 } as CSSProperties}
                    className="mt-4 max-w-xl text-[1rem] leading-[1.7] text-cream/60"
                  >
                    {p.securityTeaser.body}
                  </p>
                </div>
                <div data-reveal style={{ "--i": 3 } as CSSProperties} className="md:col-span-4 md:col-start-9">
                  <ButtonOnDark href={p.securityTeaser.ctaHref}>{p.securityTeaser.cta}</ButtonOnDark>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Loppu-CTA ---------- */}
        <section className="py-20 md:py-28">
          <div className="container-x">
            <div data-stagger className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
              <div data-reveal style={{ "--i": 0 } as CSSProperties}>
                <Eyebrow>{p.finalCta.eyebrow}</Eyebrow>
              </div>
              <h2
                data-reveal
                style={{ "--i": 1 } as CSSProperties}
                className="text-[clamp(1.75rem,1.1rem+2.4vw,2.75rem)] leading-[1.12] text-petrol-dark"
              >
                {p.finalCta.heading}
              </h2>
              <p
                data-reveal
                style={{ "--i": 2 } as CSSProperties}
                className="text-[1.0625rem] leading-[1.75] text-grey"
              >
                {p.finalCta.lead}
              </p>
              <div data-reveal style={{ "--i": 3 } as CSSProperties} className="mt-2">
                <ButtonPrimary href="/#yhteys">{p.finalCta.button}</ButtonPrimary>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
