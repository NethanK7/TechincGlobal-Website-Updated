import { ImageResponse } from "next/og";
import { pwaConfig } from "@/pwa/config";

type PwaIconProps = {
  size: number;
  includeWordmark?: boolean;
};

export function renderPwaIcon({ size, includeWordmark = true }: PwaIconProps) {
  const logoSize = Math.round(size * 0.32);
  const titleSize = Math.max(30, Math.round(size * 0.12));
  const subtitleSize = Math.max(14, Math.round(size * 0.045));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: Math.round(size * 0.11),
          color: "#eff6ff",
          background:
            "linear-gradient(145deg, #0f172a 0%, #1d4ed8 55%, #60a5fa 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: logoSize,
              height: logoSize,
              borderRadius: Math.round(size * 0.08),
              background: "rgba(248, 250, 252, 0.16)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              boxShadow: "0 20px 40px rgba(15, 23, 42, 0.28)",
              fontSize: Math.round(size * 0.13),
              fontWeight: 800,
              letterSpacing: "-0.08em",
            }}
          >
            TG
          </div>
          <div
            style={{
              display: "flex",
              padding: `${Math.round(size * 0.02)}px ${Math.round(size * 0.035)}px`,
              borderRadius: 999,
              background: "rgba(255, 255, 255, 0.14)",
              fontSize: subtitleSize,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            PWA
          </div>
        </div>
        {includeWordmark ? (
          <div style={{ display: "flex", flexDirection: "column", gap: Math.round(size * 0.02) }}>
            <div
              style={{
                display: "flex",
                fontSize: titleSize,
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.06em",
              }}
            >
              {pwaConfig.appName}
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: Math.round(size * 0.72),
                fontSize: subtitleSize,
                lineHeight: 1.35,
                color: "rgba(239, 246, 255, 0.82)",
              }}
            >
              ERP workflows and consulting, installed like an app.
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    ),
    {
      width: size,
      height: size,
    },
  );
}
