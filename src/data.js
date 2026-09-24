export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Valuation & Projects" },
  { id: "competencies", label: "Competencies" },
  { id: "education", label: "Education & Certifications" },
  { id: "contact", label: "Contact" }
];

export const profile = {
  name: "MD RAFATULLAH",
  initials: "MR",
  title: "Finance Intern | BBA Final Year Candidate",
  subtitle: "Department of Finance, Jagannath University",
  location: "Shaympur, Dhaka-1203, Bangladesh",
  email: "rafatullah.r.h@gmail.com",
  phone: "+8801882222669",
  linkedin: "https://linkedin.com/in/mdrafatullah",
  github: "https://mdrafatullah.github.io",
  avatar: "rafatullah-cover.jpeg",
  photo: "rafatullah-cover.jpeg",
  coverImage: "rafatullah-cover.jpeg",
  cvPhoto: "rafatullah-photo.png",
  careerObjective:
    "Seeking a 3-month mandatory finance internship to build on foundational skills in Financial Modeling, DCF Valuation, and Business Reporting. Final-year BBA Finance student at Jagannath University with working familiarity in Excel, Power BI, SQL, and Python. Eager to support financial analysis, data preparation, and reporting workflows while gaining hands-on corporate experience under senior guidance.",
  tagline:
    "Final-year BBA Finance candidate with practical expertise in DCF equity valuation, 100K-trial Monte Carlo risk modeling, WACC analysis, and automated business reporting using Power BI, SQL, and Excel.",
  availability: "Actively Seeking 3-Month Finance Internship",
  typingWords: [
    "Finance Intern Candidate",
    "DCF Equity Valuation Specialist",
    "Financial Modeling & WACC Analysis",
    "Power BI & SQL Business Reporting",
    "BBA Final Year Student @ JnU"
  ],
  stats: [
    {
      value: "3.35",
      label: "JnU Versity CGPA",
      sublabel: "BBA in Finance (2023 - Present)"
    },
    {
      value: "100K",
      label: "Monte Carlo Trials",
      sublabel: "Robi Axiata Valuation Model"
    },
    {
      value: "7.70%",
      label: "Calculated WACC",
      sublabel: "DCF Share Value Modeling"
    },
    {
      value: "5.00",
      label: "HSC GPA (Golden)",
      sublabel: "Dhaka College Business Studies"
    }
  ]
};

