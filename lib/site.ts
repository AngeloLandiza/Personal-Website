export const site = {
  name: "Angelo Francis Landiza",
  shortName: "Angelo Landiza",
  role: "Software Engineer",
  tagline: "Software engineer building AI-powered systems",
  location: "Chicago, IL",
  email: "angelofrancislandiza@gmail.com",
  github: "https://github.com/AngeloLandiza",
  linkedin: "https://www.linkedin.com/in/angelo-landiza/",
  resume: "/Angelo-Landiza-Resume.pdf",
  // Custom domain (used for SEO metadata, sitemap, and robots).
  url: "https://alandiza.tech",
  description:
    "Software Engineer Intern at Morningstar building LLM-powered rule pipelines, full-stack RAG platforms, and auto-scaling AWS infrastructure. Data Science student at the University of Illinois Chicago.",
};

export const hero = {
  intro: [
    `I'm a Software Engineer Intern at Morningstar, where I build full-stack
    RAG platforms, auto-scaling AWS infrastructure, and LLM pipelines — including
    the production rewrite of an AI rule builder that turns analysts'
    plain-English data-quality rules into executable configs.`,
    `I study Data Science with a Computer Science concentration at the
    University of Illinois Chicago — and I've been shipping software since my
    FRC robotics days, from reinforcement-learning robots to production
    document-extraction pipelines.`,
  ],
};

export type Role = {
  company: string;
  companyUrl?: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "Morningstar",
    companyUrl: "https://www.morningstar.com",
    title: "Software Engineer Intern",
    period: "Mar 2026 — Present",
    location: "Chicago, IL",
    bullets: [
      "Own the production v2 rewrite of the team's AI rule builder, which turns analysts' plain-English data-quality rules into executable rule configs through a five-stage pipeline: the LLM only proposes structure, gated by verbatim evidence grounding, registry type-checks, deterministic compilation, and human resolution of ambiguous datapoints.",
      "Built its evaluation harness, grading LLM output by semantic equivalence to hand-parsed ground truth and requiring refusal on underspecified prompts, with per-call cost accounting and SSM-backed secrets handling.",
      "Architected auto-scaling AWS infrastructure (CDK, Fargate, ALB) for a full-stack RAG chatbot, with DynamoDB powering real-time user sessions and low-latency LLM context retrieval.",
      "Ship UI features and REST APIs for Illume 2.0, a modular RAG document-extraction platform serving 2,000+ non-technical users across 5 global offices.",
      "Cut data-collection turnaround from a ~5-week manual JSON build-and-test cycle to under a minute with UI-driven pipeline configuration, across 1,000+ financial documents per workflow.",
      "Co-developed a proposed investment-quality metric and built its prototype — presented to the CEO, CTO, and senior leadership, now in company-wide research for implementation.",
      "Engineered the core logic of a regression-testing suite (CDK + SQS) that batch-queues pipeline runs and computes recall and F1 across variants to drive improvements.",
      "Built and debugged Harness CI/CD pipelines deploying to Kubernetes for staging and production releases, and a New Relic performance dashboard for Illume Studio tracking p50/p95 page load, API latency and failure rate, and JS errors.",
    ],
    stack: [
      "Python",
      "TypeScript",
      "AWS CDK",
      "DynamoDB",
      "ECS Fargate",
      "Kubernetes",
      "RAG · LLM",
      "New Relic",
    ],
  },
  {
    company: "CPS Office of Computer Science",
    title: "Lead Summer Robotics Programming Intern",
    period: "Jun 2025 — Jul 2025",
    location: "Chicago, IL",
    bullets: [
      "Directed a high-school robotics internship, assigning 17 students to projects optimizing FRC and FTC robot performance.",
    ],
    stack: ["Java", "Python", "OpenCV", "WPILib"],
  },
  {
    company: "CPS Office of Computer Science",
    title: "Summer Robotics Programming Intern",
    period: "Jun 2023 — Jul 2024",
    location: "Chicago, IL",
    bullets: [
      "Built Java software with the WPILib framework for an autonomous swerve-drive FRC robot.",
      "Constructed a neural network from scratch in Python.",
    ],
    stack: ["Java", "WPILib", "Python"],
  },
];

