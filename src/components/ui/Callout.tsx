import { Info, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "warning" | "success" | "tip";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const config: Record<
  CalloutVariant,
  { icon: React.ElementType; colors: string; iconColor: string }
> = {
  info: {
    icon: Info,
    colors: "bg-blue/5 border-blue/20",
    iconColor: "text-blue",
  },
  warning: {
    icon: AlertTriangle,
    colors: "bg-amber/5 border-amber/20",
    iconColor: "text-amber",
  },
  success: {
    icon: CheckCircle,
    colors: "bg-accent/5 border-accent/20",
    iconColor: "text-accent",
  },
  tip: {
    icon: Lightbulb,
    colors: "bg-purple/5 border-purple/20",
    iconColor: "text-purple",
  },
};

export function Callout({
  variant = "info",
  title,
  children,
  className,
}: CalloutProps) {
  const { icon: Icon, colors, iconColor } = config[variant];
  return (
    <div className={cn("rounded-lg border p-4 my-4", colors, className)}>
      <div className="flex gap-3">
        <Icon className={cn("w-4 h-4 mt-0.5 shrink-0", iconColor)} />
        <div>
          {title && (
            <p className="text-text-primary text-sm font-semibold mb-1 ">
              {title}
            </p>
          )}
          <div className="text-text-secondary text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
