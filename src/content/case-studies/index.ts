import type { CaseStudy } from "@/types";

// TODO_CLIENT_CONFIRMATION: Replace all client details, metrics, and testimonials with actual data
export const caseStudies: CaseStudy[] = [
  {
    slug: "manufacturing-erp-transformation",
    title: "Leading Manufacturer Achieves 35% Efficiency Gain with ERPNext",
    client: "A Leading Garment Manufacturing Company", // TODO_CLIENT_CONFIRMATION
    industry: "Manufacturing",
    challenge:
      "Operating with disconnected legacy systems across 3 manufacturing facilities, this garment manufacturer faced persistent production delays, inventory discrepancies averaging 12% monthly, and manual reporting that consumed over 40 hours per month. Real-time visibility into production status was non-existent, and management relied on spreadsheets that were always outdated by the time decisions were made.",
    solution:
      "TECHINCGLOBAL implemented a comprehensive ERPNext solution using the NXTGEN methodology over 16 weeks. The deployment covered manufacturing, inventory, purchasing, accounting, and HR modules across all 3 facilities. Custom workflows were built for production planning, quality inspection, and material requisition. Integration with existing barcode scanning infrastructure enabled real-time shop floor tracking.",
    scope: [
      "Full ERPNext implementation across 3 facilities",
      "Manufacturing module with multi-level BOM support",
      "Inventory management with barcode scanning integration",
      "Custom production planning and scheduling workflows",
      "Quality management with inspection checkpoints",
      "Financial accounting and cost center tracking",
      "HR and payroll for 500+ employees",
    ],
    outcomes: [
      "35% improvement in production efficiency",
      "60% reduction in inventory discrepancies",
      "Real-time visibility across all 3 facilities",
      "40+ hours/month saved on manual reporting",
      "Full ROI achieved within 8 months",
    ],
    testimonial: {
      quote:
        "TECHINCGLOBAL transformed our manufacturing operations. Their NXTGEN methodology made what we expected to be a painful migration surprisingly smooth. We achieved full ROI within 8 months.",
      author: "Operations Director", // TODO_CLIENT_CONFIRMATION
      role: "Operations Director",
      company: "Leading Garment Manufacturer", // TODO_CLIENT_CONFIRMATION
    },
    metaTitle: "Manufacturing ERP Case Study | ERPNext Implementation",
    metaDescription:
      "How a leading garment manufacturer achieved 35% efficiency gains and 60% inventory accuracy improvement with TECHINCGLOBAL's ERPNext implementation.",
  },
  {
    slug: "distribution-digital-modernization",
    title: "Distribution Company Cuts Order Processing Time by 60%",
    client: "A Major FMCG Distribution Company", // TODO_CLIENT_CONFIRMATION
    industry: "Distribution & Logistics",
    challenge:
      "This FMCG distribution company's legacy system could not handle growing order volumes, resulting in delayed deliveries, billing errors affecting 15% of invoices, and customer satisfaction scores dropping below 80%. Manual order entry and fulfillment processes created bottlenecks that worsened with every new retail partner added to their network.",
    solution:
      "TECHINCGLOBAL deployed ERPNext with a focus on order management, warehouse operations, and delivery tracking. The NXTGEN implementation was completed in 14 weeks, with custom integrations to the company's existing logistics partners and payment systems. Automated workflows replaced manual order entry, and real-time dashboards gave management instant visibility into every aspect of the distribution pipeline.",
    scope: [
      "ERPNext implementation for distribution operations",
      "Automated order management and fulfillment workflows",
      "Multi-warehouse inventory management",
      "Integration with 3PL logistics partners",
      "Payment gateway and banking integrations",
      "Customer portal for order tracking",
      "Management dashboards and reporting",
    ],
    outcomes: [
      "60% faster order processing",
      "95% delivery accuracy (up from 78%)",
      "Automated invoicing saving 200+ hours/month",
      "Customer satisfaction improved to 94%",
      "Billing errors reduced to less than 1%",
    ],
    testimonial: {
      quote:
        "The team's understanding of Sri Lankan business requirements combined with their ERPNext expertise was exactly what we needed. Our order processing time dropped by 60% within the first quarter.",
      author: "Managing Director", // TODO_CLIENT_CONFIRMATION
      role: "Managing Director",
      company: "FMCG Distribution Company", // TODO_CLIENT_CONFIRMATION
    },
    metaTitle: "Distribution ERP Case Study | Legacy System Modernization",
    metaDescription:
      "How a FMCG distribution company cut order processing time by 60% and improved delivery accuracy to 95% with TECHINCGLOBAL's ERPNext solution.",
  },
  {
    slug: "professional-services-automation",
    title: "Professional Services Firm Automates 80% of Manual Processes",
    client: "A Mid-Sized IT Consulting Firm", // TODO_CLIENT_CONFIRMATION
    industry: "Professional Services",
    challenge:
      "Manual timesheet tracking across 150+ consultants, fragmented project billing using spreadsheets, and disconnected financial systems were causing revenue leakage estimated at 8% annually. Project managers had no real-time visibility into project costs or profitability, and invoicing cycles took 3-4 weeks from month-end.",
    solution:
      "TECHINCGLOBAL implemented ERPNext's project management, timesheet, billing, and accounting modules in 12 weeks using the NXTGEN methodology. Custom Frappe apps were developed for resource allocation dashboards and automated billing based on both time-and-material and fixed-fee project structures. Integration with the company's existing CRM streamlined the lead-to-project pipeline.",
    scope: [
      "Project management and accounting modules",
      "Timesheet tracking integrated with project billing",
      "Automated invoicing for multiple billing models",
      "Resource allocation and capacity planning tools",
      "CRM integration for lead-to-project pipeline",
      "Financial reporting and profitability dashboards",
      "Employee self-service portal",
    ],
    outcomes: [
      "80% reduction in manual administrative processes",
      "15% improvement in project profitability",
      "Real-time project cost tracking across all engagements",
      "Accounts receivable days reduced by 40%",
      "Invoice generation time reduced from weeks to hours",
    ],
    testimonial: {
      quote:
        "What impressed us most was their commitment to genuine user adoption. They didn't just implement software — they transformed how our team works. The training and change management support was outstanding.",
      author: "CEO", // TODO_CLIENT_CONFIRMATION
      role: "CEO",
      company: "IT Consulting Firm", // TODO_CLIENT_CONFIRMATION
    },
    metaTitle: "Professional Services ERP Case Study | Process Automation",
    metaDescription:
      "How an IT consulting firm automated 80% of manual processes and improved project profitability by 15% with TECHINCGLOBAL's ERPNext implementation.",
  },
];

export default caseStudies;
