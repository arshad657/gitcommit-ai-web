"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showCopy?: boolean;
  className?: string;
  variant?: "default" | "terminal";
}

function cleanCodeForCopy(code: string): string {
  return code
    .split("\n")
    .map((line) => {
      const promptMatch = line.match(/^("?[A-Z]:\\+[^"]*"?>)\s*(.*)$/i);
      if (promptMatch) {
        return promptMatch[2];
      }
      if (line.startsWith("$ ")) {
        return line.slice(2);
      }
      if (line === "$") {
        return "";
      }
      return line;
    })
    .join("\n");
}

export function CodeBlock({
  code,
  language = "bash",
  filename,
  showCopy = true,
  className,
  variant = "default",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const cleaned = cleanCodeForCopy(code);
    await navigator.clipboard.writeText(cleaned);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "rounded-lg border border-border overflow-hidden",
        variant === "terminal" && "border-border",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface-2 border-b border-border">
        <div className="flex items-center gap-2">
          {variant === "terminal" ? (
            <>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <Terminal className="w-3.5 h-3.5 text-text-muted ml-2" />
              <span className="text-text-muted text-xs font-mono">
                {filename || "terminal"}
              </span>
            </>
          ) : (
            <>
              <span className="text-text-muted text-xs font-mono">
                {filename || language}
              </span>
            </>
          )}
        </div>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-text-muted hover:text-text-secondary transition-colors text-xs"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Code */}
      <pre
        className={cn(
          "p-4 overflow-x-auto text-sm",
          "bg-surface font-mono leading-relaxed",
          className
        )}
      >
        <code
          className="text-text-primary"
          dangerouslySetInnerHTML={{
            __html: highlightCode(code, language),
          }}
        />
      </pre>
    </div>
  );
}

function highlightCode(code: string, language: string): string {
  if (language === "bash" || language === "shell") {
    return code
      .split("\n")
      .map((line) => {
        if (line.startsWith("#")) {
          return `<span class="token-muted">${escapeHtml(line)}</span>`;
        }
        if (line.startsWith("$")) {
          return (
            `<span class="token-muted">$ </span>` +
            highlightBashLine(line.slice(2))
          );
        }
        const promptMatch = line.match(/^("?[A-Z]:\\+[^"]*"?>)\s*(.*)$/i);
        if (promptMatch) {
          return (
            `<span class="token-muted">${escapeHtml(promptMatch[1])} </span>` +
            highlightBashLine(promptMatch[2])
          );
        }
        return highlightBashLine(line);
      })
      .join("\n");
  }
  return escapeHtml(code);
}

function highlightBashLine(line: string): string {
  const escaped = escapeHtml(line);
  return escaped
    .split(" ")
    .map((token) => {
      if (!token) return "";

      // Check if it's a quoted string
      if (
        (token.startsWith('"') && token.endsWith('"')) ||
        (token.startsWith("'") && token.endsWith("'")) ||
        (token.startsWith("&quot;") && token.endsWith("&quot;"))
      ) {
        return `<span class="token-amber">${token}</span>`;
      }

      // Strip trailing punctuation
      const cleanToken = token
        .replace(/[;:]$/, "")
        .replace(/&quot;$/, "")
        .replace(/&gt;$/, "");

      const commands = ["npm", "npx", "gitcommit", "git", "node"];
      const flagsAndSubcommands = [
        "-g", "-b", "-a", "-v", "-h",
        "--body", "--auto", "--no-verify", "--dry-run", "--version", "--help",
        "init", "commit", "status"
      ];

      if (commands.includes(cleanToken)) {
        return `<span class="token-green">${token}</span>`;
      }
      if (flagsAndSubcommands.includes(cleanToken)) {
        return `<span class="token-blue">${token}</span>`;
      }

      return token;
    })
    .join(" ");
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* ---- Inline code ---- */
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-surface-2 border border-border rounded px-1.5 py-0.5 text-accent font-mono text-sm">
      {children}
    </code>
  );
}
