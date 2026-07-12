import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { t } from "@/content";
import { scrollEngine } from "./scroll-engine";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(t.site.url),
  title: {
    default: t.site.title,
    template: `%s | ${t.site.name}`,
  },
  description: t.site.description,
  applicationName: t.site.name,
  keywords: [
    "Airbnb hallinnointi Tampere",
    "Airbnb management",
    "lyhytvuokraus Tampere",
    "asunnon vuokraus Airbnb",
    "asuntosijoittaminen Tampere",
  ],
  authors: [{ name: t.site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: t.site.locale,
    url: t.site.url,
    siteName: t.site.name,
    title: t.site.title,
    description: t.site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: t.site.title,
    description: t.site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#143029",
  colorScheme: "light",
};

/**
 * LocalBusiness / ProfessionalService -strukturoitu data. Kertoo Googlelle
 * että olemme fyysinen tamperelainen toimija — juuri se väite jolla
 * erotumme etänä toimivista kilpailijoista. Tukee paikallishaun
 * rich resultseja.
 * TODO(asiakas): lisää postiosoite ja Y-tunnus kun ne ovat olemassa.
 */
const areaServed = t.site.areaServed.map((name) => ({ "@type": "City", name }));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${t.site.url}/#business`,
  name: t.site.name,
  description: t.site.description,
  url: t.site.url,
  email: t.site.email,
  telephone: t.site.phoneHref,
  image: `${t.site.url}/opengraph-image`,
  logo: `${t.site.url}/icon.svg`,
  priceRange: t.site.priceRange,
  serviceType: t.site.serviceType,
  areaServed,
  address: {
    "@type": "PostalAddress",
    addressLocality: t.site.city,
    addressRegion: t.site.region,
    addressCountry: t.site.country,
  },
  knowsLanguage: ["fi", "en"],
  ...(t.site.sameAs.length ? { sameAs: t.site.sameAs } : {}),
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Airbnb-hallinnointi ja co-hosting Tampereella",
      serviceType: t.site.serviceType,
      areaServed,
      provider: { "@id": `${t.site.url}/#business` },
    },
  },
};

/** Lomakkeen tekstit inline-skriptille (copy pysyy content-tiedostossa). */
const formCopy = {
  submitting: t.contact.form.submitting,
  successTitle: t.contact.form.successTitle,
  successBody: t.contact.form.successBody,
  errorTitle: t.contact.form.errorTitle,
  errorBody: t.contact.form.errorBody,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={inter.variable}>
      <head>
        {/*
          Merkitään heti että JS on käytössä. Vasta tämän jälkeen CSS piilottaa
          reveal-elementit. Ilman JS:ää mitään ei piiloteta → ei tyhjää sivua.
          Ajetaan <head>:ssä ennen maalausta, joten välkähdystä ei synny.
        */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }} />
        {/* Fontit self-hostattuna → ei ulkoisia render-blocking-pyyntöjä */}
        <link
          rel="preload"
          href="/fonts/GeneralSans-Semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-petrol-dark focus:px-5 focus:py-3 focus:text-cream"
        >
          {t.nav.skipToContent}
        </a>

        {children}

        <script
          dangerouslySetInnerHTML={{
            __html: `window.__HOSTLY_FORM__=${JSON.stringify(formCopy)};`,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: scrollEngine }} />
      </body>
    </html>
  );
}
