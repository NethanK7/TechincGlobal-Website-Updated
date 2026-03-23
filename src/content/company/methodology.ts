export const methodologyContent = {
  phases: [
    {
      title: "Discover",
      duration: "Weeks 1–2",
      description:
        "We immerse ourselves in your business through structured stakeholder workshops. Every key business process, pain point, and success criterion is documented. The output is a signed Solution Blueprint — the single source of truth for the entire project.",
      activities: [
        "Executive kick-off and project governance setup",
        "Structured workshops with each department",
        "As-is process documentation and gap analysis",
        "ERP module scoping and prioritization",
        "Risk register and mitigation planning",
      ],
      outputs: [
        "Solution Blueprint document",
        "Confirmed project scope and exclusions",
        "Risk register",
        "Project governance framework",
      ],
    },
    {
      title: "Design",
      duration: "Weeks 2–4",
      description:
        "Your Solution Blueprint is translated into a detailed Frappe ERP design. Data models, configuration specifications, custom development requirements, integration architecture, and go-live plan are defined — with stakeholder review at every step.",
      activities: [
        "Frappe ERP configuration specification",
        "Custom development requirements specification",
        "Data migration mapping and cleansing plan",
        "Integration architecture design",
        "Test plan and UAT scenario development",
      ],
      outputs: [
        "Configuration specification document",
        "Data migration mapping document",
        "Integration architecture diagram",
        "UAT test scenarios",
      ],
    },
    {
      title: "Configure",
      duration: "Weeks 4–10",
      description:
        "Agile development sprints deliver working, tested functionality in two-week cycles. At the end of each sprint, stakeholders review real configurations — not slides. This continuous feedback loop ensures the system is built correctly from the start.",
      activities: [
        "Frappe ERP configuration and setup",
        "Custom app and script development",
        "Integration connector development",
        "Data migration script development and testing",
        "Sprint demos and stakeholder feedback sessions",
      ],
      outputs: [
        "Fully configured Frappe ERP staging environment",
        "Tested custom developments",
        "Working integrations",
        "Validated data migration scripts",
      ],
    },
    {
      title: "Deploy",
      duration: "Weeks 10–12",
      description:
        "User Acceptance Testing is conducted with real business scenarios. Issues are triaged and resolved. Final data migration is executed and validated. Go-live is managed over a planned weekend window with our team on-site. Hypercare support begins immediately.",
      activities: [
        "User Acceptance Testing with business teams",
        "Issue triage, resolution, and re-testing",
        "Final data migration and reconciliation",
        "Production environment setup and hardening",
        "Go-live cutover and validation",
      ],
      outputs: [
        "Signed UAT sign-off",
        "Migration validation report",
        "Go-live completion certificate",
        "30-day hypercare support activation",
      ],
    },
    {
      title: "Optimize",
      duration: "Ongoing",
      description:
        "The go-live is the beginning, not the end. We track adoption metrics, identify improvement opportunities, manage version upgrades, and provide ongoing support to ensure your Frappe ERP investment continues to deliver value as your business grows.",
      activities: [
        "Adoption monitoring and user coaching",
        "Quarterly optimization reviews",
        "Managed Frappe ERP version upgrades",
        "Enhancement backlog management",
        "Performance tuning and health checks",
      ],
      outputs: [
        "Adoption dashboard and monthly reports",
        "Quarterly improvement recommendations",
        "Managed upgrade reports",
        "Ongoing support SLA metrics",
      ],
    },
  ],
  riskReductions: [
    {
      title: "Iterative Delivery Reduces Late Surprises",
      description:
        "By delivering working software every two weeks, issues are caught early — not at UAT when changes are expensive. Stakeholders see real progress continuously throughout the project.",
    },
    {
      title: "Data Migration Validated in Multiple Cycles",
      description:
        "We run data migration scripts multiple times in parallel with configuration work. By go-live, the migration has been run and validated at least three times, eliminating surprises.",
    },
    {
      title: "Scope Flexibility with Change Control",
      description:
        "NXTGEN accommodates changing requirements through a lightweight change control process. Scope changes are priced transparently and incorporated into upcoming sprints.",
    },
    {
      title: "Parallel Running Eliminates Cutover Risk",
      description:
        "Where business criticality demands it, we run old and new systems in parallel for a defined period — providing a validated safety net before the legacy system is retired.",
    },
  ],
};
