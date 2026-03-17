import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Download,
  BookOpen,
  CheckSquare,
  BarChart3,
  Layers,
  ArrowRight,
  Calendar,
  Clock,
  Mail,
  ClipboardCheck,
  Tag,
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
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Resources | ERP Guides, Whitepapers & Tools",
  description:
    "Access free ERP guides, whitepapers, implementation checklists, and tools to help plan your digital transformation journey.",
};

// ---------------------------------------------------------------------------
// Resource data
// ---------------------------------------------------------------------------

interface Resource {
  title: string;
  description: string;
  type: string;
  typeBadgeColor: string;
  icon: React.ElementType;
  cta: string;
  available: boolean;
  href: string;
}

const resources: Resource[] = [
  {
    title: "ERP Implementation Guide",
    description:
      "A comprehensive guide covering every phase of an ERP implementation — from vendor selection and requirements gathering to go-live and post-implementation support. Ideal for project sponsors and implementation leads.",
    type: "Guide",
    typeBadgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: BookOpen,
    cta: "Download Free",
    available: true,
    href: "#" /* TODO_CLIENT_CONFIRMATION — Link to actual downloadable PDF */,
  },
  {
    title: "ERP Readiness Checklist",
    description:
      "A 30-point diagnostic checklist to assess whether your organisation is prepared for an ERP implementation. Covers process documentation, data quality, team capacity, and change management readiness.",
    type: "Checklist",
    typeBadgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: CheckSquare,
    cta: "Download Free",
    available: true,
    href: "#" /* TODO_CLIENT_CONFIRMATION — Link to actual downloadable PDF */,
  },
  {
    title: "Digital Transformation Playbook",
    description:
      "A step-by-step playbook for mid-market enterprises embarking on digital transformation. Includes frameworks for prioritising initiatives, building the business case, and measuring ROI.",
    type: "Playbook",
    typeBadgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    icon: Layers,
    cta: "Download Free",
    available: true,
    href: "#" /* TODO_CLIENT_CONFIRMATION — Link to actual downloadable PDF */,
  },
  {
    title: "ERPNext Feature Comparison",
    description:
      "A detailed comparison of ERPNext against leading proprietary ERP platforms including SAP Business One, Oracle NetSuite, and Microsoft Dynamics 365. Covers features, pricing, and total cost of ownership.",
    type: "Guide",
    typeBadgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: FileText,
    cta: "Download Free",
    available: true,
    href: "#" /* TODO_CLIENT_CONFIRMATION — Link to actual downloadable PDF */,
  },
  {
    title: "ROI Calculator",
    description:
      "An interactive tool to estimate the return on investment for your ERPNext implementation. Input your current operational costs and see projected savings across labour, error reduction, and process efficiency.",
    type: "Tool",
    typeBadgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    icon: BarChart3,
    cta: "Coming Soon",
    available: false,
    href: "#",
  },
  {
    title: "Industry Solution Briefs",
    description:
      "Tailored solution briefs for key industries including manufacturing, distribution, professional services, and retail. Each brief outlines industry-specific challenges and how ERPNext addresses them.",
    type: "Collection",
    typeBadgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    icon: ClipboardCheck,
    cta: "Download Free",
    available: true,
    href: "#" /* TODO_CLIENT_CONFIRMATION — Link to actual downloadable PDFs */,
  },
];

// ---------------------------------------------------------------------------
// Recent blog posts for the blog highlights section
// ---------------------------------------------------------------------------

