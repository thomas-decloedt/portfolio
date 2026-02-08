export interface ExperienceEntry {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  content: Array<{ text: string; links?: { label: string; url: string }[] }>;
  tech?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Jurimesh",
    companyUrl: "https://www.linkedin.com/company/jurimesh",
    role: "AI Engineer",
    period: "April 2025 – present",
    content: [
      {
        text: "I lead Jurimesh's contract comparison feature end-to-end, enabling M&A, PE, and legal teams to compare large sets of contracts in minutes instead of days. The system highlights high-level deal risks as well as paragraph-level differences, supporting both strategic due diligence and detailed legal review.",
      },
      {
        text: "My work spans the full product lifecycle: working closely with clients to understand workflows, researching and validating technical approaches, shipping production-ready MVPs, and owning the feature in production. The contract comparison system combines retrieval with targeted LLM analysis and task-specific processing to balance quality with scalability, and was featured in Jurimesh's launch video and blog post.",
        links: [
          {
            label: "Launch video",
            url: "https://www.linkedin.com/posts/endless-hours-looking-for-that-one-deviation-ugcPost-7414276311189487617-5tSL/",
          },
          {
            label: "Blog post",
            url: "https://jurimesh.com/blog/contract-compare",
          },
        ],
      },
      {
        text: "Beyond contract comparison, I designed Jurimesh's domain-specific chunking and document structuring pipeline for legal text, significantly improving retrieval quality across chat and comparison workflows while handling bursty workloads and highly variable document structures.",
      },
      {
        text: "On the ML side, I fine-tuned multilingual clause classifiers and built robust retrieval-augmented generation (RAG) pipelines, with offline evaluation, automated regression testing, and LLM-as-a-judge pipelines to monitor and improve prompt and retrieval quality.",
      },
      {
        text: "From an engineering perspective, I work across the stack: building distributed async worker systems for LLM workloads, production APIs, and real-time client features. This includes LLMOps, evaluation tooling, and production observability.",
      },
    ],
    tech: [
      "Python",
      "React",
      "TypeScript",
      "Vite",
      "Fastify",
      "PostgreSQL",
      "Drizzle",
      "Atlas",
      "Redis",
      "WebSockets",
      "GCP",
      "Vertex AI",
      "Qdrant",
      "Rust",
      "Kubernetes",
    ],
  },
  {
    company: "TechWolf",
    companyUrl: "https://www.linkedin.com/company/techwolf/",
    role: "Data Science Intern",
    period: "Summer 2023",
    content: [
      {
        text: "Time-series analysis, forecasting, and change point detection for emerging skills in vacancy data.",
      },
    ],
    tech: ["Python", "pandas", "scikit-learn"],
  },
  {
    company: "Sigasi",
    companyUrl: "https://www.linkedin.com/company/sigasi/",
    role: "Software Engineering Intern",
    period: "Summer 2022",
    content: [
      {
        text: "Developed Java-based software solutions; gained exposure to software engineering best practices.",
      },
    ],
    tech: ["Java", "GitLab"],
  },
];
