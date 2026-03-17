import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";

const phases = [
    {
        number: "01",
        title: "Discover",
        description:
            "Deep-dive workshops with stakeholders to map processes, requirements, and business objectives.",
        color: "from-blue-500/20 to-blue-600/10",
    },
    {
        number: "02",
        title: "Design",
        description:
            "Solution architecture, data models, and configuration blueprints — aligned before any build begins.",
        color: "from-sky-500/20 to-sky-600/10",
    },
    {
        number: "03",
        title: "Configure",
        description:
            "Agile sprints deliver working functionality in two-week cycles with regular stakeholder demos.",
        color: "from-teal-500/20 to-teal-600/10",
    },
    {
        number: "04",
        title: "Deploy",
        description:
            "Validated go-live with hypercare support, ensuring your team is confident and operational from day one.",
        color: "from-emerald-500/20 to-emerald-600/10",
    },
    {
        number: "05",
        title: "Optimize",
        description:
            "Continuous improvement post-launch: adoption monitoring, performance tuning, and proactive enhancements.",
        color: "from-violet-500/20 to-violet-600/10",
    },
];

function MethodologyPreview() {
    return (
        <section className="section-padding bg-brand-navy" aria-labelledby="methodology-heading">
            <Container>
                <FadeUp>
                    <SectionHeader
                        eyebrow="Our Approach"
                        title="The NXTGEN Methodology"
                        description="A proprietary Agile framework designed for ERP implementation — delivering faster go-lives, higher adoption rates, and measurable ROI."
                        id="methodology-heading"
                        dark
                    />
                </FadeUp>

                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {phases.map((phase, i) => (
                        <FadeUp key={phase.number} delay={i * 0.1}>
                            <div
                                className={`group relative flex h-full flex-col rounded-2xl bg-gradient-to-br ${phase.color} border border-white/10 p-6 transition-all hover:border-white/20 hover:bg-white/5`}
                            >
                                <span className="font-mono text-3xl font-bold text-white/20">
                                    {phase.number}
                                </span>
                                <h3 className="mt-3 text-lg font-semibold text-white">
                                    {phase.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/60">
                                    {phase.description}
                                </p>

                                {/* Connector line for desktop */}
                                {i < phases.length - 1 && (
                                    <div
                                        className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-white/20 lg:block"
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
