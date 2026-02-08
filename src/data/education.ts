export interface EducationEntry {
  institution: string;
  institutionUrl?: string;
  degree: string;
  period: string;
  highlights?: string[];
  tech?: string[];
  links?: { label: string; url: string }[];
}

export const education: EducationEntry[] = [
  {
    institution: "Ghent University",
    institutionUrl: "https://www.ugent.be/en",
    degree: "Master of Science in Engineering: Computer Science Engineering",
    period: "2022 – 2025",
    highlights: ["Graduated with distinction"],
    tech: [
      "Python",
      "PyTorch",
      "Natural Language Processing",
      "Machine Learning",
      "Financial Mathematics",
    ],
  },
  {
    institution: "Polytechnique Montréal",
    institutionUrl: "https://www.polymtl.ca/en",
    degree: "Erasmus exchange",
    period: "2023 – 2024",
    links: [
      {
        label: "Master's thesis (Mo-Lab)",
        url: "#project-molab",
      },
    ],
    tech: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Functional Analysis",
      "Reinforcement Learning",
    ],
  },
  {
    institution: "Ghent University",
    institutionUrl: "https://www.ugent.be/en",
    degree: "Bachelor of Science in Engineering: Computer Science Engineering",
    period: "2018 – 2022",
    tech: ["Python", "Java", "C", "C++"],
  },
];
