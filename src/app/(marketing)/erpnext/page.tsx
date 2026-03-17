import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ERPNext Implementation Services | TECHINCGLOBAL",
  description:
    "ERPNext implementation, rollout, localization, integration, and support services for finance, supply chain, manufacturing, HR, projects, and customer operations.",
};

const platformPillars = [
  {
    title: "One connected data model",
    description:
      "ERPNext connects finance, procurement, inventory, sales, projects, assets, HR, CRM, support, and manufacturing on the same transaction backbone. That reduces duplicate entries, reconciliation delays, and reporting conflicts.",
  },
  {
    title: "Broad business coverage",
    description:
      "The platform includes mature modules for accounting, buying, selling, stock, manufacturing, quality, maintenance, payroll, projects, website, and customer engagement, which makes it a strong fit for companies replacing fragmented systems.",
  },
  {
    title: "Extensible without lock-in",
    description:
      "Because ERPNext is built on the Frappe framework, workflows, forms, automations, reports, portals, and integrations can be extended cleanly when your operation needs more than default configuration.",
  },
];

const domainStacks = [
  {
    title: "Finance and control",
    modules: ["General Ledger", "Accounts Payable", "Accounts Receivable", "Bank Reconciliation", "Budgeting", "Cost Centers"],
    description:
      "Real-time financial control with group structures, multi-company support, tax handling, receivables, payables, cash visibility, and management reporting.",
  },
  {
    title: "Supply chain and inventory",
    modules: ["Item Master", "Purchase Cycle", "Warehouse Control", "Batch and Serial", "Reorder Rules", "Landed Cost"],
    description:
      "Stronger operational discipline across purchasing, receiving, stock transfers, valuation, dispatch, and replenishment.",
  },
  {
    title: "Sales, CRM, and service",
    modules: ["Lead to Order", "Quotations", "Pricing Rules", "Customer Portal", "Support Tickets", "Field Service"],
    description:
      "A single commercial flow from pipeline to quote, order, invoice, collection, and after-sales support.",
  },
  {
    title: "Projects and services",
    modules: ["Projects", "Tasks", "Timesheets", "Expenses", "Milestones", "Profitability"],
    description:
      "Useful for consulting, engineering, delivery, and service organizations that need project accountability and margin visibility.",
  },
  {
    title: "Manufacturing and quality",
    modules: ["BOM", "Production Plan", "Work Orders", "Job Cards", "Quality Inspection", "Maintenance"],
    description:
      "Production planning, shop-floor control, item traceability, machine coordination, and quality enforcement in a single operating system.",
  },
  {
    title: "People operations",
    modules: ["Employee Records", "Attendance", "Leave", "Payroll", "Expense Claims", "Performance"],
    description:
      "HR and payroll processes linked back to projects, cost centers, approvals, and leadership reporting.",
  },
];

const implementationTracks = [
  {
    title: "Discovery and process design",
    description:
      "We map your current commercial, operational, and finance processes, identify breakpoints, and define the future-state operating model before we start configuring the platform.",
  },
  {
    title: "Core ERP foundation",
    description:
      "Master data governance, approval structures, chart of accounts, item models, tax setup, warehouses, user roles, and transaction controls are implemented first so the rollout starts from stable ground.",
  },
  {
    title: "Department rollout by priority",
    description:
      "We usually phase implementation by risk and business impact: finance and stock control first, then procurement and sales, then manufacturing, service, HR, portals, and advanced automation.",
  },
  {
    title: "Localization and compliance",
    description:
      "Where customers need Sri Lanka-specific print formats, tax logic, approval documents, or management packs, we configure and extend ERPNext around those requirements instead of forcing workarounds.",
  },
  {
    title: "Integration and extension",
    description:
      "If your business depends on e-commerce, courier APIs, payment gateways, CRM tools, shop-floor devices, or custom portals, we connect them through structured Frappe integrations.",
  },
  {
    title: "Adoption, governance, and support",
    description:
      "We support user training, UAT, cutover planning, hypercare, reporting, change control, and ongoing optimization so the system keeps improving after go-live.",
  },
];

const whyCompaniesChooseUs = [
  "We implement ERPNext around real operating models, not generic demo processes.",
  "We combine configuration discipline with Frappe engineering when standard ERPNext needs to be extended.",
  "We phase programs to reduce disruption, improve adoption, and protect finance and inventory integrity.",
  "We build leadership dashboards and operating controls, not just transaction screens.",
];

