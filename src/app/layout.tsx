import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techincglobal.com"),
  title: {
    default: "TECHINCGLOBAL | NXTGEN ERP Solutions",
    template: "%s | TECHINCGLOBAL",
  },
  description:
    "Leading enterprise ERP solutions provider specializing in NXTGEN Agile implementation methodology. Authorized Frappe Technologies partner accelerating digital transformation across Sri Lanka.",
  keywords: [
    "ERPNext",
    "ERP implementation",
    "Frappe",
    "digital transformation",
    "Sri Lanka",
    "ERP consulting",
    "business automation",
    "NXTGEN methodology",
  ],
  authors: [{ name: "TECHINCGLOBAL" }],
  creator: "TECHINCGLOBAL",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techincglobal.com",
    siteName: "TECHINCGLOBAL",
    title: "TECHINCGLOBAL | NXTGEN ERP Solutions",
    description:
      "Leading enterprise ERP solutions provider specializing in NXTGEN Agile implementation methodology. Authorized Frappe Technologies partner.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TECHINCGLOBAL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TECHINCGLOBAL | NXTGEN ERP Solutions",
    description:
      "Leading enterprise ERP solutions provider. Authorized Frappe Technologies partner.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TECHINCGLOBAL",
              legalName: "Techincglobal (Pvt) Ltd",
              url: "https://techincglobal.com",
              logo: "https://techincglobal.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+94-707-978-978",
                contactType: "sales",
                email: "info@techincglobal.com",
                areaServed: "LK",
                availableLanguage: ["English", "Sinhala", "Tamil"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 289/7 d, Lake Road",
                addressLocality: "Malabe",
                addressCountry: "LK",
              },
              sameAs: [
                "https://linkedin.com/company/techincglobal",
                "https://facebook.com/techincglobal",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
