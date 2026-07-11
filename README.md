# Hostly Tampere — verkkosivusto

Markkinointisivusto Airbnb-hallinnointiyritykselle. Yksi sivu, yksi
konversiotavoite: yhteydenottopyyntö ("Pyydä ilmainen tuottoarvio").

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind v4 · staattinen export.

---

## Käynnistys

```bash
npm install
cp .env.example .env.local   # täytä Web3Forms-avain, ks. alla
npm run dev                  # http://localhost:3000
```

Tuotantobuild (kirjoittaa staattisen sivuston `out/`-kansioon):

```bash
npm run build
```

Yhden tiedoston esikatselu jaettavaksi (ei vaadi palvelinta):

```bash
npm run build && npm run preview:inline   # → out/preview-inline.html
```

---

## Mistä muokataan mitä

| Haluat muuttaa | Muokkaa tiedostoa |
|---|---|
| **Mitä tahansa tekstiä sivulla** | `content/fi.ts` |
| Yhteystiedot, domain, Y-tunnus | `content/fi.ts` → `site` |
| Värit, fontit, pyöristykset | `app/globals.css` → `@theme` |
| Animaatiot | `app/globals.css` (CSS) + `app/scroll-engine.ts` (laukaisu) |
| Osioiden järjestys | `app/page.tsx` |

**Yhtään copy-tekstiä ei ole kovakoodattu komponentteihin.** Kun englanninkielinen
versio tehdään: kopioi `content/fi.ts` → `content/en.ts`, käännä arvot (tyyppi
`Content` pakottaa saman rakenteen) ja valitse tiedosto `content/index.ts`:ssä.

Samoin **yhtään hexiä ei ole kovakoodattu komponentteihin** — kaikki värit tulevat
`@theme`-tokeneista (`bg-petrol`, `text-terracotta-deep`, …).

---

## Lomake-backend

Lomake käyttää **Web3Formsia** — ei omaa backendiä, ei salaisuuksia repossa.

1. Luo ilmainen access key: <https://web3forms.com>
2. Lisää `.env.local`-tiedostoon:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```
3. Vercelissä: lisää sama muuttuja projektin Environment Variables -asetuksiin.

Avain on tarkoituksella julkinen — Web3Forms sitoo sen vastaanottavaan
sähköpostiosoitteeseen, joten se ei ole salaisuus. Se luetaan silti
ympäristömuuttujasta, jottei kenenkään osoite päädy repoon.

**Ilman avainta** lomake ei teeskentele lähettävänsä: se näyttää selkeän
virheilmoituksen ja tarjoaa sähköpostiosoitteen. Vaihda avain paikalleen ennen
julkaisua.

Vaihtoehdot jos Web3Forms ei kelpaa: Formspree (sama malli, vaihda vain
`form action`) tai Resend + Vercel-funktio (vaatii `output: "export"` -asetuksen
poiston `next.config.ts`:stä).

---

## Arkkitehtuurivalinta: nolla client-komponenttia

Yksikään komponentti ei ole `"use client"`. Koko interaktiivisuus — scroll-reveal,
parallaksi, aikajanan eteneminen, mobiilivalikko, lomakkeen lähetys — on ~2 kt:n
inline-skriptissä (`app/scroll-engine.ts`), ja kaikki liike on CSS:ää.

Tästä seuraa kolme asiaa:

1. Selaimeen ei lähde animaatiokirjastoa.
2. Sivu toimii täysin ilman JS:ää. Piilotus tapahtuu vain `.js`-luokan alla,
   jonka `<head>`:n mikroskripti lisää — jos JS on estetty, mitään ei piiloteta.
3. `out/index.html` on aidosti staattinen, joten `preview:inline` tuottaa siitä
   yhden tiedoston esikatselun joka on **oikea build eikä erillinen demo**.

`prefers-reduced-motion: reduce` pysäyttää kaiken liikkeen.

---

## Logo

Logo on React-komponentti (`components/Logo.tsx`), **ei** toimitettu SVG.

Toimitetuissa `.svg`-tiedostoissa wordmark on `<text>`-elementti joka viittaa
fonttiin "General Sans". SVG:n sisällä oleva teksti ei käytä sivun self-hostattua
fonttia, joten kävijän koneella se olisi renderöitynyt Arialilla. Lisäksi
tiedostoissa on läpinäkymätön taustalaatikko.

Komponentissa kaari on aito `path` ja wordmark oikeaa HTML-tekstiä oikealla
fontilla. Alkuperäiset tiedostot ovat tallessa `../brand-source/`. PNG-versiot
(`public/`) jäävät fallbackiksi.

Kaari toimii koko sivuston motiivina: se piirtyy itsestään turvallisuusosion
taustassa ja toistuu footerissa.

---

## Saavutettavuus

Brändin terrakotta `#C8674A` antaa luonnonvalkoisella vain ~4.1:1 kontrastin —
alle WCAG AA:n (4.5:1) pienelle tekstille. Siksi:

- `terracotta` (`#C8674A`) → **vain pinnat, täytöt ja koristeet** (pisteet, nuolet, viivat)
- `terracotta-deep` (`#A9502F`) → **kaikki pieni teksti** vaalealla pohjalla
- `terracotta-tint` (`#E8C4B5`) → teksti tummalla pohjalla

Pää-CTA on `petrol-dark` + kerma (~14:1) eikä terrakotta. Briefin henki
säilyy — "petrol on kantava väri, terrakotta on kipinä" — ja kontrasti pitää.

---

## Mitä sivulla EI ole (tarkoituksella)

- Ei asiakasreferenssejä, testimoniaaleja eikä case studyja. Yritys on uusi.
  Referenssien paikalla on `FactStrip` — todennettavia faktoja palvelusta.
- Ei euromääräisiä tuottolupauksia.
- Ei provisioprosentteja.
- Verotusosio on muotoiltu ohjaavasti, ei sitovana veroneuvontana.

---

## Ennen julkaisua — TODO

Hae `TODO(` niin löydät kaikki. Tiivistettynä:

- [ ] `content/fi.ts` → oikea sähköposti, puhelinnumero ja domain
- [ ] `content/fi.ts` → Y-tunnus ja tietosuojaseloste-linkki (myös `Footer.tsx`)
- [ ] `.env.local` → `NEXT_PUBLIC_WEB3FORMS_KEY`
- [ ] `components/Hero.tsx` → korvaa gradientti-kuvapaikka oikealla valokuvalla
- [ ] Aja Lighthouse tuotanto-URLia vasten

---

## Julkaisu

Vercel: importoi repo, root directory `site/`, framework Next.js. Muuta ei tarvita
— `output: "export"` tuottaa staattisen sivuston. Lisää `NEXT_PUBLIC_WEB3FORMS_KEY`
Environment Variables -kohtaan.
