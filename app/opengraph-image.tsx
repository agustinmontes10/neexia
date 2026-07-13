import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#111111",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #FF8336 0%, #e14a28 100%)",
            opacity: 0.35,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -160,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #FF8336 0%, #e14a28 100%)",
            opacity: 0.2,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#FFFFFF",
          }}
        >
          Neexia
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 34,
            fontWeight: 500,
            color: "#FF8336",
          }}
        >
          IA aplicada a tu negocio
        </div>
      </div>
    ),
    { ...size }
  );
}
