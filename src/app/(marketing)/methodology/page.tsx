import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { BarChartCard, FlowDiagramCard } from "@/components/shared/visuals";
import { Button } from "@/components/ui/button";
import { methodologyContent } from "@/content/company/methodology";

export const metadata: Metadata = {
    title: "NXTGEN Methodology — Agile ERP Implementation | TECHINCGLOBAL",
    description:
        "The NXTGEN Agile implementation methodology delivers ERP projects 40% faster with higher adoption rates. Learn our proven 5-phase framework for enterprise ERP transformation.",
    alternates: { canonical: "https://techincglobal.com/methodology" },
};

const deliverySignals = [
    {
        label: "Stakeholder visibility",
        value: "Very high",
        widthClass: "w-[92%]",
        note: "Working software, sign-offs, and milestone outputs keep leadership close to reality.",
    },
    {
        label: "Scope adaptability",
        value: "Controlled",
        widthClass: "w-[84%]",
        note: "Changes are absorbed through cadence and prioritization instead of expensive late-stage resets.",
    },
    {
        label: "Data migration confidence",
        value: "Progressive",
        widthClass: "w-[78%]",
        note: "Data is validated in waves, not discovered as a surprise at cutover.",
    },
    {
        label: "User adoption readiness",
        value: "Embedded",
        widthClass: "w-[88%]",
        note: "Training, champions, and feedback are part of the method rather than post-go-live rescue work.",
    },
];

const cadenceFlow = [
    {
        title: "Discover and align",
        description: "Define the business priorities, future-state process, stakeholders, and risk profile.",
    },
    {
        title: "Iterate in working slices",
        description: "Deliver usable process areas in short cycles so feedback happens while change is still cheap.",
    },
    {
        title: "Validate with real data",
        description: "Test configurations, migration logic, reports, and approvals against actual operating cases.",
    },
    {
        title: "Go live with control",
        description: "Cut over with trained users, hypercare coverage, and a clear post-launch optimization backlog.",
    },
];