const recentBlogPosts = [
  {
    slug: "why-sri-lankan-businesses-choosing-erpnext",
    title: "Why Sri Lankan Businesses Are Choosing ERPNext in 2025",
    excerpt:
      "Discover why a growing number of Sri Lankan enterprises are migrating to ERPNext for its cost-effectiveness, flexibility, and comprehensive feature set.",
    category: "ERPNext",
    date: "2025-01-15",
    readingTime: "8 min read",
  },
  {
    slug: "true-cost-running-business-on-spreadsheets",
    title: "The True Cost of Running Your Business on Spreadsheets",
    excerpt:
      "Spreadsheets may seem free, but the hidden costs of errors, inefficiency, and lost opportunities can be staggering.",
    category: "Digital Transformation",
    date: "2025-01-08",
    readingTime: "6 min read",
  },
  {
    slug: "signs-legacy-erp-needs-replacement",
    title: "5 Signs Your Legacy ERP System Needs Replacement",
    excerpt:
      "Is your current ERP holding your business back? Learn the critical warning signs that indicate it's time for a modern solution.",
    category: "Best Practices",
    date: "2024-12-20",
    readingTime: "7 min read",
  },
];

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    ERPNext: "bg-blue-50 text-blue-700 border-blue-200",
    "Digital Transformation": "bg-purple-50 text-purple-700 border-purple-200",
    "Best Practices": "bg-amber-50 text-amber-700 border-amber-200",
  };
  return colors[category] ?? "bg-gray-50 text-gray-700 border-gray-200";
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function ResourcesPage() {
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
              { label: "Resources" },
            ]}
          />

          <div className="mt-8">
            <SectionHeader
              eyebrow="Knowledge Hub"
              title="Resources & Tools"
              description="Free guides, checklists, and tools to help you evaluate, plan, and execute your ERP implementation and digital transformation journey."
              titleSize="lg"
              align="center"
            />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Resource cards grid                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-md">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <Card
                  key={resource.title}
                  className={cn(
                    "flex flex-col",
                    !resource.available && "opacity-75"
                  )}
                >
                  <CardHeader className="flex-1">
                    {/* Icon + Type badge row */}
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                        <Icon className="h-6 w-6 text-brand-blue" />
                      </div>
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                          resource.typeBadgeColor
                        )}
                      >
                        {resource.type}
                      </span>
                    </div>

                    {/* Title */}
                    <CardTitle className="text-lg">
                      {resource.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="mt-2">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <Separator className="mb-4" />
                    {resource.available ? (
                      <Button
                        variant="secondary"
                        className="w-full"
                        asChild
                      >
                        <Link href={resource.href}>
                          <Download className="mr-1.5 h-4 w-4" />
                          {resource.cta}
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full"
                        disabled
                      >
                        {resource.cta}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Blog highlights                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-surface-border bg-surface-muted py-section-md">
        <Container>
          <SectionHeader
            eyebrow="From Our Blog"
            title="Latest from Our Blog"
            description="Stay informed with expert insights on ERP strategy, implementation best practices, and digital transformation trends."
            align="center"
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentBlogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col">
                <CardHeader className="flex-1">
                  <div className="mb-3">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getCategoryColor(post.category)}`}
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 text-lg">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-brand-blue"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                  <Separator className="mb-4" />
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-light"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="secondary" asChild>
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ERP Readiness Assessment CTA                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-md">
        <Container size="narrow">
          <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface-card shadow-card">
            <div className="flex flex-col items-center gap-8 p-8 text-center sm:p-12 lg:flex-row lg:text-left">
              {/* Icon */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10">
                <ClipboardCheck className="h-10 w-10 text-brand-blue" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                  Take Our Free ERP Readiness Assessment
                </h2>
                <p className="mt-3 text-text-secondary">
                  Not sure if your organisation is ready for an ERP
                  implementation? Our complimentary assessment evaluates your
                  process maturity, data readiness, and organisational
                  capacity — and provides a tailored roadmap with
                  actionable recommendations.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:justify-start">
                  <Button size="lg" asChild>
                    <Link href="/assessment">
                      Start Free Assessment
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Talk to a Consultant</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Newsletter CTA                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-surface-border bg-surface-muted py-section-md">
        <Container size="narrow">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10">
              <Mail className="h-7 w-7 text-brand-blue" />
            </div>
            <h2 className="text-display-sm font-bold tracking-tight text-text-primary">
              Stay Updated
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-text-secondary">
              Get the latest guides, industry insights, and product updates
              delivered directly to your inbox. No spam — just valuable
              content for business leaders navigating digital transformation.
            </p>

            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
                aria-label="Email address"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="mt-3 text-xs text-text-muted">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Bottom CTA                                                         */}
      {/* ------------------------------------------------------------------ */}
      <CTASection
        heading="Ready to Start Your Transformation?"
        description="Our team of certified ERPNext consultants is ready to help you plan and execute your digital transformation journey. Book a free consultation today."
        primaryButton={{
          label: "Book Free Consultation",
          href: "/contact",
        }}
        secondaryButton={{
          label: "Explore Our Services",
          href: "/services",
        }}
      />
    </>
  );
}
