import type { CSSProperties } from "react";
import { t } from "@/content";
import { Arch } from "./Arch";
import { Eyebrow } from "./ui";

/**
 * Sivun emotionaalinen ydin. Omistajan toinen iso pelko rahan menetyksen
 * jälkeen on se, mitä asunnolle tapahtuu. Siksi tämä on ainoa tumma,
 * pysähtynyt osio — ja siksi se saa eniten tilaa.
 *
 * Taustalla logon kaari piirtyy itsestään kun osio tulee näkyviin.
 */
export function Security() {
  return (
    <section id="turvallisuus" className="px-3 md:px-6">
      <div className="relative overflow-hidden rounded-[var(--radius-hero)] bg-petrol-dark py-20 md:py-32">
        {/* Taustakerrokset */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_20%_0%,#1f4b43_0%,#143029_45%,#0e211c_100%)]" />
          <div
            className="ambient-b parallax absolute -bottom-1/3 right-[-10%] size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(200,103,74,0.16)_0%,transparent_65%)] blur-2xl"
            style={{ "--px-rate": 0.04 } as CSSProperties}
          />
          {/* Kaari piirtyy — brändin motiivi, ei koriste */}
          <Arch
            draw
            className="absolute left-1/2 top-1/2 h-[125%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
            strokeClassName="stroke-cream"
            dotClassName="fill-terracotta"
            strokeWidth={2.5}
            showDot={false}
          />
          <div className="noise absolute inset-0 opacity-30" />
        </div>

        <div className="container-x relative">
          <div className="grid gap-14 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <div data-stagger className="flex flex-col gap-5 md:sticky md:top-32">
                <div data-reveal style={{ "--i": 0 } as CSSProperties}>
                  <Eyebrow tone="dark" pulse>
                    {t.security.eyebrow}
                  </Eyebrow>
                </div>
                <h2
                  data-reveal
                  style={{ "--i": 1 } as CSSProperties}
                  className="text-[clamp(1.875rem,1.1rem+2.9vw,3.125rem)] leading-[1.1] text-cream"
                >
                  {t.security.heading}
                </h2>
                <p
                  data-reveal
                  style={{ "--i": 2 } as CSSProperties}
                  className="max-w-md text-[1.0625rem] leading-[1.7] text-cream/60"
                >
                  {t.security.lead}
                </p>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <ul data-stagger className="flex flex-col">
                {t.security.items.map((item, i) => (
                  <li
                    key={item.title}
                    data-reveal
                    style={{ "--i": i } as CSSProperties}
                    className="group border-t border-line-dark/70 py-7 first:border-t-0 first:pt-0 md:py-8"
                  >
                    <div className="flex gap-5">
                      <span className="font-display mt-1 text-[0.75rem] font-semibold tracking-[0.18em] text-terracotta/80 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[1.1875rem] text-cream transition-colors duration-[500ms] group-hover:text-terracotta-tint md:text-[1.3125rem]">
                          {item.title}
                        </h3>
                        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-cream/55">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
