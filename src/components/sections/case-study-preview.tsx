import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";

const caseStudies = [
    {
        industry: "Manufacturing",
        client: "Leading Sri Lankan Manufacturer",
        challenge: "Disconnected production, inventory, and accounting systems creating costly delays and data inconsistencies.",
        outcome: "Unified ERPNext platform deployed in 14 weeks — production lead times reduced by 30%, month-end closing from 5 days to 1 day.",
        slug: "manufacturing-erpnext",
        tag: "Manufacturing",
        // TODO_CLIENT_CONFIRMATION: Replace with real client name, logo, and verified metrics
    },
    {
        industry: "Distribution",
        client: "Regional Distribution Company",
        challenge: "Manual stock management across 3 warehouses leading to regular stockouts and $200K+ in excess inventory.",
        outcome: "Real-time multi-warehouse inventory with automated reorder — inventory accuracy improved to 99.2%, excess stock reduced by 40%.",
        slug: "distribution-erpnext",
        tag: "Distribution",
        // TODO_CLIENT_CONFIRMATION: Replace with real client name, logo, and verified metrics
    },
];

function CaseStudyPreview() {
    return (
        <section className="section-padding bg-surface" aria-labelledby="case-studies-heading">
            <Container>
                <FadeUp>
                    <SectionHeader
                        eyebrow="Success Stories"
                        title="Real Businesses, Real Results"
                        description="See how TECHINCGLOBAL has helped businesses across Sri Lanka transform their operations with ERPNext."
                        id="case-studies-heading"
                    />
                </FadeUp>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {caseStudies.map((cs, i) => (
                        <FadeUp key={cs.slug} delay={i * 0.15}>
                            <div className="group relative flex flex-col rounded-2xl border border-surface-border bg-white shadow-soft transition-all hover:shadow-card-hover">
                                {/* Top accent bar */}
                                <div className="h-1.5 w-full rounded-t-2xl bg-blue-gradient" />

                                <div className="flex flex-col gap-4 p-7">
                                    {/* Tag */}
                                    <span className="inline-flex w-fit items-center rounded-full bg-brand-blue-pale px-3 py-1 text-xs font-semibold text-brand-blue">
                                        {cs.tag}
                                    </span>

                                    <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                                        {cs.client}
                                    </p>

                                    {/* Challenge */}
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                                            Challenge
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                                            {cs.challenge}
                                        </p>
                                    </div>

                                    {/* Outcome */}
                                    <div className="rounded-xl bg-brand-blue-pale/50 p-4">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                                            Outcome
                                        </p>
                                        <p className="mt-1 text-sm font-medium leading-relaxed text-text-primary">
                                            {cs.outcome}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/case-studies/${cs.slug}`}
                                        className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-light"
                                    >
                                        Read full case study →
                                    </Link>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.3}>
                    <div className="mt-10 text-center">
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/case-studies">View All Case Studies</Link>
                        </Button>
                    </div>
                </FadeUp>
            </Container>
        </section>
    );
}

export { CaseStudyPreview };
