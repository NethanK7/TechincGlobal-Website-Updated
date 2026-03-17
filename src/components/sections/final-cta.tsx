import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/shared/motion-wrapper";

function FinalCta() {
    return (
        <section
            className="section-padding bg-brand-navy"
            aria-labelledby="final-cta-heading"
        >
            <Container size="md">
                <FadeUp>
                    <div className="flex flex-col items-center text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
                            Let&apos;s Build Something That Lasts
                        </p>
                        <h2
                            id="final-cta-heading"
                            className="mt-4 text-display-md font-bold text-white lg:text-display-lg"
                        >
                            Ready to Transform Your Business?
                        </h2>
                        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                            Join the growing number of Sri Lankan businesses that have
                            modernised their operations with TECHINCGLOBAL. Start with a
                            free consultation — no obligation, no jargon, just clear advice
                            tailored to your situation.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button size="xl" asChild>
                                <Link href="/contact">Book Free Consultation</Link>
                            </Button>
                            <Button
                                size="xl"
                                variant="outline"
                                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                                asChild
                            >
                                <Link href="/assessment">Take ERP Assessment</Link>
                            </Button>
                        </div>

                        {/* Trust signals */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-sm text-white/50">
                            <span>✓ No obligation</span>
                            <span>✓ Sri Lanka&apos;s certified Frappe partner</span>
                            <span>✓ 150+ successful implementations</span>
                            <span>✓ Free initial consultation</span>
                        </div>
                    </div>
                </FadeUp>
            </Container>
        </section>
    );
}

export { FinalCta };
