import type { Service } from '@/types';

export const services: Service[] = [
  // -------------------------------------------------------------------------
  // 1. ERPNext Implementation
  // -------------------------------------------------------------------------
  {
    slug: 'erpnext-implementation',
    title: 'ERPNext Implementation',
    shortTitle: 'Implementation',
    description:
      'End-to-end ERPNext deployment tailored to your business — from requirements analysis and configuration through data migration, user training, and go-live support. Our NXTGEN Agile methodology ensures on-time delivery with minimal operational disruption.',
    icon: 'Rocket',
    benefits: [
      'Go live in as few as 8 weeks with our accelerated deployment track',
      'Eliminate duplicate data entry across finance, inventory, and HR',
      'Gain real-time visibility into every business function from a single dashboard',
      'Reduce annual software licensing costs by up to 60% compared to proprietary ERPs',
      'Future-proof your operations with a fully open-source, community-backed platform',
    ],
    deliverables: [
      'Fully configured ERPNext instance mapped to your chart of accounts, warehouses, and workflows',
      'Complete data migration from legacy systems with validation reports',
      'Role-based access control and security configuration',
      'Integration with existing email, payment, and third-party systems',
      'Go-live readiness checklist and post-launch stabilization support',
    ],
    processSteps: [
      {
        number: 1,
        title: 'Discovery & Requirements Mapping',
        description:
          'We conduct stakeholder interviews, document your current processes, and translate business requirements into a detailed ERPNext solution blueprint.',
      },
      {
        number: 2,
        title: 'Configuration & Customization',
        description:
          'Your ERPNext instance is configured to match your organizational structure, approval hierarchies, pricing rules, and reporting needs — with custom doctypes where standard modules fall short.',
      },
      {
        number: 3,
        title: 'Data Migration & Validation',
        description:
          'Master data, opening balances, and transactional history are extracted, cleansed, transformed, and loaded into ERPNext with line-by-line reconciliation.',
      },
      {
        number: 4,
        title: 'User Acceptance Testing',
        description:
          'Key users execute real business scenarios in a staging environment. Defects are triaged, resolved, and re-tested before any production cutover.',
      },
      {
        number: 5,
        title: 'Go-Live & Hypercare',
        description:
          'We manage the production cutover over a planned weekend window, provide on-site support during the first critical weeks, and transition you to steady-state operations.',
      },
    ],
    faqs: [
      {
        question: 'How long does a typical ERPNext implementation take?',
        answer:
          'Most mid-market implementations complete within 10 to 16 weeks. The timeline depends on the number of modules, complexity of data migration, and the level of customization required. Our NXTGEN methodology includes time-boxed sprints that keep projects on schedule.',
      },
      {
        question: 'Will my business operations be disrupted during go-live?',
        answer:
          'We plan the production cutover during a weekend or low-activity period and run parallel systems when necessary. Our hypercare team is on-site during the first two weeks post-go-live to address any issues immediately, ensuring minimal disruption to your daily operations.',
      },
      {
        question: 'Can ERPNext handle our specific local compliance requirements?',
        answer:
          'Yes. ERPNext supports multi-currency accounting, localized tax configurations, and statutory reporting. As an authorized Frappe partner based in Sri Lanka, we have deep experience configuring the system for local VAT, SVAT, and withholding tax requirements as well as Central Bank reporting.',
      },
      {
        question: 'What happens after go-live?',
        answer:
          'Every implementation includes a 30-day hypercare period with priority support. Beyond that, we offer ongoing managed support plans that cover system monitoring, minor enhancements, user support, and version upgrades to keep your ERPNext instance running at peak performance.',
      },
    ],
    metaTitle: 'ERPNext Implementation Services | TECHINCGLOBAL',
    metaDescription:
      'End-to-end ERPNext implementation by an authorized Frappe partner. From requirements analysis through go-live and hypercare — delivered with our proven NXTGEN Agile methodology.',
  },

  // -------------------------------------------------------------------------
  // 2. Frappe Customization & Development
  // -------------------------------------------------------------------------
  {
    slug: 'frappe-customization-development',
    title: 'Frappe Customization & Development',
    shortTitle: 'Customization',
    description:
      'When out-of-the-box ERPNext modules need to go further, our Frappe-certified developers build custom applications, doctypes, and integrations that extend the platform to fit your exact business logic — without compromising upgrade compatibility.',
    icon: 'Code',
    benefits: [
      'Get purpose-built features that match your unique workflows instead of forcing workarounds',
      'Maintain full upgrade compatibility with upstream ERPNext releases',
      'Automate repetitive tasks with custom server scripts and scheduled jobs',
      'Connect ERPNext to any external system through well-documented REST APIs',
      'Leverage the Frappe framework\'s built-in permissions, versioning, and audit trail',
    ],
    deliverables: [
      'Custom Frappe applications packaged as installable apps with version control',
      'Custom doctypes, print formats, and report builders tailored to your domain',
      'Workflow automations including approval chains, email alerts, and auto-assignments',
      'REST API integrations with third-party platforms, documented with Postman collections',
      'Technical documentation and knowledge-transfer sessions for your IT team',
    ],
    processSteps: [
      {
        number: 1,
        title: 'Requirements & Feasibility Analysis',
        description:
          'We evaluate whether your need can be met through configuration, client scripting, or requires a full custom app — choosing the lightest approach that solves the problem.',
      },
      {
        number: 2,
        title: 'Solution Architecture',
        description:
          'Our architects design the data model, API contracts, and UI wireframes, ensuring the solution integrates cleanly with existing ERPNext modules and respects the framework\'s conventions.',
      },
      {
        number: 3,
        title: 'Agile Development Sprints',
        description:
          'Development proceeds in two-week sprints with demo sessions at the end of each cycle, giving you visibility into progress and the ability to steer priorities.',
      },
      {
        number: 4,
        title: 'Quality Assurance & Deployment',
        description:
          'Automated tests, code reviews, and staging deployments ensure production-grade quality. We deploy through CI/CD pipelines with rollback capability.',
      },
    ],
    faqs: [
      {
        question: 'Will custom apps break when ERPNext is upgraded?',
        answer:
          'We build custom applications following Frappe\'s official app architecture, which isolates customizations from core code. This means your custom apps remain compatible through standard ERPNext version upgrades. We also include upgrade testing as part of our support plans.',
      },
      {
        question: 'Can you build mobile-friendly custom interfaces?',
        answer:
          'Absolutely. The Frappe framework renders responsive web views by default, and we can build Progressive Web Apps (PWAs) or dedicated mobile interfaces using Frappe\'s REST API for use cases that demand a native-like experience.',
      },
      {
        question: 'How do you handle intellectual property for custom code?',
        answer:
          'All custom code we develop for your project is your intellectual property. We deliver source code in a private Git repository, provide full technical documentation, and ensure your internal team has the knowledge to maintain and extend it.',
      },
    ],
    metaTitle: 'Frappe Customization & Custom Development | TECHINCGLOBAL',
    metaDescription:
      'Extend ERPNext with custom Frappe applications, doctypes, workflows, and API integrations. Built by certified Frappe developers with full upgrade compatibility.',
  },

  // -------------------------------------------------------------------------
  // 3. Business Process Automation
  // -------------------------------------------------------------------------
  {
    slug: 'business-process-automation',
    title: 'Business Process Automation',
    shortTitle: 'Automation',
    description:
      'Transform manual, error-prone workflows into automated, auditable digital processes. From purchase approvals and document routing to scheduled reports and real-time notifications — we eliminate the bottlenecks that slow your operations down.',
    icon: 'Workflow',
    benefits: [
      'Cut process cycle times by 40-70% by eliminating manual handoffs and paper trails',
      'Enforce compliance with automated approval hierarchies and audit logging',
      'Free your team from repetitive data entry so they can focus on high-value work',
      'Gain complete visibility into process status with real-time dashboards and alerts',
      'Scale operations without proportionally increasing headcount',
    ],
    deliverables: [
      'Process maps documenting current-state and future-state workflows',
      'Configured ERPNext workflow rules with multi-level approval chains',
      'Automated email and SMS notifications triggered by business events',
      'Scheduled server scripts for recurring tasks such as report generation and data sync',
      'Process performance dashboards with SLA tracking and exception alerts',
    ],
    processSteps: [
      {
        number: 1,
        title: 'Process Discovery & Mapping',
        description:
          'We shadow your teams, document every step of the current process, identify bottlenecks and redundancies, and quantify the cost of manual effort.',
      },
      {
        number: 2,
        title: 'Automation Design',
        description:
          'Each process is redesigned for automation with clear trigger conditions, routing rules, exception handling, and escalation paths.',
      },
      {
        number: 3,
        title: 'Build & Configure',
        description:
          'Automation rules are implemented using ERPNext workflows, server scripts, and where necessary, custom Frappe apps — with full test coverage.',
      },
      {
        number: 4,
        title: 'Pilot & Rollout',
        description:
          'Automations are piloted with a subset of users, refined based on feedback, and then rolled out company-wide with monitoring dashboards in place.',
      },
    ],
    faqs: [
      {
        question: 'Which processes are the best candidates for automation?',
        answer:
          'Processes that are high-volume, rule-based, and involve multiple handoffs deliver the fastest ROI. Common examples include purchase requisition approvals, invoice processing, leave management, inventory replenishment, and customer onboarding workflows.',
      },
      {
        question: 'Can you automate processes that involve external parties?',
        answer:
          'Yes. We can automate supplier notifications, customer communication, and partner data exchanges using ERPNext\'s built-in email integration, webhooks, and API connectors. Portal-based workflows also allow external parties to interact directly with your system.',
      },
      {
        question: 'How do we measure the ROI of automation?',
        answer:
          'Before implementation, we baseline key metrics such as process cycle time, error rates, and labor hours. After rollout, we provide dashboards that track these same metrics so you can quantify the improvement in concrete terms — hours saved, errors eliminated, and faster turnaround.',
      },
    ],
    metaTitle: 'Business Process Automation Services | TECHINCGLOBAL',
    metaDescription:
      'Automate manual workflows, approval chains, and document routing with ERPNext. Reduce cycle times by up to 70% and enforce compliance through digital process automation.',
  },

  // -------------------------------------------------------------------------
  // 4. Legacy System Modernization
  // -------------------------------------------------------------------------
  {
    slug: 'legacy-system-modernization',
    title: 'Legacy System Modernization',
    shortTitle: 'Modernization',
    description:
      'Migrate from outdated ERP, accounting, or bespoke systems to a modern ERPNext platform without losing years of critical business data. Our structured migration methodology ensures continuity, accuracy, and confidence in every transition.',
    icon: 'RefreshCcw',
    benefits: [
      'Eliminate vendor lock-in and unsustainable licensing fees from legacy platforms',
      'Preserve historical data integrity through validated, auditable migration processes',
      'Consolidate fragmented systems into a single unified platform',
      'Empower users with a modern, browser-based interface accessible from anywhere',
      'Reduce IT maintenance overhead by retiring aging infrastructure',
    ],
    deliverables: [
      'Legacy system audit and data quality assessment report',
      'Field-level data mapping document between source and target systems',
      'Automated migration scripts with error handling and rollback capability',
      'Parallel-run plan with reconciliation checkpoints',
      'Legacy system decommissioning roadmap and archival strategy',
    ],
    processSteps: [
      {
        number: 1,
        title: 'Legacy Assessment',
        description:
          'We inventory every module, table, and integration in your current system, assess data quality, and identify what must be migrated versus archived.',
      },
      {
        number: 2,
        title: 'Data Mapping & Cleansing',
        description:
          'Source data fields are mapped to ERPNext doctypes with transformation rules. Duplicate, orphaned, and inconsistent records are flagged for cleansing before migration.',
      },
      {
        number: 3,
        title: 'Iterative Migration & Validation',
        description:
          'We run multiple migration cycles — each one refining the scripts and validating totals against source system reports until variance is zero.',
      },
      {
        number: 4,
        title: 'Parallel Running',
        description:
          'Both systems run simultaneously for a defined period. Transactions are entered in both, and daily reconciliation ensures the new system produces identical outputs.',
      },
      {
        number: 5,
        title: 'Cutover & Decommission',
        description:
          'Once stakeholders sign off on parallel-run results, we execute the final cutover, archive the legacy system, and provide a certificate of migration completeness.',
      },
    ],
    faqs: [
      {
        question: 'Can you migrate data from any legacy system?',
        answer:
          'We have migrated data from SAP Business One, Oracle, Tally, QuickBooks, MYOB, Sage, custom-built systems, and even spreadsheet-based operations. As long as data can be exported in any structured format (CSV, SQL, XML, API), we can map and migrate it into ERPNext.',
      },
      {
        question: 'How do you ensure no data is lost during migration?',
        answer:
          'Every migration cycle includes automated reconciliation that compares record counts, financial totals, and hash values between the source and target systems. We provide a signed validation report before each milestone and never proceed to cutover until discrepancies reach zero.',
      },
      {
        question: 'What if we need to keep the legacy system running temporarily?',
        answer:
          'Parallel running is a standard phase in our methodology. We design a reconciliation framework that lets both systems operate simultaneously, giving your team confidence in the new platform before the legacy system is retired.',
      },
      {
        question: 'How long does a typical migration take?',
        answer:
          'A straightforward migration from a single legacy system typically takes 6 to 12 weeks. Complex migrations involving multiple source systems, large data volumes, or regulatory requirements may take 12 to 20 weeks. We provide a detailed timeline after the assessment phase.',
      },
    ],
    metaTitle: 'Legacy System Modernization & ERP Migration | TECHINCGLOBAL',
    metaDescription:
      'Migrate from SAP, Tally, QuickBooks, or bespoke systems to ERPNext with zero data loss. Structured migration methodology with parallel running and validated data integrity.',
  },

  // -------------------------------------------------------------------------
  // 5. System Integration
  // -------------------------------------------------------------------------
  {
    slug: 'system-integration',
    title: 'System Integration',
    shortTitle: 'Integration',
    description:
      'Connect ERPNext to the rest of your technology ecosystem — payment gateways, e-commerce platforms, banking systems, logistics providers, and government portals. We build reliable, secure integrations that keep data flowing in real time.',
    icon: 'Plug',
    benefits: [
      'Eliminate manual data re-entry between disconnected systems',
      'Achieve real-time data synchronization across your entire tech stack',
      'Reduce order-to-cash and procure-to-pay cycle times with automated data flows',
      'Maintain a single source of truth for customers, inventory, and financials',
      'Comply with government e-filing and reporting requirements through direct integrations',
    ],
    deliverables: [
      'Integration architecture diagram mapping all system connections and data flows',
      'API connectors with authentication, error handling, and retry logic',
      'Real-time or scheduled data synchronization pipelines',
      'Integration monitoring dashboard with alerting for failures and latency',
      'API documentation and runbooks for your IT team',
    ],
    processSteps: [
      {
        number: 1,
        title: 'Integration Landscape Assessment',
        description:
          'We catalog every system that needs to communicate with ERPNext, document current data flows, and identify the optimal integration pattern for each connection.',
      },
      {
        number: 2,
        title: 'API Design & Prototyping',
        description:
          'For each integration point, we design the API contract, data mapping, and error-handling strategy, then build a working prototype to validate the approach.',
      },
      {
        number: 3,
        title: 'Development & Testing',
        description:
          'Integration connectors are developed with comprehensive error handling, logging, and automated tests that simulate real-world data volumes and failure scenarios.',
      },
      {
        number: 4,
        title: 'Deployment & Monitoring',
        description:
          'Connectors are deployed with health-check endpoints and monitoring dashboards. Alerting rules notify your team of any data sync failures or performance degradation.',
      },
    ],
    faqs: [
      {
        question: 'Which payment gateways can you integrate with ERPNext?',
        answer:
          'We have production experience integrating ERPNext with Stripe, PayHere, LankaPay, and direct bank payment APIs. We can also integrate with any payment gateway that offers a REST or SOAP API, including local Sri Lankan gateways and international processors.',
      },
      {
        question: 'Can ERPNext integrate with our e-commerce platform?',
        answer:
          'Yes. ERPNext has built-in connectors for WooCommerce and Shopify, and we have built custom integrations with Magento, BigCommerce, and bespoke e-commerce platforms. We synchronize products, inventory, orders, and customer data in real time.',
      },
      {
        question: 'How do you handle integration failures and data conflicts?',
        answer:
          'Every integration includes retry logic, dead-letter queues for failed messages, and conflict resolution rules. Our monitoring dashboards provide real-time visibility into sync status, and automated alerts ensure your team is notified of any issues before they impact operations.',
      },
    ],
    metaTitle: 'System Integration Services for ERPNext | TECHINCGLOBAL',
    metaDescription:
      'Integrate ERPNext with payment gateways, e-commerce platforms, banks, and government systems. Real-time data synchronization with monitoring and error handling.',
  },

  // -------------------------------------------------------------------------
  // 6. ERP Consulting & Advisory
  // -------------------------------------------------------------------------
  {
    slug: 'erp-consulting-advisory',
    title: 'ERP Consulting & Advisory',
    shortTitle: 'Consulting',
    description:
      'Make confident, data-driven decisions about your ERP strategy. Our consultants bring deep domain expertise in business process design, solution architecture, and technology selection to help you build a transformation roadmap that delivers measurable results.',
    icon: 'Lightbulb',
    benefits: [
      'Avoid costly implementation mistakes with expert guidance from day one',
      'Get an unbiased technology assessment — not a sales pitch for a single vendor',
      'Align your ERP investment with concrete business outcomes and KPIs',
      'De-risk your project with a proven framework for requirements gathering and vendor evaluation',
      'Accelerate executive buy-in with a compelling business case and ROI model',
    ],
    deliverables: [
      'Business process assessment report with gap analysis and improvement opportunities',
      'ERP solution architecture document with module recommendations',
      'Vendor evaluation matrix with weighted scoring across functional and non-functional criteria',
      'Implementation roadmap with phased milestones, resource plan, and budget estimates',
      'Executive business case with projected ROI, payback period, and risk assessment',
    ],
    processSteps: [
      {
        number: 1,
        title: 'Stakeholder Discovery',
        description:
          'We interview executives, department heads, and end users to understand strategic objectives, pain points, and success criteria across every function.',
      },
      {
        number: 2,
        title: 'Current-State Analysis',
        description:
          'Your existing systems, processes, and data flows are documented and assessed against industry best practices to identify gaps and improvement opportunities.',
      },
      {
        number: 3,
        title: 'Solution Design & Roadmap',
        description:
          'We architect the target-state solution, define a phased implementation roadmap, and build a financial model that quantifies the expected return on investment.',
      },
      {
        number: 4,
        title: 'Executive Presentation & Handoff',
        description:
          'Findings and recommendations are presented to your leadership team in a clear, actionable format — ready for board-level approval and vendor engagement.',
      },
    ],
    faqs: [
      {
        question: 'Do you only recommend ERPNext?',
        answer:
          'While we specialize in ERPNext and believe it is the strongest open-source ERP on the market, our consulting engagements are objective. If your requirements point to a different platform, we will tell you. Our goal is to find the right solution for your business, not to sell a specific product.',
      },
      {
        question: 'How long does an ERP advisory engagement typically last?',
        answer:
          'A focused advisory engagement typically runs 4 to 8 weeks, covering stakeholder interviews, process analysis, solution design, and executive presentation. Larger organizations with complex multi-entity structures may require 8 to 12 weeks.',
      },
      {
        question: 'Can you help us secure budget approval from leadership?',
        answer:
          'Yes. We deliver a board-ready business case that includes total cost of ownership analysis, ROI projections, risk assessment, and a comparison of the cost of inaction versus investment. This gives your leadership team the data they need to make a confident decision.',
      },
      {
        question: 'What industries do your consultants specialize in?',
        answer:
          'Our consulting team has hands-on implementation experience across manufacturing, distribution, retail, professional services, construction, healthcare, education, and trading. This cross-industry perspective allows us to bring best practices from multiple sectors to your engagement.',
      },
    ],
    metaTitle: 'ERP Consulting & Advisory Services | TECHINCGLOBAL',
    metaDescription:
      'Expert ERP consulting including business analysis, solution architecture, vendor evaluation, and implementation roadmap planning. Make confident, data-driven ERP decisions.',
  },

  // -------------------------------------------------------------------------
  // 7. Support & Optimization
  // -------------------------------------------------------------------------
  {
    slug: 'support-optimization',
    title: 'Support & Optimization',
    shortTitle: 'Support',
    description:
      'Keep your ERPNext system running at peak performance with proactive monitoring, timely upgrades, responsive user support, and continuous optimization. Our managed support plans give you the confidence that expert help is always within reach.',
    icon: 'HeadphonesIcon',
    benefits: [
      'Minimize downtime with proactive system monitoring and issue resolution',
      'Stay current with ERPNext releases, security patches, and new features',
      'Empower users with responsive helpdesk support and knowledge base access',
      'Continuously improve system performance through regular health checks and tuning',
      'Free your internal IT team to focus on strategic initiatives instead of ERP maintenance',
    ],
    deliverables: [
      'Dedicated support portal with SLA-backed ticket management',
      'Monthly system health reports covering performance, storage, and usage metrics',
      'Quarterly optimization reviews with recommendations for improvement',
      'Managed version upgrades with pre-upgrade testing and rollback plans',
      'User knowledge base with FAQs, how-to guides, and video tutorials',
    ],
    processSteps: [
      {
        number: 1,
        title: 'System Onboarding',
        description:
          'We audit your current ERPNext environment, set up monitoring agents, establish baseline performance metrics, and configure alerting thresholds.',
      },
      {
        number: 2,
        title: 'Proactive Monitoring',
        description:
          'Automated monitoring tracks server health, application errors, background job queues, and database performance — alerting our team before issues impact users.',
      },
      {
        number: 3,
        title: 'Issue Resolution & Optimization',
        description:
          'Support tickets are triaged and resolved within SLA timeframes. We identify recurring issues and address root causes through configuration changes or code fixes.',
      },
      {
        number: 4,
        title: 'Continuous Improvement',
        description:
          'Quarterly reviews assess system performance, user adoption patterns, and upcoming ERPNext features — resulting in a prioritized optimization backlog.',
      },
    ],
    faqs: [
      {
        question: 'What are your support response times?',
        answer:
          'Our standard SLA provides a 4-hour response time for critical issues and 8 hours for standard requests during business hours. Premium plans include 1-hour critical response times with 24/7 coverage for production-down scenarios.',
      },
      {
        question: 'Do you handle ERPNext version upgrades?',
        answer:
          'Yes. Every support plan includes managed upgrades. We test the new version against your custom apps and configurations in a staging environment, resolve any compatibility issues, and schedule the production upgrade during a maintenance window with rollback capability.',
      },
      {
        question: 'Can you support ERPNext instances not implemented by TECHINCGLOBAL?',
        answer:
          'Absolutely. We onboard existing ERPNext environments implemented by other partners or in-house teams. After an initial audit to understand your configuration and customizations, we take over support and optimization responsibilities.',
      },
    ],
    metaTitle: 'ERPNext Support & Optimization Services | TECHINCGLOBAL',
    metaDescription:
      'Managed ERPNext support with proactive monitoring, SLA-backed helpdesk, version upgrades, and continuous performance optimization. Keep your ERP running at peak performance.',
  },

  // -------------------------------------------------------------------------
  // 8. Training & Change Management
  // -------------------------------------------------------------------------
  {
    slug: 'training-change-management',
    title: 'Training & Change Management',
    shortTitle: 'Training',
    description:
      'Technology alone does not drive transformation — people do. Our structured training programs and change management strategies ensure your teams adopt ERPNext confidently, use it effectively, and sustain long-term productivity gains.',
    icon: 'GraduationCap',
    benefits: [
      'Accelerate user adoption with role-based training designed for real daily workflows',
      'Reduce post-go-live support tickets by up to 60% through proactive skill-building',
      'Build internal ERPNext champions who can support and train their peers',
      'Overcome resistance to change with a structured communication and engagement plan',
      'Sustain long-term ROI by ensuring the system is used to its full potential',
    ],
    deliverables: [
      'Role-based training curriculum covering end-user, power-user, and admin tracks',
      'Hands-on workshop sessions with real business scenarios from your company',
      'Video training library with screen recordings for every key process',
      'Change management strategy including stakeholder analysis and communication plan',
      'Adoption monitoring dashboard tracking login frequency, feature usage, and proficiency metrics',
    ],
    processSteps: [
      {
        number: 1,
        title: 'Stakeholder & Impact Analysis',
        description:
          'We identify every user group affected by the change, assess their current skill levels, and map the specific behavior shifts required for each role.',
      },
      {
        number: 2,
        title: 'Training Program Design',
        description:
          'Custom curricula are developed for each user role — using your company\'s actual data, processes, and terminology so training feels immediately relevant.',
      },
      {
        number: 3,
        title: 'Delivery & Practice',
        description:
          'Interactive workshops are delivered in small groups with hands-on exercises in a training environment. Users practice real tasks until they reach proficiency.',
      },
      {
        number: 4,
        title: 'Adoption Monitoring & Reinforcement',
        description:
          'Post-go-live, we track adoption metrics, identify struggling users, and provide targeted follow-up coaching to ensure no one falls behind.',
      },
      {
        number: 5,
        title: 'Knowledge Transfer & Sustainability',
        description:
          'Internal trainers are certified, training materials are handed over, and a self-service knowledge base is established for ongoing reference.',
      },
    ],
    faqs: [
      {
        question: 'How long does the training program take?',
        answer:
          'A standard training program runs 2 to 4 weeks, with sessions scheduled around your team\'s availability. End-user training typically requires 2 to 3 half-day sessions per role, while admin and power-user tracks involve additional technical deep-dives.',
      },
      {
        question: 'Can training be conducted in Sinhala or Tamil?',
        answer:
          'Yes. Our trainers deliver sessions in English, Sinhala, and Tamil to ensure every team member can learn comfortably in their preferred language. Training materials can also be localized.',
      },
      {
        question: 'What if users are still struggling after go-live?',
        answer:
          'Our adoption monitoring dashboard identifies users with low login rates or error patterns. We provide targeted one-on-one coaching, refresher sessions, and updated quick-reference guides to bring every user up to proficiency.',
      },
      {
        question: 'Do you provide ongoing training for new employees?',
        answer:
          'Yes. We can set up a train-the-trainer program so your internal team can onboard new hires independently. We also maintain a video library and knowledge base that new employees can use for self-paced learning.',
      },
    ],
    metaTitle: 'ERPNext Training & Change Management | TECHINCGLOBAL',
    metaDescription:
      'Role-based ERPNext training and structured change management to drive user adoption. Workshops, video libraries, and adoption monitoring for lasting transformation.',
  },
];

export default services;
