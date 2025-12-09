"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ClipboardList, Sparkles, Timer } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Fill one form",
    body: "Your Website Blueprint becomes our creative brief.",
  },
  {
    icon: Timer,
    title: "We build in 7 days",
    body: "You approve layout & design checkpoints — zero meetings required.",
  },
  {
    icon: Sparkles,
    title: "We manage forever",
    body: "Unlimited queued updates, delivered in 3 days with hosting & SSL included.",
  },
];

export function Timeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.title}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-6 shadow-md"
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06, duration: 0.45 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground">
                Step {idx + 1}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            <ArrowRight className="mt-6 h-5 w-5 text-primary/70" />
          </motion.div>
        );
      })}
    </div>
  );
}
