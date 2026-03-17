import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { BarChartCard, FlowDiagramCard } from "@/components/shared/visuals";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Frappe Development Services | TECHINCGLOBAL",
  description:
    "Frappe application design, custom module development, workflow engineering, integration, portal development, and support services from TECHINCGLOBAL.",
};

const frameworkPillars = [
  {
    title: "Metadata-driven application model",
    description:
      "Frappe uses DocTypes, forms, permissions, workflows, and reports as first-class platform constructs. That lets teams build operational applications faster than starting from low-level plumbing.",
  },
  {
    title: "Built-in business application primitives",
    description:
      "Authentication, roles, background jobs, print formats, notifications, web forms, REST APIs, reports, dashboards, and audit trails are already part of the framework.",
  },
  {
    title: "Strong fit for operational systems",
    description:
      "Frappe is particularly effective when a company needs internal business software that coordinates people, approvals, transactions, documents, and real-time status across departments.",
  },
];

const whatWeBuild = [
  {
    title: "Operational apps",
    items: ["Procurement control apps", "Field service workflows", "Internal portals", "Approval-heavy line-of-business systems"],
  },
  {
    title: "ERPNext extensions",
    items: ["Custom DocTypes", "Industry-specific workflows", "Approval matrices", "Management dashboards and reports"],
  },
  {
    title: "Integration layers",
    items: ["Payment gateway connectors", "Courier and logistics integrations", "Third-party system sync", "API middleware and orchestration"],
  },
  {
    title: "Self-service experiences",
    items: ["Customer portals", "Supplier portals", "Employee utilities", "Submission and request management"],
  },
];

const engineeringCapabilities = [
  {
    title: "DocTypes, permissions, and workflow design",
    description:
      "We design document structures, validation rules, field logic, approval chains, and user permissions so the application mirrors the controls your operation actually needs.",
  },
  {
    title: "Server logic and automation",
    description:
      "Python controllers, scheduled jobs, notifications, assignment logic, and event-driven automation are used to eliminate manual follow-up and strengthen control points.",
  },
  {
    title: "Reports, dashboards, and workspaces",
    description:
      "We build the views management and frontline teams need: operational queues, summary dashboards, printable outputs, and exception reporting that is tied to live transactions.",
  },
  {
    title: "API and external system integration",
    description:
      "Frappe provides a practical base for API-first integrations. We use it to connect commerce channels, finance services, external CRMs, device data, and specialist systems.",
  },
];

const companyApproach = [
  {
    title: "We start with the process, not the framework.",
    description:
      "Before writing code, we map the operational flow, approval logic, data ownership, document lifecycle, and reporting expectations. That keeps the solution aligned with how the business runs.",
  },
  {
    title: "We prefer configuration before customization.",
    description:
      "Where Frappe already offers the right behavior, we use standard constructs first. That reduces complexity and keeps the system easier to maintain over time.",
  },
  {
    title: "We customize when it improves control or speed.",
    description:
      "When your process genuinely needs a custom data model, portal, workflow, or integration, we build it cleanly so it remains understandable and supportable after go-live.",
  },
  {
    title: "We treat supportability as part of engineering quality.",
    description:
      "Apps are delivered with roles, testing, deployment discipline, documentation, and change control in mind, not as isolated features that become difficult to operate later.",
  },
];

const useCases = [
  "Replacing approval-heavy spreadsheets and email-based request handling with controlled digital workflows.",
  "Building portals and internal apps around procurement, service delivery, customer onboarding, compliance, or operations support.",
  "Extending ERPNext where industry-specific forms, calculations, reports, or interfaces are required.",
  "Creating a central orchestration layer between multiple business systems without introducing another fragmented toolset.",
];

const architectureFlow = [
  {
    title: "Model the business object",
    description:
      "Define the DocTypes, relationships, statuses, and validation rules around the operational process.",
  },
  {
    title: "Control the workflow",
    description:
      "Apply permissions, assignments, notifications, approvals, and task routing to the real-world decision path.",
  },
  {
    title: "Extend the system boundary",
    description:
      "Expose APIs, background jobs, integrations, and portal actions where the process crosses teams or systems.",
  },
  {
    title: "Surface management visibility",
    description:
      "Deliver workspaces, dashboards, reports, and print outputs tied directly to live transaction data.",
  },
];

