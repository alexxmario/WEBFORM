"use client";

import { DefaultSeo } from "next-seo";

import { defaultSeo } from "@/lib/seo";

export function SEOProvider() {
  return <DefaultSeo {...defaultSeo} />;
}
