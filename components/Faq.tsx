import type { CSSProperties } from "react";
import { t } from "@/content";
import { SectionHeading } from "./ui";
import { JsonLd } from "./JsonLd";

/**
 * Usein kysytyt kysymykset. Natiivi <details>/<summary> → toimii ilman
 * JS:ää, on saavutettava ja hakukoneystävällinen. FAQPage-rakenteinen
 * data mahdollistaa rich-snippetin hakutuloksissa; sen sisältö vastaa
 * täsmälleen sivulla näkyvää tekstiä (Googlen ohjeen mukaisesti).
 */
export function Faq() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="ukk" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading eyebrow={t.faq.eyebrow} heading={t.faq.heading} lead={t.faq.lead} />

        <div data-stagger className="mx-auto mt-12 max-w-3xl md:mt-16">
          {t.faq.items.map((item, i) => (
            <details
              key={item.q}
              data-reveal
              style={{ "--i": i } as CSSProperties}
              className="group border-t border-line last:border-b"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-petrol-dark [&::-webkit-details-marker]:hidden">
                <h3 className="text-[1.0625rem] font-medium leading-snug transition-colors duration-[400ms] group-hover:text-terracotta-deep md:text-[1.1875rem]">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="relative grid size-8 shrink-0 place-items-center rounded-full border border-line text-petrol transition-colors duration-[400ms] group-open:border-terracotta group-open:bg-terracotta group-open:text-cream"
                >
                  {/* Vaaka + pystyviiva → plus, joka kääntyy miinukseksi */}
                  <span className="absolute h-[1.5px] w-3.5 rounded-full bg-current" />
                  <span className="absolute h-3.5 w-[1.5px] rounded-full bg-current transition-transform duration-[400ms] group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <div className="faq-answer overflow-hidden pb-6 pr-14">
                <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-grey">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <JsonLd data={faqLd} />
    </section>
  );
}
