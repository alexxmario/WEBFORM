import Link from "next/link";

import { ComparisonTable } from "@/components/ComparisonTable";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Plans } from "@/components/Plans";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlueprintButton } from "@/components/BlueprintButton";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="container space-y-10 pb-16 pt-28">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Badge>Pricing</Badge>
            <h1 className="mt-3 font-display text-4xl font-semibold">
              Built for speed. Managed forever.
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              Every plan includes hosting, domain, SSL, and our 7-day/3-day promise. Upgrade,
              pause, or export anytime.
            </p>
          </div>
          <BlueprintButton size="lg">Start the Website Blueprint</BlueprintButton>
        </div>

        <Plans />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Feature comparison</h2>
          <ComparisonTable />
        </section>

        <div className="sticky bottom-4 z-20">
          <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 px-4 py-3 shadow-lg">
            <p className="text-sm text-muted-foreground">
              Ready to start? Fill the Website Blueprint and we’ll ship in 7 days.
            </p>
            <BlueprintButton>Start the Website Blueprint</BlueprintButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
