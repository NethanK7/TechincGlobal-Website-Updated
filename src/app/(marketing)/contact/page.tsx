import type { Metadata } from "next";
import { ContactPage } from "@/features/contact/contact-form";

export const metadata: Metadata = {
    title: "Contact TECHINCGLOBAL | Book a Free ERP Consultation",
    description:
        "Get in touch with TECHINCGLOBAL for a free ERP consultation. Contact Sri Lanka's authorized Frappe Technologies partner for ERPNext implementation and advisory.",
    alternates: { canonical: "https://techincglobal.com/contact" },
};

export default function ContactPageRoute() {
    return <ContactPage />;
}
