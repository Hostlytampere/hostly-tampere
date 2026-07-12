import type { CSSProperties } from "react";
import { t } from "@/content";
import { Arch } from "./Arch";
import { ButtonPrimary, ButtonOnDark, Eyebrow } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative">
      {/*
        Upotettu tumma kortti: pyöristetyt alakulmat, kelluu kerman päällä.
        Tämä yksi ratkaisu erottaa sivun templatesta (vrt. Keto-referenssi).
      */}
      <div className="relative overflow-hidden rounded-b-[var(--radius-hero)] bg-petrol-dark">
        {/* --- Taustakerrokset --- */}
        <div aria-hidden="true" className="absolute inset-0">
          {/*
            TODO(kuvat): tämä on kuvapaikka.
            Kun oikea valokuva on olemassa, korvaa alla oleva gradienttikerros:

              <Image src="/hero.jpg" alt="" fill priority sizes="100vw"
                     className="object-cover parallax" style={{ "--px-rate": 0.08 }} />

            ja jätä scrim-kerros (seuraava div) paikoilleen tekstin luettavuutta varten.
            Suositeltu kuva: lämpimästi valaistu asunnon olohuone/keittiö,
            ilta-aikaan, ei ihmisiä, vaakakuva vähintään 2400 px leveä.
          */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_75%_15%,#245448_0%,#1a3f37_38%,#0e211c_100%)]" />

          {/* Ambient-valot: hitaita, lähes huomaamattomia liikkeitä */}
          <div
            className="ambient-a parallax absolute -top-[18%] right-[-8%] size-[46rem] rounded-full bg-[radial-gradient(circle,rgba(200,103,74,0.20)_0%,transparent_62%)] blur-2xl"
            style={{ "--px-rate": 0.05 } as CSSProperties}
          />
          <div
            className="ambient-b parallax absolute bottom-[-30%] left-[-12%] size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(61,107,96,0.45)_0%,transparent_65%)] blur-2xl"
            style={{ "--px-rate": 0.09 } as CSSProperties}
          />

          {/* Logon kaari jättimäisenä vesileimana */}
          <Arch
            className="parallax absolute -right-[6%] bottom-[-30%] hidden h-[130%] w-auto opacity-[0.055] md:block"
            strokeClassName="stroke-cream"
            strokeWidth={4}
            showDot={false}
            style={{ "--px-rate": -0.04 } as CSSProperties}
          />

          {/* Scrim: pitää tekstin luettavana kun kuva vaihdetaan tähän */}
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,33,28,0.82)_0%,rgba(14,33,28,0.55)_45%,rgba(14,33,28,0.25)_100%)]" />

          {/* Hienovarainen filmirae — estää gradientin banding-raidat */}
          <div className="noise absolute inset-0 opacity-[0.35]" />
        </div>

        {/* --- Sisältö --- */}
        <div className="container-x relative">
          <div className="flex min-h-[clamp(38rem,86svh,52rem)] flex-col justify-end pt-32 pb-14 md:pt-40 md:pb-20">
            <div data-stagger className="grid gap-10 md:grid-cols-12 md:items-end md:gap-12">
              <div className="md:col-span-7 lg:col-span-7">
                <div data-reveal style={{ "--i": 0 } as CSSProperties}>
                  <Eyebrow tone="dark" pulse>
                    {t.hero.eyebrow}
                  </Eyebrow>
                </div>

                <h1 className="mt-6 text-[clamp(2.4rem,1.1rem+5.1vw,4.5rem)] leading-[1.03] tracking-[-0.03em] text-cream">
                  {t.hero.headlineLines.map((line, i) => (
                    <span
                      key={line}
                      className="line-mask"
                      data-line
                      style={{ "--reveal-delay": `${180 + i * 130}ms` } as CSSProperties}
                    >
                      <span className={i === 1 ? "text-cream/55" : undefined}>{line}</span>
                    </span>
                  ))}
                </h1>

                <div
                  data-reveal
                  style={{ "--reveal-delay": "620ms" } as CSSProperties}
                  className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <ButtonPrimary href="#yhteys" className="!bg-cream !text-petrol-dark hover:!bg-white">
                    {t.hero.ctaPrimary}
                  </ButtonPrimary>
                  <ButtonOnDark href="/nain-se-toimii/">{t.hero.ctaSecondary}</ButtonOnDark>
                </div>
              </div>

              {/* Keton split: otsikko vasemmalle, tiivistys oikealle */}
              <div className="md:col-span-5 lg:col-span-4 lg:col-start-9">
                <p
                  data-reveal
                  style={{ "--reveal-delay": "500ms" } as CSSProperties}
                  className="border-l-2 border-terracotta/60 pl-5 text-[1rem] leading-[1.7] text-cream/70"
                >
                  {t.hero.lead}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll-vihje */}
        <div
          aria-hidden="true"
          data-reveal
          style={{ "--reveal-delay": "1100ms" } as CSSProperties}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <span className="scroll-cue block h-9 w-px bg-gradient-to-b from-transparent via-cream/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
