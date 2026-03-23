import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How long does a Frappe ERP implementation take?",
        answer:
            "Most mid-market implementations are complete in 10–16 weeks using our NXTGEN Agile methodology. The exact timeline depends on the number of modules, data migration complexity, and level of customization required. We'll give you a precise estimate after an initial assessment.",
    },
    {
        question: "What makes TECHINCGLOBAL different from other ERP partners?",
        answer:
            "Three things set us apart: (1) We are the authorized Frappe Technologies partner in Sri Lanka with certified expertise. (2) Our proprietary NXTGEN Agile methodology reduces implementation time by up to 40%. (3) We combine global ERP best practices with deep local market understanding — including Sri Lankan tax, compliance, and business process requirements.",
    },
    {
        question: "Is Frappe ERP suitable for small and medium businesses?",
        answer:
            "Absolutely. Frappe's open-source model means there are no per-user licensing fees, making it highly cost-effective for SMEs. Its modular architecture lets you start with the functions you need — Finance, Inventory, HR — and expand over time. We have helped businesses with as few as 15 employees successfully implement and benefit from Frappe ERP.",
    },
    {
        question: "Can Frappe ERP handle Sri Lankan tax and compliance requirements?",
        answer:
            "Yes. Frappe supports local VAT, SVAT, withholding tax, and the reporting formats required by the Inland Revenue Department. As a Sri Lanka-based Frappe partner, we have pre-configured these requirements across dozens of implementations and can deploy them quickly for your business.",
    },
    {
        question: "What support do we get after go-live?",
        answer:
            "Every implementation includes a 30-day hypercare period with priority support. After that, you can choose from our managed support plans, which include SLA-backed helpdesk, proactive system monitoring, quarterly optimization reviews, and managed version upgrades.",
    },
];

function FaqPreview() {
    return (
        <section className="section-padding bg-white" aria-labelledby="faq-heading">
            <Container size="md">
                <FadeUp>
                    <SectionHeader
                        eyebrow="Common Questions"
                        title="Frequently Asked Questions"
                        description="Clear answers to the questions businesses ask most before starting their ERP journey."
                        id="faq-heading"
                    />
                </FadeUp>

                <FadeUp delay={0.2}>
                    <div className="mt-12">
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {faqs.map((faq, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`faq-${i}`}
                                    className="rounded-xl border border-surface-border bg-surface px-6"
                                >
                                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-text-primary hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5 text-sm leading-relaxed text-text-secondary">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-text-secondary">
                            Have more questions?{" "}
                            <Link
                                href="/contact"
                                className="font-semibold text-brand-blue hover:underline"
                            >
                                Contact our team
                            </Link>
                        </p>
                    </div>
                </FadeUp>
            </Container>
        </section>
    );
}

export { FaqPreview };
