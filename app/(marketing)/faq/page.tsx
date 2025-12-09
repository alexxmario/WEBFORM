import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { buildFaqJsonLd } from "@/lib/schema";
import Script from "next/script";

export default function FaqPage() {
  const faqItems = [
    {
      question: "What happens if I cancel?",
      answer:
        "Hosting and management stop; your site goes offline. You can export content; a full site export is available as a paid service.",
    },
    {
      question: "Do I need meetings?",
      answer:
        "No meetings required. The Blueprint covers everything; optional async checkpoints are included.",
    },
    {
      question: "Turnaround?",
      answer:
        "First build in 7 days after complete Blueprint; changes in 3 days, queue-based.",
    },
    {
      question: "What counts as a change?",
      answer:
        "Small updates under ~1 hour. Larger work may require a plan upgrade or scoped add-on.",
    },
  ];

  const faqJsonLd = buildFaqJsonLd(faqItems);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16">
        <section className="bg-[#0A0A0A] text-white py-16">
          <div className="container max-w-4xl space-y-8">
            <div className="space-y-3 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/70">
                FAQ
              </div>
              <h1 className="text-4xl font-semibold sm:text-5xl">Frequently Asked Questions</h1>
              <p className="text-lg text-white/70">
                No surprises: cancellation, exports, domains, and SLA are baked into the platform.
              </p>
            </div>
            <div className="grid gap-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-base text-white/70 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Script
        type="application/ld+json"
        id="faq-jsonld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
