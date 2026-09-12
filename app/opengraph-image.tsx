import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.shortName} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0c",
          color: "#ededf0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            color: "#7aa5ff",
          }}
        >
          {site.role} · {site.location}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 76,
            fontWeight: 600,
            letterSpacing: "-0.03em",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            lineHeight: 1.4,
            color: "#a3a3ad",
            maxWidth: 900,
          }}
        >
          Full-stack RAG platforms · LLM pipelines · Auto-scaling AWS
          infrastructure
        </div>
      </div>
    ),
    { ...size },
  );
}
