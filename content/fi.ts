/**
 * KAIKKI SIVUSTON TEKSTIT OVAT TÄSSÄ TIEDOSTOSSA.
 * Komponentit eivät sisällä yhtään kovakoodattua copyä.
 *
 * Englanninkielinen versio myöhemmin:
 *   1. kopioi tämä tiedosto → content/en.ts
 *   2. käännä arvot (rakenne pysyy samana, `Content`-tyyppi pakottaa sen)
 *   3. valitse tiedosto content/index.ts:ssä locale-parametrin mukaan
 */

export type Content = typeof fi;

export const fi = {
  /* ---------------------------------------------------------------
   * Sivuston perustiedot (metatagit, footer, JSON-LD)
   * TODO(asiakas): korvaa oikeilla yhteystiedoilla ennen julkaisua.
   * ------------------------------------------------------------- */
  site: {
    name: "Hostly Tampere",
    title: "Hostly Tampere — Airbnb-asuntosi ammattilaishoito",
    description:
      "Hoidamme tamperelaisten asuntosijoittajien Airbnb-kohteet avaimet käteen: vieraiden viestintä 24/7, siivous, dokumentointi ennen ja jälkeen jokaisen varauksen. Pyydä ilmainen tuottoarvio.",
    url: "https://hostlytampere.fi", // TODO(asiakas): oikea domain
    locale: "fi_FI",
    email: "info@hostlytampere.fi", // TODO(asiakas): oikea sähköposti
    phone: "+358 40 000 0000", // TODO(asiakas): oikea puhelinnumero
    phoneHref: "+358400000000", // TODO(asiakas): sama ilman välilyöntejä
    city: "Tampere",
    region: "Pirkanmaa",
    country: "FI",
    businessId: null as string | null, // TODO(asiakas): Y-tunnus kun rekisteröity
    privacyUrl: null as string | null, // TODO(asiakas): tietosuojaseloste
  },

  /* --------------------------------------------------------------- */
  nav: {
    links: [
      { label: "Palvelu", href: "#palvelu" },
      { label: "Näin toimii", href: "#nain-toimii" },
      { label: "Turvallisuus", href: "#turvallisuus" },
      { label: "Yhteys", href: "#yhteys" },
    ],
    cta: "Pyydä tuottoarvio",
    menuOpen: "Avaa valikko",
    menuClose: "Sulje valikko",
    skipToContent: "Siirry sisältöön",
  },

  /* --------------------------------------------------------------- */
  hero: {
    eyebrow: "Airbnb-hallinnointi Tampereella",
    // Ei euromääriä. Lupaa vaivattomuutta ja tuottoa yleisellä tasolla.
    headlineLines: ["Asuntosi tuottaa.", "Sinä et tee mitään."],
    lead:
      "Hoidamme Airbnb-kohteesi avaimet käteen -periaatteella: vieraiden viestintä ympäri vuorokauden, siivous, hinnoittelu ja dokumentointi ennen ja jälkeen jokaisen varauksen. Sinä saat kuukausiraportin ja mielenrauhan.",
    ctaPrimary: "Pyydä ilmainen tuottoarvio",
    ctaSecondary: "Näin se toimii",
    imageAlt:
      "Lämpimästi valaistu tamperelainen kerrostaloasunto ilta-auringossa",
    // TODO(kuvat): korvaa placeholder oikealla valokuvalla hoidetusta kohteesta.
    imageCaption: "Kuvapaikka — oikea kohdekuva tulee tähän",
  },

  /* --------------------------------------------------------------- */
  // Keton asiakaslogo-rivin paikka. Meillä ei ole asiakkaita → emme keksi niitä.
  // Tähän tulee todennettavia faktoja palvelusta, ei sosiaalista todistusta.
  facts: [
    { value: "Tampereella", label: "Fyysisesti paikan päällä, emme etänä" },
    { value: "24/7", label: "Vieraiden viestintä puolestasi" },
    { value: "Ennen & jälkeen", label: "Dokumentointi jokaisesta varauksesta" },
    { value: "Ei sitoumusta", label: "Tuottoarvio on maksuton" },
  ],

  /* --------------------------------------------------------------- */
  problems: {
    eyebrow: "Miksi Hostly",
    heading: "Kolme syytä miksi asunto seisoo tyhjänä",
    lead:
      "Airbnb tuottaa hyvin, kun se on hoidettu hyvin. Useimmiten omistajaa ei estä tuotto vaan vaiva — ja pelko.",
    items: [
      {
        problem: "”Ei ole aikaa eikä jaksamista päivystää.”",
        solution:
          "Vastaamme vieraiden viesteihin ympäri vuorokauden puolestasi. Check-in, ongelmatilanteet, myöhäiset saapumiset — kaikki hoituu ilman että puhelimesi soi.",
        tag: "Aika",
      },
      {
        problem: "”Pelkään että kämppä hajoaa.”",
        solution:
          "Dokumentoimme asunnon kuvin ja videoin ennen ja jälkeen jokaisen varauksen. Seulomme vieraat Airbnb-profiilin arvioiden ja aktiivisuuden perusteella.",
        tag: "Turva",
      },
      {
        problem: "”En tiedä mikä on oikea hinta.”",
        solution:
          "Teemme markkinatutkimuksen Tampereen alueelta ja säädämme hintaa dynaamisesti kysynnän, kauden ja tapahtumien mukaan.",
        tag: "Tuotto",
      },
    ],
  },

  /* --------------------------------------------------------------- */
  process: {
    eyebrow: "Näin toimii",
    heading: "Neljä vaihetta ensimmäiseen vieraaseen",
    lead:
      "Ei mustaa laatikkoa. Näet tarkalleen mitä teemme ja missä järjestyksessä.",
    steps: [
      {
        number: "01",
        title: "Ilmainen tuottoarvio ja tapaaminen",
        body:
          "Käymme läpi asuntosi, sijainnin ja tavoitteesi. Kerromme suoraan, kannattaako lyhytvuokraus juuri tässä kohteessa — myös silloin kun vastaus on ei.",
      },
      {
        number: "02",
        title: "Asunnon setup",
        body:
          "Valokuvaus, ilmoituksen luonti ja hinnoittelu. Tarkistamme taloyhtiön järjestyssäännöt ja yhtiöjärjestyksen sekä käymme läpi verotuksen perusteet kanssasi.",
      },
      {
        number: "03",
        title: "Julkaisu ja vieraiden hankinta",
        body:
          "Ilmoitus julkaistaan ja optimoidaan näkyvyyden mukaan. Ensimmäiset varaukset hinnoitellaan arvioiden kertymiseksi.",
      },
      {
        number: "04",
        title: "Jatkuva hoito",
        body:
          "Viestintä 24/7, siivous ja liinavaatteet, dokumentointi ennen ja jälkeen jokaisen varauksen sekä kuukausiraportti sinulle. Tästä eteenpäin et tee mitään.",
      },
    ],
  },

  /* --------------------------------------------------------------- */
  services: {
    eyebrow: "Palvelu",
    heading: "Mitä hoidamme puolestasi",
    lead:
      "Avaimet käteen tarkoittaa avaimet käteen. Tässä koko paketti neljään ryhmään jaettuna.",
    groups: [
      {
        title: "Vieraat",
        items: [
          "Viestintä 24/7, myös yöllä ja viikonloppuisin",
          "Check-in ja check-out -ohjeistus",
          "Ongelmatilanteiden tuki koko oleskelun ajan",
          "Vieraiden seulonta ennen hyväksyntää",
        ],
      },
      {
        title: "Asunto",
        items: [
          "Ammattitasoinen siivous jokaisen varauksen välissä",
          "Liinavaatteet ja pyyhkeet",
          "Perustarvikkeiden täydennys",
          "Pienten huoltotarpeiden hoito",
        ],
      },
      {
        title: "Talous",
        items: [
          "Markkinatutkimus Tampereen alueelta",
          "Dynaaminen hinnoittelu kysynnän mukaan",
          "Kuukausiraportti tuotosta ja käyttöasteesta",
          "Kausien ja tapahtumien huomiointi",
        ],
      },
      {
        title: "Turva",
        items: [
          "Kuva- ja videodokumentointi ennen ja jälkeen",
          "Välitön ilmoitus vaurioista tai katoamisista",
          "AirCover- ja vakuutusasioiden hoito",
          "Paikallinen apu — olemme kohteessa nopeasti",
        ],
      },
    ],
    // Kaksi polkua: eri lähtötilanteet, sama lopputulos.
    paths: [
      {
        title: "Ei vielä listausta",
        body: "Rakennamme kaiken nollasta: kuvat, ilmoituksen, hinnoittelun ja säännöt.",
      },
      {
        title: "Listaus on jo olemassa",
        body: "Otamme kohteen haltuun, korjaamme hinnoittelun ja nostamme käyttöasteen.",
      },
    ],
  },

  /* --------------------------------------------------------------- */
  security: {
    eyebrow: "Turvallisuus",
    heading: "Omaisuutesi ei jää vieraan varaan",
    lead:
      "Suurin syy jättää Airbnb aloittamatta ei ole raha. Se on pelko siitä, mitä asunnolle tapahtuu kun et ole paikalla. Tämän takia turvallisuus on meillä prosessi, ei lupaus.",
    items: [
      {
        title: "Vieraiden seulonta",
        body:
          "Tarkistamme jokaisen varaajan Airbnb-profiilin arviot ja aktiivisuushistorian. Tarvittaessa pyydämme lisävahvistuksen henkilöllisyydestä ennen hyväksyntää.",
      },
      {
        title: "Dokumentointi ennen ja jälkeen",
        body:
          "Jokainen varaus alkaa ja päättyy samaan rutiiniin: video ja valokuvat asunnon kunnosta. Aikaleimattu todiste on olemassa ennen kuin sitä tarvitaan.",
      },
      {
        title: "Välitön ilmoitus",
        body:
          "Jos jotain on rikkoutunut tai hävinnyt, saat tiedon heti — et kuukausiraportista. Kerromme myös mitä olemme jo tehneet asian eteen.",
      },
      {
        title: "Paikallisuus on turva",
        body:
          "Olemme fyysisesti Tampereella. Kun jotain sattuu, olemme kohteessa saman päivän aikana. Etänä toimiva hallinnointiyritys ei pysty tähän.",
      },
      {
        title: "Vakuutukset ja AirCover",
        body:
          "Hoidamme AirCover-korvaushakemukset ja vakuutusasioinnin puolestasi. Sinun ei tarvitse opetella prosessia sinä päivänä kun sitä tarvitaan.",
      },
    ],
  },

  /* --------------------------------------------------------------- */
  taxes: {
    eyebrow: "Säännöt ja verotus",
    heading: "Emme jätä sinua yksin paperisodan kanssa",
    body:
      "Taloyhtiön järjestyssäännöt, yhtiöjärjestys ja lyhytvuokrauksen verokohtelu ovat ne kohdat joissa moni jättää kesken. Käymme ne kanssasi läpi ennen kuin ilmoitus menee auki, ja ohjaamme oikean tiedon äärelle.",
    // Juridinen rajaus. Tämä ei ole muotoseikka — se on luottamustekijä.
    disclaimer:
      "Emme anna sitovaa vero- tai lakineuvontaa. Autamme sinua ymmärtämään mitä sinun tulee tietää ja tarvittaessa ohjaamme ammattilaisen puheille.",
  },

  /* --------------------------------------------------------------- */
  contact: {
    eyebrow: "Yhteys",
    heading: "Pyydä ilmainen tuottoarvio",
    lead:
      "Kerro asunnostasi lyhyesti. Palaamme sinulle arvion ja seuraavien askelten kanssa — ilman myyntipuhetta.",
    steps: [
      { title: "Lähetät lomakkeen", body: "Kestää noin minuutin." },
      {
        title: "Otamme yhteyttä",
        body: "Yleensä saman päivän aikana, viimeistään seuraavana arkipäivänä.",
      },
      {
        title: "Saat arvion",
        body: "Käymme kohteen läpi ja kerromme suoraan, kannattaako lyhytvuokraus.",
      },
    ],
    trustLine: "Vastaamme yleensä saman päivän aikana. Ei sitoumusta.",
    form: {
      // TODO(lomake): luo ilmainen access key osoitteessa https://web3forms.com
      // ja lisää se tiedostoon .env.local avaimella NEXT_PUBLIC_WEB3FORMS_KEY.
      // Web3Forms-avain on suunniteltu julkiseksi — se ei ole salaisuus.
      name: { label: "Nimi", placeholder: "Etunimi Sukunimi", required: true },
      email: { label: "Sähköposti", placeholder: "nimi@example.com", required: true },
      phone: { label: "Puhelin", placeholder: "Valinnainen", required: false },
      area: {
        label: "Asunnon sijainti",
        placeholder: "Esim. Tammela, Kaleva, keskusta",
        required: true,
      },
      type: {
        label: "Asunnon tyyppi",
        options: ["Yksiö", "Kaksio", "Muu"],
        required: true,
      },
      message: {
        label: "Viesti",
        placeholder: "Kerro lyhyesti kohteestasi ja tilanteestasi.",
        required: false,
      },
      submit: "Lähetä yhteydenottopyyntö",
      submitting: "Lähetetään…",
      successTitle: "Kiitos — viesti on perillä.",
      successBody:
        "Otamme sinuun yhteyttä yleensä saman päivän aikana. Jos asia on kiireinen, soita suoraan.",
      errorTitle: "Lähetys ei onnistunut.",
      errorBody:
        "Kokeile uudelleen hetken päästä tai lähetä sähköpostia suoraan osoitteeseen",
      consent:
        "Lähettämällä lomakkeen hyväksyt, että otamme sinuun yhteyttä tuottoarvion merkeissä.",
    },
  },

  /* --------------------------------------------------------------- */
  footer: {
    tagline: "Hyvin hoidettu koti, ei kylmä toimisto.",
    description:
      "Hoidamme tamperelaisten asuntosijoittajien Airbnb-kohteet avaimet käteen -periaatteella.",
    columns: {
      site: "Sivusto",
      contact: "Yhteystiedot",
    },
    location: "Tampere, Suomi",
    copyright: "Hostly Tampere. Kaikki oikeudet pidätetään.",
    // TODO(asiakas): Y-tunnus ja tietosuojaseloste-linkki kun ovat olemassa.
  },
} as const;
