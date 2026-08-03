import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Neexia — IA aplicada a tu negocio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    path.join(process.cwd(), "public", "LogoNeexiaBlanco.svg")
  );
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(255,131,54,0.35), transparent 55%), radial-gradient(circle at 12% 100%, rgba(255,189,89,0.18), transparent 50%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={480} height={125} />
        <div
          style={{
            display: "flex",
            fontSize: 46,
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Hacemos que la IA trabaje para tu empresa
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#FFBD59" }}>
          neexia.com.ar
        </div>
      </div>
    ),
    { ...size }
  );
}
