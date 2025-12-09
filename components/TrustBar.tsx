"use client";

import { motion } from "framer-motion";

const logos = ["Northwind Labs", "Atlas Dental", "Studio Align", "Peakwell", "Harbor Legal", "Lumen Goods"];

export function TrustBar() {
  return (
    <section className="container mt-12">
      <div className="flex flex-col items-center gap-5 rounded-3xl border border-border/50 bg-card/50 px-6 py-5 text-center backdrop-blur">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Teams who never want to touch a builder again
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {logos.map((logo) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 0.75, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
