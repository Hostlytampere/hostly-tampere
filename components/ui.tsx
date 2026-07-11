import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------
 * Reveal — pelkkä data-attribuutti. Animaatio on CSS:ssä, laukaisu
 * IntersectionObserverissa (app/scroll-engine). Ei client-komponenttia,
 * ei hydraatiota, ei JS-bundlea.
 * ---------------------------------------------------------------- */
export function Reveal({
  children,
  as: Tag = "div",
  variant,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  as?: React.ElementType;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Tag
      data-reveal={variant && variant !== "up" ? variant : ""}
      className={className}
      style={{ ...(delay ? { "--reveal-delay": `${delay}ms` } : {}), ...style } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* Porrastettu ryhmä: lapset saavat --i:n järjestyksessä. */
export function Stagger({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag data-stagger className={className}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------
 * Eyebrow — pieni yläotsikko pisteellä. Terrakotta, mutta tummempi
 * sävy vaalealla pohjalla jotta kontrasti riittää (AA).
 * ---------------------------------------------------------------- */
export function Eyebrow({
  children,
  tone = "light",
  className = "",
  pulse = false,
}: {
  children: ReactNode;
  /** "light" = vaalealla pohjalla, "dark" = tummalla pohjalla */
  tone?: "light" | "dark";
  className?: string;
  pulse?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-terracotta-tint" : "text-terracotta-deep"
      } ${className}`}
    >
      <span
        className={`inline-block size-1.5 rounded-full bg-terracotta ${pulse ? "pulse-dot" : ""}`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------
 * Napit.
 * Pää-CTA on petrol-dark + kerma → kontrasti ~14:1.
 * Terrakotta jää nuoleen, hoveriin ja aksentteihin (briefin sääntö:
 * "petrol on kantava väri, terrakotta on kipinä").
 * ---------------------------------------------------------------- */
const Arrow = () => (
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
);

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
};

export function ButtonPrimary({ href, children, className = "", arrow = true }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group btn-sheen relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-petrol-dark px-6 py-3.5 text-[0.9375rem] font-medium text-cream transition-colors duration-[400ms] hover:bg-petrol ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span className="relative z-10 text-terracotta-tint">
          <Arrow />
        </span>
      )}
    </a>
  );
}

export function ButtonSecondary({ href, children, className = "", arrow = true }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-transparent px-6 py-3.5 text-[0.9375rem] font-medium text-petrol transition-colors duration-[400ms] hover:border-petrol hover:bg-cream-dark ${className}`}
    >
      {children}
      {arrow && <Arrow />}
    </a>
  );
}

export function ButtonOnDark({ href, children, className = "", arrow = true }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full border border-line-dark px-6 py-3.5 text-[0.9375rem] font-medium text-cream transition-colors duration-[400ms] hover:border-terracotta hover:bg-white/5 ${className}`}
    >
      {children}
      {arrow && <Arrow />}
    </a>
  );
}

/* ------------------------------------------------------------------
 * Osion otsikkoblokki
 * ---------------------------------------------------------------- */
export function SectionHeading({
  eyebrow,
  heading,
  lead,
  tone = "light",
  align = "left",
  className = "",
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      data-stagger
      className={`flex max-w-2xl flex-col gap-5 ${
        align === "center" ? "mx-auto items-center text-center" : ""
      } ${className}`}
    >
      <Reveal style={{ "--i": 0 } as CSSProperties}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal
        as="h2"
        style={{ "--i": 1 } as CSSProperties}
        className={`text-[clamp(1.75rem,1.1rem+2.4vw,2.75rem)] leading-[1.12] ${
          dark ? "text-cream" : "text-petrol-dark"
        }`}
      >
        {heading}
      </Reveal>
      {lead && (
        <Reveal
          as="p"
          style={{ "--i": 2 } as CSSProperties}
          className={`text-[1.0625rem] leading-relaxed ${dark ? "text-cream/65" : "text-grey"}`}
        >
          {lead}
        </Reveal>
      )}
    </div>
  );
}