export default function MethodologyPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-hero-gradient section-padding" aria-labelledby="methodology-hero-heading">
                <Container size="md" className="text-center">
                    <FadeUp>
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">Our Proprietary Framework</p>
                        <h1 id="methodology-hero-heading" className="mt-3 text-display-lg font-bold text-white">
                            The NXTGEN Methodology
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                            A battle-tested Agile framework built specifically for ERP implementation.
                            Faster delivery, higher adoption, and measurable ROI — by design.
                        </p>
                    </FadeUp>

                    {/* Key stats */}
                    <FadeUp delay={0.2}>
                        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4">
                            {[
                                { value: "40%", label: "Faster delivery" },
                                { value: "98%", label: "Client satisfaction" },
                                { value: "150+", label: "Implementations" },
                            ].map((s) => (
                                <div key={s.label} className="rounded-xl border border-white/20 bg-white/10 py-5 backdrop-blur-sm">
                                    <p className="text-2xl font-bold text-white">{s.value}</p>
                                    <p className="mt-1 text-sm text-white/60">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </Container>
            </section>

            {/* Philosophy */}
            <section className="section-padding" aria-labelledby="philosophy-heading">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <FadeUp>
                            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">Why We Built It</p>
                            <h2 id="philosophy-heading" className="mt-3 text-display-sm font-bold text-text-primary">
                                ERP Implementation Needed Rethinking
                            </h2>
                            <div className="mt-5 space-y-4 text-text-secondary">
                                <p>
                                    Traditional ERP implementations are plagued by cost overruns, missed deadlines, and poor adoption.
                                    The typical waterfall approach — where requirements are locked months before any working software is seen —
                                    creates enormous risk and leaves both clients and vendors exposed.
                                </p>
                                <p>
                                    NXTGEN was built from 150+ implementations worth of learning. It applies Agile principles — iterative delivery,
                                    continuous feedback, and working software over documentation — to the specific context of ERP projects,
                                    where data migration, configuration, and change management add layers of complexity.
                                </p>
                                <p>
                                    The result is a framework that delivers faster, is more transparent, and creates better adoption outcomes
                                    than any traditional approach we&apos;ve seen.
                                </p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div className="grid gap-4">
                                {[
                                    { label: "Traditional Waterfall", icon: "✗", items: ["Requirements locked upfront", "First demo at UAT", "Change requests expensive", "Go-live blind spots", "Poor user adoption"], bad: true },
                                    { label: "NXTGEN Agile", icon: "✓", items: ["Requirements evolve iteratively", "Working software every 2 weeks", "Scope flexibility built in", "Data validated continuously", "Adoption built throughout"], bad: false },
                                ].map((col) => (
                                    <div key={col.label} className={`rounded-2xl p-6 ${col.bad ? "bg-red-50 border border-red-100" : "bg-brand-blue-pale border border-brand-blue/20"}`}>
                                        <h3 className={`font-bold ${col.bad ? "text-red-700" : "text-brand-blue"}`}>
                                            {col.icon} {col.label}
                                        </h3>
                                        <ul className="mt-3 space-y-2">
                                            {col.items.map((item, i) => (
                                                <li key={i} className={`flex items-center gap-2 text-sm ${col.bad ? "text-red-600" : "text-text-primary"}`}>
                                                    <span>{col.bad ? "—" : "→"}</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            <section className="section-padding bg-[#F9FBFC] border-y border-surface-border">
                <Container>
                    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                        <FadeUp>
                            <FlowDiagramCard
                                eyebrow="Cadence Model"
                                title="What the NXTGEN project rhythm looks like in practice"
                                steps={cadenceFlow}
                            />
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <BarChartCard
                                eyebrow="Delivery Signals"
                                title="Where the methodology creates the biggest risk reduction"
                                items={deliverySignals}
                            />
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* 5 Phases */}
            <section className="section-padding bg-surface" aria-labelledby="phases-heading">
                <Container>
                    <FadeUp>
                        <SectionHeader
                            eyebrow="The Framework"
                            title="Five Phases to Transformation"
                            description="Each phase is time-boxed, milestone-driven, and produces tangible outputs. Nothing moves forward without explicit stakeholder sign-off."
                            id="phases-heading"
                        />
                    </FadeUp>
                    <div className="mt-14 space-y-8">
                        {methodologyContent.phases.map((phase, i) => (
                            <FadeUp key={phase.title} delay={i * 0.08}>
                                <div className="grid gap-6 rounded-2xl border border-surface-border bg-white p-7 shadow-soft lg:grid-cols-[auto,1fr,1fr]">
                                    <div className="flex flex-col items-start">
                                        <span className="font-mono text-4xl font-bold text-brand-blue/20">{String(i + 1).padStart(2, "0")}</span>
                                        <span className="mt-2 text-xl font-bold text-brand-blue">{phase.title}</span>
                                        <span className="mt-1 rounded-full bg-brand-blue-pale px-3 py-0.5 text-xs font-semibold text-brand-blue">{phase.duration}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm leading-relaxed text-text-secondary">{phase.description}</p>
                                        <div className="mt-4">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Key Activities</p>
                                            <ul className="mt-2 space-y-1">
                                                {phase.activities.map((a, ai) => (
                                                    <li key={ai} className="flex items-center gap-2 text-sm text-text-secondary">
                                                        <span className="text-brand-blue">▸</span> {a}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rounded-xl bg-surface p-4">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Outputs</p>
                                        <ul className="mt-2 space-y-1">
                                            {phase.outputs.map((o, oi) => (
                                                <li key={oi} className="flex items-center gap-2 text-sm text-text-secondary">
                                                    <span className="text-brand-blue">✓</span> {o}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Risk reduction */}
            <section className="section-padding" aria-labelledby="risk-heading">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <FadeUp>
                            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">Built-In Risk Management</p>
                            <h2 id="risk-heading" className="mt-3 text-display-sm font-bold text-text-primary">
                                How NXTGEN Reduces Project Risk
                            </h2>
                            <div className="mt-5 space-y-4">
                                {methodologyContent.riskReductions.map((r, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-pale text-brand-blue font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-text-primary">{r.title}</p>
                                            <p className="mt-1 text-sm leading-relaxed text-text-secondary">{r.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="rounded-2xl bg-brand-navy p-8 text-white">
                                <h3 className="text-lg font-bold">Change Management is Non-Negotiable</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/70">
                                    Technology alone does not drive transformation — people do. NXTGEN embeds
                                    structured change management throughout every phase, not as an afterthought
                                    at go-live.
                                </p>
                                <ul className="mt-5 space-y-3">
                                    {[
                                        "Stakeholder analysis completed in Phase 1",
                                        "Key user champions identified and onboarded early",
                                        "Role-based training delivered before go-live",
                                        "Adoption metrics tracked post-launch",
                                        "30-day hypercare with on-site support",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="text-brand-teal">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-brand-blue to-brand-teal">
                <Container size="sm" className="text-center">
                    <FadeUp>
                        <h2 className="text-display-sm font-bold text-white">
                            See the NXTGEN Methodology in Action
                        </h2>
                        <p className="mt-4 text-lg text-white/80">
                            Book a consultation and we&apos;ll walk you through how NXTGEN would apply to your specific project.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-white/90" asChild>
                                <Link href="/contact">Book a Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                                <Link href="/assessment">Take ERP Assessment</Link>
                            </Button>
                        </div>
                    </FadeUp>
                </Container>
            </section>
        </div>
    );
}
