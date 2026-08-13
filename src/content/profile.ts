/**
 * Single source of truth for every piece of content on this site.
 * Edit here; the pages read from these exports and hold no prose of their own.
 *
 * Mirrors the CV in public/ABB_Muhaimeen_CV.pdf — keep the two in step.
 */

export const profile = {
  name: "Abb Muhaimeen",
  headline: "B.S. Software Engineering, University of Dhaka",
  affiliation: "Institute of Information Technology, University of Dhaka",
  location: "Dhaka, Bangladesh",
  email: "bsse1423@iit.du.ac.bd",
  phone: "+880 1815 890998",
  photo: "profile.jpg",
  links: {
    github: "https://github.com/muhaimeen90",
    githubLabel: "muhaimeen90",
    linkedin: "https://linkedin.com/in/muhaimeen-alam",
    linkedinLabel: "muhaimeen-alam",
    devPortfolio: "https://muhaimeen-portfolio.vercel.app/",
    cv: "ABB_Muhaimeen_CV.pdf",
  },
  bio: [
    `I am a final-year undergraduate in the B.S. in Software Engineering programme at the
     University of Dhaka, concentrating in generative AI and software engineering and graduating in
     September 2026.`,
    `My research asks where large language models can take over work that currently falls to
     people, and how to tell when they have actually done it correctly. At the UIUC++ Summer
     Research Program I am building an agentic tool that writes Gherkin step definitions and repairs
     Page Object Models, removing the manual coding step that behaviour-driven development still
     demands. With the University of Alabama I am measuring how far small language models can be
     pushed on malware classification before the accuracy-versus-cost trade-off stops paying off.`,
    `Earlier work spans parameter-efficient fine-tuning for multimodal models, human–computer
     interaction research on educational technology, and production generative-AI and computer-vision
     systems built during an R&D internship at Streams Tech.`,
    `I am applying to graduate programmes and am looking for a group working on language models for
     software engineering, security, or the evaluation problems both raise.`,
  ],
};

export const researchInterests: { area: string; note: string }[] = [
  {
    area: "Language Models for Software Engineering",
    note: `Agentic systems that read a codebase and write the code around it — step definitions, page
           objects, test repair — and that iterate on their own failures rather than handing a
           developer a draft.`,
  },
  {
    area: "Machine Learning for Security",
    note: `Small language models for malware classification, and analysis tooling that explains what
           a sample does instead of returning a label, with behaviour traced to cited ATT&CK
           techniques.`,
  },
  {
    area: "Efficient and Multimodal Adaptation",
    note: `Parameter-efficient fine-tuning — LoRA, QLoRA and relatives — and how well those methods
           carry across modalities.`,
  },
  {
    area: "Human-Centred Evaluation",
    note: `Making automated systems legible to the people who must trust them, so that a
           non-technical stakeholder can confirm a requirement was met without a developer
           round-trip.`,
  },
];

export const education = [
  {
    institution: "University of Dhaka",
    unit: "Institute of Information Technology",
    degree: "B.S. in Software Engineering",
    location: "Dhaka, Bangladesh",
    period: "Expected September 2026",
    points: [
      "Concentrations: Generative AI and Software Engineering.",
      "GPA: 3.81 / 4.00.",
      `Related coursework: Artificial Intelligence, Software Requirements Specification & Analysis,
       Distributed Systems.`,
    ],
  },
];

export const researchExperience = [
  {
    group: "UIUC++ Summer Research Program",
    org: "University of Illinois Urbana-Champaign",
    role: "Remote Research Intern",
    advisors: "Advisors: Prof. Wing Lam, Prof. August Shi",
    period: "Jun 2026 — Present",
    points: [
      `Developing an LLM-based agentic tool that automatically implements Gherkin
       (Given/When/Then) step definitions and repairs Page Object Models, eliminating the manual
       coding step that behaviour-driven development workflows currently require of developers.`,
      `Designed an agent loop with tool support that explores the existing codebase — page objects,
       fixtures, XPaths — synthesises the step-definition implementation, executes the resulting
       tests, and iterates on failures.`,
      `Integrated automated screenshot capture of executed scenarios so non-technical stakeholders
       can validate that a requirement was implemented correctly without a developer round-trip.`,
    ],
  },
  {
    group: "University of Alabama",
    org: null as string | null,
    role: "Remote Research Assistant",
    advisors: "Advisor: Dr. Rayhanur Rahman",
    period: "May 2026 — Present",
    points: [
      `Investigating how small language models perform on malware classification using the EMBER
       dataset.`,
      `Running controlled experiments across model scales and prompting strategies to quantify
       accuracy-versus-cost trade-offs against conventional ML baselines.`,
    ],
  },
  {
    group: "2025 Multimodal Parameter-Efficient Fine-Tuning Group",
    org: null,
    role: "Remote Research Intern",
    advisors: null as string | null,
    period: "Sep 2025 — Nov 2025",
    points: [
      `Collaborated with an international research group on parameter-efficient fine-tuning
       techniques.`,
      `Applied PEFT methods including LoRA and QLoRA and tested their adaptability across
       modalities.`,
    ],
  },
  {
    group: "IIT HCI Community",
    org: null,
    role: "Research Intern",
    advisors: null,
    period: "Sep 2024 — Jan 2025",
    points: [
      `Contributed to ongoing research projects in the human–computer interaction domain.`,
      `Assisted in conducting a literature review and focus group discussions for an HCI paper.`,
    ],
  },
];

