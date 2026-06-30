"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { docsNav } from "@/lib/docs-nav";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0">
      <nav className="sticky top-20 space-y-6">
        {docsNav.map((group) => (
          <div key={group.title}>
            <p className="text-text-muted text-[10px] font-semibold uppercase tracking-widest mb-2  px-2">
              {group.title}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isExternal = item.href.startsWith("http");
                const isActive =
                  !isExternal &&
                  (pathname === item.href ||
                    (item.href !== "/docs" &&
                      pathname.startsWith(item.href)));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={cn(
                        "flex items-center justify-between px-2 py-1.5 rounded-md text-sm transition-colors group",
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-text-secondary hover:text-text-primary hover:bg-surface-2/60"
                      )}
                    >
                      <span>{item.title}</span>
                      <div className="flex items-center gap-1.5">
                        {item.badge && (
                          <span className="text-[10px] bg-purple/10 text-purple border border-purple/20 rounded px-1 py-0.5 font-mono">
                            {item.badge}
                          </span>
                        )}
                        {isExternal && (
                          <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-70 transition-opacity" />
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
