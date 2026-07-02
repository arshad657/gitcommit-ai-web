"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GitBranch, Menu, X, ExternalLink, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "API Key Guide", href: "/docs/api-key-guide" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
        >
          <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <GitBranch className="w-3.5 h-3.5 text-accent" />
          </div>
          <span className=" font-700 text-text-primary text-sm tracking-tight">
            gitcommit<span className="text-accent">-ai</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm transition-colors font-body",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-text-primary bg-surface-2"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-2/60",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://github.com/arshad657/gitcommit-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary text-sm transition-colors"
          >
            <Star className="w-3.5 h-3.5" />
            <span>Star</span>
            <ExternalLink className="w-3 h-3 opacity-50" />
          </Link>
          <Link
            href="/docs/installation"
            className="px-3 py-1.5 rounded-md bg-accent text-background text-sm font-semibold hover:bg-accent-dim transition-colors font-mono"
          >
            npm install →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-3 py-2 rounded-md text-sm transition-colors",
                pathname.startsWith(link.href)
                  ? "text-text-primary bg-surface-2"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/docs/installation"
            onClick={() => setOpen(false)}
            className="mt-2 px-3 py-2 rounded-md bg-accent text-background text-sm font-semibold text-center font-mono"
          >
            npm install -g @arshad657/gitcommit-ai
          </Link>
        </div>
      )}
    </header>
  );
}
