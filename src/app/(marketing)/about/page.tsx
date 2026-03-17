import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { teamMembers, companyValues, companyTimeline } from "@/content/company";

export const metadata: Metadata = {
    title: "About TECHINCGLOBAL | Sri Lanka's ERPNext Specialists",
    description:
        "Founded in 2018, TECHINCGLOBAL is Sri Lanka's authorized Frappe Technologies partner and part of the SEBSA Group. Learn about our team, mission, and NXTGEN methodology.",
    alternates: { canonical: "https://techincglobal.com/about" },
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-hero-gradient section-padding" aria-labelledby="about-hero-heading">
                <Container size="md" className="text-center">
                    <FadeUp>
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">Our Story</p>
                        <h1 id="about-hero-heading" className="mt-3 text-display-lg font-bold text-white">
                            Transforming Businesses with Expertise
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                            Founded in 2018 with a clear mission: make enterprise ERP technology accessible,
                            implementable, and genuinely transformative for Sri Lankan businesses.
                        </p>
                    </FadeUp>
                </Container>
            </section>

            {/* Company story */}
            <section className="section-padding" aria-labelledby="story-heading">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <FadeUp>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">Our Journey</p>
                                <h2 id="story-heading" className="mt-3 text-display-sm font-bold text-text-primary">
                                    Built on Deep Expertise &amp; Local Understanding
                                </h2>
                                <div className="mt-5 space-y-4 text-text-secondary">
                                    <p>
                                        Techincglobal was established to bridge the gap between complex enterprise
                                        software and accessible, implementable solutions for Sri Lankan businesses.
                                        From our earliest days delivering license-free software, we recognised that
                                        open-source ERP — done right — could level the playing field for local companies.
                                    </p>
                                    <p>
                                        Our partnership with Frappe Technologies marked a pivotal milestone.
                                        As the first authorized Frappe partner in Sri Lanka, we combined cutting-edge
                                        ERPNext technology with our proprietary NXTGEN Agile implementation methodology —
                                        creating an approach that consistently delivers faster, more predictable go-lives.
                                    </p>
                                    <p>
                                        Today, as part of the SEBSA Group, we stand as Sri Lanka&apos;s leading ERP
                                        implementation specialists, having successfully transformed businesses across
                                        manufacturing, distribution, retail, professional services, and more.
                                    </p>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Stats */}
                        <FadeUp delay={0.2}>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: "2018", label: "Founded" },
                                    { value: "150+", label: "Implementations" },
                                    { value: "40%", label: "Faster Delivery" },
                                    { value: "98%", label: "Client Satisfaction" },
                                ].map((s) => (
                                    <div
                                        key={s.label}
                                        className="rounded-2xl border border-surface-border bg-surface p-6 text-center shadow-soft"
                                    >
                                        <p className="text-display-sm font-bold text-brand-blue">{s.value}</p>
                                        <p className="mt-1 text-sm text-text-secondary">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* Values */}
            <section className="section-padding bg-surface" aria-labelledby="values-heading">
                <Container>
                    <FadeUp>
                        <SectionHeader
                            eyebrow="What We Stand For"
                            title="Our Values"
                            description="The principles that guide every engagement, every implementation, and every client relationship."
                            id="values-heading"
                        />
                    </FadeUp>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {companyValues.map((value, i) => (
                            <FadeUp key={value.title} delay={i * 0.08}>
                                <div className="rounded-2xl bg-white p-6 shadow-soft border border-surface-border">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-pale text-brand-blue text-xl">
                                        {value.emoji}
                                    </div>
                                    <h3 className="mt-4 text-base font-bold text-text-primary">{value.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{value.description}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Timeline */}
            <section className="section-padding" aria-labelledby="timeline-heading">
                <Container size="md">
                    <FadeUp>
                        <SectionHeader
                            eyebrow="Milestones"
                            title="Our Journey of Excellence"
                            description="Key moments that shaped TECHINCGLOBAL into Sri Lanka's leading ERP partner."
                            id="timeline-heading"
                        />
                    </FadeUp>
                    <div className="relative mt-12 space-y-8">
                        {/* Vertical line */}
                        <div
                            className="absolute bottom-0 left-4 top-0 w-px bg-surface-border"
                            aria-hidden="true"
                        />
                        {companyTimeline.map((item, i) => (
                            <FadeUp key={item.year} delay={i * 0.07}>
                                <div className="relative flex gap-6 pl-12">
                                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-blue bg-white text-xs font-bold text-brand-blue">
                                        ✓
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                                            {item.year}
                                        </p>
                                        <h3 className="mt-1 text-base font-semibold text-text-primary">{item.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Team */}
            <section className="section-padding bg-surface" aria-labelledby="team-heading">
                <Container>
                    <FadeUp>
                        <SectionHeader
                            eyebrow="The People Behind the Work"
                            title="Meet Our Team"
                            description="Our consultants combine technical depth with business domain expertise — and a genuine commitment to your success."
                            id="team-heading"
                        />
                    </FadeUp>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {teamMembers.map((member, i) => (
                            <FadeUp key={member.name} delay={i * 0.07}>
                                <div className="group rounded-2xl border border-surface-border bg-white p-6 shadow-soft transition-all hover:shadow-card-hover">
                                    {/* Avatar placeholder */}
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue text-2xl font-bold text-white">
                                        {member.name.charAt(0)}
                                    </div>
                                    <h3 className="mt-4 text-base font-bold text-text-primary">{member.name}</h3>
                                    <p className="text-sm font-medium text-brand-blue">{member.role}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{member.bio}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Partnerships */}
            <section className="section-padding" aria-labelledby="partnerships-heading">
                <Container size="md">
                    <FadeUp>
                        <SectionHeader
                            eyebrow="Partnerships &amp; Certifications"
                            title="Backed by World-Class Technology Partners"
                            id="partnerships-heading"
                        />
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            {[
                                {
                                    name: "Frappe Technologies",
                                    badge: "Highly Skilled Certified Bronze Partner",
                                    description:
                                        "TECHINCGLOBAL is the first authorized Frappe Technologies partner in Sri Lanka. Our Highly Skilled Certified Bronze Partner status reflects our certified expertise across ERPNext implementation, Frappe development, and platform support.",
                                },
                                {
                                    name: "SEBSA Group",
                                    badge: "Group Company",
                                    description:
                                        "As an integral part of the SEBSA Group, TECHINCGLOBAL benefits from an expanded global ERP delivery network, shared knowledge frameworks, and the credibility of a well-established enterprise technology group.",
                                },
                            ].map((p) => (
                                <div
                                    key={p.name}
                                    className="rounded-2xl border border-surface-border bg-surface p-7 shadow-soft"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                                        {p.badge}
                                    </p>
                                    <h3 className="mt-2 text-lg font-bold text-text-primary">{p.name}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{p.description}</p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </Container>
            </section>

            {/* CTA */}
            <section className="section-padding bg-brand-navy" aria-labelledby="about-cta-heading">
                <Container size="sm" className="text-center">
                    <FadeUp>
                        <h2 id="about-cta-heading" className="text-display-sm font-bold text-white">
                            Ready to Work Together?
                        </h2>
                        <p className="mt-4 text-lg text-white/70">
                            Let&apos;s discuss how TECHINCGLOBAL can help transform your operations.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">Book a Free Consultation</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                                asChild
                            >
                                <Link href="/services">Explore Our Services</Link>
                            </Button>
                        </div>
                    </FadeUp>
                </Container>
            </section>
        </div>
    );
}