export const competencyCategories = [
  {
    category: "Technical Skills",
    description: "Financial modeling frameworks, databases, and analytics suites",
    skills: [
      {
        name: "Financial Modeling & DCF",
        level: 90,
        icon: "Calculator",
        description: "5-year cash flow forecasting, WACC calculation, terminal value modeling, and equity valuation."
      },
      {
        name: "Microsoft Excel (Advanced)",
        level: 94,
        icon: "FileSpreadsheet",
        description: "Complex formulas (XLOOKUP, INDEX/MATCH), What-If sensitivity tables, DuPont analysis, and data cleanup."
      },
      {
        name: "Microsoft Power BI",
        level: 88,
        icon: "BarChart3",
        description: "Interactive executive dashboards, star-schema data modeling, and automated business KPI reporting."
      },
      {
        name: "SQL & Relational Databases",
        level: 84,
        icon: "Database",
        description: "Writing complex queries, aggregate joins, and structuring business datasets for analysis."
      },
      {
        name: "Python for Analytics",
        level: 80,
        icon: "Code",
        description: "Pandas/NumPy data manipulation, time-series financial analysis, and exploratory statistics."
      },
      {
        name: "Google Data Studio / Looker",
        level: 82,
        icon: "PieChart",
        description: "Custom web-based reporting, automated data sync, and commercial performance tracking."
      },
      {
        name: "MS Office Suite",
        level: 95,
        icon: "Layers",
        description: "PowerPoint pitch decks, professional Word executive documentation, and Outlook communication."
      }
    ]
  },
  {
    category: "Soft Skills",
    description: "Workplace execution, critical reasoning, and team dynamics",
    skills: [
      {
        name: "Analytical Thinking",
        level: 92,
        icon: "Brain",
        description: "Deconstructing complex financial statements, identifying cost drivers, and validating assumptions."
      },
      {
        name: "Collaboration & Teamwork",
        level: 90,
        icon: "Users",
        description: "Cross-functional synergy, collaborative academic projects, and peer problem-solving."
      },
      {
        name: "Business Communication",
        level: 88,
        icon: "Sparkles",
        description: "Translating quantitative model outputs into clear executive summaries and stakeholder slides."
      },
      {
        name: "Time Management",
        level: 91,
        icon: "Clock",
        description: "Structured workflow prioritization, meeting tight project deadlines, and maintaining data precision."
      },
      {
        name: "Quick Learner",
        level: 94,
        icon: "Compass",
        description: "Rapidly mastering new financial toolkits, analytical libraries, and enterprise software."
      }
    ]
  },
  {
    category: "Languages",
    description: "Multilingual capability for regional and international business",
    skills: [
      {
        name: "Bengali",
        level: 100,
        proficiency: "Native",
        icon: "Languages",
        description: "Native command across verbal, formal business, and technical documentation."
      },
      {
        name: "English",
        level: 88,
        proficiency: "Professional Working Proficiency",
        icon: "Globe",
        description: "Professional capability in corporate reporting, presentations, and financial analysis."
      },
      {
        name: "Hindi",
        level: 75,
        proficiency: "Spoken",
        icon: "Languages",
        description: "Comfortable spoken communication for cross-regional business interaction."
      }
    ]
  }
];

export const focusAreas = [
  "Discounted Cash Flow (DCF) Equity Valuation",
  "100,000-Trial Monte Carlo Risk Simulation",
  "Weighted Average Cost of Capital (7.70% WACC)",
  "Altman Z-Score Financial Distress Modeling",
  "Power BI Dashboard Design & Automated ETL",
  "SQL Relational Queries for Large Business Data",
  "Unit Economics & Zero-Inventory Working Capital",
  "Python for Financial Data & Statistical Analysis"
];

