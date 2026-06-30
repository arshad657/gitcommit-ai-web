import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "gitcommit-ai — AI-powered Git commit messages",
    template: "%s | gitcommit-ai",
  },
  description:
    "Generate meaningful Git commit messages in seconds using AI. A lightweight CLI tool powered by Google Gemini.",
  keywords: ["git", "commit", "ai", "cli", "gemini", "developer tools"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gitcommit.ai",
    siteName: "gitcommit-ai",
    title: "gitcommit-ai — AI-powered Git commit messages",
    description:
      "Generate meaningful Git commit messages in seconds using AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "gitcommit-ai — AI-powered Git commit messages",
    description:
      "Generate meaningful Git commit messages in seconds using AI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
