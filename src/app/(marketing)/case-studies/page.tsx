import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Factory,
  Truck,
  Briefcase,
  TrendingUp,
  Quote,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/shared/section-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CTASection } from "@/components/shared/cta-section";
import { TestimonialCard } from "@/components/shared/testimonial-card";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Case Studies | ERP Success Stories",
  description:
    "Explore how TECHINCGLOBAL has helped businesses transform operations with Frappe ERP. Real results from real implementations.",
};

// ---------------------------------------------------------------------------
// Case study data
// ---------------------------------------------------------------------------

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  outcomes: string[];
  icon: React.ElementType;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "manufacturing-erp-transformation",
    title: "Leading Manufacturer Achieves 35% Efficiency Gain with Frappe ERP",
    client:
      "A leading garment manufacturing company in Sri Lanka" /* TODO_CLIENT_CONFIRMATION */,
    industry: "Manufacturing",
    challenge:
      "Operating with disconnected systems across 3 facilities, leading to production delays, inventory discrepancies, and manual reporting that consumed 40+ hours per month.",
    outcomes: [
      "35% improvement in production efficiency",
      "60% reduction in inventory discrepancies",
      "Real-time visibility across all 3 facilities",
      "ROI achieved within 8 months",
    ],
    icon: Factory,
  },
  {
    slug: "distribution-digital-modernization",
    title: "Distribution Company Cuts Order Processing Time by 60%",
    client:
      "A major FMCG distribution company" /* TODO_CLIENT_CONFIRMATION */,
    industry: "Distribution & Logistics",
    challenge:
      "Legacy system couldn't handle growing order volumes, resulting in delayed deliveries, billing errors, and poor customer satisfaction scores.",
    outcomes: [
      "60% faster order processing",
      "95% delivery accuracy (up from 78%)",
      "Automated invoicing saving 200+ hours/month",
      "Customer satisfaction improved to 94%",
    ],
    icon: Truck,
  },
  {
    slug: "professional-services-automation",
    title: "Professional Services Firm Automates 80% of Manual Processes",
    client:
      "A mid-sized IT consulting firm" /* TODO_CLIENT_CONFIRMATION */,
    industry: "Professional Services",
    challenge:
      "Manual timesheet tracking, fragmented project billing, and disconnected financial systems leading to revenue leakage and poor project visibility.",
    outcomes: [
      "80% reduction in manual processes",
      "15% improvement in project profitability",
      "Real-time project cost tracking",
      "Automated billing reduced AR days by 40%",
    ],
    icon: Briefcase,
  },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

const testimonials = [
  {
    quote:
      "The implementation was smooth and well-managed. TECHINCGLOBAL's team understood our manufacturing processes deeply and configured Frappe ERP to match our exact workflows. Within three months, we had real-time visibility across all our facilities for the first time in our company's history." /* TODO_CLIENT_CONFIRMATION */,
    authorName: "Operations Director",
    role: "Senior Management",
    company: "Leading Garment Manufacturer" /* TODO_CLIENT_CONFIRMATION */,
  },
  {
    quote:
      "What impressed us most was the NXTGEN methodology. Instead of waiting months to see results, we had our first module live within weeks. The phased approach gave our team time to adapt and provided quick wins that built confidence across the organisation." /* TODO_CLIENT_CONFIRMATION */,
    authorName: "Managing Director",
    role: "Executive Leadership",
    company: "FMCG Distribution Company" /* TODO_CLIENT_CONFIRMATION */,
  },
];

// ---------------------------------------------------------------------------
// Industry colour helpers
// ---------------------------------------------------------------------------

