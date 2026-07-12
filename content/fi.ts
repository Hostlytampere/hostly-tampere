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
    // Title-tagi: kohdehakusana edessä, alle 60 merkkiä. Käytetään etusivun
    // oletustitlenä ja OG/Twitter-otsikkona.
    title: "Airbnb-hallinnointi Tampereella | Hostly Tampere",
    // Meta description: ~150 merkkiä, kohdehakusana + CTA.
    description:
      "Hostly Tampere hoitaa Airbnb-asuntosi Tampereella avaimet käteen: vieraiden viestintä 24/7, siivous, dokumentointi ja hinnoittelu. Pyydä ilmainen tuottoarvio.",
    url: "https://hostlytampere.fi", // TODO(asiakas): oikea domain
    locale: "fi_FI",
    email: "info@hostlytampere.fi", // TODO(asiakas): oikea sähköposti
    phone: "+358 50 4655415",
    phoneHref: "+358504655415",
    city: "Tampere",
    region: "Pirkanmaa",
    country: "FI",
    // Rakenteista dataa (JSON-LD) varten — paikallishaun relevanssi.
    priceRange: "€€",
    serviceType: "Airbnb-hallinnointi ja lyhytvuokrauksen isännöinti",
    areaServed: ["Tampere", "Nokia", "Ylöjärvi", "Kangasala", "Lempäälä", "Pirkkala", "Pirkanmaa"],
    sameAs: [] as string[], // TODO(asiakas): some-profiilit (Instagram, Facebook) kun on
    businessId: null as string | null, // TODO(asiakas):
    privacyUrl: null as string | null, // TODO(asiakas): tietosuojaseloste
  },

  /* --------------------------------------------------------------- */
  nav: {
    // Hrefit ovat absoluuttisia (/#…), jotta samat linkit toimivat myös
    // alasivulta /nain-se-toimii/ käsin — ei pelkkiä sivunsisäisiä ankkureita.
    links: [
      { label: "Palvelu", href: "/#palvelu" },
      { label: "Näin se toimii", href: "/nain-se-toimii/" },
      { label: "Turvallisuus", href: "/#turvallisuus" },
      { label: "Ota yhteyttä", href: "/#yhteys" },
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
      "Hoidamme Airbnb-kohteesi Tampereella avaimet käteen -periaatteella: vieraiden viestintä ympäri vuorokauden, siivous, hinnoittelu ja dokumentointi ennen ja jälkeen jokaisen varauksen. Sinä saat kuukausiraportin ja mielenrauhan.",
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
    moreLink: "Lue koko prosessi vaihe vaiheelta",
    moreHref: "/nain-se-toimii/",
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
    // Ohjaava muotoilu, EI kategorinen lupaus ("on vähennettävä kulu").
    deduction:
      "Palvelumaksumme on tyypillisesti vuokraustoiminnan vähennyskelpoinen kulu. Autamme sinua pitämään kirjaa ja ohjaamme oikean tiedon äärelle.",
    // Juridinen rajaus. Tämä ei ole muotoseikka — se on luottamustekijä.
    disclaimer:
      "Emme anna sitovaa vero- tai lakineuvontaa. Autamme sinua ymmärtämään mitä sinun tulee tietää ja tarvittaessa ohjaamme ammattilaisen puheille.",
  },

  /* ---------------------------------------------------------------
   * Rahaliikenne. Luottamussignaali: emme koskaan käsittele
   * omistajan rahoja itse — kaikki kulkee Airbnb:n kautta.
   * Käytetään sekä etusivun nostossa että /nain-se-toimii -sivulla.
   * ------------------------------------------------------------- */
  money: {
    eyebrow: "Rahaliikenne",
    heading: "Näin rahat liikkuvat",
    lead:
      "Kaikki maksut kulkevat Airbnb:n kautta. Airbnb tilittää sinulle osuutesi ja meille palvelupalkkiomme automaattisesti — emme koskaan käsittele rahojasi itse, etkä saa meiltä erillisiä laskuja.",
    points: [
      "Kaikki maksuliikenne kulkee Airbnb:n kautta",
      "Airbnb tilittää sinulle osuutesi automaattisesti",
      "Airbnb tilittää meille palvelupalkkion suoraan",
      "Ei käteistä eikä erillisiä laskuja — kaikki läpinäkyvää alustan sisällä",
    ],
    note: "Käytännössä: emme koskaan pidä hallussamme sinun rahojasi.",
  },

  /* ---------------------------------------------------------------
   * Hinnoittelun logiikka — EI erillistä hintasivua, EI lukittuja
   * prosentteja. Selitetään rakenne läpinäkyvästi.
   * ------------------------------------------------------------- */
  pricing: {
    eyebrow: "Hinnoittelu",
    heading: "Selkeä rakenne, ei kiinteitä kuukausimaksuja",
    lead:
      "Veloitamme kertaluontoisen aloitusmaksun asunnon käyttöönotosta ja sen jälkeen osuuden toteutuneista varauksista. Ei kiinteitä kuukausimaksuja — ansaitsemme vain kun sinä ansaitset. Tarkka hinta riippuu kohteestasi ja sovitaan ilmaisessa tuottoarviossa.",
    points: [
      {
        title: "Kertaluontoinen aloitusmaksu",
        body: "Asunnon käyttöönotosta: valokuvaus, listaus, hinnoittelu ja setup.",
      },
      {
        title: "Osuus toteutuneista varauksista",
        body: "Sen jälkeen veloitamme sovitun osuuden vain toteutuneista varauksista.",
      },
      {
        title: "Ei kiinteitä kuukausimaksuja",
        body: "Tyhjästä kuukaudesta ei koidu sinulle kuluja meiltä.",
      },
      {
        title: "Sama intressi kuin sinulla",
        body: "Ansaitsemme vain kun sinä ansaitset — siksi maksimoimme tuottosi.",
      },
    ],
    note: "Tarkka hinta riippuu asunnosta ja määritellään ilmaisessa tuottoarviossa.",
  },

  /* ---------------------------------------------------------------
   * Oma sivu: /nain-se-toimii
   * Laajennettu prosessi kädestä pitäen. Sama premium-ilme kuin etusivu.
   * ------------------------------------------------------------- */
  processPage: {
    metaTitle: "Näin Airbnb-hallinnointi toimii",
    metaDescription:
      "Näin Airbnb-hallinnointi toimii Tampereella: tuottoarviosta jatkuvaan hoitoon. Katso vaiheet, rahaliikenne ja hinnoittelu. Pyydä ilmainen tuottoarvio.",
    hero: {
      eyebrow: "Näin se toimii",
      // Saavutettava hakusana h1:lle (ei näy visuaalisesti, kantaa SEO-painon).
      srKeyword: "Näin Airbnb-hallinnointi toimii Tampereella.",
      headlineLines: ["Kädestä pitäen", "ensimmäisestä vieraasta eteenpäin."],
      lead:
        "Ei mustaa laatikkoa. Tässä koko prosessi vaihe vaiheelta: mitä tapahtuu, mitä me teemme, mitä sinulta odotetaan ja millä aikataululla. Lopussa vielä miten rahat liikkuvat ja miten hinnoittelu rakentuu.",
      ctaPrimary: "Pyydä ilmainen tuottoarvio",
      ctaSecondary: "Takaisin etusivulle",
    },
    timelineEyebrow: "Prosessi",
    timelineHeading: "Neljä vaihetta, alusta loppuun",
    // Rikkaammat vaiheet kuin etusivun tiivistelmä.
    steps: [
      {
        number: "01",
        title: "Yhteydenotto ja ilmainen tuottoarvio",
        timing: "Muutama päivä yhteydenotosta",
        body:
          "Otat yhteyttä lomakkeella tai puhelimitse. Teemme markkinatutkimuksen kohteesi sijainnin ja tyypin perusteella ja annamme arvion realistisesta tuottopotentiaalista. Sovitaan tapaaminen — paikan päällä tai etänä.",
        weDo: [
          "Markkinatutkimus sijainnin ja asuntotyypin mukaan",
          "Realistinen tuottoarvio — kerromme myös jos vastaus on ei",
          "Tapaaminen paikan päällä tai etänä",
        ],
        fromYou: "Perustiedot asunnostasi. Ei sitoumusta, ei kuluja.",
      },
      {
        number: "02",
        title: "Sopimus ja käyttöönotto",
        timing: "Noin 1–2 viikkoa",
        body:
          "Sovitaan yhteistyöstä. Käymme kohteessa: ammattivalokuvaus, ilmoituksen luonti ja copywriting sekä hinnoittelustrategian määritys. Tarkistamme taloyhtiön järjestyssäännöt ja lyhytvuokrauksen sallittavuuden sekä autamme verotuksen ja kirjanpidon peruskysymyksissä.",
        weDo: [
          "Ammattivalokuvaus ja ilmoituksen copywriting",
          "Hinnoittelustrategian määritys",
          "Taloyhtiön sääntöjen ja lyhytvuokrauksen sallittavuuden tarkistus",
          "Verotuksen ja kirjanpidon peruskysymykset kanssasi",
        ],
        fromYou: "Avaimet ja pääsy kohteeseen kuvausta ja käyttöönottoa varten.",
      },
      {
        number: "03",
        title: "Julkaisu ja vieraiden hankinta",
        timing: "Julkaisu heti setupin jälkeen",
        body:
          "Listaus julkaistaan Airbnb:ssä ja tarvittaessa muilla alustoilla. Dynaaminen hinnoittelu otetaan käyttöön — huomioimme Tampereen tapahtumat, kuten Nokia Arenan keikat ja messut, sekä sesongit. Aloitamme vieraiden hankinnan ja seulonnan.",
        weDo: [
          "Julkaisu Airbnb:ssä ja mahdollisilla muilla alustoilla",
          "Dynaaminen hinnoittelu tapahtumien ja sesonkien mukaan",
          "Vieraiden hankinta ja seulonta ennen hyväksyntää",
        ],
        fromYou: "Et enää mitään — tästä eteenpäin hoidamme kaiken.",
      },
      {
        number: "04",
        title: "Jatkuva hoito",
        timing: "Jatkuvaa — pyörii itsestään",
        body:
          "Vieraiden viestintä 24/7, check-in ja check-out, siivous ja liinavaatteet jokaisen varauksen välissä. Dokumentoimme kohteen kuvin ja videoin ennen ja jälkeen jokaisen vieraan ja ilmoitamme heti, jos jotain rikkoutuu tai katoaa. Saat kuukausittaisen raportin.",
        weDo: [
          "Vieraiden viestintä 24/7 puolestasi",
          "Check-in- ja check-out-järjestelyt",
          "Siivous, liinavaatteet ja tarvikkeiden täydennys joka välissä",
          "Kuva- ja videodokumentointi ennen ja jälkeen jokaisen vieraan",
          "Välitön ilmoitus, jos jotain rikkoutuu tai katoaa",
          "Kuukausittainen raportti tuotosta ja käyttöasteesta",
        ],
        fromYou: "Luet kuukausiraportin. Siinä se.",
      },
    ],
    stepWeDoLabel: "Mitä me teemme",
    stepFromYouLabel: "Mitä sinulta tarvitaan",
    // Tiivis turvallisuusnosto + ankkuri etusivun turvaosioon.
    securityTeaser: {
      eyebrow: "Turvallisuus",
      heading: "Omaisuutesi ei jää vieraan varaan",
      body:
        "Dokumentoimme kohteen kuvin ja videoin ennen ja jälkeen jokaisen varauksen ja seulomme vieraat Airbnb-profiilin arvioiden perusteella. Koska olemme fyysisesti Tampereella, olemme kohteessa saman päivän aikana jos jotain sattuu.",
      cta: "Lue miten suojaamme kotisi",
      ctaHref: "/#turvallisuus",
    },
    finalCta: {
      eyebrow: "Aloitetaan",
      heading: "Valmis näkemään mitä asuntosi tuottaisi?",
      lead:
        "Pyydä ilmainen tuottoarvio. Käymme kohteesi läpi ja kerromme suoraan, kannattaako lyhytvuokraus juuri sinun asunnossasi — ilman myyntipuhetta.",
      button: "Pyydä ilmainen tuottoarvio",
    },
  },

  /* ---------------------------------------------------------------
   * Usein kysytyt kysymykset. Sekä konversio- että SEO-tarkoitus:
   * vastaukset kohdistuvat pitkähäntähakuihin ja mahdollistavat
   * FAQPage-rich-snippetin (JSON-LD renderöidään FAQ-komponentissa).
   * Vastaukset eivät sisällä uusia lupauksia — samat väitteet kuin muualla.
   * ------------------------------------------------------------- */
  faq: {
    eyebrow: "Usein kysyttyä",
    heading: "Kysymyksiä Airbnb-hallinnoinnista Tampereella",
    lead:
      "Jos jokin jää mietityttämään, kysy rohkeasti — vastaamme mielellämme myös henkilökohtaisesti.",
    items: [
      {
        q: "Mitä Airbnb-hallinnointi maksaa Tampereella?",
        a: "Veloitamme kertaluontoisen aloitusmaksun asunnon käyttöönotosta ja sen jälkeen osuuden toteutuneista varauksista. Ei kiinteitä kuukausimaksuja — ansaitsemme vain kun sinä ansaitset. Tarkka hinta riippuu kohteesta ja sovitaan ilmaisessa tuottoarviossa.",
      },
      {
        q: "Onko Airbnb-vuokraus laillista taloyhtiössä?",
        a: "Se riippuu taloyhtiön järjestyssäännöistä ja yhtiöjärjestyksestä. Tarkistamme nämä puolestasi ennen kuin ilmoitus menee auki, jotta vältyt ikäviltä yllätyksiltä.",
      },
      {
        q: "Miten rahat liikkuvat?",
        a: "Kaikki maksut kulkevat Airbnb:n kautta. Airbnb tilittää sinulle osuutesi ja meille palvelupalkkiomme automaattisesti — emme koskaan käsittele rahojasi itse, etkä saa meiltä erillisiä laskuja.",
      },
      {
        q: "Millä alueella toimitte?",
        a: "Toimimme Tampereella ja lähikunnissa. Olemme fyysisesti paikan päällä, joten pääsemme kohteeseen nopeasti — toisin kuin etänä toimivat hallinnointiyritykset.",
      },
      {
        q: "Mitä palveluun kuuluu?",
        a: "Avaimet käteen: vieraiden viestintä 24/7, check-in ja check-out, siivous ja liinavaatteet, dynaaminen hinnoittelu sekä kuva- ja videodokumentointi ennen ja jälkeen jokaisen varauksen. Saat kuukausiraportin tuotosta ja käyttöasteesta.",
      },
      {
        q: "Kuinka nopeasti pääsen alkuun?",
        a: "Annamme tuottoarvion tyypillisesti muutamassa päivässä yhteydenotosta. Sopimuksen jälkeen asunnon käyttöönotto — valokuvaus, listaus ja hinnoittelu — kestää yleensä 1–2 viikkoa.",
      },
    ],
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
    // Alatunnisteen lakilinkit. Sivut: app/tietosuoja + app/kayttoehdot.
    legal: [
      { label: "Tietosuojaseloste", href: "/tietosuoja/" },
      { label: "Käyttöehdot", href: "/kayttoehdot/" },
    ],
  },

  /* ---------------------------------------------------------------
   * LAKISIVUT — tietosuojaseloste ja käyttöehdot.
   * Renderöidään components/LegalDoc.tsx:llä reiteille
   * /tietosuoja/ ja /kayttoehdot/. Linkit vain footerissa.
   *
   * TODO(asiakas): täytä ennen kuin sivusto on tuotannossa oikeilla
   * asiakkailla — virallinen toiminimi/yhtiömuoto ja Y-tunnus (site.businessId).
   * Nämä tekstit ovat huolellinen GDPR-pohja, eivät korvaa juristin tarkistusta.
   * ------------------------------------------------------------- */
  legal: {
    updatedLabel: "Päivitetty",
    updated: "12.7.2026",
    backToHome: "Takaisin etusivulle",
    registrarHeading: "Rekisterinpitäjä",
    registrarNote:
      "Tietosuoja-asioissa voit olla meihin yhteydessä alla olevilla yhteystiedoilla. Vastaamme pyyntöihin ilman aiheetonta viivytystä.",

    privacy: {
      eyebrow: "Tietosuoja",
      title: "Tietosuojaseloste",
      intro:
        "Tämä seloste kertoo, mitä henkilötietoja keräämme, mihin käytämme niitä ja mitkä ovat sinun oikeutesi. Käsittelemme henkilötietoja EU:n yleisen tietosuoja-asetuksen (GDPR) ja Suomen tietosuojalain mukaisesti.",
      sections: [
        {
          heading: "Mitä henkilötietoja käsittelemme",
          blocks: [
            {
              p: "Käsittelemme vain niitä tietoja, jotka annat meille itse — yhteydenottolomakkeella tai ottaessasi meihin yhteyttä sähköpostitse tai puhelimitse. Näitä ovat:",
            },
            {
              ul: [
                "Nimi",
                "Sähköpostiosoite",
                "Puhelinnumero (jos annat sen)",
                "Asunnon sijainti ja tyyppi",
                "Vapaamuotoisen viestisi sisältö",
              ],
            },
            {
              p: "Emme pyydä emmekä kerää arkaluonteisia henkilötietoja. Emme käytä profilointia emmekä automaattista päätöksentekoa.",
            },
          ],
        },
        {
          heading: "Mihin käytämme tietoja ja millä perusteella",
          blocks: [
            {
              p: "Käytämme tietojasi vain siihen tarkoitukseen, jota varten annoit ne: yhteydenottopyyntöösi vastaamiseen, tuottoarvion tekemiseen ja mahdollisen yhteistyön valmisteluun.",
            },
            {
              p: "Käsittelyn oikeusperusteena on suostumuksesi (lomakkeen lähettäminen tai yhteydenotto) sekä pyynnöstäsi toteutettavat sopimusta edeltävät toimet. Emme käytä tietojasi suoramarkkinointiin ilman erillistä suostumustasi emmekä myy tai vuokraa niitä eteenpäin.",
            },
          ],
        },
        {
          heading: "Kuinka kauan säilytämme tietoja",
          blocks: [
            {
              p: "Säilytämme yhteydenottotietoja vain niin kauan kuin on tarpeen asiasi hoitamiseksi. Jos yhteistyötä ei synny, poistamme yhteydenottopyynnön tiedot viimeistään 12 kuukauden kuluessa.",
            },
            {
              p: "Jos yhteistyö alkaa, tietoja säilytetään asiakassuhteen ajan ja sen jälkeen niin kauan kuin lainsäädäntö (esimerkiksi kirjanpitolaki) edellyttää.",
            },
          ],
        },
        {
          heading: "Palvelut ja tietojen käsittelijät",
          blocks: [
            {
              p: "Sivustomme on toteutettu ilman seurantaa ja ilman omaa palvelinpuolen tietokantaa. Käytämme kuitenkin muutamaa luotettavaa palveluntarjoajaa, jotka käsittelevät tietoja puolestamme:",
            },
            {
              ul: [
                "Lomakepalvelu (Web3Forms): välittää lomakkeella lähettämäsi tiedot sähköpostiimme.",
                "Verkkosivuston ylläpito (Vercel): sivuston teknisestä toimituksesta vastaava palvelu käsittelee tavanomaisia lokitietoja, kuten IP-osoitteen, tietoturvan ja toimivuuden varmistamiseksi.",
                "Sähköposti: yhteydenottosi päätyy sähköpostilaatikkoomme, jonka tarjoaa sähköpostipalveluntarjoajamme.",
              ],
            },
            {
              p: "Jokainen käsittelijä käsittelee tietoja vain ohjeidemme mukaisesti ja soveltuvan tietosuojasopimuksen puitteissa.",
            },
          ],
        },
        {
          heading: "Tietojen siirto EU:n tai ETA:n ulkopuolelle",
          blocks: [
            {
              p: "Osa käyttämistämme palveluista voi käsitellä tietoja EU:n tai ETA-alueen ulkopuolella. Näissä tapauksissa siirto perustuu Euroopan komission hyväksymiin asianmukaisiin suojatoimiin, kuten vakiosopimuslausekkeisiin (SCC).",
            },
          ],
        },
        {
          heading: "Evästeet",
          blocks: [
            {
              p: "Sivustomme ei käytä seuranta- tai mainosevästeitä eikä analytiikkatyökaluja. Emme aseta selaimeesi suostumusta vaativia evästeitä. Fontit ja muut resurssit ladataan omalta palvelimeltamme, joten kolmannet osapuolet eivät seuraa sinua sivustollamme.",
            },
          ],
        },
        {
          heading: "Tietojen suojaaminen",
          blocks: [
            {
              p: "Yhteys sivustolle on suojattu salauksella (HTTPS). Pääsy yhteydenottotietoihin on rajattu vain niille, jotka niitä työssään tarvitsevat, ja käsittelemme tietoja luottamuksellisesti.",
            },
          ],
        },
        {
          heading: "Sinun oikeutesi",
          blocks: [
            {
              p: "Sinulla on tietosuoja-asetuksen mukaiset oikeudet omiin tietoihisi. Voit milloin tahansa:",
            },
            {
              ul: [
                "saada tietää, mitä tietoja sinusta käsittelemme (tarkastusoikeus)",
                "pyytää virheellisten tietojen oikaisua",
                "pyytää tietojesi poistamista (”oikeus tulla unohdetuksi”)",
                "pyytää käsittelyn rajoittamista tai vastustaa käsittelyä",
                "peruuttaa antamasi suostumuksen",
                "saada antamasi tiedot siirrettävässä muodossa",
              ],
            },
            {
              p: "Voit käyttää oikeuksiasi ottamalla meihin yhteyttä alla olevilla yhteystiedoilla.",
            },
          ],
        },
        {
          heading: "Valitusoikeus",
          blocks: [
            {
              p: "Jos katsot, että käsittelemme tietojasi tietosuojalainsäädännön vastaisesti, sinulla on oikeus tehdä valitus valvontaviranomaiselle. Suomessa tämä on tietosuojavaltuutetun toimisto (tietosuoja.fi).",
            },
          ],
        },
        {
          heading: "Muutokset tähän selosteeseen",
          blocks: [
            {
              p: "Voimme päivittää tätä selostetta palvelun tai lainsäädännön muuttuessa. Ajantasainen versio on aina saatavilla tällä sivulla, ja yläreunan päivämäärä kertoo viimeisimmän muutoksen.",
            },
          ],
        },
      ],
    },

    terms: {
      eyebrow: "Ehdot",
      title: "Käyttöehdot",
      intro:
        "Nämä ehdot koskevat tämän verkkosivuston käyttöä. Käyttämällä sivustoa hyväksyt nämä ehdot.",
      sections: [
        {
          heading: "Sivuston tarkoitus",
          blocks: [
            {
              p: "Tämä on Hostly Tampereen markkinointisivusto. Sen tarkoitus on esitellä palvelumme ja tarjota mahdollisuus pyytää maksuton tuottoarvio. Sivuston sisältö on yleistä tietoa, eikä se muodosta sitovaa tarjousta tai sopimusta.",
            },
          ],
        },
        {
          heading: "Tuottoarviot eivät ole takuita",
          blocks: [
            {
              p: "Antamamme tuottoarviot perustuvat markkinatietoon ja kokemukseen, mutta ne ovat arvioita — eivät takuita tulevasta tuotosta. Lyhytvuokrauksen todelliseen tuottoon vaikuttavat monet tekijät, joita emme voi täysin ennakoida tai hallita, kuten kysyntä, sesongit ja markkinatilanne.",
            },
          ],
        },
        {
          heading: "Emme anna sitovaa neuvontaa",
          blocks: [
            {
              p: "Sivuston sisältö, mukaan lukien verotusta ja taloyhtiön sääntöjä koskevat maininnat, on tarkoitettu ohjaavaksi yleistiedoksi. Se ei ole sitovaa vero-, laki- tai sijoitusneuvontaa. Suosittelemme varmistamaan oman tilanteesi ammattilaiselta.",
            },
          ],
        },
        {
          heading: "Immateriaalioikeudet",
          blocks: [
            {
              p: "Sivuston sisältö — tekstit, kuvat, logo ja ulkoasu — on Hostly Tampereen tai sen kumppaneiden omaisuutta. Sisältöä ei saa kopioida tai käyttää kaupallisesti ilman lupaa.",
            },
          ],
        },
        {
          heading: "Kolmansien osapuolten palvelut",
          blocks: [
            {
              p: "Palvelumme toimii Airbnb-alustan kautta. Emme vastaa Airbnb:n tai muiden kolmansien osapuolten palveluiden sisällöstä, ehdoista tai toiminnasta. Kuhunkin palveluun sovelletaan sen omia ehtoja.",
            },
          ],
        },
        {
          heading: "Vastuunrajoitus",
          blocks: [
            {
              p: "Pyrimme pitämään sivuston tiedot ajantasaisina ja virheettöminä, mutta emme takaa niiden täydellistä paikkansapitävyyttä tai sivuston keskeytyksetöntä saatavuutta. Emme vastaa välillisistä vahingoista, jotka aiheutuvat sivuston käytöstä.",
            },
          ],
        },
        {
          heading: "Sovellettava laki",
          blocks: [
            {
              p: "Näihin ehtoihin ja sivuston käyttöön sovelletaan Suomen lakia. Mahdolliset erimielisyydet pyritään ratkaisemaan ensisijaisesti neuvottelemalla.",
            },
          ],
        },
      ],
    },
  },
} as const;
