import type { Metadata } from "next";
import { t } from "@/content";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: t.legal.privacy.title,
  description: t.legal.privacy.intro,
  alternates: { canonical: "/tietosuoja/" },
  robots: { index: true, follow: true },
};

export default function TietosuojaPage() {
  return <LegalDoc doc={t.legal.privacy} showRegistrar />;
}
