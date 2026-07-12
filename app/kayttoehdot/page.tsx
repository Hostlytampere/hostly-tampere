import type { Metadata } from "next";
import { t } from "@/content";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: t.legal.terms.title,
  description: t.legal.terms.intro,
  alternates: { canonical: "/kayttoehdot/" },
  robots: { index: true, follow: true },
};

export default function KayttoehdotPage() {
  return <LegalDoc doc={t.legal.terms} />;
}
