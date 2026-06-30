import Link from "next/link";
import { ArrowRight, GitCommit, Zap, Shield, Terminal, Star, Copy } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";

const terminalFrames = [
  { prompt: "$ git diff HEAD", output: null, type: "cmd" },
  { prompt: null, output: "Running gitcommit-ai...", type: "info" },
  { prompt: null, output: null, type: "loading" },
  {
    prompt: null,
    output: 'feat(auth): add JWT refresh token rotation with sliding expiration',
    type: "result",
  },
  { prompt: null, output: "✓ Committed successfully.", type: "success" },
];

const features = [
  {
    icon: Zap,
    title: "Instant generation",
    description:
      "Analyzes your git diff and produces a semantic commit message in under a second.",
  },
  {
    icon: GitCommit,
    title: "Conventional Commits",
    description:
      "Follows the Conventional Commits spec — feat, fix, chore, refactor, and more.",
  },
  {
    icon: Shield,
    title: "Locally configured",
    description:
      "Your API key stays on your machine. Nothing sent to third-party servers.",
  },
  {
    icon: Terminal,
    title: "Simple CLI",
    description:
      "One command to generate, one flag to auto-commit. Fits into any workflow.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
          {/* Background grid */}
          <div
            className="absolute inset-0 bg-grid-pattern bg-grid opacity-40"
            aria-hidden="true"
          />
          {/* Radial glow */}
          <div
            className="absolute inset-0 bg-radial-glow"
            aria-hidden="true"
          />
          {/* Accent light */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-mono">
                Powered by Google Gemini
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-extrabold text-4xl sm:text-6xl w-auto lg:w-[70%] mx-auto lg:text-6xl text-text-primary leading-[1.08] tracking-tight mb-6">
              AI-powered Git commit{" "}
              <span className="relative">
                <span className="text-accent">messages</span>
                <span
                  className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                  aria-hidden="true"
                />
              </span>{" "}
              in seconds
            </h1>

            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop writing commit messages manually. gitcommit-ai reads your
              diff and generates a meaningful, conventional commit — then
              commits for you.
            </p>

            {/* Install command */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <div className="flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-3 font-mono text-sm text-text-primary group cursor-pointer hover:border-accent/40 transition-colors">
                <span className="text-text-muted select-none">$</span>
                <span className="text-accent">npm</span>
                <span className="text-text-secondary">install -g</span>
                <span className="text-text-primary">gitcommit-ai</span>
                <button
                  className="ml-2 text-text-muted hover:text-text-secondary transition-colors"
                  aria-label="Copy install command"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
              <Link
                href="/docs"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-background font-semibold text-sm hover:bg-accent-dim transition-colors"
              >
                Read the docs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* GitHub badge */}
            <div className="flex items-center justify-center gap-1.5 text-text-muted text-sm">
              <Star className="w-3.5 h-3.5" />
              <span>Star us on GitHub · MIT License · Free forever</span>
            </div>
          </div>
        </section>

        {/* Terminal demo */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
          <div className="rounded-xl border border-border overflow-hidden shadow-2xl shadow-black/40">
            {/* Window chrome */}
            <div className="bg-surface-2 border-b border-border px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-text-muted text-xs font-mono">
                zsh · ~/my-project
              </span>
            </div>
            {/* Terminal content */}
            <div className="bg-surface p-6 font-mono text-sm space-y-1.5 min-h-[200px]">
              <p>
                <span className="text-accent">~/my-project</span>
                <span className="text-text-muted"> on </span>
                <span className="text-blue">main</span>
                <span className="text-text-muted"> via </span>
                <span className="text-amber">node v20</span>
              </p>
              <p>
                <span className="text-text-muted">$ </span>
                <span className="text-text-primary">gitcommit</span>
              </p>
              <p className="text-text-muted text-xs mt-2">
                Analyzing diff...
              </p>
              <p className="mt-2">
                <span className="text-text-muted">✦ Generated: </span>
                <span className="text-accent font-medium">
                  feat(auth): add JWT refresh token rotation
                </span>
              </p>
              <p className="text-text-muted text-xs">
                ─────────────────────────────────────────
              </p>
              <p>
                <span className="text-text-muted">Commit with this message? </span>
                <span className="text-text-primary">[Y/n]</span>
                <span className="text-accent animate-cursor-blink ml-0.5">
                  _
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-12">
            <h2 className=" font-bold text-2xl sm:text-3xl text-text-primary mb-3">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              A focused tool that does one thing exceptionally well.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-border bg-surface hover:border-accent/20 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <feature.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className=" font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage snippet */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-surface-2 border-b border-border px-5 py-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-text-muted text-xs font-mono">
                Quick start
              </span>
            </div>
            <div className="bg-surface p-6 font-mono text-sm space-y-4">
              <div>
                <p className="text-text-muted text-xs mb-1.5"># 1. Install</p>
                <p>
                  <span className="text-text-muted">$ </span>
                  <span className="text-accent">npm</span>
                  <span className="text-text-secondary"> install -g </span>
                  <span className="text-text-primary">gitcommit-ai</span>
                </p>
              </div>
              <div>
                <p className="text-text-muted text-xs mb-1.5">
                  # 2. Store your Gemini API key
                </p>
                <p>
                  <span className="text-text-muted">$ </span>
                  <span className="text-accent">gitcommit</span>
                  <span className="text-blue"> init</span>
                </p>
              </div>
              <div>
                <p className="text-text-muted text-xs mb-1.5">
                  # 3. Generate commit message (and auto-commit)
                </p>
                <p>
                  <span className="text-text-muted">$ </span>
                  <span className="text-accent">gitcommit</span>
                  <span className="text-blue"> --auto</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-10">
            <h2 className=" font-bold text-2xl text-text-primary mb-2">
              Roadmap
            </h2>
            <p className="text-text-secondary text-sm">
              What&apos;s been shipped and what&apos;s coming next.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-6 pl-10">
              {[
                {
                  version: "v1",
                  status: "done",
                  title: "CLI Tool",
                  desc: "Core CLI with Gemini API, auto-commit, and conventional commits.",
                  badge: "Shipped",
                  badgeVariant: "accent" as const,
                },
                {
                  version: "v2",
                  status: "active",
                  title: "Website & Onboarding",
                  desc: "Documentation site, playground, and improved onboarding.",
                  badge: "In Progress",
                  badgeVariant: "amber" as const,
                },
              ].map((item) => (
                <div key={item.version} className="relative">
                  <div
                    className={`absolute -left-[26px] w-3 h-3 rounded-full border-2 top-1.5 ${item.status === "done"
                        ? "bg-accent border-accent"
                        : "bg-surface border-accent animate-pulse"
                      }`}
                  />
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-text-muted text-xs">
                          {item.version}
                        </span>
                        <span className="text-text-primary font-semibold  text-sm">
                          {item.title}
                        </span>
                        <Badge variant={item.badgeVariant}>{item.badge}</Badge>
                      </div>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-10 text-center">
            <h2 className=" font-bold text-3xl text-text-primary mb-3">
              Ready to stop writing commit messages?
            </h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Install gitcommit-ai in 30 seconds and generate your first commit
              message.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2.5 font-mono text-sm text-text-primary">
                <span className="text-text-muted">$</span>
                <span className="text-accent">npm</span>
                <span className="text-text-secondary">install -g</span>
                <span>gitcommit-ai</span>
              </div>
              <Link
                href="/docs"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-background font-semibold text-sm hover:bg-accent-dim transition-colors"
              >
                View full docs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
