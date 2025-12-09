import { describe, expect, it } from "vitest";

import { generatePreviewContent } from "@/lib/content-generator";

describe("generatePreviewContent", () => {
  it("uses the dental template when input references dental", () => {
    const result = generatePreviewContent("We are a dental clinic");
    expect(result.headline).toContain("Dental");
    expect(result.cta.toLowerCase()).toContain("appointment");
  });

  it("falls back to generic copy when no template matches", () => {
    const result = generatePreviewContent("Unique artisan studio");
    expect(result.headline.toLowerCase()).toContain("artisan");
    expect(result.cta.length).toBeGreaterThan(5);
  });
});
