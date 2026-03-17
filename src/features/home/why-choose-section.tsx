import { Rocket, Award, Globe } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { StatCard } from "@/components/shared/stat-card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";

// ---------------------------------------------------------------------------
// WhyChooseSection
// ---------------------------------------------------------------------------

const differentiators = [
  {
    icon: Rocket,
    title: "NXTGEN Methodology",
    description:
      "Our proprietary Agile implementation approach reduces deployment time by up to 40% while ensuring seamless adoption and measurable business outcomes.",
  },
  {
    icon: Award,
    title: "Frappe Certified Expertise",
    description:
      "As an authorized Frappe Technologies partner, we bring certified expertise in ERPNext implementation, customization, and enterprise-grade support.",
  },
  {
    icon: Globe,
    title: "Local Insight, Global Standards",
    description:
      "Deep understanding of the Sri Lankan business landscape combined with international best practices and delivery standards.",
  },
] as const;

const stats = [
  { value: "150+", label: "Implementations" },
  { value: "40%", label: "Faster Delivery" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
] as const;

function WhyChooseSection() {
  return (
    <section className="bg-surface-muted py-section-md" aria-label="Why choose us">
      <Container size="default">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="The TECHINCGLOBAL Advantage"
          align="center"
        />

        {/* Differentiator cards */}
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col rounded-2xl border border-surface-border bg-surface-card p-8 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                  {/* Top accent border */}
                  <div className="mb-6 h-1 w-12 rounded-full bg-brand-blue" />
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Stats row */}
        <FadeUp delay={0.2}>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

export { WhyChooseSection };
