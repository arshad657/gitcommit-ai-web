# gitcommit-ai — Website

Production Next.js website for the `gitcommit-ai` CLI tool.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** for styling
- **TypeScript** throughout
- **Vercel** for deployment
- **Anthropic API** powering the Playground

## Local development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# → Fill in ANTHROPIC_API_KEY for the Playground to work

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── not-found.tsx           # 404 page
│   ├── api/
│   │   └── generate-commit/    # Playground API route
│   ├── docs/
│   │   ├── layout.tsx          # Docs layout with sidebar
│   │   ├── page.tsx            # Introduction
│   │   ├── installation/       # Install guide
│   │   ├── setup/              # API key setup
│   │   ├── commands/           # Commands & flags reference
│   │   └── api-key-guide/      # Gemini API key guide
│   └── playground/
│       ├── page.tsx            # Playground shell
│       └── PlaygroundClient.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── docs/
│   │   ├── DocsSidebar.tsx
│   │   └── DocsOnThisPage.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Callout.tsx
│       └── CodeBlock.tsx
├── lib/
│   ├── docs-nav.ts             # Docs navigation config
│   └── utils.ts                # cn() helper
└── styles/
    └── globals.css
```

## Deployment

Push to GitHub and import the repo in [Vercel](https://vercel.com). Set the
`ANTHROPIC_API_KEY` environment variable in the Vercel dashboard.

## Environment variables

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | Powers the Playground commit generation |
