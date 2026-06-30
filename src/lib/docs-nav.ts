export interface DocNavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface DocNavGroup {
  title: string;
  items: DocNavItem[];
}

export const docsNav: DocNavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Setup API Key", href: "/docs/setup" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "Commands & Flags", href: "/docs/commands" },
      { title: "API Key Guide", href: "/docs/api-key-guide" },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Playground",
        href: "/playground",
        badge: "Beta",
      },
      {
        title: "GitHub",
        href: "https://github.com/your-org/gitcommit-ai",
      },
    ],
  },
];

export const roadmap = [
  {
    version: "v1",
    label: "Current",
    title: "CLI Tool",
    description: "Core CLI with Gemini API integration and auto-commit.",
    status: "done" as const,
  },
  {
    version: "v2",
    label: "In Progress",
    title: "Website & Onboarding",
    description: "Documentation site, playground, and improved onboarding flow.",
    status: "active" as const,
  },
];
