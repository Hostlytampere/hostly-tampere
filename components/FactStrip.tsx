import type { CSSProperties } from "react";
import { t } from "@/content";

/**
 * Referenssissä tässä kohtaa on asiakaslogojen rivi.
 * Hostly on uusi yritys → EI keksittyjä asiakkaita, EI "10 000 tyytyväistä".
 * Sama visuaalinen rytmi, mutta sisältönä todennettavia faktoja palvelusta.
 */
export function FactStrip() {
  return (
    <section aria-label="Palvelun perusfaktat" className="relative">
      <div className="container-x">
        <div
          data-stagger
          className="grid grid-cols-2 gap-x-6 gap-y-9 border-b border-line py-12 md:grid-cols-4 md:py-16"
        >
          {t.facts.map((fact, i) => (
            <div
              key={fact.value}
              data-reveal
              style={{ "--i": i } as CSSProperties}
              className="flex flex-col gap-2"
            >
              <span
                className="pulse-dot mb-1 inline-block size-1.5 rounded-full bg-terracotta"
                style={{ "--pd": `${i * 420}ms` } as CSSProperties}
                aria-hidden="true"
              />
              <p className="font-display text-[1.0625rem] font-semibold leading-tight tracking-[-0.01em] text-petrol md:text-[1.1875rem]">
                {fact.value}
              </p>
              <p className="text-[0.875rem] leading-snug text-grey">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
