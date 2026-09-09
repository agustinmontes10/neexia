import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

// public/X.svg viewBox — keep the mark's aspect ratio when scaling it.
const MARK_RATIO = 425 / 452;

async function markDataUri() {
  const svg = await readFile(path.join(process.cwd(), "public", "X.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

/**
 * Neexia isotype (public/X.svg) centered in a square and rendered to PNG at
 * build time via next/og. Shared by app/icon, app/apple-icon and the
 * /icon-*.png route handlers referenced from the web manifest, so every icon
 * stays derived from the one brand file.
 *
 * `scale` is the mark height as a fraction of the box (lower = more padding,
 * needed for `maskable` icons that get cropped to a circle).
 */
export function brandMarkImage({
  size,
  background = "transparent",
  scale = 0.78,
}: {
  size: number;
  background?: string;
  scale?: number;
}) {
  const height = Math.round(size * scale);
  const width = Math.round(height * MARK_RATIO);

  return markDataUri().then(
    (src) =>
      new ImageResponse(
        (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} width={width} height={height} alt="" />
          </div>
        ),
        { width: size, height: size }
      )
  );
}