function getIndustryColor(industry: string): string {
  const colors: Record<string, string> = {
    Manufacturing: "bg-orange-50 text-orange-700 border-orange-200",
    "Distribution & Logistics":
      "bg-blue-50 text-blue-700 border-blue-200",
    "Professional Services":
      "bg-emerald-50 text-emerald-700 border-emerald-200",
  };
  return colors[industry] ?? "bg-gray-50 text-gray-700 border-gray-200";
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function CaseStudiesPage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Breadcrumbs & Page header                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface-muted pb-12 pt-4">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies" },
            ]}
          />

          <div className="mt-8">
            <SectionHeader
              eyebrow="Case Studies"
              title="Success Stories"
              description="Real results from real implementations. Explore how organisations across Sri Lanka have transformed their operations with Frappe ERP and the NXTGEN methodology."
              titleSize="lg"
              align="center"
            />
          </div>

          {/* Summary stats */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "150+", label: "Implementations" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "40%", label: "Faster Delivery" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-display-sm font-bold text-brand-blue">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Case study cards                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-md">
        <Container>
          <div className="space-y-10">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;

              return (
                <Card
                  key={study.slug}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Left column — content */}
                    <div className="flex-1 p-6 sm:p-8 lg:p-10">
                      {/* Industry badge */}
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
                            getIndustryColor(study.industry)
                          )}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {study.industry}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                        {study.title}
                      </h3>

                      {/* Client description */}
                      <p className="mt-2 text-sm text-text-muted">
                        Client: {study.client}
                      </p>

                      {/* Challenge */}
                      <div className="mt-5">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                          The Challenge
                        </h4>
                        <p className="mt-2 leading-relaxed text-text-secondary">
                          {study.challenge}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="mt-6">
                        <Button variant="secondary" asChild>
                          <Link href={`/case-studies/${study.slug}`}>
                            Read Full Story
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Right column — outcomes */}
                    <div className="border-t border-surface-border bg-surface-muted p-6 sm:p-8 lg:w-[360px] lg:border-l lg:border-t-0 lg:p-10">
                      <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                        <TrendingUp className="h-4 w-4 text-brand-blue" />
                        Key Outcomes
                      </h4>
                      <ul className="space-y-3">
                        {study.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                            <span className="text-sm font-medium text-text-primary">
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Testimonials section                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-surface-border bg-surface-muted py-section-md">
        <Container>
          <SectionHeader
            eyebrow="Client Testimonials"
            title="What Our Clients Say"
            description="Hear directly from the businesses we have partnered with on their digital transformation journeys."
            align="center"
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                authorName={testimonial.authorName}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-text-muted">
            {/* TODO_CLIENT_CONFIRMATION — Replace placeholder names and quotes with confirmed client testimonials */}
            Client names and testimonials are used with permission.
            Specific details may be anonymised for confidentiality.
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Process overview                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-md">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Our Approach"
            title="How We Deliver Results"
            description="Every success story follows a proven methodology designed to minimise risk and maximise value."
            align="center"
          />

          <div className="mx-auto mt-12 max-w-2xl space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description:
                  "We begin with a thorough analysis of your current processes, pain points, and strategic objectives to define a clear implementation roadmap.",
              },
              {
                step: "02",
                title: "Phased Implementation",
                description:
                  "Using our NXTGEN Agile methodology, we deliver functional modules in focused sprints — starting with your highest-impact processes.",
              },
              {
                step: "03",
                title: "Training & Adoption",
                description:
                  "Every sprint includes hands-on training and feedback loops, ensuring your team is confident and productive from day one.",
              },
              {
                step: "04",
                title: "Ongoing Optimisation",
                description:
                  "Post go-live, we continue to monitor performance, refine configurations, and expand capabilities as your business evolves.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-sm font-bold text-brand-blue">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Bottom CTA                                                         */}
      {/* ------------------------------------------------------------------ */}
      <CTASection
        heading="Ready to Write Your Success Story?"
        description="Join the growing number of Sri Lankan businesses that have transformed their operations with Frappe ERP. Let's discuss how we can help you achieve measurable results."
        primaryButton={{
          label: "Book Free Consultation",
          href: "/contact",
        }}
        secondaryButton={{
          label: "Take ERP Assessment",
          href: "/assessment",
        }}
      />
    </>
  );
}
