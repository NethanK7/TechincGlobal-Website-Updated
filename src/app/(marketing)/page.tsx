import { HeroSection } from "@/features/home/hero-section";
import { TrustStrip } from "@/features/home/trust-strip";
import { ServicesOverview } from "@/features/home/services-overview";
import { WhyChooseSection } from "@/features/home/why-choose-section";
import { MethodologyPreview } from "@/components/sections/methodology-preview";
import { AssessmentCta } from "@/components/sections/assessment-cta";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CaseStudyPreview } from "@/components/sections/case-study-preview";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FinalCta } from "@/components/sections/final-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TECHINCGLOBAL | NXTGEN ERP Solutions",
    description:
        "Sri Lanka's leading ERPNext implementation partner. Accelerate your digital transformation with our proprietary NXTGEN Agile methodology. Authorized Frappe Technologies partner.",
    alternates: { canonical: "https://techincglobal.com" },
};

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <TrustStrip />
            <ServicesOverview />
            <WhyChooseSection />
            <MethodologyPreview />
            <AssessmentCta />
            <IndustriesSection />
            <ProcessTimeline />
            <CaseStudyPreview />
            <FaqPreview />
            <FinalCta />
        </>
    );
}
