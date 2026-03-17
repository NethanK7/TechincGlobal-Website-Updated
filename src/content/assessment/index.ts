export type AssessmentQuestion = {
    id: number;
    category: string;
    text: string;
    shortTitle: string;
    context?: string;
    options: {
        value: string; // starts with "1", "2", or "3" for scoring
        label: string;
        detail?: string;
    }[];
};

export const assessmentQuestions: AssessmentQuestion[] = [
    {
        id: 1,
        category: "Business Operations",
        text: "How would you describe your current business operations management?",
        shortTitle: "Operations Management",
        context: "This helps us understand your starting point.",
        options: [
            { value: "1-spreadsheets", label: "Primarily spreadsheets and manual processes", detail: "Multiple separate Excel/Google Sheets files, manual data entry" },
            { value: "2-fragmented", label: "Some software tools, but disconnected", detail: "Different apps for different departments with no integration" },
            { value: "3-integrated", label: "Some integration, but significant gaps remain", detail: "Partial automation with key processes still manual or disconnected" },
        ],
    },
    {
        id: 2,
        category: "Data & Reporting",
        text: "How do you currently generate business reports and make data-driven decisions?",
        shortTitle: "Reporting & Analytics",
        options: [
            { value: "1-manual", label: "Reports are compiled manually, often outdated by the time they're ready", detail: "Someone manually pulls data from various sources" },
            { value: "2-partial", label: "Some automated reports, but we often lack confidence in the numbers", detail: "Reports exist but data inconsistencies are common" },
            { value: "3-realtime", label: "We have reasonably reliable reporting, but want real-time visibility", detail: "Functional reporting, but not live or self-service" },
        ],
    },
    {
        id: 3,
        category: "Inventory & Supply Chain",
        text: "How well do you understand your inventory levels and supply chain status at any given moment?",
        shortTitle: "Inventory Visibility",
        options: [
            { value: "1-poor", label: "We frequently have stockouts or excess inventory — poor visibility", detail: "Inventory counts are done manually or infrequently" },
            { value: "2-delayed", label: "We have visibility, but it's delayed — data is hours or days old", detail: "Reports run periodically rather than in real-time" },
            { value: "3-good", label: "We have reasonable visibility, but it's disconnected from finance", detail: "Stock levels known, but not auto-reconciled with accounting" },
        ],
    },
    {
        id: 4,
        category: "Finance & Accounting",
        text: "How long does your month-end financial close process typically take?",
        shortTitle: "Financial Close Time",
        options: [
            { value: "1-long", label: "More than 7 days — it's a painful, error-prone process", detail: "Many manual reconciliations and journal entries required" },
            { value: "2-medium", label: "3–7 days — manageable but inefficient", detail: "Some automation but significant manual work remains" },
            { value: "3-short", label: "1–3 days — reasonable, but we want faster and more accurate", detail: "Close is functional, improvement is the goal" },
        ],
    },
    {
        id: 5,
        category: "People & HR",
        text: "How do you currently manage HR, payroll, and employee performance?",
        shortTitle: "HR & Payroll",
        options: [
            { value: "1-manual", label: "Mostly manual — spreadsheets for payroll, paper-based HR records", detail: "No HRIS; payroll is calculated manually or via basic tools" },
            { value: "2-basic", label: "Basic payroll software, but HR and performance management are separate", detail: "Payroll software present, but HR data is siloed" },
            { value: "3-partial", label: "HR system exists, but isn't connected to other business systems", detail: "HR data not integrated with finance or project management" },
        ],
    },
    {
        id: 6,
        category: "Stakeholder Readiness",
        text: "How aligned is your leadership team on the need for ERP transformation?",
        shortTitle: "Leadership Alignment",
        context: "Leadership buy-in is one of the strongest predictors of ERP project success.",
        options: [
            { value: "1-low", label: "ERP is not yet a priority — there are disagreements about the need", detail: "The case for ERP hasn't been fully made internally" },
            { value: "2-partial", label: "There's general support, but no formal champion or sponsor", detail: "People agree ERP would help, but no one is driving it" },
            { value: "3-high", label: "We have strong leadership support and a clear internal sponsor", detail: "An executive is actively championing the ERP project" },
        ],
    },
    {
        id: 7,
        category: "Data Quality",
        text: "How would you rate the quality and completeness of your business data (customers, suppliers, products, etc.)?",
        shortTitle: "Data Quality",
        context: "Data quality is often the biggest risk in ERP migrations.",
        options: [
            { value: "1-poor", label: "Poor — duplicates, incomplete records, and inconsistencies are common", detail: "Significant data cleansing work would be required" },
            { value: "2-moderate", label: "Moderate — usable, but would need cleansing before migration", detail: "Data exists but quality issues are acknowledged" },
            { value: "3-good", label: "Good — we maintain clean, consistent records across departments", detail: "Data is reasonably well-maintained and structured" },
        ],
    },
    {
        id: 8,
        category: "Budget & Resources",
        text: "Have you allocated budget and internal resources for an ERP transformation project?",
        shortTitle: "Budget Readiness",
        options: [
            { value: "1-none", label: "No budget allocated yet — we're still in the research phase", detail: "Still exploring options and building the business case" },
            { value: "2-informal", label: "Informal budget discussed, but not formally approved", detail: "Numbers have been talked about but no formal sign-off" },
            { value: "3-approved", label: "Budget is approved and internal resources have been identified", detail: "Project can proceed once the right partner is selected" },
        ],
    },
    {
        id: 9,
        category: "Process Documentation",
        text: "How well-documented are your key business processes?",
        shortTitle: "Process Documentation",
        options: [
            { value: "1-undocumented", label: "Very little documentation — processes live in people's heads", detail: "High knowledge-dependency on specific individuals" },
            { value: "2-partial", label: "Some processes documented, but inconsistently across departments", detail: "Documentation exists in some areas but not others" },
            { value: "3-documented", label: "Key processes are documented and regularly updated", detail: "Process maps or SOPs exist for most business functions" },
        ],
    },
    {
        id: 10,
        category: "Timeline",
        text: "What is your ideal timeline for having an ERP system fully operational?",
        shortTitle: "Target Timeline",
        options: [
            { value: "1-long", label: "12+ months — we're planning ahead and willing to take our time", detail: "No urgency; we're doing thorough research and preparation" },
            { value: "2-medium", label: "6–12 months — within the year, with some flexibility", detail: "Strong intent to proceed but not urgently urgent" },
            { value: "3-short", label: "Within 6 months — we have a strong business need to move quickly", detail: "Specific business drivers create urgency to implement" },
        ],
    },
];