export const projects = [
  {
    id: "robi-axiata-valuation",
    title: "Financial Valuation of Robi Axiata Ltd.",
    company: "Robi Axiata Ltd.",
    category: "Equity Valuation & Risk Modeling",
    badge: "Featured Valuation",
    sector: "Telecommunications",
    metric: "7.70% WACC",
    metricLabel: "100K-Trial Monte Carlo Simulation",
    accent: "from-red-600 via-rose-600 to-amber-600",
    summary:
      "Comprehensive equity valuation, 6-year historical financial analysis, bankruptcy probability assessment, and multi-variable risk simulation for one of Bangladesh's leading telecom operators.",
    bulletPoints: [
      "Performed a complete DCF equity valuation, historical financial and bankruptcy analysis, and 100,000-trial Monte Carlo risk modeling for Robi Axiata Ltd.",
      "Analyzed 6-year financial performance, calculated a 7.70% WACC to model DCF share value, and tested market uncertainty via sensitivity and simulation analysis.",
      "Evaluated Robi Axiata's intrinsic share price and financial health using 5-year DCF forecasting, Altman Z-scores, and multi-variable risk simulations."
    ],
    technologies: [
      "DCF Valuation",
      "Monte Carlo Simulation",
      "7.70% WACC",
      "Altman Z-Score",
      "Excel Modeling",
      "Sensitivity Matrix"
    ],
    details: {
      overview:
        "This project models the intrinsic equity value of Robi Axiata Ltd. by combining rigorous fundamental analysis with probabilistic risk assessment. Using six years of historical audited financial statements, the study projected 5-year Free Cash Flow to Firm (FCFF) and conducted a 100,000-run Monte Carlo simulation to evaluate price distribution under macroeconomic volatility.",
      methodology: [
        "Historical Ratio & Trend Analysis across 6 fiscal years covering EBITDA margin, ROIC, and capital expenditure cycles.",
        "Cost of Capital (WACC) calculation benchmarked at 7.70%, incorporating country risk premium, beta estimation, and capital structure debt weighting.",
        "5-Year Free Cash Flow to Firm (FCFF) projections with normalized reinvestment rates and terminal growth assumptions.",
        "Altman Z-Score computation to assess balance sheet solvency and bankruptcy buffer.",
        "100,000-iteration Monte Carlo simulation stress-testing revenue growth, subscriber ARPU, and discount rate variance."
      ],
      keyFindings: [
        "Determined intrinsic DCF share value and compared against prevailing Dhaka Stock Exchange (DSE) trading levels.",
        "Sensitivity analysis highlighted that EBITDA margin shifts have 2.3x higher price impact than discount rate fluctuations within +/- 50 bps.",
        "Altman Z-score positioned Robi in a stable financial safety zone with robust debt-service capability."
      ]
    },
    liveUrl: "mailto:rafatullah.r.h@gmail.com?subject=Inquiry%20regarding%20Robi%20Axiata%20Valuation%20Model",
    liveLabel: "Request Model & Report",
    repoUrl: "https://mdrafatullah.github.io"
  },
  {
    id: "fabrilife-market-analysis",
    title: "E-Business Model & Market Analysis of Fabrilife",
    company: "Fabrilife",
    category: "Commercial Strategy & Unit Economics",
    badge: "E-Commerce Strategy",
    sector: "D2C Apparel & Print-on-Demand",
    metric: "Zero-Inventory",
    metricLabel: "Working Capital & Margin Structure",
    accent: "from-emerald-600 via-teal-600 to-cyan-600",
    summary:
      "Strategic evaluation of Fabrilife's print-on-demand e-business model, analyzing creator monetization, supply chain cost drivers, last-mile logistics, and institutional B2B scaling.",
    bulletPoints: [
      "Evaluated Fabrilife's print-on-demand (POD) revenue model, analyzing gross margin structures, creator commission payouts, and zero-inventory working capital efficiency.",
      "Analyzed unit economics and operational supply chain risks, identifying critical cost drivers in domestic last-mile logistics partnerships and blank garment sourcing.",
      "Formulated data-driven strategic recommendations for institutional B2B bulk orders, fulfillment automation, and digital payment scalability."
    ],
    technologies: [
      "Unit Economics",
      "Gross Margin Analysis",
      "Working Capital",
      "Supply Chain Risk",
      "B2B Scalability",
      "Market Analysis"
    ],
    details: {
      overview:
        "An in-depth commercial analysis of Fabrilife's on-demand manufacturing and consumer apparel platform. The study uncovers how a zero-inventory print-on-demand business model minimizes working capital tie-up while managing production bottlenecks and courier fulfillment overheads.",
      methodology: [
        "Unit economics decomposition across blank garment procurement, direct printing overhead, creator royalties, and courier delivery fee structures.",
        "Working capital cycle assessment showing how on-demand fulfillment eliminates finished-goods inventory carrying costs.",
        "Operational supply chain risk auditing: domestic blank fabric volatility, seasonal demand spikes, and courier return/refusal rates (COD risks).",
        "Formulation of enterprise B2B sales playbook to capture predictable recurring corporate and institutional merchandise revenue."
      ],
      keyFindings: [
        "Identified last-mile cash-on-delivery (COD) refusal as the single largest operational margin leakage.",
        "Demonstrated that automated fulfillment routing and tiered B2B corporate contracting can expand blended gross margins by 4.2%."
      ]
    },
    liveUrl: "mailto:rafatullah.r.h@gmail.com?subject=Inquiry%20regarding%20Fabrilife%20Market%20Analysis",
    liveLabel: "Discuss Case Study",
    repoUrl: "https://mdrafatullah.github.io"
  },
  {
    id: "powerbi-executive-dashboard",
    title: "Business Analytics & Automated Reporting Workflows",
    company: "HDNB Bootcamp Capstone",
    category: "Business Intelligence & ETL",
    badge: "BI & Data Analytics",
    sector: "Enterprise Analytics",
    metric: "Interactive BI",
    metricLabel: "Relational SQL & Automated Dashboards",
    accent: "from-blue-600 via-indigo-600 to-sky-500",
    summary:
      "End-to-end business intelligence pipeline developed during the HDNB Data Analytics Career Bootcamp, transforming raw relational datasets into interactive Power BI executive reporting dashboards.",
    bulletPoints: [
      "Built interactive Power BI dashboards, automated reporting workflows, and applied SQL queries to extract and structure large business datasets.",
      "Designed dynamic DAX measures calculating Year-over-Year (YoY) revenue variance, customer acquisition efficiency, and product segment profitability.",
      "Engineered automated data refresh pipelines bridging multi-table relational databases and Excel data layers for real-time managerial visibility."
    ],
    technologies: [
      "Power BI",
      "Relational SQL",
      "DAX Measures",
      "Automated ETL",
      "Data Studio",
      "Excel Automation"
    ],
    details: {
      overview:
        "Developed as part of the rigorous Human Development Network Bangladesh (HDNB) Data Analytics Career Bootcamp. The project translates raw transactional databases into actionable executive-level decision dashboards.",
      methodology: [
        "Structured multi-table star schema models combining sales, inventory, and customer demographic dimensions.",
        "Wrote complex SQL queries utilizing GROUP BY, window functions, and multi-table JOINs to aggregate millions of transaction records.",
        "Created dynamic DAX formulas for rolling averages, KPI gauges, and drill-through cohort analysis.",
        "Streamlined scheduled report delivery to minimize recurring managerial preparation hours."
      ],
      keyFindings: [
        "Automated 80%+ of repetitive manual reporting tasks using SQL extraction and Power BI scheduled refreshes.",
        "Delivered granular visibility into product-level contribution margins and regional revenue concentrations."
      ]
    },
    liveUrl: "mailto:rafatullah.r.h@gmail.com?subject=Inquiry%20regarding%20Power%20BI%20Dashboards",
    liveLabel: "Request Dashboard Demo",
    repoUrl: "https://mdrafatullah.github.io"
  },
  {
    id: "financial-modeling-toolkit",
    title: "Dynamic 3-Statement Modeling & Valuation Suite",
    company: "Academic & Corporate Finance Practice",
    category: "Quantitative Financial Analysis",
    badge: "Financial Engineering",
    sector: "Corporate Finance",
    metric: "3-Statement",
    metricLabel: "Linked Financial Model & Scenario Analysis",
    accent: "from-violet-600 via-purple-600 to-indigo-600",
    summary:
      "Fully integrated 3-statement financial modeling system linking Income Statement, Balance Sheet, and Cash Flow with dynamic scenario managers and capital budgeting evaluation.",
    bulletPoints: [
      "Constructed dynamically linked 3-statement financial models with automated circularity checks, debt schedules, and working capital schedules.",
      "Integrated What-If two-variable sensitivity matrices assessing NPV, IRR, and payback periods across base, upside, and downside economic cases.",
      "Applied Python for financial data manipulation, exploratory trend visualization, and automated data validation."
    ],
    technologies: [
      "3-Statement Linking",
      "Scenario Manager",
      "NPV & IRR",
      "Python for Analytics",
      "DuPont Analysis",
      "Capital Budgeting"
    ],
    details: {
      overview:
        "A robust financial modeling template built to evaluate corporate investment decisions, M&A viability, and organic growth trajectories under varying interest rate and demand environments.",
      methodology: [
        "Full synchronization of operating assumptions, working capital schedules, depreciation waterfalls, and revolving credit facilities.",
        "Scenario switcher toggling between Base Case, Bull Case, and Bear Case with automatic recalculation of Free Cash Flows.",
        "DuPont 3-tier and 5-tier decomposition separating operating efficiency, asset productivity, and financial leverage.",
        "Python automation scripts for batch loading historical income statements and computing statistical metrics."
      ],
      keyFindings: [
        "Provides plug-and-play evaluation for capital expenditure feasibility, ensuring debt covenants remain intact under stress scenarios."
      ]
    },
    liveUrl: "mailto:rafatullah.r.h@gmail.com?subject=Inquiry%20regarding%20Financial%20Modeling%20Toolkit",
    liveLabel: "Request Financial Model",
    repoUrl: "https://mdrafatullah.github.io"
  }
];

