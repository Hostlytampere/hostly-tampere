import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FactStrip } from "@/components/FactStrip";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { MoneyFlow } from "@/components/MoneyFlow";
import { Security } from "@/components/Security";
import { Taxes } from "@/components/Taxes";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

/*
  Sivun rytmi. Pinnat vuorottelevat tarkoituksella:
  tumma → kerma → kerma(valkoiset kortit) → cream-dark → kerma → TUMMA → kerma → kerma → tumma.
  Turvallisuus on ainoa tumma osio hero-kortin ja footerin välissä — siksi
  se pysähdyttää lukijan juuri ennen lomaketta.

  Referenssit (brand-source/): Keto = rytmi ja ilma. Giga = tumman osion paino.
*/
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FactStrip />
        <Problems />
        <Process />
        <Services />
        <MoneyFlow />
        <Security />
        <Taxes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
