import type { MetadataRoute } from "next";

export const pwaConfig = {
  appName: "TECHINCGLOBAL",
  shortName: "TECHINC",
  description:
    "Enterprise ERP solutions, Frappe consulting, and digital transformation workflows with an installable app experience.",
  startUrl: "/",
  themeColor: "#2563eb",
  backgroundColor: "#f8fbff",
  iconSizes: {
    small: 192,
    large: 512,
    apple: 180,
  },
} as const;

export function createManifest(): MetadataRoute.Manifest {
  return {
    name: pwaConfig.appName,
    short_name: pwaConfig.shortName,
    description: pwaConfig.description,
    start_url: pwaConfig.startUrl,
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: pwaConfig.backgroundColor,
    theme_color: pwaConfig.themeColor,
    categories: ["business", "productivity", "technology"],
    lang: "en",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
