import { CodeBlock } from "@/components/ui/CodeBlock";
import { Callout } from "@/components/ui/Callout";

export const metadata = { title: "Installation & Usage Guide" };

export default function InstallationPage() {
  return (
    <article className="prose-docs max-w-3xl">
      <h1>Installation &amp; Usage Guide</h1>
      <p>
        An AI-powered CLI tool designed to automatically generate high-quality, conventional Git commit messages from your staged changes using Google&apos;s Gemini models.
      </p>

      <h2 id="prerequisites">📋 Prerequisites</h2>
      <p>Before installation, ensure you have the following installed on your system:</p>
      <ul>
        <li>
          <strong>Node.js</strong>: v18.0.0 or higher.
        </li>
        <li>
          <strong>Git</strong>: Installed and configured on your terminal path.
        </li>
        <li>
          <strong>Gemini API Key</strong>: A valid API key from{" "}
          <a
            href="https://aistudio.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google AI Studio
          </a>
          .
        </li>
      </ul>

      <h2 id="installation">🚀 Installation</h2>
      <p>Install the package globally using <code>npm</code>:</p>
      <CodeBlock
        code="npm install -g @arshad657/gitcommit-ai"
        language="bash"
        variant="terminal"
        filename="terminal"
        className="mb-4"
      />
      <Callout variant="info" title="Permissions Note">
        Depending on your system permissions, you may need to run <code>sudo npm install -g @arshad657/gitcommit-ai</code> on macOS/Linux.
      </Callout>

      <h2 id="configuration">⚙️ Configuration &amp; Setup</h2>
      <p>Once installed, initialize the configuration with your Gemini API key:</p>
      <CodeBlock
        code="gitcommit init"
        language="bash"
        variant="terminal"
        filename="terminal"
        className="mb-4"
      />
      <ul>
        <li>You will be prompted to enter your <strong>Gemini API Key</strong>.</li>
        <li>The configuration will be saved globally under <code>~/.gitcommitrc</code>.</li>
        <li>By default, it is configured to use the <code>gemini-2.5-flash</code> model, ensuring fast responses and compatibility with newer key types (e.g. keys starting with <code>AQ.</code>).</li>
      </ul>

      <h2 id="usage">💻 Usage</h2>
      <p>To generate a commit message and commit your changes in one step, follow this workflow:</p>

      <h3 id="stage-changes">1. Stage your changes</h3>
      <p>Add files to your Git staging area:</p>
      <CodeBlock
        code={`git add .
# or stage specific files
git add src/config.js`}
        language="bash"
        variant="terminal"
        className="mb-4"
      />

      <h3 id="run-generator">2. Run the generator</h3>
      <p>Run <code>gitcommit</code> to analyze the diff of your staged changes and create the commit:</p>
      <CodeBlock
        code="gitcommit"
        language="bash"
        variant="terminal"
        className="mb-4"
      />

      <h3 id="cli-options">3. CLI Options</h3>
      <p>Customize the commit behavior using the following command-line flags:</p>
      <ul>
        <li>
          <strong>Include Description/Body (<code>--body</code>)</strong>:<br />
          Generates a detailed multi-line commit message including a body with list of changes in addition to the short subject line.
          <div className="mt-2">
            <CodeBlock
              code="gitcommit --body"
              language="bash"
              variant="terminal"
            />
          </div>
        </li>
      </ul>

      <h2 id="troubleshooting">🛠️ Troubleshooting</h2>

      <h3 id="model-not-supported">1. Model Not Found or Not Supported (<code>404 NOT_FOUND</code>)</h3>
      <p>If you receive an error saying the model is not found/supported:</p>
      <pre className="not-prose bg-surface border border-border rounded-lg px-5 py-4 font-mono text-sm mb-4 overflow-x-auto text-[#f87171]">
        <code>❌ Error: models/gemini-1.5-flash-002 is not found for API version v1beta</code>
      </pre>
      <ul>
        <li>
          <strong>Why this happens:</strong> Some newer API keys (prefixed with <code>AQ.</code>) or specific billing regions have restrictions on older models.
        </li>
        <li>
          <strong>How to fix:</strong> Re-run <code>gitcommit init</code> to automatically update your global configuration to use the latest <code>gemini-2.5-flash</code> model.
        </li>
      </ul>

      <h3 id="invalid-api-key">2. Invalid API Key (<code>400/401 UNAUTHENTICATED</code>)</h3>
      <p>If you see an authentication or credential error:</p>
      <ul>
        <li>
          <strong>Why this happens:</strong> Your API key has expired, is copied incorrectly, or contains a typo.
        </li>
        <li>
          <strong>How to fix:</strong> Run <code>gitcommit init</code> to re-enter a valid Gemini API key.
        </li>
      </ul>
    </article>
  );
}