export const education = [
  {
    institution: "Jagannath University",
    location: "Dhaka, Bangladesh",
    degree: "Bachelor of Business Administration (BBA) in Finance",
    period: "2023 - Present",
    status: "Final Year Candidate",
    result: "3.35 / 4.00 CGPA",
    highlights: [
      "Majoring in Corporate Finance, Investment Analysis, Financial Institutions & Markets, and Financial Modeling.",
      "Conducting extensive real-world company valuations including Robi Axiata Ltd. DCF equity analysis.",
      "Maintaining strong academic standing (3.35 CGPA) while mastering modern quantitative toolkits (Power BI, SQL, Python)."
    ]
  },
  {
    institution: "Dhaka College",
    location: "Dhaka, Bangladesh",
    degree: "Higher Secondary Certificate (HSC) - Business Studies",
    period: "2019 - 2020",
    status: "Completed",
    result: "5.00 / 5.00 GPA (Golden)",
    highlights: [
      "Achieved highest possible grade (GPA 5.00 / 5.00) in Business Studies curriculum.",
      "Specialized in Accounting, Business Organization & Management, Finance & Banking, and Economics.",
      "Built a solid foundation in accounting principles, balance sheet mechanics, and commercial law."
    ]
  }
];

export const certifications = [
  {
    title: "Data Analytics Career Bootcamp",
    issuer: "Human Development Network Bangladesh (HDNB)",
    status: "Certified",
    period: "Completed",
    badge: "Professional Certification",
    keyModules: [
      "Advanced Excel (Modeling, Dynamic Arrays, Financial Functions)",
      "Microsoft Power BI (Data Modeling, Interactive Dashboards, DAX)",
      "Relational Databases (SQL Queries, Multi-table Joins, Aggregations)",
      "Python for Analytics (Pandas, NumPy, Exploratory Data Analysis)",
      "AI-Driven Workflow Automation (AI tools for accelerated business research)"
    ],
    practicalApplication:
      "Built interactive Power BI dashboards, automated reporting workflows, and applied SQL queries to extract and structure large business datasets."
  }
];

export const reference = {
  name: "Sk. Alamgir Hossain",
  title: "Assistant Professor, Department of Finance",
  organization: "Jagannath University",
  email: "alamgir@fin.jnu.ac.bd",
  phone: "+88 01711246101"
};

export const socialLinks = [
  {
    label: "Email",
    value: "rafatullah.r.h@gmail.com",
    href: "mailto:rafatullah.r.h@gmail.com",
    icon: "Mail"
  },
  {
    label: "Phone",
    value: "+8801882222669",
    href: "tel:+8801882222669",
    icon: "Phone"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mdrafatullah",
    href: "https://linkedin.com/in/mdrafatullah",
    icon: "Linkedin"
  },
  {
    label: "Portfolio",
    value: "mdrafatullah.github.io",
    href: "https://mdrafatullah.github.io",
    icon: "Globe"
  },
  {
    label: "Location",
    value: "Shaympur, Dhaka-1203",
    href: "https://www.google.com/maps/search/Shaympur,+Dhaka-1203",
    icon: "MapPin"
  }
];
