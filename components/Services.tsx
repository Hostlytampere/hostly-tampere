import type { CSSProperties } from "react";
import { t } from "@/content";
import { SectionHeading } from "./ui";

const Check = () => (
  <svg className="mt-[0.4em] size-3.5 shrink-0 text-terracotta" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2 7.4 5.2 10.5 12 3.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Services() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          heading={t.services.heading}
          lead={t.services.lead}
        />

        <div data-stagger className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 md:gap-6">
          {t.services.groups.map((group, i) => (
            <article
              key={group.title}
              data-reveal
              style={{ "--i": i } as CSSProperties}
              className="lift relative overflow-hidden rounded-[var(--radius-panel)] border border-line bg-cream-dark p-7 md:p-9"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="text-[1.375rem] text-petrol-dark">{group.title}</h3>
                <span className="h-px flex-1 bg-line" />
                <span className="font-display text-[0.75rem] font-semibold tracking-[0.18em] text-grey">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-6 flex flex-col gap-3.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink/85">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Kaksi lähtötilannetta, sama lopputulos */}
        <div data-stagger className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
          {t.services.paths.map((path, i) => (
            <div
              key={path.title}
              data-reveal
              style={{ "--i": i } as CSSProperties}
              className="flex items-start gap-4 rounded-[var(--radius-card)] border border-dashed border-line px-6 py-5"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
              <div>
                <p className="font-display text-[0.9375rem] font-semibold text-petrol">{path.title}</p>
                <p className="mt-1 text-[0.875rem] leading-relaxed text-grey">{path.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
