import type { MetadataRoute } from "next";
import { t } from "@/content";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${t.site.url}/sitemap.xml`,
  };
}
