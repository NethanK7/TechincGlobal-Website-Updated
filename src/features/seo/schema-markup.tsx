import { siteConfig } from "@/config/site";

// ---------------------------------------------------------------------------
// Helper to render a JSON-LD <script> tag safely in a Server Component
// ---------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SchemaScript({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Organization Schema
// ---------------------------------------------------------------------------

/**
 * Renders Organization JSON-LD structured data for TECHINCGLOBAL.
 *
 * Place this component in your root layout or on the homepage to help
 * search engines understand the organization behind the website.
 */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: "+94707978978",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: "LK",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.twitter,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94707978978",
      contactType: "customer service",
      email: siteConfig.contact.email,
      availableLanguage: ["English", "Sinhala", "Tamil"],
    },
    foundingLocation: {
      "@type": "Place",
      name: "Malabe, Sri Lanka",
    },
  };

  return <SchemaScript data={data} />;
}

// ---------------------------------------------------------------------------
// LocalBusiness Schema
// ---------------------------------------------------------------------------

/**
 * Renders LocalBusiness JSON-LD structured data for TECHINCGLOBAL.
 *
 * Helps search engines display the business in local search results
 * with address, hours, and contact details.
 */
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: siteConfig.ogImage,
    telephone: "+94707978978",
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.9023,
      longitude: 79.9594,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.twitter,
    ],
    priceRange: "$$",
  };

  return <SchemaScript data={data} />;
}

// ---------------------------------------------------------------------------
// Service Schema
// ---------------------------------------------------------------------------

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

/**
 * Renders Service JSON-LD structured data for a specific service page.
 *
 * @param name - The service name (e.g. "Frappe ERP Implementation")
 * @param description - A brief description of the service
 * @param url - The full canonical URL of the service page
 */
export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    serviceType: "ERP Implementation & Consulting",
  };

  return <SchemaScript data={data} />;
}

// ---------------------------------------------------------------------------
// FAQ Schema
// ---------------------------------------------------------------------------

interface FaqSchemaProps {
  faqs: Array<{ question: string; answer: string }>;
}

/**
 * Renders FAQPage JSON-LD structured data for pages with FAQ sections.
 *
 * @param faqs - Array of question/answer pairs
 */
export function FaqSchema({ faqs }: FaqSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <SchemaScript data={data} />;
}

// ---------------------------------------------------------------------------
// Breadcrumb Schema
// ---------------------------------------------------------------------------

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

/**
 * Renders BreadcrumbList JSON-LD structured data.
 *
 * Note: The shared `Breadcrumbs` component already emits breadcrumb schema
 * markup. Use this standalone component only when you need breadcrumb
 * schema without the visual breadcrumb nav (e.g., in a layout head).
 *
 * @param items - Array of breadcrumb items with name and full URL
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <SchemaScript data={data} />;
}

// ---------------------------------------------------------------------------
// Article Schema
// ---------------------------------------------------------------------------

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  tags?: string[];
}

/**
 * Renders Article JSON-LD structured data for blog posts and articles.
 *
 * @param title - The article headline
 * @param description - A brief summary/excerpt of the article
 * @param url - The full canonical URL of the article
 * @param datePublished - ISO 8601 date string (e.g. "2025-01-15")
 * @param dateModified - ISO 8601 date string; defaults to datePublished
 * @param author - Author name
 * @param image - Optional URL to the article's featured image
 * @param tags - Optional array of keyword tags
 */
export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  image,
  tags,
}: ArticleSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    ...(image && { image }),
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(tags && tags.length > 0 && { keywords: tags.join(", ") }),
  };

  return <SchemaScript data={data} />;
}
