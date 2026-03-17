import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";

// ---------------------------------------------------------------------------
// ServicesOverview
// ---------------------------------------------------------------------------

const services = [
  {
    icon: "Settings",
    title: "ERPNext Implementation",
    description:
      "End-to-end ERPNext deployment from planning to go-live.",
    slug: "erpnext-implementation",
  },
  {
    icon: "Code",
    title: "Frappe Customization",
    description:
      "Custom applications built on the Frappe framework.",
    slug: "frappe-customization-development",
  },
  {
    icon: "Zap",
    title: "Process Automation",
    description:
      "Intelligent workflow automation and approval processes.",
    slug: "business-process-automation",
  },
  {
    icon: "RefreshCw",
    title: "Legacy Modernization",
    description:
      "Migrate from outdated systems to modern ERPNext.",
    slug: "legacy-system-modernization",
  },
  {
    icon: "Link2",
    title: "System Integration",
    description:
      "Connect ERPNext with third-party platforms and APIs.",
    slug: "system-integration",
  },
  {
    icon: "MessageSquare",
    title: "ERP Consulting",
    description:
      "Strategic advisory to align ERP with business goals.",
    slug: "erp-consulting-advisory",
  },
  {
    icon: "HeadphonesIcon",
    title: "Support & Optimization",
    description:
      "Ongoing support, tuning, and system optimization.",
    slug: "support-optimization",
  },
  {
    icon: "GraduationCap",
    title: "Training & Change Management",
    description:
      "Comprehensive training programs for adoption.",
    slug: "training-change-management",
  },
] as const;

function ServicesOverview() {
  return (
    <section className="py-section-md" aria-label="Our services">
      <Container size="default">
        <SectionHeader
          eyebrow="Our Services"
          title="End-to-End ERP Solutions for Modern Enterprises"
          description="From initial consulting through implementation to ongoing support, we deliver comprehensive ERPNext solutions tailored to your unique business requirements."
          align="center"
        />

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export { ServicesOverview };
