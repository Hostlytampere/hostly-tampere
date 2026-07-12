import type { CSSProperties } from "react";
import { t } from "@/content";
import { SectionHeading } from "./ui";

/**
 * Prosessi-aikajana. Petrol-viiva kasvaa scrollin mukana ja solmut
 * syttyvät terrakotalle kun ne ohitetaan (JS asettaa --progress ja
 * data-active; ilman JS:ää kaikki näkyy staattisena).
 *
 * Tämä on sivun tärkein luottamuslaite ennen turvallisuusosiota:
 * näytämme oikean prosessin, emme lupausta.
 */
export function Process() {
  return (
    <section id="nain-toimii" className="bg-cream-dark py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <SectionHeading
                eyebrow={t.process.eyebrow}
                heading={t.process.heading}
                lead={t.process.lead}
              />
            </div>
          </div>

          <div id="timeline" className="relative md:col-span-7 md:col-start-6">
            {/* Kasvava viiva */}
            <div className="timeline-track left-[19px] !bg-[color-mix(in_srgb,var(--color-petrol)_14%,transparent)]">
              <div className="timeline-fill" />
            </div>

            <ol data-stagger className="flex flex-col gap-12 md:gap-16">
              {t.process.steps.map((step, i) => (
                <li
                  key={step.number}
                  data-reveal
                  style={{ "--i": i } as CSSProperties}
                  className="relative flex gap-6"
                >
                  <div
                    data-node
                    className="timeline-node relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-[color-mix(in_srgb,var(--color-petrol)_20%,transparent)] bg-cream-dark"
                  >
                    <span className="node-dot size-2 rounded-full bg-[color-mix(in_srgb,var(--color-petrol)_30%,transparent)] transition-colors duration-[500ms]" />
                  </div>

                  <div className="pt-1.5">
                    <p className="font-display text-[0.75rem] font-semibold tracking-[0.18em] text-terracotta-deep">
                      {step.number}
                    </p>
                    <h3 className="mt-2 text-[1.25rem] leading-snug text-petrol-dark md:text-[1.375rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-grey">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div data-reveal className="mt-12 pl-16">
              <a
                href={t.process.moreHref}
                className="group inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-petrol transition-colors duration-[400ms] hover:text-terracotta-deep"
              >
                <span className="link-underline">{t.process.moreLink}</span>
                <svg
                  className="btn-arrow size-4 shrink-0"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
