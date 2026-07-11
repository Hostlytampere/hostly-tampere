import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { t } from "@/content";

export const alt = t.site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Pakollinen `output: "export"` -tilassa: kuva renderöidään kerran buildissa. */
export const dynamic = "force-static";

/**
 * OG-kuva generoidaan build-vaiheessa oikeilla brändiväreillä ja
 * General Sansilla. Sama kaarimotiivi kuin sivustolla.
 */
export default async function OpengraphImage() {
  const [semibold, medium] = await Promise.all([
    readFile(join(process.cwd(), "app/_og/GeneralSans-Semibold.woff")),
    readFile(join(process.cwd(), "app/_og/GeneralSans-Medium.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #245448 0%, #143029 55%, #0e211c 100%)",
          fontFamily: "General Sans",
          position: "relative",
        }}
      >
        {/* Kaari vesileimana */}
        <svg
          width="620"
          height="520"
          viewBox="10 20 116 96"
          fill="none"
          style={{ position: "absolute", right: -60, bottom: -110, opacity: 0.09 }}
        >
          <path
            d="M18,108 C18,58 50,28 68,28 C86,28 118,58 118,108"
            stroke="#F7F4EE"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="58" height="48" viewBox="10 20 116 96" fill="none">
            <path
              d="M18,108 C18,58 50,28 68,28 C86,28 118,58 118,108"
              stroke="#F7F4EE"
              strokeWidth="13"
              strokeLinecap="round"
            />
            <circle cx="96" cy="58" r="9" fill="#C8674A" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 600, color: "#F7F4EE", lineHeight: 1 }}>
              Hostly
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#E8C4B5",
                letterSpacing: 6,
                marginTop: 6,
              }}
            >
              TAMPERE
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 26 }}>
            <div style={{ width: 8, height: 8, borderRadius: 8, background: "#C8674A" }} />
            <span
              style={{
                fontSize: 17,
                fontWeight: 500,
                color: "#E8C4B5",
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Airbnb-hallinnointi Tampereella
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 600,
              color: "#F7F4EE",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            <span>Asuntosi tuottaa.</span>
            <span style={{ color: "rgba(247,244,238,0.55)" }}>Sinä et tee mitään.</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "General Sans", data: semibold, weight: 600, style: "normal" },
        { name: "General Sans", data: medium, weight: 500, style: "normal" },
      ],
    }
  );
}
