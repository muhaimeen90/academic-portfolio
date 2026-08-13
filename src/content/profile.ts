/**
 * Single source of truth for every piece of content on this site.
 * Edit here; the pages read from these exports and hold no prose of their own.
 *
 * Facts follow the CV PDF (public/Abb_Muhaimeen_CV.pdf) wherever it and the
 * older developer portfolio disagreed.
 */

export const profile = {
  name: "Abb Muhaimeen",
  affiliation: "Institute of Information Technology, University of Dhaka",
  location: "Dhaka, Bangladesh",
  email: "bsse1423@iit.du.ac.bd",
  phone: "+880 1815 890998",
  links: {
    github: "https://github.com/muhaimeen90",
    linkedin: "https://linkedin.com/in/muhaimeen-alam",
    cv: "Abb_Muhaimeen_CV.pdf",
  },
  /** Rendered as the \begin{abstract} block on the homepage. */
  abstract: [
    `I am a final-year undergraduate in the B.S. in Software Engineering programme at the
     Institute of Information Technology, University of Dhaka, graduating in September 2026.
     My work sits at the intersection of software engineering practice and empirical study of
     the people who use the systems we build.`,
    `Since September 2024 I have been a research intern with the IIT HCI Community, where I
     contribute to work on human–computer interaction in educational technology — conducting
     focus group discussions, synthesising literature, and helping shape study design. Alongside
     this I build systems end to end: a decentralised charity platform on Polygon, a distributed
     library service, and a Rubik's Cube solver written from first principles in C++.`,
    `I am applying to graduate programmes for admission in 2027 and am looking for a group where
     I can pursue rigorous, human-centred systems research.`,
  ],
};

/** Deliberately broad for now — to be narrowed once a target field is settled. */
export const researchInterests: { area: string; note: string }[] = [
  {
    area: "Human–Computer Interaction and Educational Technology",
    note: `How learners and instructors actually appropriate digital tools, and what qualitative
           methods — focus groups, contextual inquiry — reveal that usage logs do not.`,
  },
  {
    area: "Applied Machine Learning and Intelligent Systems",
    note: `Retrieval-augmented question answering, vector search over instructional content, and
           classical search techniques such as minimax with alpha–beta pruning.`,
  },
  {
    area: "Software Engineering and Distributed Systems",
    note: `Requirements engineering and specification, the monolith-to-microservices transition,
           and the reliability properties that decomposition gains and loses.`,
  },
  {
    area: "Decentralised Systems and Trust",
    note: `Smart-contract design for transparent, auditable resource flows, and what on-chain
           accountability does and does not guarantee in practice.`,
  },
];

export const education = [
  {
    institution: "University of Dhaka",
    unit: "Institute of Information Technology",
    degree: "B.S. in Software Engineering",
    detail: "GPA 3.71 / 4.00",
    location: "Dhaka, Bangladesh",
    period: "Sep 2022 — Sep 2026 (expected)",
    coursework: [
      "Data Structures & Algorithms",
      "Combinatorial Optimization",
      "Theory of Computation",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Distributed Systems",
      "Machine Learning",
      "Artificial Intelligence",
      "Software Architecture & System Design",
      "Software Requirements Specification & Analysis",
      "Software Testing",
    ],
  },
  {
    institution: "Rajuk Uttara Model College",
    unit: null,
    degree: "Higher Secondary Certificate",
    detail: "GPA 5.00 / 5.00",
    location: "Dhaka, Bangladesh",
    period: "Dec 2021",
    coursework: [],
  },
  {
    institution: "Rajuk Uttara Model College",
    unit: null,
    degree: "Secondary School Certificate",
    detail: "GPA 5.00 / 5.00",
    location: "Dhaka, Bangladesh",
    period: "Apr 2019",
    coursework: [],
  },
];

