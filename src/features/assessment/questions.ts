import type { AssessmentQuestion, AssessmentResult, ResultCategoryConfig } from "@/types";

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "current-system",
    question: "What is your current ERP/business system status?",
    options: [
      { label: "No ERP system — using manual processes or spreadsheets", value: 1 },
      { label: "Basic accounting software with limited capabilities", value: 2 },
      { label: "Legacy ERP system that needs replacement or upgrade", value: 3 },
      { label: "Modern system that needs extension or better integration", value: 4 },
    ],
  },
  {
    id: "company-size",
    question: "How many employees does your organization have?",
    options: [
      { label: "1-50 employees", value: 1 },
      { label: "51-200 employees", value: 2 },
      { label: "201-500 employees", value: 3 },
      { label: "500+ employees", value: 4 },
    ],
  },
  {
    id: "processes",
    question: "Which business processes need the most improvement?",
    options: [
      { label: "Financial management and accounting", value: 2 },
      { label: "Inventory and supply chain management", value: 3 },
      { label: "Customer relationship management", value: 2 },
      { label: "Multiple core processes need improvement", value: 4 },
    ],
  },
  {
    id: "digital-maturity",
    question: "How would you describe your current digital maturity?",
    options: [
      { label: "Mostly manual and paper-based processes", value: 1 },
      { label: "Some digital tools but largely disconnected", value: 2 },
      { label: "Multiple systems with limited integration", value: 3 },
      { label: "Advanced digital infrastructure needing optimization", value: 4 },
    ],
  },
  {
    id: "timeline",
    question: "What is your preferred implementation timeline?",
    options: [
      { label: "No specific timeline yet", value: 1 },
      { label: "Within the next 12 months", value: 2 },
      { label: "Within the next 6 months", value: 3 },
      { label: "As soon as possible — urgent need", value: 4 },
    ],
  },
  {
    id: "budget",
    question: "How would you describe your budget readiness?",
    options: [
      { label: "Budget not yet allocated", value: 1 },
      { label: "Limited budget — seeking cost-effective solutions", value: 2 },
      { label: "Moderate budget with clear ROI expectations", value: 3 },
      { label: "Well-funded digital transformation initiative", value: 4 },
    ],
  },
  {
    id: "customization",
    question: "How important is system customization for your needs?",
    options: [
      { label: "Standard out-of-box features would be sufficient", value: 1 },
      { label: "Minor customizations for specific workflows", value: 2 },
      { label: "Significant customization for industry-specific needs", value: 3 },
      { label: "Highly customized solution with unique requirements", value: 4 },
    ],
  },
  {
    id: "technical-readiness",
    question: "What is your team's technical readiness?",
    options: [
      { label: "Limited technical skills — need full support", value: 1 },
      { label: "Basic computer literacy across the team", value: 2 },
      { label: "Moderate technical proficiency with some IT staff", value: 3 },
      { label: "Strong technical team with ERP experience", value: 4 },
    ],
  },
  {
    id: "mobile-access",
    question: "How critical is mobile access for your operations?",
    options: [
      { label: "Not a priority currently", value: 1 },
      { label: "Nice to have for some team members", value: 2 },
      { label: "Important for field teams and management", value: 3 },
      { label: "Critical for daily operations across the organization", value: 4 },
    ],
  },
  {
    id: "change-readiness",
    question: "How would you describe your organization's readiness for change?",
    options: [
      { label: "Significant resistance to new systems expected", value: 1 },
      { label: "Mixed reception — some enthusiasm, some resistance", value: 2 },
      { label: "Generally positive attitude toward modernization", value: 3 },
      { label: "Strong leadership buy-in and team eagerness to improve", value: 4 },
    ],
  },
];

export const resultCategories: ResultCategoryConfig[] = [
  {
    minPercentage: 0,
    maxPercentage: 25,
    category: "early-stage",
    title: "Early Stage Readiness",
    description:
      "Your organization is in the early stages of ERP readiness. This is a great time to start planning your digital transformation journey with proper guidance and a clear roadmap.",
    recommendations: [
      "Begin with a comprehensive business process audit to identify key pain points",
      "Map your current workflows and identify areas where manual processes cause the most friction",
      "Explore ERPNext capabilities through a personalized demo with our team",
      "Consider our ERP Consulting & Advisory services to build a transformation roadmap",
    ],
    nextSteps: [
      "Schedule a free consultation to discuss your current challenges",
      "Request an ERPNext demo tailored to your industry",
      "Download our Digital Transformation Planning Guide",
    ],
  },
  {
    minPercentage: 26,
    maxPercentage: 50,
    category: "moderate",
    title: "Moderate Readiness",
    description:
      "Your business shows moderate readiness for ERP transformation. With the right planning and implementation partner, you can achieve significant operational improvements within a structured timeline.",
    recommendations: [
      "Develop a formal digital transformation roadmap with clear milestones",
      "Prioritize your top 3 processes for automation and system integration",
      "Evaluate your current system limitations against ERPNext capabilities",
      "Build an internal champion team to lead the transformation initiative",
    ],
    nextSteps: [
      "Schedule a consultation to discuss implementation options and timeline",
      "Request a detailed ERPNext feature walkthrough for your industry",
      "Review our NXTGEN methodology to understand our implementation approach",
    ],
  },
  {
    minPercentage: 51,
    maxPercentage: 75,
    category: "transformation-ready",
    title: "Transformation Ready",
    description:
      "Your organization is well-positioned for ERP transformation. You have the foundation in place — strong processes, willing team, and clear needs — to achieve rapid and meaningful results with ERPNext.",
    recommendations: [
      "Begin formal requirements gathering with department heads",
      "Explore our NXTGEN Agile methodology for a structured, low-risk implementation",
      "Plan for data migration strategy and integration requirements early",
      "Engage key stakeholders in solution design workshops",
    ],
    nextSteps: [
      "Book a discovery workshop to define your implementation scope",
      "Request a detailed proposal with timeline and investment estimates",
      "Connect with our team to discuss your specific customization needs",
    ],
  },
  {
    minPercentage: 76,
    maxPercentage: 100,
    category: "enterprise-acceleration",
    title: "Enterprise Acceleration",
    description:
      "Your organization is highly prepared for ERP implementation. With strong leadership buy-in, technical readiness, and clear budget allocation, you are in an excellent position to fast-track your digital transformation.",
    recommendations: [
      "Fast-track implementation with our NXTGEN Agile methodology for earliest possible go-live",
      "Focus on advanced customization, automation, and third-party integration from day one",
      "Plan for organization-wide rollout with comprehensive change management",
      "Leverage advanced analytics, reporting, and business intelligence capabilities",
    ],
    nextSteps: [
      "Schedule a priority discovery session to kick off your project",
      "Request an accelerated implementation proposal",
      "Discuss enterprise-scale deployment and support options with our team",
    ],
  },
];

export function calculateResult(answers: Record<string, number>): AssessmentResult {
  const values = Object.values(answers);
  const totalScore = values.reduce((sum, val) => sum + val, 0);
  const maxScore = assessmentQuestions.length * 4;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const categoryConfig = resultCategories.find(
    (cat) => percentage >= cat.minPercentage && percentage <= cat.maxPercentage
  ) ?? resultCategories[0];

  return {
    score: totalScore,
    percentage,
    category: categoryConfig.category,
    title: categoryConfig.title,
    description: categoryConfig.description,
    recommendations: categoryConfig.recommendations,
    nextSteps: categoryConfig.nextSteps,
  };
}
