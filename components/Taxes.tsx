import type { CSSProperties } from "react";
import { t } from "@/content";
import { Eyebrow } from "./ui";

/**
 * Hiljainen osio tarkoituksella. Aliviivaaminen on uskottavuutta:
 * tämä on luottamustekijä, ei myyntipuhe. Ja rajaus (ei sitovaa
 * veroneuvontaa) on osa luottamusta, ei sen vastakohta.
 */
export function Taxes() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div data-stagger className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <div data-reveal style={{ "--i": 0 } as CSSProperties}>
            <Eyebrow>{t.taxes.eyebrow}</Eyebrow>
          </div>
          <h2
            data-reveal
            style={{ "--i": 1 } as CSSProperties}
            className="text-[clamp(1.5rem,1.1rem+1.6vw,2.125rem)] leading-[1.2] text-petrol-dark"
          >
            {t.taxes.heading}
          </h2>
          <p
            data-reveal
            style={{ "--i": 2 } as CSSProperties}
            className="text-[1.0625rem] leading-[1.75] text-grey"
          >
            {t.taxes.body}
          </p>
          <p
            data-reveal
            style={{ "--i": 3 } as CSSProperties}
            className="max-w-xl rounded-[var(--radius-card)] border border-line bg-cream-dark px-6 py-5 text-[0.9375rem] leading-relaxed text-ink/85"
          >
            {t.taxes.deduction}
          </p>
          <p
            data-reveal
            style={{ "--i": 4 } as CSSProperties}
            className="mt-2 max-w-lg border-t border-line pt-6 text-[0.8125rem] leading-relaxed text-grey/80"
          >
            {t.taxes.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
