import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="container space-y-8 pb-16 pt-28">
        <div className="space-y-3">
          <Badge variant="ghost">Legal</Badge>
          <h1 className="font-display text-4xl font-semibold">Terms of Service</h1>
          <p className="text-muted-foreground">
            Clear, transparent terms for a managed website platform.
          </p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Service</h2>
            <p>
              WebForm builds, hosts, and manages websites under a subscription. We provide a
              Website Blueprint, design/build, and ongoing queued updates. You supply accurate
              content and approvals.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Hosting & Domain</h2>
            <p>
              Hosting, SSL, and one domain are included while subscribed. Canceling your
              subscription stops hosting and the site goes offline. We can connect your existing
              domain on request.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Cancellation</h2>
            <p>
              Cancel anytime; billing stops at the end of the current period. When canceled, your
              site is disabled and hosting ceases. Content export is available; a full site export
              can be purchased as a paid service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Updates & SLA</h2>
            <p>
              We deliver new builds in 7 days after receiving a complete Blueprint. Update requests
              are delivered in 3 business days on a queue basis (faster on higher tiers). We respond
              to requests within 24 hours during the build window.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Content Ownership</h2>
            <p>
              You retain ownership of content and brand assets you provide. WebForm retains platform
              IP and the managed hosting stack. Exports are provided as outlined above.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p>
              Questions? Email{" "}
              <Link href="mailto:legal@webform.site" className="text-primary underline">
                legal@webform.site
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
