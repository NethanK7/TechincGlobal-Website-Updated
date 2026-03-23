import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

// ---------------------------------------------------------------------------
// Input type
// ---------------------------------------------------------------------------

interface CreatePageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}

// ---------------------------------------------------------------------------
// createPageMetadata
// ---------------------------------------------------------------------------

/**
 * Creates a complete Next.js `Metadata` object for any page.
 *
 * - Applies the title template: `${title} | TECHINCGLOBAL`
 * - Sets canonical URL based on `siteConfig.url` + `path`
 * - Generates OpenGraph and Twitter card metadata
 * - Includes optional keywords and custom OG image
 *
 * @example
 * ```ts
 * export const metadata = createPageMetadata({
 *   title: "Frappe ERP Implementation",
 *   description: "End-to-end Frappe ERP implementation services...",
 *   path: "/services/erpnext-implementation",
 *   keywords: ["Frappe ERP", "ERP implementation", "Sri Lanka"],
 * });
 * ```
 */
export function createPageMetadata({
  title,
  description,
  path,
  image,
  keywords,
}: CreatePageMetadataInput): Metadata {
  const canonicalUrl = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;
  const formattedTitle = `${title} | ${siteConfig.name}`;

  return {
    title: formattedTitle,
    description,

    ...(keywords &&
      keywords.length > 0 && {
        keywords,
      }),

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: formattedTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [ogImage],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
