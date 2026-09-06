import { ImageResponse } from "next/og";

/**
 * The Open Graph card, generated at build time: navy field, white lockup,
 * the tagline. Applies to every route under /app.
 *
 * To use a committed static card instead, drop it at /public/brand/og.png and
 * point `openGraph.images` in app/layout.tsx at it, then delete this file.
 */

export const alt = "BusinessGPS — Growing As Leaders. Together.";
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
          justifyContent: "space-between",
          background: "#001749",
          padding: "84px 88px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 96, fontWeight: 800 }}>
          <span style={{ color: "#FFFFFF" }}>Business</span>
          <span style={{ color: "#FF0000", fontStyle: "italic" }}>GPS</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 60, fontWeight: 700, color: "#FFFFFF", letterSpacing: -1 }}>
            Growing As Leaders. Together.
          </div>
          <div style={{ fontSize: 32, color: "rgba(255,255,255,0.65)" }}>
            A weekly growth community. ourbizgps.com
          </div>
        </div>

        <div style={{ display: "flex", height: 14, width: "100%" }}>
          <div style={{ flex: 1, background: "#005FFE" }} />
          <div style={{ flex: 1, background: "#01A6C2" }} />
          <div style={{ flex: 1, background: "#FF0000" }} />
          <div style={{ flex: 1, background: "#0a2f74" }} />
        </div>
      </div>
    ),
    size,
  );
}
