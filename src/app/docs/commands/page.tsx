import { CodeBlock } from "@/components/ui/CodeBlock";
import { Callout } from "@/components/ui/Callout";

export const metadata = { title: "Commands & Flags" };

const flags = [
  {
    flag: "--body",
    short: "-b",
    description: "Include a detailed body in the commit message in addition to the subject line.",
    example: "gitcommit --body",
  },
  {
    flag: "--auto",
    short: "-a",
    description: "Skip the confirmation prompt and commit automatically with the generated message.",
    example: "gitcommit --auto",
  },
  {
    flag: "--no-verify",
    short: null,
    description: "Bypass git pre-commit hooks. Passes --no-verify to the underlying git commit call.",
    example: "gitcommit --no-verify",
  },
  {
    flag: "--dry-run",
    short: null,
    description: "Generate and display the commit message without actually committing.",
    example: "gitcommit --dry-run",
  },
  {
    flag: "--version",
    short: "-v",
    description: "Print the installed version of @arshad657/gitcommit-ai.",
    example: "gitcommit --version",
  },
  {
    flag: "--help",
    short: "-h",
    description: "Show the help message with all available flags.",
    example: "gitcommit --help",
  },
];

export default function CommandsPage() {
  return (
    <article className="prose-docs max-w-3xl">
      <h1>Commands & Flags</h1>
      <p>
        @arshad657/gitcommit-ai exposes a single main command — <code>gitcommit</code> — with
        several subcommands and flags for customizing behavior.
      </p>

      {/* Commands */}
      <h2 id="commands">Commands</h2>

      <h3 id="gitcommit">gitcommit</h3>
      <p>
        The primary command. Reads your staged diff, calls the Gemini API, and
        presents the generated commit message for confirmation.
      </p>
      <CodeBlock
        code={`$ git add .
$ gitcommit

✦ Generated message:
feat(api): add rate limiting middleware with Redis backend

Commit with this message? [Y/n]`}
        language="bash"
        variant="terminal"
        filename="terminal"
      />

      <h3 id="gitcommit-init">gitcommit init</h3>
      <p>
        Configures your Gemini API key. Stores the key at{" "}
        <code>~/.gitcommitrc</code>. Run this once after
        installation.
      </p>
      <CodeBlock
        code="gitcommit init"
        language="bash"
        variant="terminal"
      />

      {/* Flags */}
      <h2 id="flags">Flags</h2>
      <p>All flags can be combined unless noted otherwise.</p>

      <div className="not-prose space-y-3 mb-6">
        {flags.map((item) => (
          <div
            key={item.flag}
            className="rounded-lg border border-border bg-surface p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <code className="text-accent font-mono text-sm font-semibold">
                {item.flag}
              </code>
              {item.short && (
                <>
                  <span className="text-text-muted text-xs">/</span>
                  <code className="text-accent/70 font-mono text-sm">
                    {item.short}
                  </code>
                </>
              )}
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              {item.description}
            </p>
            <div className="bg-surface-2 rounded border border-border-subtle px-3 py-2 font-mono text-xs text-text-muted">
              <span className="text-text-muted">$ </span>
              <span className="text-text-primary">{item.example}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Examples */}
      <h2 id="examples">Common usage examples</h2>

      <h3 id="basic">Basic usage</h3>
      <CodeBlock
        code={`# Stage your changes
git add src/auth.ts

# Generate and confirm commit message
gitcommit`}
        language="bash"
        variant="terminal"
      />

      <h3 id="with-body">Commit with body</h3>
      <p>
        Use <code>--body</code> when you want a more descriptive commit that
        includes the reasoning behind the change.
      </p>
      <CodeBlock
        code={`gitcommit --body

# Output:
# feat(auth): add OAuth2 PKCE flow
#
# Implements authorization code flow with PKCE for public clients.
# Removes implicit flow which is deprecated in OAuth 2.1.`}
        language="bash"
        variant="terminal"
      />

      <h3 id="auto-commit">Auto-commit (no prompt)</h3>
      <CodeBlock
        code="gitcommit --auto"
        language="bash"
        variant="terminal"
      />

      <h3 id="combined">Combined flags</h3>
      <CodeBlock
        code="gitcommit --body --auto"
        language="bash"
        variant="terminal"
      />

      <Callout variant="info" title="No staged changes?">
        @arshad657/gitcommit-ai requires at least one staged file. Run{" "}
        <code>git add</code> before running <code>gitcommit</code>.
      </Callout>
    </article>
  );
}
