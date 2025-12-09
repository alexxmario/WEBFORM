export type PreviewContent = {
  headline: string;
  subheadline: string;
  cta: string;
  tone: string;
};

type Template = {
  match: RegExp;
  build: (input: string) => PreviewContent;
};

export const heroPlaceholders = [
  "We run a dental clinic",
  "I’m a fitness coach",
  "We’re a boutique law firm",
  "We sell handcrafted candles",
  "I build AI automations",
];

const templates: Template[] = [
  {
    match: /(dental|dentist|orthodont)/i,
    build: () => ({
      headline: "Dental care that puts families first.",
      subheadline: "Book your visit in minutes. Licensed experts. Modern tech.",
      cta: "Book an appointment",
      tone: "clinical",
    }),
  },
  {
    match: /(coach|fitness|trainer)/i,
    build: () => ({
      headline: "Programs that keep your clients showing up.",
      subheadline: "Bookings, payments, and progress tracking in one flow.",
      cta: "Start your program",
      tone: "energetic",
    }),
  },
  {
    match: /(law|legal|attorney|firm)/i,
    build: () => ({
      headline: "Boutique counsel, delivered with clarity.",
      subheadline: "Give prospects confidence with an airtight, modern site.",
      cta: "Schedule a review",
      tone: "serious",
    }),
  },
  {
    match: /(candle|handmade|shop|store)/i,
    build: () => ({
      headline: "Handcrafted pieces that feel personal.",
      subheadline: "Tell the story behind every product with immersive visuals.",
      cta: "Shop the collection",
      tone: "warm",
    }),
  },
  {
    match: /(saas|software|platform|product)/i,
    build: (input) => ({
      headline: `${input.trim()} — ready to demo in 7 days.`,
      subheadline:
        "Conversion-focused layouts, pricing clarity, and signup-ready CTAs.",
      cta: "See the product",
      tone: "tech",
    }),
  },
];

export function generatePreviewContent(input: string): PreviewContent {
  const cleaned = input.trim();
  const template =
    templates.find((tmpl) => tmpl.match.test(cleaned.toLowerCase())) ??
    templates.at(-1);

  if (template) return template.build(cleaned);

  return {
    headline: `${cleaned} — ready for the web.`,
    subheadline: "We’ll launch a tailored site in 7 days and keep it fresh.",
    cta: "Start your blueprint",
    tone: "neutral",
  };
}
