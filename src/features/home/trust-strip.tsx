import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/container";

// ---------------------------------------------------------------------------
// TrustStrip
// ---------------------------------------------------------------------------

const trustItems = [
  "Trusted by 30+ Businesses",
  "100% Satisfaction",
  "Frappe Authorized Partner",
  "ISO-Compliant Processes",
] as const;

function TrustStrip() {
  return (
    <section className="bg-surface-muted py-8" aria-label="Trust indicators">
      <Container size="default">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2.5 text-center"
            >
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-brand-teal"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-text-secondary">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { TrustStrip };
