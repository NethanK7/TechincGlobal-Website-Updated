import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";

const phases = [
    {
        number: "01",
        title: "Design",
        description:
            "Solution architecture, blueprints, and data models aligned to your exact business objectives.",
        color: "from-blue-500/10 to-blue-600/5",
    },
    {
        number: "02",
        title: "Segregate",
        description:
            "Break down deployments into modular, isolated tracks to minimize disruption.",
        color: "from-sky-500/10 to-sky-600/5",
    },
    {
        number: "03",
        title: "Cyclic Mapping",
        description:
            "Agile, iterative mapping to validate solutions continuously throughout the project cycle.",
        color: "from-teal-500/10 to-teal-600/5",
    },
    {
        number: "04",
        title: "Training",
        description:
            "Comprehensive, role-based enablement to ensure your team is confident and ready.",
        color: "from-emerald-500/10 to-emerald-600/5",
    },
    {
        number: "05",
        title: "Go Live Authorisation",
        description:
            "The final approval based on multiple approvals derived out of the cyclic mapping process.",
        color: "from-violet-500/10 to-violet-600/5",
    },
];

function MethodologyPreview() {
    return (
        <section className="section-padding bg-white" aria-labelledby="methodology-heading">
            <Container>
                <FadeUp>
                    <SectionHeader
                        eyebrow="Our Approach"
                        title="The NXTGEN Methodology"
                        description="A proprietary Agile framework designed for ERP implementation — delivering faster go-lives, higher adoption rates, and measurable ROI."
                        id="methodology-heading"
                    />
                </FadeUp>

                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {phases.map((phase, i) => (
                        <FadeUp key={phase.number} delay={i * 0.1}>
                            <div
                                className={`group relative flex h-full flex-col rounded-2xl bg-gradient-to-br ${phase.color} border border-brand-navy/5 p-6 transition-all hover:border-brand-navy/10 hover:shadow-md`}
                            >
                                <span className="font-mono text-3xl font-bold text-brand-navy/20">
                                    {phase.number}
                                </span>
                                <h3 className="mt-3 text-lg font-semibold text-text-primary">
                                    {phase.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                                    {phase.description}
                                </p>

                                {/* Connector line for desktop */}
                                {i < phases.length - 1 && (
                                    <div
                                        className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-brand-navy/20 lg:block"
                                        aria-hidden="true"
                                    />
                                )}
                            </div>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.5}>
                    <div className="mt-10 text-center">
                        <Button asChild size="lg">
                            <Link href="/methodology">Explore the Full Methodology</Link>
                        </Button>
                    </div>
                </FadeUp>
            </Container>
        </section>
    );
}

export { MethodologyPreview };
