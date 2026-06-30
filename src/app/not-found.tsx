import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <p className="font-mono text-accent text-sm mb-3">404</p>
          <h1 className=" font-bold text-3xl text-text-primary mb-3">
            Page not found
          </h1>
          <p className="text-text-secondary mb-8 max-w-sm">
            This page doesn&apos;t exist. Head back to the docs or the homepage.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-accent/30 transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="px-4 py-2 rounded-lg bg-accent text-background font-semibold text-sm hover:bg-accent-dim transition-colors"
            >
              Docs
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
