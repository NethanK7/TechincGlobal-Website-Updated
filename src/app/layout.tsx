import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { InstallPrompt } from "@/pwa/install-prompt";
import { pwaConfig } from "@/pwa/config";
import { RegisterServiceWorker } from "@/pwa/register-service-worker";
import { CapacitorProvider } from "@/components/providers/capacitor-provider";
import { MobileTabBar } from "@/components/layout/mobile-tab-bar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techincglobal.com"),
  manifest: "/manifest.webmanifest",
  title: {
    default: "TECHINCGLOBAL | NXTGEN ERP Solutions",
    template: "%s | TECHINCGLOBAL",
  },
  description:
    "Leading enterprise ERP solutions provider specializing in NXTGEN Agile implementation methodology. Authorized Frappe Technologies partner accelerating digital transformation across Sri Lanka.",
  keywords: [
    "Frappe ERP",
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
  applicationName: pwaConfig.appName,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: pwaConfig.appName,
  },
  formatDetection: {
    telephone: false,
  },
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
  icons: {
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: pwaConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
        <RegisterServiceWorker />
        <CapacitorProvider>
          {children}
          <MobileTabBar />
        </CapacitorProvider>
        <InstallPrompt />
      </body>
    </html>
  );
}
