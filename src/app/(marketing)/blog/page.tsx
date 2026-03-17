import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Mail,
} from "lucide-react";

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
  title: "Blog | ERP Insights & Digital Transformation Resources",
  description:
    "Expert insights on ERPNext implementation, digital transformation, business automation, and ERP best practices from TECHINCGLOBAL's team.",
};

// ---------------------------------------------------------------------------
// Blog post data
// ---------------------------------------------------------------------------

const categories = [
  "All",
  "ERPNext",
  "Digital Transformation",
  "Business Automation",
  "Best Practices",
] as const;

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "why-sri-lankan-businesses-choosing-erpnext",
    title: "Why Sri Lankan Businesses Are Choosing ERPNext in 2025",
    excerpt:
      "Discover why a growing number of Sri Lankan enterprises are migrating to ERPNext for its cost-effectiveness, flexibility, and comprehensive feature set.",
    category: "ERPNext",
    date: "2025-01-15",
    readingTime: "8 min read",
    author: "TECHINCGLOBAL Team",
  },
  {
    slug: "true-cost-running-business-on-spreadsheets",
    title: "The True Cost of Running Your Business on Spreadsheets",
    excerpt:
      "Spreadsheets may seem free, but the hidden costs of errors, inefficiency, and lost opportunities can be staggering. Here's what you're really paying.",
    category: "Digital Transformation",
    date: "2025-01-08",
    readingTime: "6 min read",
    author: "TECHINCGLOBAL Team",
  },
  {
    slug: "signs-legacy-erp-needs-replacement",
    title: "5 Signs Your Legacy ERP System Needs Replacement",
    excerpt:
      "Is your current ERP holding your business back? Learn the critical warning signs that indicate it's time for a modern solution.",
    category: "Best Practices",
    date: "2024-12-20",
    readingTime: "7 min read",
    author: "TECHINCGLOBAL Team",
  },
  {
    slug: "understanding-frappe-framework-technical-overview",
    title: "Understanding the Frappe Framework: A Technical Overview",
    excerpt:
      "A deep dive into the Frappe framework that powers ERPNext, exploring its architecture, extensibility, and why it's ideal for enterprise applications.",
    category: "ERPNext",
    date: "2024-12-12",
    readingTime: "10 min read",
    author: "TECHINCGLOBAL Team",
  },
  {
    slug: "nxtgen-methodology-reduces-erp-implementation-risk",
    title: "How NXTGEN Methodology Reduces ERP Implementation Risk",
    excerpt:
      "ERP implementations have a high failure rate. Learn how our NXTGEN Agile approach systematically eliminates the most common causes of project failure.",
    category: "Best Practices",
    date: "2024-12-05",
    readingTime: "9 min read",
    author: "TECHINCGLOBAL Team",
  },
  {
    slug: "digital-transformation-roadmap-mid-market",
    title: "Digital Transformation Roadmap for Mid-Market Enterprises",
    excerpt:
      "A practical, step-by-step guide to planning and executing digital transformation for mid-sized businesses in South Asia.",
    category: "Digital Transformation",
    date: "2024-11-28",
    readingTime: "12 min read",
    author: "TECHINCGLOBAL Team",
  },
];

// ---------------------------------------------------------------------------
// Category colour map
// ---------------------------------------------------------------------------

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    ERPNext: "bg-blue-50 text-blue-700 border-blue-200",
    "Digital Transformation": "bg-purple-50 text-purple-700 border-purple-200",
    "Business Automation": "bg-teal-50 text-teal-700 border-teal-200",
    "Best Practices": "bg-amber-50 text-amber-700 border-amber-200",
  };
  return colors[category] ?? "bg-gray-50 text-gray-700 border-gray-200";
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function BlogPage() {
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
              { label: "Blog" },
            ]}
          />

          <div className="mt-8">
            <SectionHeader
              eyebrow="Our Blog"
              title="Insights & Resources"
              description="Expert knowledge, practical guides, and thought leadership on ERPNext, digital transformation, and business automation — written by the TECHINCGLOBAL team."
              titleSize="lg"
              align="center"
            />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Category filter tabs (static display)                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-surface-border bg-surface-card">
        <Container>
          <div className="flex flex-wrap items-center gap-2 py-4">
            {categories.map((category) => (
              <span
                key={category}
                className={
                  category === "All"
                    ? "inline-flex items-center rounded-full bg-brand-blue px-4 py-1.5 text-xs font-semibold text-white"
                    : "inline-flex items-center rounded-full border border-surface-border bg-surface-card px-4 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
                }
              >
                {category}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Blog post grid                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-md">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col">
                <CardHeader className="flex-1">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getCategoryColor(post.category)}`}
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <CardTitle className="line-clamp-2 text-lg">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-brand-blue"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>

                  {/* Excerpt */}
                  <CardDescription className="mt-2 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Meta row */}
                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {post.author}
                    </span>
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

                  {/* Read article link */}
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
              Get the latest insights on ERP implementation, digital
              transformation strategies, and industry best practices delivered
              directly to your inbox.
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
        heading="Need Expert ERP Guidance?"
        description="Our team of certified ERPNext consultants is ready to help you plan and execute your digital transformation journey."
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
