import Link from "next/link";
import { ArrowRight, Package, Key, Terminal } from "lucide-react";
import { Callout } from "@/components/ui/Callout";
import { Badge } from "@/components/ui/Badge";

export const metadata = { title: "Introduction" };

const quickLinks = [
  {
    icon: Package,
    title: "Installation",
    desc: "Install the CLI globally via npm.",
    href: "/docs/installation",
  },
  {
    icon: Key,
    title: "Setup API Key",
    desc: "Configure your Gemini API key locally.",
    href: "/docs/setup",
  },
  {
    icon: Terminal,
    title: "Commands & Flags",
    desc: "All commands and flags reference.",
    href: "/docs/commands",
  },
];



// Fetch the version directly from npm registry
async function getNpmVersion(): Promise<string> {
  try {
    const res = await fetch("https://registry.npmjs.org/@arshad657/gitcommit-ai/latest", {
      next: { revalidate: 3600 } // Cache for 1 hour so it stays ultra-fast
    });
    const data = await res.json();
    return `v${data.version}`;
  } catch (error) {
    return "v1.0.0"; // Safe fallback if network drops
  }
}

export default async function DocsPage() {
  const version = await getNpmVersion();

  return (
    <article className="prose-docs max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="accent">{version}</Badge>
          <Badge variant="muted">Open Source</Badge>
        </div>
        <h1>Introduction</h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          gitcommit-ai is a lightweight CLI tool that uses Google Gemini to
          analyze your staged git diff and generate a meaningful, conventional
          commit message — instantly.
        </p>
      </div>

      <Callout variant="success" title="Quick start">
        Run{" "}
        <code>npm install -g @arshad657/gitcommit-ai</code> then{" "}
        <code>gitcommit init</code> to get started in under a minute.
      </Callout>

      {/* What is it */}
      <h2 id="what-is-it">What is gitcommit-ai?</h2>
      <p>
        Writing good commit messages takes time and mental energy. gitcommit-ai
        automates this by reading your staged changes and producing a commit
        message that follows the{" "}
        <a
          href="https://www.conventionalcommits.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conventional Commits
        </a>{" "}
        specification.
      </p>
      <p>
        The tool runs entirely on your machine. Your code diff is sent directly
        to the Gemini API using <strong>your own API key</strong> — no
        intermediary servers, no data retention.
      </p>

      {/* Quick links */}
      <h2 id="getting-started">Getting started</h2>
      <div className="grid sm:grid-cols-3 gap-3 not-prose mb-6">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="p-4 rounded-lg border border-border bg-surface hover:border-accent/30 hover:bg-surface-2 transition-colors group"
          >
            <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent/15 transition-colors">
              <link.icon className="w-3.5 h-3.5 text-accent" />
            </div>
            <p className="text-text-primary text-sm font-semibold  mb-1">
              {link.title}
            </p>
            <p className="text-text-muted text-xs leading-relaxed">
              {link.desc}
            </p>
            <div className="flex items-center gap-1 mt-2 text-accent text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Read more</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        ))}
      </div>

      {/* How it works */}
      <h2 id="how-it-works">How it works</h2>
      <ul>
        <li>
          You stage changes with <code>git add</code> as usual.
        </li>
        <li>
          Running <code>gitcommit</code> captures the output of{" "}
          <code>git diff --staged</code>.
        </li>
        <li>
          The diff is sent to the Gemini API with a prompt asking for a
          Conventional Commit message.
        </li>
        <li>
          The generated message is shown to you for confirmation (or committed
          automatically with <code>--auto</code>).
        </li>
      </ul>

      <h2 id="requirements">Requirements</h2>
      <ul>
        <li>Node.js 18 or later</li>
        <li>A Google Gemini API key (free tier available)</li>
        <li>Git installed and initialized in your project</li>
      </ul>

      <Callout variant="tip" title="Free tier is enough">
        The Gemini free tier offers generous limits for commit message
        generation. Most developers will never need a paid plan.
      </Callout>
    </article>
  );
}
