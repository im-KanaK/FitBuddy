import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // SEO: title, meta description, canonical
    document.title = "Privacy & Terms | FitBuddy";

    const desc = "FitBuddy Privacy Policy and Terms of Use. We respect your privacy. No personal data collected. Reminders stored on device.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/privacy`);
  }, []);

  return (
    <main className="min-h-screen bg-background pb-20">
      <header className="p-6 pt-12 relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 h-8 w-8 p-0"
          onClick={() => navigate(-1)}
          aria-label="Close privacy page"
        >
          <X size={18} />
        </Button>
        <h1 className="text-2xl font-bold text-foreground mb-2">Privacy Policy & Terms of Use</h1>
        <p className="text-muted-foreground">Our policies and guidelines</p>
      </header>

      <div className="px-6 space-y-6">
        <section className="rounded-lg border bg-card p-4">
          <h2 className="text-lg font-semibold text-foreground">Privacy Policy</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2 space-y-1">
            <li>We respect your privacy.</li>
            <li>FitBuddy does not collect personal data like name, email, or location.</li>
            <li>Reminders and preferences are stored only on your device.</li>
            <li>No data is shared with third parties.</li>
          </ul>
        </section>

        <section className="rounded-lg border bg-card p-4">
          <h2 className="text-lg font-semibold text-foreground">Terms of Use</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2 space-y-1">
            <li>FitBuddy is a simple fitness guide.</li>
            <li>Content (workouts, tips) is for general fitness and wellness purposes.</li>
            <li>Always consult a healthcare professional before starting a new exercise routine.</li>
            <li>By using the app, you agree to use it responsibly.</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            For questions, contact us at
            <a className="underline ml-1" href="mailto:support@fitbuddy.com" aria-label="Email support@fitbuddy.com">
              support@fitbuddy.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Privacy;
