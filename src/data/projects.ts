export interface ProjectEntry {
  id?: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  links?: { label: string; url: string }[];
}

export const projects: ProjectEntry[] = [
  {
    title: "Distributed ML Training",
    description:
      "Cloud-based distributed training setup using PyTorch DDP to train an MNIST CNN across multiple GCE VMs, with experiment tracking, model registry, and a web inference endpoint.",
    highlights: [
      "2-node distributed training (master + worker) with torchrun",
      "Metrics and hyperparams logged to Vertex AI Experiments",
      "Trained models uploaded to GCS and Vertex AI Model Registry",
      "Inference API on Cloud Run with auth; provisioned via Terraform",
    ],
    tech: [
      "PyTorch DDP",
      "Vertex AI",
      "GCP",
      "Terraform",
      "FastAPI",
      "Cloud Run",
      "Docker",
      "uv",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/thomas-decloedt/distributed-training",
      },
    ],
  },
  {
    id: "legal-paraphrase-mining",
    title: "Legal Paraphrase Mining",
    description:
      "Mining paraphrase pairs from legal text for semantic search and document comparison. BM25 sparse retrieval with dense embedding verification; quality heuristic balances semantic similarity and lexical diversity.",
    highlights: [
      "BM25 + Qdrant for candidate retrieval; Jina v3 dense embeddings for final verification",
      "~99K mined EN–DE pairs (semantic sim > 0.9) and ~362K synthetic cross-lingual pairs",
      "Keyword extraction, stemming (NLTK), synonym expansion (WordNet/OdeNet), entity filter",
    ],
    tech: [
      "Qdrant",
      "FastEmbed (BM25)",
      "Jina Embeddings v3",
      "NLTK",
      "Python",
      "uv",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/thomas-decloedt/legal-paraphrase-mining",
      },
    ],
  },
  {
    title: "Foosball Rating Tracker",
    description:
      "Full-stack foosball rating system on Cloudflare. Uses OpenSkill for multiplayer team-based rating (1v1, 1v2, 2v2).",
    highlights: [
      "Real-time leaderboard, match history, player profiles, seasons",
      "Position-specific ratings (defense, attack, solo)",
      "OpenSkill rating for 1v1, 1v2, and 2v2 matches",
    ],
    tech: [
      "Cloudflare Workers",
      "Hono",
      "React",
      "Vite",
      "PostgreSQL",
      "Drizzle",
      "OpenSkill",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/thomas-decloedt/foosball-rating-tracker",
      },
    ],
  },
  {
    title: "Voice Agent",
    description:
      "HR application with adversarial role-playing voice agent for conversation preparation.",
    highlights: [
      "Technical lead in 3-person team; full-stack with Vue",
      "OpenAI Realtime Voice API integrated with LangGraph",
      "Cloud deployment and CI/CD pipelines",
    ],
    tech: [
      "Vue",
      "Vite",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "WebSockets",
      "OpenAI Realtime API",
      "LangGraph",
      "Docker",
      "GitLab CI",
    ],
  },
  {
    id: "molab",
    title: "Mo-Lab (Master's Thesis)",
    description:
      "Interactive model reporting and analysis in openCAESAR through Natural Language Processing and SPARQL integration. RAG-based text-to-SPARQL with domain adaptation for Model-Based Systems Engineering.",
    highlights: [
      "Research presented to NASA JPL at onto Nexus Forum 2025",
      "RAG model with domain adaptation and synthetic data generation",
      "Training and evaluation infrastructure on AWS",
    ],
    tech: [
      "Python",
      "PyTorch",
      "RAG",
      "GNNs",
      "LLM Fine-tuning",
      "QLoRA",
      "Synthetic Data",
      "SPARQL",
      "RDF",
      "Ontology",
      "Knowledge Graphs",
      "Domain Adaptation",
      "Jupyter",
      "AWS",
      "Flask",
    ],
    links: [
      {
        label: "Thesis (PDF)",
        url: "https://github.com/thomas-decloedt/molab-thesis/raw/main/main.pdf",
      },
      {
        label: "GitHub",
        url: "https://github.com/thomas-decloedt/molab-thesis",
      },
      {
        label: "NASA JPL presentation (onto Nexus Forum 2025)",
        url: "https://www.opencaesar.io/events/onto-Nexus-Forum-2025/Talk-18",
      },
    ],
  },
];
