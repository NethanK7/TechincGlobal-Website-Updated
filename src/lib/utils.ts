import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

// ---------------------------------------------------------------------------
// Class-name helper (clsx + tailwind-merge)
// ---------------------------------------------------------------------------

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ---------------------------------------------------------------------------
// Date formatting
// ---------------------------------------------------------------------------

/**
 * Formats an ISO date string into a human-readable format.
 *
 * @example formatDate("2025-06-15") // "June 15, 2025"
 */
export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

// ---------------------------------------------------------------------------
// Reading-time estimate
// ---------------------------------------------------------------------------

const WORDS_PER_MINUTE = 200;

/**
 * Returns estimated reading time in minutes for a given text body.
 * Strips HTML/Markdown artefacts before counting.
 */
export function calculateReadingTime(content: string): number {
  const plainText = content
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[#*_`~>[\]()!-]/g, "") // strip common Markdown syntax
    .trim();

  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

  return Math.max(1, minutes);
}

// ---------------------------------------------------------------------------
// Slugify
// ---------------------------------------------------------------------------

/**
 * Converts an arbitrary string into a URL-safe slug.
 *
 * @example slugify("ERPNext Implementation") // "erpnext-implementation"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove non-word characters (except hyphens)
    .replace(/[\s_]+/g, "-") // replace spaces & underscores with hyphens
    .replace(/-+/g, "-") // collapse consecutive hyphens
    .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens
}

// ---------------------------------------------------------------------------
// Next.js Metadata helper
// ---------------------------------------------------------------------------

interface GenerateMetadataParams {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}

/**
 * Builds a complete Next.js `Metadata` object with OpenGraph, Twitter card,
 * canonical URL, and other SEO-critical fields.
 */
export function generateMetadata({
  title,
  description,
  path,
  image,
  keywords,
}: GenerateMetadataParams): Metadata {
  const canonicalUrl = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    ...(keywords && { keywords }),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
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
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}
