import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

export const metadata: Metadata = {
    title: "ERPNext & Frappe Services | TECHINCGLOBAL",
    description:
        "End-to-end ERPNext services from implementation and customization through integration, automation, support, and training. Delivered by Sri Lanka's authorized Frappe partner.",
    alternates: { canonical: "https://techincglobal.com/services" },
};

// Icon SVG paths for each service icon name
const iconPaths: Record<string, string> = {
    Rocket: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z",
    Code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    Workflow: "M22 12h-4l-3 9L9 3l-3 9H2",
    RefreshCcw: "M1 4v6h6M23 20v-6h-6M20.49 9A9 9 0 005.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 013.51 15",
    Plug: "M7 6v4a5 5 0 005 5 5 5 0 005-5V6M8 2v4M16 2v4",
    Lightbulb: "M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z",
    HeadphonesIcon: "M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z",
    GraduationCap: "M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5",
};

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-hero-gradient section-padding">
                <Container size="md" className="text-center">
                    <FadeUp>
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">What We Do</p>
                        <h1 className="mt-3 text-display-lg font-bold text-white">
                            NXTGEN ERP Services
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                            From initial strategy through implementation, customization, integration, and
                            long-term optimization — we provide everything you need for a successful
                            ERP transformation.
                        </p>
                    </FadeUp>
                </Container>
            </section>

            {/* Services grid */}
            <section className="section-padding" aria-labelledby="services-heading">
                <Container>
                    <FadeUp>
                        <SectionHeader
                            eyebrow="Our Services"
                            title="Complete ERP Transformation Services"
                            description="Each service is a building block. Combine them to create a transformation engagement tailored exactly to your business needs."
                            id="services-heading"
                        />
                    </FadeUp>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {services.map((service, i) => (
                            <FadeUp key={service.slug} delay={i * 0.06}>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group flex h-full flex-col rounded-2xl border border-surface-border bg-surface p-6 shadow-soft transition-all hover:border-brand-blue/30 hover:shadow-card-hover"
                                >
                                    {/* Icon */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-pale text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d={iconPaths[service.icon] ?? iconPaths.Rocket} />
                                        </svg>
                                    </div>

                                    <h2 className="mt-4 text-base font-bold text-text-primary group-hover:text-brand-blue transition-colors">
                                        {service.title}
                                    </h2>
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                                        {service.description.substring(0, 120)}…
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

            {/* Why section */}
            <section className="section-padding bg-surface" aria-labelledby="services-why-heading">
                <Container size="md" className="text-center">
                    <FadeUp>
                        <SectionHeader
                            eyebrow="What Sets Us Apart"
                            title="Why Businesses Choose TECHINCGLOBAL"
                            id="services-why-heading"
                        />
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <div className="mt-10 grid gap-5 sm:grid-cols-3">
                            {[
                                { title: "Authorized Frappe Partner", desc: "Sri Lanka's first and most experienced certified Frappe Technologies implementation partner." },
                                { title: "NXTGEN Methodology", desc: "Our proprietary Agile approach cuts implementation time by up to 40% with higher adoption rates." },
                                { title: "Local + Global", desc: "Deep understanding of Sri Lankan compliance and business culture, backed by global delivery standards." },
                            ].map((item) => (
                                <div key={item.title} className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft">
                                    <h3 className="font-bold text-text-primary">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </Container>
            </section>

            {/* CTA */}
            <section className="section-padding bg-brand-navy">
                <Container size="sm" className="text-center">
                    <FadeUp>
                        <h2 className="text-display-sm font-bold text-white">
                            Not Sure Which Service You Need?
                        </h2>
                        <p className="mt-4 text-lg text-white/70">
                            Our ERP readiness assessment will point you in the right direction — or speak directly with a consultant.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg" asChild>
                                <Link href="/assessment">Take Free Assessment</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                                <Link href="/contact">Speak With a Consultant</Link>
                            </Button>
                        </div>
                    </FadeUp>
                </Container>
            </section>
        </div>
    );
}
