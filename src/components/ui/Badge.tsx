import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted" | "amber" | "blue" | "purple";
  className?: string;
}

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium border",
        {
          "bg-accent/10 text-accent border-accent/20": variant === "accent",
          "bg-surface-2 text-text-secondary border-border": variant === "muted",
          "bg-amber/10 text-amber border-amber/20": variant === "amber",
          "bg-blue/10 text-blue border-blue/20": variant === "blue",
          "bg-purple/10 text-purple border-purple/20": variant === "purple",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
