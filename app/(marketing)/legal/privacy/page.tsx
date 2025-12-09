import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="container space-y-8 pb-16 pt-28">
        <div className="space-y-3">
          <Badge variant="ghost">Legal</Badge>
          <h1 className="font-display text-4xl font-semibold">Privacy Policy</h1>
          <p className="text-muted-foreground">
            How we handle the information you share with WebForm.
          </p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Data we collect</h2>
            <p>
              We collect contact details, Blueprint responses, and product usage needed to deliver
              the service. We do not sell or share your data with advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Storage</h2>
            <p>
              Data is stored on secure US-based infrastructure with encryption in transit and at
              rest. Access is limited to essential personnel and secured via MFA.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Cookies</h2>
            <p>
              We operate cookie-less by default. If analytics is enabled (GA4 or Fathom), those
              providers may set their own cookies per their policies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Your rights</h2>
            <p>
              You can request access or deletion of your data at any time by emailing{" "}
              <Link href="mailto:privacy@webform.site" className="text-primary underline">
                privacy@webform.site
              </Link>
              . Exports of your content are available; full site exports are a paid service.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