export const researchExperience = [
  {
    role: "Research Intern",
    group: "IIT HCI Community",
    groupUrl: null as string | null,
    location: "University of Dhaka",
    period: "Sep 2024 — Present",
    points: [
      `Contribute to ongoing research in human–computer interaction, with a current focus on
       technology use in educational settings.`,
      `Designed and moderated focus group discussions, then coded and synthesised the transcripts
       into findings for an in-preparation manuscript.`,
      `Assembled the literature review surveying prior HCI work on educational technology,
       positioning the study's contribution against it.`,
      `Prepare manuscript sections in LaTeX and maintain the shared bibliography.`,
    ],
    methods: ["Focus Group Discussions", "Qualitative Coding", "Literature Synthesis", "LaTeX"],
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

/**
 * Nothing is listed here that does not exist. The single entry below is a
 * manuscript in preparation; it carries no invented title or venue.
 */
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
  role: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "CharityGuard",
    role: "Team Lead",
    period: "Jan 2025 — Mar 2025",
    summary: `A decentralised charity platform that puts donation flows on a public ledger so that
              giving can be audited end to end rather than taken on trust.`,
    points: [
      `Built the application in Next.js and Node.js with smart contracts deployed via Hardhat to
       the Polygon Amoy testnet.`,
      `Implemented on-chain transaction history and performance monitoring, giving donors a
       verifiable record of where funds travelled.`,
      `Led a team through requirements, architecture, and delivery over a three-month cycle.`,
    ],
    stack: ["Next.js", "Node.js", "Solidity", "Hardhat", "Polygon", "MongoDB", "Express"],
    links: [{ label: "Source", href: "https://github.com/muhaimeen90/charityguard" }],
  },
  {
    title: "SciVerse LMS",
    role: "Software Developer",
    period: "2025",
    summary: `A learning management system for science education pairing instructor-authored
              lessons with a retrieval-augmented question-answering assistant.`,
    points: [
      `Indexed lesson content as embeddings in Pinecone so that student questions are answered
       from course material rather than from the model's parametric memory alone.`,
      `Implemented multi-role access control separating instructor authoring from student access.`,
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Pinecone", "Google AI"],
    links: [{ label: "Source", href: "https://github.com/muhaimeen90/sciverse-lms" }],
  },
  {
    title: "Smart Library — Distributed",
    role: "Software Developer",
    period: "May 2025",
    summary: `A library management system built to demonstrate, concretely, what changes when a
              monolith is decomposed into services.`,
    points: [
      `Decomposed a monolithic service into independently deployable microservices with their own
       data stores.`,
      `Containerised the system with Docker and placed an Nginx API gateway in front for load
       balancing, then measured the effect on resilience under partial failure.`,
    ],
    stack: ["Node.js", "SQLite", "Docker", "Nginx", "Microservices"],
    links: [{ label: "Source", href: "https://github.com/muhaimeen90/smart-library-distributed" }],
  },
  {
    title: "Connect Four — Adversarial Search",
    role: "Software Developer",
    period: "May 2025",
    summary: `A Connect Four engine implementing minimax with alpha–beta pruning across several
              difficulty levels.`,
    points: [
      `Implemented the search in Lua on the LÖVE framework, with difficulty exposed as search depth.`,
      `Tuned the heuristic evaluation function to cut decision latency while preserving play strength.`,
    ],
    stack: ["Lua", "LÖVE 2D", "Minimax", "Alpha–Beta Pruning"],
    links: [{ label: "Source", href: "https://github.com/T-T0ha/Connect-Four" }],
  },
  {
    title: "DU Estate Office Management — Requirements Specification",
    role: "Requirements Analyst",
    period: "Jan 2024 — Jun 2024",
    summary: `A full Software Requirements Specification for an estate management system proposed
              for the University of Dhaka, co-authored over two semesters.`,
    points: [
      `Produced scenario-based, class-based, and behavioural models of the proposed system in UML.`,
      `Designed the accompanying database schema and traced every requirement through to it.`,
    ],
    stack: ["UML", "Requirements Engineering", "Draw.io", "Lucidchart"],
    links: [
      {
        label: "Document",
        href: "https://docs.google.com/document/d/11MNaZ60gHub1uDNUQBNTqNY-lz3Jglg0Ye3AZFmBxEQ/edit?usp=sharing",
      },
    ],
  },
  {
    title: "CubeMate",
    role: "Software Developer",
    period: "Aug 2023 — Dec 2023",
    summary: `A Rubik's Cube solver written from scratch in C++ during my freshman year, following
              the layer-by-layer method.`,
    points: [
      `Wrote over 2,700 lines of C++ implementing the entire solving logic manually, as a
       self-imposed constraint against using any external library.`,
      `Added a 2D visualisation of cube state and support for custom move sequences.`,
    ],
    stack: ["C++", "graphics.h", "Algorithm Design"],
    links: [{ label: "Source", href: "https://github.com/muhaimeen90/cubemate" }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Programming Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript / TypeScript", "Lua", "SQL", "Solidity"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express", "Hardhat", "LÖVE 2D"],
  },
  {
    group: "Data & Infrastructure",
    items: ["MySQL", "MongoDB", "SQLite", "Pinecone", "Docker", "Nginx", "Linux / UNIX"],
  },
  {
    group: "Research & Authoring",
    items: [
      "LaTeX",
      "Focus Group Discussions",
      "Qualitative Coding",
      "Literature Review",
      "UML Modelling",
      "Jupyter / Google Colab",
    ],
  },
];

export const service = [
  {
    role: "Executive Member",
    organisation: "IIT Software Engineers' Community",
    period: "Sep 2022 — Present",
    points: [
      `Member of a 50+ student organisation that hosts industry seminars and nationwide technology
       events.`,
    ],
  },
];

export const awards = [
  {
    title: "Winner, Quarantine Short Film Fest 2020",
    body: "Prothom Alo",
    period: "Jul 2020",
    points: [
      `Authored the screenplay for a short film produced collaboratively with friends, selected as a
       winning entry in a nationwide competition.`,
    ],
  },
  {
    title: "Codeforces — Pupil",
    body: "Competitive Programming",
    period: "Max rating 1324",
    points: [],
  },
];

/** Reverse-chronological. Shown on the homepage. */
export const news = [
  { date: "Sep 2026", text: "Expected graduation, B.S. in Software Engineering, University of Dhaka." },
  { date: "May 2025", text: "Completed Smart Library (distributed) and the Connect Four search engine." },
  { date: "Mar 2025", text: "Delivered CharityGuard, a Polygon-based charity platform, as team lead." },
  { date: "Sep 2024", text: "Joined the IIT HCI Community as a research intern." },
  { date: "Jun 2024", text: "Co-authored the Software Requirements Specification for the DU Estate Office." },
  { date: "Sep 2022", text: "Began the B.S. in Software Engineering at the Institute of Information Technology." },
];
