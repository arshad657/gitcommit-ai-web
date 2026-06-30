import Link from "next/link";
import { GitBranch, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center">
                <GitBranch className="w-3 h-3 text-accent" />
              </div>
              <span className=" font-bold text-text-primary text-sm">
                gitcommit<span className="text-accent">-ai</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              AI-powered Git commit messages. Open source, locally configured,
              powered by Google Gemini.
            </p>
            <Link
              href="https://github.com/your-org/gitcommit-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Link>
          </div>

          {/* Links */}
          <div>
            <p className="text-text-primary text-xs font-semibold uppercase tracking-widest mb-3 ">
              Docs
            </p>
            <ul className="space-y-2">
              {[
                { label: "Installation", href: "/docs/installation" },
                { label: "Setup API Key", href: "/docs/setup" },
                { label: "Commands & Flags", href: "/docs/commands" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-text-muted hover:text-text-secondary text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-text-primary text-xs font-semibold uppercase tracking-widest mb-3 ">
              Resources
            </p>
            <ul className="space-y-2">
              {[
                { label: "API Key Guide", href: "/docs/api-key-guide" },
                { label: "Playground", href: "/playground" },
                {
                  label: "npm package",
                  href: "https://npmjs.com/package/gitcommit-ai",
                },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-text-muted hover:text-text-secondary text-sm transition-colors"
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs font-mono">
            Built with Next.js · Deployed on Vercel
          </p>
          <p className="text-text-muted text-xs">
            MIT License · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
