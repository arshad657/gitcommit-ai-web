import { CodeBlock } from "@/components/ui/CodeBlock";
import { Callout } from "@/components/ui/Callout";

export const metadata = { title: "Setup API Key" };

export default function SetupPage() {
  return (
    <article className="prose-docs max-w-3xl">
      <h1>Setup API Key</h1>
      <p>
        gitcommit-ai uses Google Gemini to generate commit messages. You need a
        Gemini API key to authenticate requests. The key is stored{" "}
        <strong>locally on your machine</strong> and never leaves it.
      </p>

      <h2 id="get-key">1. Get your API key</h2>
      <p>
        Visit{" "}
        <a
          href="https://aistudio.google.com/app/apikey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google AI Studio
        </a>{" "}
        and create a free API key. The free tier is generous enough for
        everyday commit generation.
      </p>
      <Callout variant="tip" title="Free tier">
        Gemini API free tier includes 15 requests per minute and 1,500 requests
        per day — more than enough for typical development workflows.
      </Callout>

      <h2 id="init">2. Run gitcommit init</h2>
      <p>
        Once you have your key, run the init command. It will prompt you to
        paste your API key and store it securely in your home directory.
      </p>
      <CodeBlock
        code={`$ gitcommit init

? Paste your Gemini API key: ••••••••••••••••••••••••••••••
✓ API key saved to ~/.gitcommit-ai/config.json`}
        language="bash"
        variant="terminal"
        filename="terminal"
      />

      <h2 id="storage">Where is the key stored?</h2>
      <p>
        Your API key is saved to <code>~/.gitcommit-ai/config.json</code> on
        your local filesystem. It is:
      </p>
      <ul>
        <li>Never uploaded to any server</li>
        <li>Never included in git commits (the path is outside any repo)</li>
        <li>Only read at the moment you run <code>gitcommit</code></li>
      </ul>

      <Callout variant="warning" title="Keep your key private">
        Do not share your API key or commit it to a repository. If you
        accidentally expose it, revoke it immediately in{" "}
        <a
          href="https://aistudio.google.com/app/apikey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google AI Studio
        </a>{" "}
        and run <code>gitcommit init</code> again with a new key.
      </Callout>

      <h2 id="update-key">Updating your key</h2>
      <p>
        To update or replace your API key, simply run <code>gitcommit init</code>{" "}
        again. It will overwrite the existing stored key.
      </p>
      <CodeBlock
        code="gitcommit init"
        language="bash"
        variant="terminal"
      />

      <h2 id="verify">Verify setup</h2>
      <p>
        Navigate to any git repository with staged changes and run:
      </p>
      <CodeBlock
        code={`git add .
gitcommit`}
        language="bash"
        variant="terminal"
      />
      <p>
        If configured correctly, gitcommit-ai will output a generated commit
        message and prompt you to confirm.
      </p>
    </article>
  );
}
