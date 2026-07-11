import type { CSSProperties } from "react";
import { t } from "@/content";
import { SectionHeading } from "./ui";

export function Problems() {
  return (
    <section id="palvelu" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={t.problems.eyebrow}
          heading={t.problems.heading}
          lead={t.problems.lead}
        />

        <div data-stagger className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {t.problems.items.map((item, i) => (
            <article
              key={item.tag}
              data-reveal
              style={{ "--i": i } as CSSProperties}
              className="lift group flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 md:p-8"
            >
              {/* Kipupiste omistajan omin sanoin */}
              <p className="font-display text-[1.1875rem] leading-snug font-semibold text-petrol-dark">
                {item.problem}
              </p>

              <div className="my-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-line" />
                <svg
                  className="size-3.5 text-terracotta transition-transform duration-[600ms] group-hover:translate-x-1"
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
                <span className="h-px flex-1 bg-line" />
              </div>

              <p className="text-[0.9375rem] leading-relaxed text-grey">{item.solution}</p>

              <span className="mt-7 inline-flex w-fit items-center rounded-full bg-cream-dark px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-petrol">
                {item.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
