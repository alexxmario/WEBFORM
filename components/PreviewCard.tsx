"use client";

import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { PreviewContent } from "@/lib/content-generator";
import { cn } from "@/lib/utils";

type Props = {
  content: PreviewContent;
  persona?: string;
};

export function PreviewCard({ content, persona }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      layout
      initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-6 shadow-lg shadow-black/20"
    >
      <div className="absolute inset-0 bg-grid-sheen opacity-60" aria-hidden />
      <div className="relative space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-background shadow-md shadow-primary/30">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="rounded-full bg-black/10 px-3 py-1 text-xs text-primary-foreground">
            Previewing {persona || "your homepage"}
          </span>
        </div>
        <motion.h3
          key={content.headline}
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-2xl font-semibold leading-tight text-white lg:text-3xl"
        >
          {content.headline}
        </motion.h3>
        <p className="max-w-xl text-sm text-white/80 lg:text-base">
          {content.subheadline}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            className={cn(
              "group inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25",
            )}
          >
            {content.cta}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <div className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs text-white/80">
            <ShieldCheck className="h-4 w-4" />
            <span>SSL & managed hosting on</span>
            <span className="font-semibold text-white">WebForm</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
