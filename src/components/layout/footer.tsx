import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Methodology", href: "/methodology" },
    { label: "Assessment", href: "/assessment" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "ERPNext Implementation", href: "/services/erpnext-implementation" },
    { label: "Frappe Customization", href: "/services/frappe-customization-development" },
    { label: "Process Automation", href: "/services/business-process-automation" },
    { label: "Legacy Modernization", href: "/services/legacy-system-modernization" },
    { label: "System Integration", href: "/services/system-integration" },
    { label: "ERP Consulting", href: "/services/erp-consulting-advisory" },
    { label: "Support & Optimization", href: "/services/support-optimization" },
    { label: "Training", href: "/services/training-change-management" },
  ],
  industries: [
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Distribution & Logistics", href: "/industries/distribution-logistics" },
    { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Construction", href: "/industries/construction-real-estate" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Education", href: "/industries/education" },
    { label: "Trading & Import Export", href: "/industries/trading-import-export" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-navy text-text-inverse" role="contentinfo">
      <Container>
        {/* Main footer grid */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block" aria-label="TECHINCGLOBAL Home">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">TECHINC</span>
                <span className="text-brand-teal">GLOBAL</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Leading enterprise ERP solutions provider specializing in NXTGEN Agile
              implementation methodology. Authorized Frappe Technologies partner
              accelerating digital transformation across Sri Lanka.
            </p>

            {/* Contact details */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                <span>No. 289/7 d, Lake Road, Malabe, Sri Lanka</span>
              </div>
              <a
                href="mailto:info@techincglobal.com"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-teal" />
                info@techincglobal.com
              </a>
              <a
                href="tel:+94707978978"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-teal" />
                +94 707 978 978
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-4">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/company/techincglobal", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { label: "Facebook", href: "https://facebook.com/techincglobal", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-all hover:bg-brand-blue hover:text-white"
                  aria-label={social.label}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Industries
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} TECHINCGLOBAL. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-xs text-slate-500 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-slate-500 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
