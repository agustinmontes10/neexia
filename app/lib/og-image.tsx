import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";
export const OG_ALT = "Neexia — Agencia de IA";

async function wordmarkDataUri() {
  const svg = await readFile(
    path.join(process.cwd(), "public", "LogoNeexiaBlanco.svg")
  );
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

/**
 * Shared share-image template for the per-page opengraph-image routes
 * (servicios/[slug], casos/[slug]). Same dark brand treatment as the root
 * app/opengraph-image.tsx, laid out as a titled card.
 */
export async function ogImage({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  const wordmark = await wordmarkDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(255,131,54,0.35), transparent 55%), radial-gradient(circle at 12% 100%, rgba(255,189,89,0.18), transparent 50%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={wordmark} alt="" width={216} height={56} />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: 4,
                color: "#FFBD59",
              }}
            >
              {eyebrow.toUpperCase()}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#FFFFFF", opacity: 0.6 }}>
          neexia.com.ar
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
