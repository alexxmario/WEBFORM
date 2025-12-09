import { z } from "zod";

export const heroPromptSchema = z.object({
  whatYouDo: z.string().min(2, "Tell us what you do"),
});

const referenceSiteSchema = z.object({
  url: z.string().url("Use a valid URL"),
  notes: z
    .string()
    .min(8, "Share what resonates so we can align style")
    .max(260),
});

export const blueprintSchema = z.object({
  identity: z.object({
    businessName: z.string().min(2, "Business name is required"),
    oneLiner: z.string().min(8, "Add a punchy one-liner"),
    whatYouSell: z.string().min(3, "What you sell is required"),
    brandPersonality: z
      .array(z.string())
      .nonempty("Pick at least one personality"),
  }),
  vision: z.object({
    mainGoal: z.enum(["Leads", "Bookings", "Trust", "Portfolio", "Sell"]),
    primaryAction: z.string().min(3, "What's the #1 action?"),
    visitorFeel: z.string().min(3, "Share 3-5 keywords"),
    dreamClient: z
      .string()
      .min(15, "Describe your dream client in a couple sentences"),
  }),
  look: z.object({
    references: z
      .array(referenceSiteSchema)
      .max(3, "Keep it to 3 references")
      .optional()
      .default([]),
    colorPreference: z.array(z.string()).max(5, "You can add up to 5 colors"),
    imageryVibe: z.array(z.string()).optional().default([]),
    assetsNote: z.string().optional().default(""),
    assetUploads: z.array(z.string()).optional().default([]),
  }),
  content: z.object({
    pages: z
      .array(z.string())
      .nonempty("Select the pages you want live at launch"),
    ctaDestination: z.string().min(5, "Where should your CTAs point?"),
    homeCopy: z
      .string()
      .min(12, "Give us a starter hero message for Home"),
  }),
  technical: z.object({
    domainStatus: z.enum(["have", "need"]),
    currentSite: z
      .string()
      .url("Share a valid URL")
      .optional()
      .or(z.literal("")),
    integrations: z.array(z.string()).optional().default([]),
  }),
  confirmations: z.object({
    timeline: z
      .boolean()
      .refine((val) => val, {
        message: "Please acknowledge the 7-day build and 3-day updates",
      }),
    cancellation: z
      .boolean()
      .refine((val) => val, {
        message: "Please confirm hosting stops if you cancel",
      }),
    sla: z
      .boolean()
      .refine((val) => val, {
        message: "Please agree to the 24h response window",
      }),
  }),
});

export type BlueprintFormValues = z.infer<typeof blueprintSchema>;

export const blueprintSteps = [
  "Identity",
  "Vision",
  "Look & Feel",
  "Content & Structure",
  "Technical",
  "Confirmations",
] as const;
