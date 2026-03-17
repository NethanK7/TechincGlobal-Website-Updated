import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";

const steps = [
    {
        week: "Week 1–2",
        title: "Discovery",
        description: "Requirements gathering, stakeholder workshops, and solution blueprint sign-off.",
    },
    {
        week: "Week 3–6",
        title: "Configuration",
        description: "System setup, module configuration, and custom development in Agile sprints.",
    },
    {
        week: "Week 7–9",
        title: "Data Migration",
        description: "Data extract, cleanse, transform, and load with line-by-line validation reports.",
    },
    {
        week: "Week 10–11",
        title: "Testing",
        description: "User acceptance testing, issue resolution, and go-live readiness sign-off.",
    },
    {
        week: "Week 12",
        title: "Go-Live",
        description: "Production cutover, hypercare support, and steady-state transition.",
    },
];

function ProcessTimeline() {
    return (
        <section className="section-padding bg-white" aria-labelledby="process-heading">
            <Container>
                <FadeUp>
                    <SectionHeader
                        eyebrow="How It Works"
                        title="From Kickoff to Go-Live in 12 Weeks"
                        description="Our NXTGEN implementation tracks are time-boxed, milestone-driven, and designed for predictable outcomes. Most mid-market projects land in 10–16 weeks."
                        id="process-heading"
                    />
                </FadeUp>

                {/* Timeline */}
                <div className="relative mt-14">
                    {/* Horizontal connector — desktop */}
                    <div
                        className="absolute left-0 right-0 top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-surface-border to-transparent lg:block"
                        aria-hidden="true"
                    />

                    <div className="grid gap-8 lg:grid-cols-5">
                        {steps.map((step, i) => (
                            <FadeUp key={step.title} delay={i * 0.1}>
                                <div className="flex flex-col items-center text-center lg:items-center">
                                    {/* Step bubble */}
                                    <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-4 border-brand-blue-pale bg-white shadow-card">
                                        <span className="text-xl font-bold text-brand-blue">
                                            {i + 1}
                                        </span>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                                            {step.week}
                                        </p>
                                        <h3 className="mt-1 text-base font-bold text-text-primary">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export { ProcessTimeline };