export type Project = {
  title: string;
  period: string;
  description: string;
  highlights?: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Revenue Segment Extraction Platform",
    period: "2026",
    description:
      "Retrieval-augmented extraction system for annual-report and 10-K PDFs, built for Fitch in partnership with three finance students and presented to company representatives.",
    highlights: [
      "Parses PDFs deterministically, ranks revenue-relevant pages, and sends structured context to an LLM.",
      "Validates every extracted row against strict Pydantic schemas behind an approval-gated analyst review flow.",
      "Scales horizontally via ECS Fargate task parallelism, with CSV, XLSX, and audit-JSON export.",
    ],
    stack: ["Python", "LLM · RAG", "Pydantic", "Streamlit", "ECS Fargate"],
    link: "https://github.com/AngeloLandiza/Revenue-Segment-Extraction-Platform",
  },
  {
    title: "Fully Autonomous FRC Robot",
    period: "2022 — 2024",
    description:
      "Reinforcement-learning system for autonomous robot navigation on a competition swerve-drive robot.",
    highlights: [
      "Trained a PyTorch RL agent that achieved a sub-2-second average game-piece intake.",
      "Engineered a custom OpenAI Gymnasium environment simulating robot dynamics and sensor data, with MuJoCo physics and PPO training.",
    ],
    stack: ["PyTorch", "Gymnasium", "MuJoCo", "Reinforcement Learning"],
    link: "https://github.com/AngeloLandiza/FRCGameEnvRLProject",
  },
  {
    title: "T.A.U.I — Train & Uber Integration",
    period: "2023",
    description:
      "Submission to Uber's 2023 Global Hackathon: a web app that plans multimodal routes by pairing train lines with Uber rides.",
    highlights: [
      "Finds the most convenient stations for origin and destination, then plans the route with the Google Maps API.",
      "Generates pre-filled Uber deep links for the first- and last-mile legs — no manual destination entry.",
    ],
    stack: ["Python", "Flask", "Google Maps API", "JavaScript"],
    link: "https://github.com/AngeloLandiza/T.A.U.I-Train-And-Uber-Integration",
  },
  {
    title: "Retail Arbitrage Scraper",
    period: "2025",
    description:
      "Locally-run, API-key-free tool that finds profitable retail arbitrage opportunities across major retailers.",
    highlights: [
      "Scrapes clearance listings from Walmart, Target, and Walgreens with Playwright browser automation.",
      "Matches items against Amazon pricing with price-aware heuristics, then scores ROI with rule-based buy/review/avoid recommendations.",
    ],
    stack: ["Node.js", "Express", "Playwright", "SQLite"],
    link: "https://github.com/AngeloLandiza/Retail-Arb-Scraper",
  },
];

export const roboticsProjects: Project[] = [
  {
    title: "AutoPID",
    period: "Python",
    description:
      "Automated PID-tuning lab comparing genetic algorithms, reinforcement learning, and heuristic methods against simulated motors.",
    stack: [],
    link: "https://github.com/AngeloLandiza/AutoPID",
  },
  {
    title: "FTCYOLOV8",
    period: "Python",
    description:
      "YOLOv8 object-detection training pipeline for FTC game elements, exported to TFLite and ONNX for on-robot inference.",
    stack: [],
    link: "https://github.com/AngeloLandiza/FTCYOLOV8",
  },
  {
    title: "LIDARswerveRL",
    period: "Python",
    description:
      "LIDAR-driven swerve-drive reinforcement-learning experiments, including multi-agent training environments.",
    stack: [],
    link: "https://github.com/AngeloLandiza/LIDARswerveRL",
  },
  {
    title: "4787 SwerveBase",
    period: "Java",
    description:
      "Competition swerve drivetrain codebase for FRC Team 4787 Axiom, built on WPILib.",
    stack: [],
    link: "https://github.com/AngeloLandiza/4787SwerveBase",
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "Java", "C/C++", "C#", "Lua"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["AWS CDK", "PyTorch", "TensorFlow", "OpenCV", "WPILib", "React", "Next.js"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["AWS", "DynamoDB", "S3", "SQS", "ECS", "ECR", "ALB", "Kubernetes"],
  },
  {
    label: "Tools",
    items: ["Git", "Jira", "Bitbucket", "Harness", "New Relic", "Postman"],
  },
  {
    label: "Architectures & Methods",
    items: ["REST APIs", "RAG", "CI/CD", "Agile (Scrum)"],
  },
];

export const education = {
  school: "University of Illinois Chicago",
  degree: "B.S. in Data Science, Computer Science concentration",
  period: "Expected May 2028",
  location: "Chicago, IL",
};

export const leadership = {
  org: "High School FRC Programming Team",
  title: "Team Lead & Mentor",
  period: "2022 — 2025",
  bullets: [
    "Mentored 12 programmers on project protocols and best practices, managing code contributions through Git and in-person reviews.",
    "Developed simulations for fully autonomous and semi-autonomous FRC swerve-drive systems.",
  ],
};

export const contact = {
  heading: "Get in touch",
  body: `I'm always happy to talk about software engineering, AI systems,
  robotics, or opportunities to build something great together. The fastest
  way to reach me is email.`,
};
