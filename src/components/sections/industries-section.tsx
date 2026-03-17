import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { industries } from "@/content/industries";

// Show first 8 industries in a grid
function IndustriesSection() {
    return (
        <section className="section-padding bg-surface" aria-labelledby="industries-heading">
            <Container>
                <FadeUp>
                    <SectionHeader
                        eyebrow="Industries We Serve"
                        title="ERP Solutions Across Every Sector"
                        description="From manufacturing shopfloors to professional services offices, our ERPNext implementations are tailored to the unique processes and compliance needs of your industry."
                        id="industries-heading"
                    />
                </FadeUp>

                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {industries.map((industry, i) => (
                        <FadeUp key={industry.slug} delay={i * 0.05}>
                            <Link
                                href={`/industries/${industry.slug}`}
                                className="group flex flex-col items-center gap-3 rounded-2xl border border-surface-border bg-white p-6 text-center shadow-soft transition-all hover:border-brand-blue/30 hover:shadow-card-hover"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-pale text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                                    <IndustryIcon name={industry.icon} />
                                </div>
                                <span className="text-sm font-semibold text-text-primary">
                                    {industry.title}
                                </span>
                            </Link>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.4}>
                    <div className="mt-10 text-center">
                        <Link
                            href="/industries"
                            className="text-sm font-semibold text-brand-blue hover:underline"
                        >
                            View all industry solutions →
                        </Link>
                    </div>
                </FadeUp>
            </Container>
        </section>
    );
}

// Minimal inline icon resolver (Lucide names mapped to SVG paths)
function IndustryIcon({ name }: { name: string }) {
    const icons: Record<string, string> = {
        Factory: "M2 20h20M5 20V8l7-5 7 5v12M9 20v-6h6v6",
        Truck: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
        ShoppingCart: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0",
        Briefcase: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2",
        Building2: "M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18zM6 12H2a2 2 0 00-2 2v6a2 2 0 002 2h4M18 9h4a2 2 0 012 2v9a2 2 0 01-2 2h-4M10 22V16h4v6",
        Heart: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
        BookOpen: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
        Globe: "M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
    };

    return (
        <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d={icons[name] ?? icons.Globe} />
        </svg>
    );
}

export { IndustriesSection };
