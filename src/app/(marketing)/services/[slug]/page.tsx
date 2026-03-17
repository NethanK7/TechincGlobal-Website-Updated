import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: service.metaTitle,
        description: service.metaDescription,
        alternates: { canonical: `https://techincglobal.com/services/${slug}` },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-hero-gradient py-16 sm:py-24">
                <Container>
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Services", href: "/services" },
                            { label: service.title },
                        ]}
                        dark
                    />
                    <FadeUp>
                        <div className="mt-6 max-w-3xl">
                            <h1 className="text-display-md font-bold text-white sm:text-display-lg">
                                {service.title}
                            </h1>
                            <p className="mt-5 text-lg leading-relaxed text-white/70">
                                {service.description}
                            </p>
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <Button size="lg" asChild>
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                                    <Link href="/assessment">Take ERP Assessment</Link>
                                </Button>
                            </div>
                        </div>
                    </FadeUp>
                </Container>
            </section>

            {/* Benefits */}
            <section className="section-padding" aria-labelledby="benefits-heading">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <FadeUp>
                            <h2 id="benefits-heading" className="text-display-sm font-bold text-text-primary">
                                Key Benefits
                            </h2>
                            <ul className="mt-6 space-y-4">
                                {service.benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-pale text-brand-blue">
                                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-sm leading-relaxed text-text-secondary">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeUp>

                        {/* Deliverables */}
                        <FadeUp delay={0.15}>
                            <div className="rounded-2xl border border-surface-border bg-surface p-7">
                                <h2 className="text-lg font-bold text-text-primary">What You Receive</h2>
                                <ul className="mt-5 space-y-3">
                                    {service.deliverables.map((d, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                                            <span className="text-brand-blue">▸</span>
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* Process */}
            <section className="section-padding bg-surface" aria-labelledby="process-heading">
                <Container>
                    <FadeUp>
                        <h2 id="process-heading" className="text-display-sm font-bold text-text-primary">
                            How It Works
                        </h2>
                    </FadeUp>
                    <div className="relative mt-10 space-y-8">
                        <div className="absolute bottom-0 left-5 top-0 w-px bg-surface-border" aria-hidden="true" />
                        {service.processSteps.map((step, i) => (
                            <FadeUp key={step.number} delay={i * 0.08}>
                                <div className="relative flex gap-8 pl-14">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-blue bg-white font-bold text-brand-blue">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-primary">{step.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">{step.description}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            {service.faqs.length > 0 && (
                <section className="section-padding" aria-labelledby="faq-heading">
                    <Container size="md">
                        <FadeUp>
                            <h2 id="faq-heading" className="text-display-sm font-bold text-text-primary">
                                {service.title} — Common Questions
                            </h2>
                        </FadeUp>
                        <FadeUp delay={0.15}>
                            <Accordion type="single" collapsible className="mt-8 w-full space-y-3">
                                {service.faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-surface-border bg-surface px-6">
                                        <AccordionTrigger className="py-5 text-left text-base font-semibold text-text-primary hover:no-underline">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-5 text-sm leading-relaxed text-text-secondary">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </FadeUp>
                    </Container>
                </section>
            )}

            {/* CTA */}
            <section className="section-padding bg-brand-navy">
                <Container size="sm" className="text-center">
                    <FadeUp>
                        <h2 className="text-display-sm font-bold text-white">
                            Ready to Get Started with {service.shortTitle}?
                        </h2>
                        <p className="mt-4 text-lg text-white/70">
                            Let&apos;s discuss your requirements and build a solution that fits your business.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">Book Free Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                                <Link href="/services">Explore Other Services</Link>
                            </Button>
                        </div>
                    </FadeUp>
                </Container>
            </section>
        </div>
    );
}
