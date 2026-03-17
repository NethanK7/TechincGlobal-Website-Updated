import type { TeamMember, Testimonial } from "@/types";

export const aboutContent = {
  story: [
    "TECHINCGLOBAL was founded with a clear vision: to make world-class ERP solutions accessible to businesses across Sri Lanka and the broader South Asian region. We recognized that growing enterprises were trapped between expensive, rigid enterprise systems and inadequate small-business tools — neither serving their real needs.",
    "As an authorized Frappe Technologies partner, we bring the power of ERPNext — a comprehensive, open-source ERP platform — to organizations ready to modernize their operations. Our team combines deep technical expertise with genuine understanding of local business challenges, regulatory requirements, and market dynamics.",
    "From this foundation, we developed our proprietary NXTGEN Agile implementation methodology — a structured yet flexible framework born from over 150 successful implementations. NXTGEN reduces deployment time by up to 40% while ensuring genuine user adoption and measurable business outcomes. Today, we serve businesses across manufacturing, distribution, retail, services, and more, helping them transform operations and compete at a global level.",
  ],
  mission:
    "To empower businesses across Sri Lanka and beyond with intelligent, affordable, and scalable ERP solutions that drive operational excellence and sustainable growth.",
  vision:
    "To be South Asia's most trusted ERP transformation partner, enabling 1,000+ businesses to achieve digital excellence by 2030.",
  values: [
    {
      title: "Client-Centric Excellence",
      description:
        "Every decision we make starts with understanding our client's unique challenges and business objectives. Your success is our measure of success.",
    },
    {
      title: "Innovation Through Simplicity",
      description:
        "We believe the best solutions are elegant, intuitive, and designed to reduce complexity, not add to it. We solve real problems with practical technology.",
    },
    {
      title: "Integrity & Transparency",
      description:
        "Honest communication, realistic timelines, and no hidden surprises. We build long-term trust through consistent actions and open partnerships.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We invest in our methodology, our people, and our partnerships to deliver better outcomes with every engagement. Standing still is not an option.",
    },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    name: "Herschel Gunawardena",
    role: "Chairman",
    bio: "Strategic leadership driving innovation and enterprise transformation across Sri Lanka and the wider South Asian region.",
  },
  {
    name: "Sean Fernando",
    role: "Director — Solutions",
    bio: "Leading solutions architecture and delivery with a focus on measurable business value from every ERPNext engagement.",
  },
  {
    name: "Lahiru Pathirana",
    role: "Head of Technical Solutions",
    bio: "Specialist in technical architecture, Frappe development, and complex ERP integration strategies.",
  },
  {
    name: "Jeby Krishoan",
    role: "Functional Consultant — Manufacturing & Supply Chain",
    bio: "Expert in manufacturing and logistics workflows, ensuring ERPNext aligns perfectly with production and procurement realities.",
  },
  {
    name: "Niluka Dilrukshi",
    role: "Functional Consultant — Finance & Payroll",
    bio: "Finance process expert ensuring accurate, efficient financial operations and statutory compliance through ERPNext.",
  },
  {
    name: "Lakvindu Siriwardena",
    role: "Techno-Functional Consultant",
    bio: "Bridges technical and functional perspectives to deliver seamless, high-quality ERP implementations.",
  },
  {
    name: "Shakthi Rodrigo",
    role: "Techno-Functional Consultant",
    bio: "Delivers end-to-end ERP solutions combining deep technical expertise with domain knowledge across industries.",
  },
];

export const companyValues = [
  { title: "Excellence", emoji: "⭐", description: "We hold ourselves to the highest standard in every engagement — from code quality to client communication." },
  { title: "Customer Success", emoji: "🤝", description: "Our success is measured by yours. We are invested in your outcomes long after go-live." },
  { title: "Innovation", emoji: "💡", description: "We continuously refine our methodology and tooling to stay ahead — so you don't have to." },
  { title: "Integrity", emoji: "🛡️", description: "Honest assessments and realistic expectations — always. We would rather set the right expectation than win a deal." },
  { title: "Collaboration", emoji: "🔗", description: "We work alongside your team as true partners, building internal capability that lasts beyond the engagement." },
  { title: "Continuous Learning", emoji: "📚", description: "The ERP landscape evolves rapidly. We invest consistently in certifications, community, and learning." },
];

export const companyTimeline = [
  { year: "2018", title: "Company Foundation", description: "Established Techincglobal Consultancy as a digital transformation company providing advisory services to enterprise customers across Sri Lanka." },
  { year: "2019", title: "Delivering License-Free Software", description: "Developed our first Rapid Application Development Platform with the ability to deliver license-free enterprise software." },
  { year: "2020", title: "The Birth of NXTGEN", description: "Started our Frappe journey and began building the NXTGEN Agile implementation methodology through hands-on delivery experience." },
  { year: "2021", title: "Cloud Journey Begins", description: "Established key cloud infrastructure partnerships marking our expansion into cloud-hosted ERP delivery." },
  { year: "2022", title: "Joins SEBSA Group", description: "Became an integral part of the SEBSA Group, expanding our global ERP delivery footprint and shared capabilities." },
  { year: "2023", title: "Authorized Frappe Partner — Sri Lanka", description: "Techincglobal became the first authorized Frappe Technologies partner in Sri Lanka — a landmark milestone of national recognition." },
  { year: "2024", title: "Exponential Growth", description: "Surpassed 20 manufacturing sector customers, solidifying our position as the trusted ERP provider for Sri Lankan industry." },
  { year: "2025", title: "Certified Bronze Partner", description: "Achieved Highly Skilled Certified Bronze Partner status with Frappe Technologies — our highest certification milestone." },
];

// TODO_CLIENT_CONFIRMATION: Replace with actual client testimonials
export const testimonials: Testimonial[] = [
  {
    quote:
      "TECHINCGLOBAL transformed our manufacturing operations. Their NXTGEN methodology made what we expected to be a painful migration surprisingly smooth. We achieved full ROI within 8 months.",
    author: "Operations Director",
    role: "Operations Director",
    company: "Leading Garment Manufacturer",
  },
  {
    quote:
      "The team's understanding of Sri Lankan business requirements combined with their ERPNext expertise was exactly what we needed. Our order processing time dropped by 60% within the first quarter.",
    author: "Managing Director",
    role: "Managing Director",
    company: "FMCG Distribution Company",
  },
  {
    quote:
      "What impressed us most was their commitment to genuine user adoption. They didn't just implement software — they transformed how our team works. The training and change management support was outstanding.",
    author: "CEO",
    role: "CEO",
    company: "IT Consulting Firm",
  },
  {
    quote:
      "We evaluated several ERP partners before choosing TECHINCGLOBAL. Their structured methodology, transparent communication, and deep Frappe expertise made the decision easy. Highly recommended.",
    author: "Finance Director",
    role: "Finance Director",
    company: "Import/Export Trading Company",
  },
];

export const partners = [
  {
    name: "Frappe Technologies",
    description: "Authorized Frappe Technologies partner for ERPNext implementation and customization.",
    confirmed: true,
  },
  // TODO_CLIENT_CONFIRMATION: Add additional technology and consulting partners
];
