import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/shared/motion-wrapper";

const steps = [
    { label: "10 questions", sub: "Takes under 5 minutes" },
    { label: "Instant score", sub: "Personalized ERP readiness score" },
    { label: "Free report", sub: "Tailored recommendations for your business" },
];

function AssessmentCta() {
    return (
        <section
            className="section-padding relative overflow-hidden bg-gradient-to-br from-brand-blue to-brand-teal"
            aria-labelledby="assessment-cta-heading"
        >
            {/* Background decoration */}
            <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
                aria-hidden="true"
            />

            <Container size="lg" className="relative z-10">
                <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:text-left">
                    {/* Copy */}
                    <div className="flex-1">
                        <FadeUp>
                            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                                Free consultation for free report
                            </p>
                            <h2
                                id="assessment-cta-heading"
                                className="mt-3 text-display-md font-bold text-white"
                            >
                                Is Your Business Ready for ERP Transformation?
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-white/80">
                                We will help you understand and verify your requirements.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-brand-blue hover:bg-white/90"
                                    asChild
                                >
                                    <Link href="/assessment">Take Free Assessment</Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10"
                                    asChild
                                >
                                    <Link href="/contact">Book a Consultation Instead</Link>
                                </Button>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Steps */}
                    <FadeUp delay={0.2}>
                        <div className="flex flex-col gap-4 lg:w-72">
                            {steps.map((s, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 rounded-xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm"
                                >
                                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 font-bold text-white">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <p className="font-semibold text-white">{s.label}</p>
                                        <p className="text-sm text-white/70">{s.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </Container>
        </section>
    );
}

export { AssessmentCta };
