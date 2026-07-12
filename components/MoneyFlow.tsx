import type { CSSProperties } from "react";
import { t } from "@/content";
import { Arch } from "./Arch";
import { Eyebrow } from "./ui";

/**
 * Rahaliikenne-nosto. Luottamussignaali: kaikki maksut kulkevat Airbnb:n
 * kautta, emme koskaan käsittele omistajan rahoja itse. Sama komponentti
 * etusivulla ja /nain-se-toimii -sivulla.
 *
 * Ei client-komponenttia — reveal-animaatiot ovat CSS:ää + data-attribuutteja.
 */
export function MoneyFlow() {
  const m = t.money;
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[var(--radius-hero)] border border-line bg-cream-dark">
          {/* Kaari-vesileima brändimotiivina */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <Arch
              className="absolute -right-[8%] -bottom-[45%] h-[150%] w-auto opacity-[0.05]"
              strokeClassName="stroke-petrol"
              strokeWidth={3}
              showDot={false}
            />
          </div>

          <div className="relative grid gap-12 p-8 md:grid-cols-12 md:gap-10 md:p-14 lg:p-16">
            {/* Vasen: otsikko ja iso lupaus */}
            <div className="md:col-span-5">
              <div data-stagger className="flex flex-col gap-5 md:sticky md:top-32">
                <div data-reveal style={{ "--i": 0 } as CSSProperties}>
                  <Eyebrow>{m.eyebrow}</Eyebrow>
                </div>
                <h2
                  data-reveal
                  style={{ "--i": 1 } as CSSProperties}
                  className="text-[clamp(1.625rem,1.1rem+2.2vw,2.5rem)] leading-[1.14] text-petrol-dark"
                >
                  {m.heading}
                </h2>
                <p
                  data-reveal
                  style={{ "--i": 2 } as CSSProperties}
                  className="max-w-md text-[1rem] leading-[1.7] text-grey"
                >
                  {m.lead}
                </p>
              </div>
            </div>

            {/* Oikea: virran vaiheet + korostettu lupaus */}
            <div className="md:col-span-6 md:col-start-7">
              <ol data-stagger className="flex flex-col">
                {m.points.map((point, i) => (
                  <li
                    key={point}
                    data-reveal
                    style={{ "--i": i } as CSSProperties}
                    className="flex items-start gap-4 border-t border-line py-5 first:border-t-0 first:pt-0"
                  >
                    <span
                      className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-petrol/10 font-display text-[0.75rem] font-semibold text-petrol tabular-nums"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-ink/85">{point}</span>
                  </li>
                ))}
              </ol>

              <p
                data-reveal
                style={{ "--i": m.points.length } as CSSProperties}
                className="mt-7 flex items-center gap-3 rounded-[var(--radius-card)] bg-petrol-dark px-6 py-5 text-[0.9375rem] font-medium leading-relaxed text-cream"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                {m.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
