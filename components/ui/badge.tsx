import * as React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide";
  const styles = {
    default: "bg-primary/15 text-primary border border-primary/40",
    outline: "border border-border/60 text-foreground/80",
    ghost: "bg-foreground/5 text-foreground",
  }[variant];

  return <div className={cn(base, styles, className)} {...props} />;
}
