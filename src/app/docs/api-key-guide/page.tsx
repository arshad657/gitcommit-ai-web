import Link from "next/link";
import { ExternalLink, Shield, Zap, DollarSign } from "lucide-react";
import { Callout } from "@/components/ui/Callout";

export const metadata = { title: "API Key Guide" };

const freeTierDetails = [
  { label: "Requests per minute", value: "15 RPM" },
  { label: "Requests per day", value: "1,500 RPD" },
  { label: "Input tokens per minute", value: "1M TPM" },
  { label: "Price", value: "Free" },
];

export default function ApiKeyGuidePage() {
  return (
    <article className="prose-docs max-w-3xl">
      <h1>API Key Guide</h1>
      <p>
        @arshad657/gitcommit-ai uses the{" "}
        <a
          href="https://ai.google.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Gemini API
        </a>{" "}
        to generate commit messages. This guide walks you through getting your
        API key and understanding the free tier limits.
      </p>

      {/* Step 1 */}
      <h2 id="get-key">Step 1 — Create an API key</h2>
      <ol className="not-prose space-y-3 mb-6 list-none">
        {[
          <>
            Go to{" "}
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors inline-flex items-center gap-1"
            >
              Google AI Studio
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>{" "}
            and sign in with your Google account.
          </>,
          <>Click <strong className="text-text-primary">Get API key</strong> in the left sidebar.</>,
          <>Select <strong className="text-text-primary">Create API key</strong> and choose or create a Google Cloud project.</>,
          <>Copy the generated key — you won&apos;t be able to see it again after closing the dialog.</>,
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span className="text-text-secondary text-sm leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>

      <Callout variant="warning" title="Save your key immediately">
        Copy the API key right after creation. Google AI Studio only shows it
        once. If you lose it, you can revoke it and create a new one.
      </Callout>

      {/* Step 2 */}
      <h2 id="configure">Step 2 — Configure the CLI</h2>
      <p>
        Run the init command and paste your key when prompted:
      </p>
      <pre className="not-prose bg-surface border border-border rounded-lg px-5 py-4 font-mono text-sm mb-4 overflow-x-auto">
        <code>
          <span className="text-text-muted">$ </span>
          <span className="text-accent">gitcommit</span>
          <span className="text-blue"> init</span>
          {"\n\n"}
          <span className="text-text-muted">? Paste your Gemini API key: </span>
          <span className="text-text-primary">••••••••••••••••••••</span>
          {"\n"}
          <span className="text-accent">✓ </span>
          <span className="text-text-secondary">
            API key saved to ~/.gitcommitrc
          </span>
        </code>
      </pre>

      {/* Free tier */}
      <h2 id="free-tier">Free tier limits</h2>
      <p>
        The Gemini API free tier is more than sufficient for everyday commit
        generation. Here&apos;s what you get:
      </p>

      <div className="not-prose rounded-lg border border-border overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-2 border-b border-border">
              <th className="text-left px-4 py-3 text-text-muted text-xs font-mono uppercase tracking-wider">
                Limit
              </th>
              <th className="text-left px-4 py-3 text-text-muted text-xs font-mono uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {freeTierDetails.map((row, i) => (
              <tr
                key={row.label}
                className={i < freeTierDetails.length - 1 ? "border-b border-border-subtle" : ""}
              >
                <td className="px-4 py-3 text-text-secondary">{row.label}</td>
                <td className="px-4 py-3 font-mono text-accent font-medium">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Security */}
      <h2 id="security">Security</h2>
      <div className="not-prose grid sm:grid-cols-3 gap-3 mb-6">
        {[
          {
            icon: Shield,
            title: "Stored locally",
            desc: "Your API key lives only in ~/.gitcommitrc on your machine.",
          },
          {
            icon: Zap,
            title: "Direct to Gemini",
            desc: "Requests go directly from your machine to the Gemini API — no proxy servers.",
          },
          {
            icon: DollarSign,
            title: "No billing surprises",
            desc: "The free tier has hard rate limits. You control any paid tier upgrades yourself.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="p-4 rounded-lg border border-border bg-surface"
          >
            <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
              <card.icon className="w-3.5 h-3.5 text-accent" />
            </div>
            <p className="text-text-primary text-sm font-semibold  mb-1">
              {card.title}
            </p>
            <p className="text-text-muted text-xs leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="rotate">Rotating or revoking your key</h2>
      <p>
        If you believe your API key has been compromised:
      </p>
      <ul>
        <li>
          Visit{" "}
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google AI Studio
          </a>{" "}
          and delete the old key.
        </li>
        <li>Create a new API key in the same place.</li>
        <li>
          Run <code>gitcommit init</code> again to store the new key locally.
        </li>
      </ul>

      <Callout variant="info" title="Next step">
        Ready to use the CLI?{" "}
        <Link href="/docs/commands">View all commands and flags →</Link>
      </Callout>
    </article>
  );
}