const buildProfile = [
  {
    label: "Configuration leverage",
    value: "High",
    widthClass: "w-[84%]",
    note: "Use core Frappe features first to keep the solution stable and maintainable.",
  },
  {
    label: "Workflow depth",
    value: "Strong",
    widthClass: "w-[90%]",
    note: "Frappe is especially good when a process depends on approvals, roles, and document state changes.",
  },
  {
    label: "Integration readiness",
    value: "API-first",
    widthClass: "w-[82%]",
    note: "Useful for portals, connectors, middleware, and applications that need to coordinate multiple systems.",
  },
  {
    label: "Custom UI and portals",
    value: "Flexible",
    widthClass: "w-[76%]",
    note: "Good fit for customer, supplier, field-team, and internal service experiences.",
  },
];

export default function FrappePage() {
  return (
    <div className="bg-[#F9FBFC]">
      <section className="bg-hero-gradient py-16 text-inverse sm:py-24">
        <Container size="default">
          <FadeUp>
            <div className="max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
                Application Framework
              </span>
              <h1 className="mt-3 text-display-md font-bold text-white sm:text-display-lg">
                Frappe development for companies that need custom business software without
                rebuilding the basics from scratch.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
                Frappe is the framework underneath ERPNext, but it is also a strong
                platform for custom operational software. TECHINCGLOBAL uses Frappe to
                build extensions, portals, workflows, integrations, and full business
                applications that stay aligned with real operating requirements.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Discuss a Frappe Build</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href="/erpnext">See ERPNext Services</Link>
                </Button>
              </div>
            </div>
          </FadeUp>
        </Container>
      </section>

      <section className="section-padding bg-white border-b border-surface-border">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {frameworkPillars.map((pillar, index) => (
              <FadeUp key={pillar.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-surface-border bg-[#F9FBFC] p-6 shadow-soft">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-teal">
                    Framework Pillar
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
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                What We Build
              </span>
              <h2 className="mt-2 text-display-sm font-bold text-text-primary">
                Common Frappe development engagements
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Frappe is well suited to systems that sit between spreadsheets and
                heavyweight enterprise software. It gives us the structure to build
                durable business applications without reimplementing permissions,
                workflows, APIs, notifications, and reporting each time.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {whatWeBuild.map((group, index) => (
                  <FadeUp key={group.title} delay={index * 0.05}>
                    <div className="rounded-2xl border border-surface-border bg-white p-5 shadow-soft">
                      <h3 className="text-base font-bold text-text-primary">{group.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-surface-border bg-[#F9FBFC] px-3 py-1 text-[11px] font-medium text-text-secondary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-3xl border border-surface-border bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between border-b border-surface-border pb-4">
                  <span className="text-xs font-semibold text-text-primary">Typical Frappe stack</span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-teal">
                    Business App
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    "DocTypes for the business entities and transaction lifecycle",
                    "Role-based permissions and approval workflows",
                    "Python server methods, validations, and background jobs",
                    "Dashboards, reports, notifications, and print formats",
                    "API integrations and portals where the process crosses systems",
                  ].map((item) => (
                    <div key={item} className="rounded-xl border border-surface-border bg-[#F9FBFC] p-4">
                      <p className="text-sm leading-relaxed text-text-secondary">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <Container>
          <FadeUp>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
                Engineering Scope
              </span>
              <h2 className="mt-2 text-display-sm font-bold">
                The main areas we engineer on Frappe
              </h2>
            </div>
          </FadeUp>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {engineeringCapabilities.map((capability, index) => (
              <FadeUp key={capability.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-bold text-white">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {capability.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white border-y border-surface-border">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <FadeUp>
              <FlowDiagramCard
                eyebrow="Architecture Map"
                title="How we usually shape a Frappe business application"
                steps={architectureFlow}
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <BarChartCard
                eyebrow="Build Profile"
                title="Where Frappe creates the most leverage"
                items={buildProfile}
              />
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white border-y border-surface-border">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Delivery Approach
              </span>
              <h2 className="mt-2 text-display-sm font-bold text-text-primary">
                How TECHINCGLOBAL delivers Frappe projects
              </h2>
              <div className="mt-6 space-y-4">
                {companyApproach.map((item, index) => (
                  <div key={item.title} className="rounded-2xl border border-surface-border bg-[#F9FBFC] p-5 shadow-soft">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <h3 className="text-sm font-bold text-text-primary">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-3xl border border-surface-border bg-brand-navy p-6 text-white shadow-soft">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
                  Best Use Cases
                </span>
                <div className="mt-5 space-y-4">
                  {useCases.map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm leading-relaxed text-white/75">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-brand-navy">
        <Container size="sm" className="text-center">
          <FadeUp>
            <h2 className="text-display-sm font-bold text-white">
              Need a custom workflow, portal, or internal application on Frappe?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              We can help you define the scope, shape the data model, and build a Frappe
              solution that improves control and speed without creating another fragile
              tool in the stack.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start a Frappe Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/services/frappe-customization-development">View Service Scope</Link>
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>
    </div>
  );
}