const outcomes = [
  {
    value: "Single",
    label: "System of record",
    description: "A common operational and financial backbone across departments, branches, and entities.",
  },
  {
    value: "Faster",
    label: "Decision cycles",
    description: "Live visibility across stock, receivables, purchasing, projects, and production instead of delayed manual reporting.",
  },
  {
    value: "Lower",
    label: "Process friction",
    description: "Less duplicate entry, fewer spreadsheet handoffs, and tighter controls around approval-heavy workflows.",
  },
];

export default function ERPNextPage() {
  return (
    <div className="bg-[#F9FBFC]">
      <section className="bg-hero-gradient py-16 text-inverse sm:py-24">
        <Container size="default">
          <FadeUp>
            <div className="max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
                ERP Platform
              </span>
              <h1 className="mt-3 text-display-md font-bold text-white sm:text-display-lg">
                ERPNext implementation for companies that need one system to run finance,
                operations, and growth.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
                ERPNext is a full business platform built on Frappe. TECHINCGLOBAL uses
                it to unify finance, inventory, procurement, customer operations,
                manufacturing, projects, HR, and reporting into one operating model that
                leadership can trust.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Talk to an ERPNext Consultant</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href="/assessment">Take ERP Assessment</Link>
                </Button>
              </div>
            </div>
          </FadeUp>
        </Container>
      </section>

      <section className="section-padding bg-white border-b border-surface-border">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {platformPillars.map((pillar, index) => (
              <FadeUp key={pillar.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-surface-border bg-[#F9FBFC] p-6 shadow-soft">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-teal">
                    Platform Pillar
                  </span>
                  <h2 className="mt-2 text-xl font-bold text-text-primary">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {pillar.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <FadeUp>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Capability Map
              </span>
              <h2 className="mt-2 text-display-sm font-bold text-text-primary">
                What ERPNext can cover across your business
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                ERPNext is not just an accounting package or inventory tool. It is a
                broad operating platform that supports commercial, operational, and
                control workflows across the company.
              </p>
            </div>
          </FadeUp>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {domainStacks.map((stack, index) => (
              <FadeUp key={stack.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-text-primary">{stack.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {stack.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {stack.modules.map((module) => (
                      <span
                        key={module}
                        className="rounded-full border border-surface-border bg-[#F9FBFC] px-3 py-1 text-[11px] font-medium text-text-secondary"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
                Delivery Model
              </span>
              <h2 className="mt-2 text-display-sm font-bold">
                How TECHINCGLOBAL implements ERPNext
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                We treat ERPNext as a business transformation platform. The project is
                structured around process design, data integrity, operating control, user
                adoption, and long-term maintainability, not just module activation.
              </p>
              <div className="mt-6 space-y-4">
                {implementationTracks.map((track, index) => (
                  <div
                    key={track.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal text-xs font-bold text-slate-950">
                        {index + 1}
                      </span>
                      <h3 className="text-sm font-bold text-white">{track.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {track.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-teal">
                  Why Clients Choose Us
                </span>
                <div className="mt-4 space-y-3">
                  {whyCompaniesChooseUs.map((reason) => (
                    <div
                      key={reason}
                      className="rounded-xl border border-white/10 bg-slate-900/60 p-4"
                    >
                      <p className="text-sm leading-relaxed text-white/75">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white border-y border-surface-border">
        <Container>
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Business Impact
              </span>
              <h2 className="mt-2 text-display-sm font-bold text-text-primary">
                What a strong ERPNext rollout should change
              </h2>
            </div>
          </FadeUp>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {outcomes.map((outcome, index) => (
              <FadeUp key={outcome.label} delay={index * 0.05}>
                <div className="rounded-2xl border border-surface-border bg-[#F9FBFC] p-6 text-center shadow-soft">
                  <span className="text-display-sm font-bold text-brand-blue">{outcome.value}</span>
                  <p className="mt-2 text-sm font-bold text-text-primary">{outcome.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {outcome.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-brand-navy">
        <Container size="sm" className="text-center">
          <FadeUp>
            <h2 className="text-display-sm font-bold text-white">
              Need ERPNext to fit the way your company actually runs?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              We can help you scope the rollout, identify the highest-risk process gaps,
              and design a phased implementation that improves control without slowing
              the business down.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/industries">Explore Industry Solutions</Link>
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>
    </div>
  );
}
