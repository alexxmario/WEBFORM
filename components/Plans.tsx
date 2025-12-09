"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { BlueprintButton } from "./BlueprintButton";

const plans = [
  {
    name: "Starter",
    setup: "$149",
    monthly: "$99/mo",
    summary: "Launch-ready brochure site for lean teams.",
    perks: ["Up to 3 pages", "3-day updates", "1 active request", "Hosting + domain"],
  },
  {
    name: "Business",
    setup: "$399",
    monthly: "$199/mo",
    summary: "Built for growing companies that need speed.",
    perks: [
      "Up to 7 pages",
      "2 active requests",
      "2-day priority",
      "Analytics + SEO setup",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    setup: "$899",
    monthly: "$399/mo",
    summary: "Complex builds, booking, or e-commerce flows.",
    perks: [
      "10+ pages or e-com",
      "3 active requests",
      "24h priority",
      "Integrations included",
    ],
  },
];

type PlansProps = {
  compact?: boolean;
};

export function Plans({ compact = false }: PlansProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("grid gap-8", compact ? "md:grid-cols-3" : "lg:grid-cols-3")}>
      {plans.map((plan, idx) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05, duration: 0.45 }}
        >
          <Card
            className={cn(
              "h-full border-border/60 bg-card/60 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg",
              plan.highlighted && "border-primary/60 shadow-lg shadow-primary/20",
            )}
          >
            <CardContent className="flex h-full flex-col gap-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.summary}</p>
                </div>
                {plan.highlighted && <Badge>Most popular</Badge>}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Setup</p>
                <p className="text-2xl font-semibold">{plan.setup}</p>
                <p className="mt-1 text-sm text-muted-foreground">{plan.monthly}</p>
              </div>
              <ul className="space-y-2 text-sm text-foreground/90">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <BlueprintButton variant={plan.highlighted ? "default" : "outline"} className="mt-auto">
                Start the Website Blueprint
                <ArrowRight className="ml-2 h-4 w-4" />
              </BlueprintButton>
              {!compact && (
                <p className="text-xs text-muted-foreground">
                  7-day launch • 3-day updates • Hosting & domain included.
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
