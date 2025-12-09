import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";

export default function StatusPage() {
  return (
    <>
      <Header />
      <main className="container space-y-8 pb-16 pt-28">
        <div className="section space-y-4 text-center">
          <Badge variant="ghost">Status</Badge>
          <h1 className="text-3xl font-semibold">All systems operational</h1>
          <p className="text-muted-foreground">
            WebForm platform, hosting, and CDN are online. Future versions will include real-time
            integrations with our status provider.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
