import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { industries } from "@/content/industries";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const industry = industries.find((i) => i.slug === slug);
    if (!industry) return {};
    return {
        title: industry.metaTitle,
        description: industry.metaDescription,
        alternates: { canonical: `https://techincglobal.com/industries/${slug}` },
    };
}

export default async function IndustryDetailPage({ params }: Props) {
    const { slug } = await params;
    const industry = industries.find((i) => i.slug === slug);
    if (!industry) notFound();

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-hero-gradient py-16 sm:py-24">
                <Container>
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Industries", href: "/industries" },
                            { label: industry.title },
                        ]}
                    />
                    <FadeUp>
                        <div className="mt-6 max-w-3xl">
                            <h1 className="text-display-md font-bold text-white sm:text-display-lg">
                                ERPNext for {industry.title}
                            </h1>
                            <p className="mt-5 text-lg leading-relaxed text-white/70">
                                {industry.description}
                            </p>
                            <div className="mt-8">
                                <Button size="lg" asChild>
                                    <Link href="/contact">Book a Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </FadeUp>
                </Container>
            </section>

            {/* Challenges */}
            <section className="section-padding" aria-labelledby="challenges-heading">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <FadeUp>
                            <h2 id="challenges-heading" className="text-display-sm font-bold text-text-primary">
                                Industry Challenges We Solve
                            </h2>
                            <ul className="mt-6 space-y-4">
                                {industry.challenges.map((challenge, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm leading-relaxed text-text-secondary">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeUp>

                        {/* Benefits */}
                        <FadeUp delay={0.15}>
                            <h2 className="text-display-sm font-bold text-text-primary">
                                Outcomes You Can Expect
                            </h2>
                            <ul className="mt-6 space-y-4">
                                {industry.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-pale text-brand-blue">
                                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-sm leading-relaxed text-text-secondary">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* Solutions */}
            <section className="section-padding bg-surface" aria-labelledby="solutions-heading">
                <Container>
                    <FadeUp>
                        <h2 id="solutions-heading" className="text-display-sm font-bold text-text-primary">
                            How ERPNext Solves These Challenges
                        </h2>
                    </FadeUp>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {industry.solutions.map((solution, i) => (
                            <FadeUp key={solution.title} delay={i * 0.08}>
                                <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft">
                                    <h3 className="font-bold text-text-primary">{solution.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{solution.description}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="section-padding bg-brand-navy">
                <Container size="sm" className="text-center">
                    <FadeUp>
                        <h2 className="text-display-sm font-bold text-white">
                            Ready to Transform Your {industry.title} Operations?
                        </h2>
                        <p className="mt-4 text-lg text-white/70">
                            Let&apos;s talk about what an ERPNext implementation could look like for your business.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">Book Free Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                                <Link href="/assessment">Take ERP Assessment</Link>
                            </Button>
                        </div>
                    </FadeUp>
                </Container>
            </section>
        </div>
    );
}
