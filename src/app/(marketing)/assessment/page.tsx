import type { Metadata } from "next";
import { AssessmentWidget } from "@/features/assessment/assessment-widget";

export const metadata: Metadata = {
    title: "Free ERP Readiness Assessment | TECHINCGLOBAL",
    description:
        "Take our free 10-question ERP readiness assessment. Get an instant score and personalised recommendations for your business's digital transformation journey.",
    alternates: { canonical: "https://techincglobal.com/assessment" },
};

export default function AssessmentPage() {
    return <AssessmentWidget />;
}
