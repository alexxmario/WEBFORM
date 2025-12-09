type FAQItem = {
  question: string;
  answer: string;
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebForm",
  url: "https://webform.site",
  logo: "https://webform.site/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/webform",
    "https://x.com/webform",
  ],
  description:
    "WebForm builds, hosts, and manages premium websites with a fast 7-day launch and 3-day updates.",
};

export const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "WebForm Platform",
  description:
    "Done-for-you website platform with ongoing management, hosting, and queued updates.",
  brand: {
    "@type": "Brand",
    name: "WebForm",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    url: "https://webform.site/pricing",
    availability: "https://schema.org/InStock",
  },
};

export function buildFaqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
