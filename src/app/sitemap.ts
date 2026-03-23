import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techincglobal.com";

  const services = [
    "erpnext-implementation",
    "frappe-customization-development",
    "business-process-automation",
    "legacy-system-modernization",
    "system-integration",
    "erp-consulting-advisory",
    "support-optimization",
    "training-change-management",
  ];

  const industries = [
    "manufacturing",
    "distribution-logistics",
    "retail-ecommerce",
    "professional-services",
    "construction-real-estate",
    "healthcare",
    "education",
    "trading-import-export",
  ];

  const blogSlugs = [
    "why-sri-lankan-businesses-choosing-erpnext",
    "true-cost-running-business-on-spreadsheets",
    "signs-legacy-erp-needs-replacement",
    "understanding-frappe-framework-technical-overview",
    "nxtgen-methodology-reduces-erp-implementation-risk",
    "digital-transformation-roadmap-mid-market",
  ];

  // -------------------------------------------------------------------------
  // Static pages
  // -------------------------------------------------------------------------
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/assessment`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // -------------------------------------------------------------------------
  // Service pages
  // -------------------------------------------------------------------------
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // -------------------------------------------------------------------------
  // Industry pages
  // -------------------------------------------------------------------------
  const industryPages: MetadataRoute.Sitemap = industries.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // -------------------------------------------------------------------------
  // Blog pages
  // -------------------------------------------------------------------------
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...blogPages];
}
