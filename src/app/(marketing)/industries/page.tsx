import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
    title: "Industries We Serve | TECHINCGLOBAL",
    description:
        "ERPNext solutions tailored for manufacturing, distribution, retail, healthcare, education, construction, and more. Industry-specific expertise from Sri Lanka's leading Frappe partner.",
    alternates: { canonical: "https://techincglobal.com/industries" },
};

const iconPaths: Record<string, string> = {
    Factory: "M2 20h20M5 20V8l7-5 7 5v12M9 20v-6h6v6",
    Truck: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
    ShoppingCart: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0",
    Briefcase: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2",
    Building2: "M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18zM6 12H2a2 2 0 00-2 2v6a2 2 0 002 2h4M18 9h4a2 2 0 012 2v9a2 2 0 01-2 2h-4M10 22V16h4v6",
    Heart: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    BookOpen: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
    Globe: "M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
};

export default function IndustriesPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-hero-gradient section-padding">
                <Container size="md" className="text-center">
                    <FadeUp>
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">Industries We Serve</p>
                        <h1 className="mt-3 text-display-lg font-bold text-white">
                            ERP Solutions Built for Your Industry
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                            Every industry has unique workflows, compliance requirements, and operational challenges.
                            Our ERPNext implementations are configured to match your sector&apos;s exact needs —
                            not forced into a generic template.
                        </p>
                    </FadeUp>
                </Container>
            </section>

            {/* Industries grid */}
            <section className="section-padding" aria-labelledby="industries-hub-heading">
                <Container>
                    <FadeUp>
                        <SectionHeader
                            eyebrow="Select Your Industry"
                            title="Find Your Industry Solution"
                            description="Click your industry to explore specific challenges, solutions, and outcomes we've delivered for businesses like yours."
                            id="industries-hub-heading"
                        />
                    </FadeUp>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {industries.map((industry, i) => (
                            <FadeUp key={industry.slug} delay={i * 0.06}>
                                <Link
                                    href={`/industries/${industry.slug}`}
                                    className="group flex h-full flex-col rounded-2xl border border-surface-border bg-surface p-6 shadow-soft transition-all hover:border-brand-blue/30 hover:shadow-card-hover"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-pale text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d={iconPaths[industry.icon] ?? iconPaths.Globe} />
                                        </svg>
                                    </div>
                                    <h2 className="mt-4 text-base font-bold text-text-primary group-hover:text-brand-blue transition-colors">
                                        {industry.title}
                                    </h2>
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                                        {industry.description.substring(0, 100)}…
                                    </p>
                                    <span className="mt-5 text-sm font-semibold text-brand-blue">
                                        Learn more →
                                    </span>
                                </Link>
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
                            Don&apos;t See Your Industry?
                        </h2>
                        <p className="mt-4 text-lg text-white/70">
                            ERPNext is flexible enough to fit virtually any sector. Contact us to discuss your specific requirements.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">Discuss Your Requirements</Link>
                            </Button>
                        </div>
                    </FadeUp>
                </Container>
            </section>
        </div>
    );
}
