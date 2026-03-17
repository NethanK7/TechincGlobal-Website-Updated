export const siteConfig = {
  name: "TECHINCGLOBAL",
  legalName: "Techincglobal (Pvt) Ltd",
  description:
    "Leading enterprise ERP solutions provider specializing in NXTGEN Agile implementation methodology. Authorized Frappe Technologies partner accelerating digital transformation across Sri Lanka.",
  url: "https://techincglobal.com",
  ogImage: "https://techincglobal.com/og-image.jpg",
  contact: {
    email: "info@techincglobal.com",
    phone: "+94 707 978 978",
    address: {
      street: "No. 289/7 d, Lake Road",
      city: "Malabe",
      country: "Sri Lanka",
      full: "No. 289/7 d, Lake Road, Malabe, Sri Lanka",
    },
  },
  social: {
    linkedin: "https://linkedin.com/company/techincglobal",
    facebook: "https://facebook.com/techincglobal",
    twitter: "https://twitter.com/techincglobal",
  },
  stats: {
    implementations: "150+",
    fasterImplementation: "40%",
    clientSatisfaction: "98%",
    yearsExperience: "10+",
  },
} as const;

export type SiteConfig = typeof siteConfig;