export const industryExperience = [
  {
    org: "Streams Tech Ltd",
    role: "Research and Development Intern",
    period: "Oct 2025 — Mar 2026",
    points: [
      `Developed and deployed generative-AI modules for a production application, improving feature
       automation efficiency by 35% and reducing manual processing overhead.`,
      `Built computer vision pipelines for object detection and image analysis, increasing model
       accuracy by 12% and reducing inference latency by 25% through optimisation and preprocessing.`,
    ],
  },
];

export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string;
  status: "in-preparation" | "under-review" | "published";
  contribution: string;
  bibtex: string;
};

/** Nothing is listed here that does not exist — no invented titles or venues. */
export const publications: Publication[] = [
  {
    authors: "IIT HCI Community research group (incl. A. Muhaimeen)",
    title: "Manuscript on human–computer interaction in educational technology",
    venue: "Title and venue to be confirmed",
    year: "In preparation",
    status: "in-preparation",
    contribution: `Conducted focus group discussions and compiled the literature review situating
                   the study within prior HCI work on educational technology.`,
    bibtex: `@unpublished{muhaimeen_hci_edtech,
  author  = {IIT HCI Community research group},
  title   = {Manuscript on human--computer interaction in educational technology},
  note    = {In preparation},
  year    = {2026}
}`,
  },
];

export type Project = {
  title: string;
  note: string | null;
  period: string | null;
  summary: string;
  points: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Malware Copilot",
    note: "Advisor: Dr. Rayhanur Rahman",
    period: null,
    summary: `An AI-assisted malware analysis workbench that explains what a sample executable does
              rather than only classifying it, targeting the black-box behaviour and false-positive
              burden of existing ML detectors.`,
    points: [
      `Coupled Ghidra decompilation output with LLM reasoning to summarise and trace pseudocode
       behaviour for analysts.`,
      `Implemented a RAG pipeline over a MITRE ATT&CK vector database that maps observed behaviour
       to technique IDs with cited justifications, rendered on an ATT&CK Navigator-style heatmap.`,
      `Added function-level code embedding similarity search against known malware corpora to flag
       risky samples and surface the closest matching malware family.`,
    ],
    stack: ["Python", "Ghidra", "LLMs", "RAG", "Vector Search", "MITRE ATT&CK"],
    links: [],
  },
  {
    title: "CharityGuard",
    note: null,
    period: null,
    summary: `A decentralised Web3 charity platform that puts donation workflows on a public ledger
              so that giving can be audited end to end rather than taken on trust.`,
    points: [
      `Engineered the platform in Node.js and Next.js, integrating blockchain to secure donation
       workflows.`,
      `Deployed on the Polygon Amoy testnet using Hardhat, delivering an end-to-end working
       prototype.`,
    ],
    stack: ["Next.js", "Node.js", "Solidity", "Hardhat", "Polygon"],
    links: [{ label: "Source", href: "https://github.com/muhaimeen90/CharityGuard" }],
  },
  {
    title: "Connect Four",
    note: null,
    period: null,
    summary: `A Connect Four engine built around minimax search with tuned evaluation heuristics.`,
    points: [
      `Developed the game in Lua, integrating the minimax algorithm for intelligent move selection.`,
      `Improved AI performance by 25% by fine-tuning the evaluation heuristic for faster decisions.`,
    ],
    stack: ["Lua", "Minimax", "Heuristic Search"],
    links: [{ label: "Source", href: "https://github.com/muhaimeen90/ConnectFour" }],
  },
  {
    title: "CubeMate",
    note: null,
    period: null,
    summary: `A fully functional Rubik's Cube solver written in C++ during my freshman year without
              relying on external libraries.`,
    points: [
      `Implemented the complete solving algorithm from scratch, achieving 10% better performance
       than library functions.`,
    ],
    stack: ["C++", "Algorithm Design"],
    links: [{ label: "Source", href: "https://github.com/muhaimeen90/CubeMate" }],
  },
];

export const achievements = [
  {
    title: "Problem Setter, Bangladesh AI Olympiad (BDAIO)",
    detail: `Authored competitive problems for the national AI olympiad; one problem was selected
             for the regional round.`,
  },
  {
    title: "Codeforces Pupil",
    detail: "Maximum rating 1324.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Programming",
    items: [
      "Python",
      "Java",
      "C / C++",
      "SQL",
      "Node.js",
      "React.js",
      "Lua",
      "JavaScript / TypeScript",
      "HTML / CSS",
      "Solidity",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git / GitHub",
      "Linux / UNIX",
      "MySQL",
      "MongoDB",
      "Figma",
      "Jupyter Notebook",
      "Google Colab",
      "IntelliJ",
    ],
  },
];

/** Reverse-chronological, shown on the homepage. */
export const news = [
  { date: "Jun 2026", text: "Joined the UIUC++ Summer Research Program with Prof. Wing Lam and Prof. August Shi." },
  { date: "May 2026", text: "Began research on small language models for malware classification with Dr. Rayhanur Rahman, University of Alabama." },
  { date: "Mar 2026", text: "Completed the R&D internship at Streams Tech Ltd." },
  { date: "Nov 2025", text: "Concluded the multimodal parameter-efficient fine-tuning collaboration." },
  { date: "Oct 2025", text: "Joined Streams Tech Ltd as a Research and Development Intern." },
  { date: "Jan 2025", text: "Concluded the HCI research internship at the IIT HCI Community." },
];
