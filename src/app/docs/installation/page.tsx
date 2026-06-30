import { CodeBlock } from "@/components/ui/CodeBlock";
import { Callout } from "@/components/ui/Callout";

export const metadata = { title: "Installation" };

export default function InstallationPage() {
  return (
    <article className="prose-docs max-w-3xl">
      <h1>Installation</h1>
      <p>
        gitcommit-ai is distributed as a global npm package. Install it once
        and it&apos;s available in every project on your machine.
      </p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>
          <strong>Node.js 18+</strong> — Check with <code>node --version</code>
        </li>
        <li>
          <strong>npm 7+</strong> — Bundled with Node.js
        </li>
        <li>
          <strong>Git</strong> — Must be installed and in your PATH
        </li>
      </ul>

      <h2 id="install">Install via npm</h2>
      <CodeBlock
        code="npm install -g gitcommit-ai"
        language="bash"
        variant="terminal"
        filename="terminal"
        className="mb-4"
      />

      <p>
        Verify the installation was successful:
      </p>
      <CodeBlock
        code="gitcommit --version"
        language="bash"
        variant="terminal"
      />

      <p>
        You should see the installed version printed to the terminal, e.g.{" "}
        <code>gitcommit-ai v1.0.0</code>.
      </p>

      <Callout variant="info" title="Global install">
        The <code>-g</code> flag installs the package globally so the{" "}
        <code>gitcommit</code> command is available system-wide. You only need
        to do this once.
      </Callout>

      <h2 id="alternative-managers">Alternative package managers</h2>
      <p>You can also install with other package managers:</p>

      <div className="space-y-3">
        <div>
          <p className="text-text-muted text-xs font-mono mb-1.5">pnpm</p>
          <CodeBlock code="pnpm add -g gitcommit-ai" language="bash" variant="terminal" />
        </div>
        <div>
          <p className="text-text-muted text-xs font-mono mb-1.5">yarn</p>
          <CodeBlock code="yarn global add gitcommit-ai" language="bash" variant="terminal" />
        </div>
      </div>

      <h2 id="next-steps">Next steps</h2>
      <p>
        Now that the CLI is installed, you need to configure your Gemini API
        key before you can generate commit messages.
      </p>

      <Callout variant="success" title="You're halfway there">
        Head to the{" "}
        <a href="/docs/setup">Setup API Key</a> guide to finish
        configuration.
      </Callout>
    </article>
  );
}
