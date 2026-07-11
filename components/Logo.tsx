import { Arch } from "./Arch";

/**
 * Logo React-komponenttina.
 *
 * MIKSI EI TOIMITETTUA SVG:tä:
 * toimitetuissa .svg-tiedostoissa wordmark on <text>-elementti, joka viittaa
 * fonttiin "General Sans". SVG:n sisällä oleva teksti EI käytä sivun
 * self-hostattua fonttia → kävijän koneella se renderöityisi Arialilla.
 * Lisäksi tiedostoissa on läpinäkymätön taustalaatikko.
 *
 * Tässä kaari on aito path ja wordmark on oikeaa HTML-tekstiä oikealla
 * fontilla: skaalautuu, on valittavissa, hakukoneet lukevat sen, eikä
 * fonttiriippuvuutta ole. PNG-versiot jäävät OG-kuvaan ja fallbackiksi.
 */
export function Logo({
  variant = "light",
  className = "",
  animated = false,
}: {
  /** "light" = vaalealla pohjalla, "dark" = tummalla pohjalla */
  variant?: "light" | "dark";
  className?: string;
  animated?: boolean;
}) {
  const dark = variant === "dark";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Arch
        className="h-9 w-auto shrink-0"
        strokeClassName={dark ? "stroke-cream" : "stroke-petrol"}
        dotClassName="fill-terracotta"
        strokeWidth={13}
        draw={animated}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.375rem] font-semibold tracking-[-0.01em] ${
            dark ? "text-cream" : "text-petrol"
          }`}
        >
          Hostly
        </span>
        <span
          className={`font-display mt-[0.2em] text-[0.5rem] font-medium tracking-[0.34em] ${
            dark ? "text-terracotta-tint" : "text-terracotta-deep"
          }`}
        >
          TAMPERE
        </span>
      </span>
    </span>
  );
}
