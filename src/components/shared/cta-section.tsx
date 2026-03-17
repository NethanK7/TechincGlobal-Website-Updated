import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface CTASectionProps {
  heading: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  className?: string;
}

function CTASection({
  heading,
  description,
  primaryButton,
  secondaryButton,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-midnight to-brand-navy py-section-md",
        className
      )}
    >
      {/* Decorative background pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-teal/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/5 blur-3xl" />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <Container size="narrow" className="relative z-10">
        <div className="text-center">
          <h2 className="text-display-md font-bold tracking-tight text-text-inverse">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-inverse/70">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="xl" asChild>
              <Link href={primaryButton.href}>{primaryButton.label}</Link>
            </Button>
            {secondaryButton && (
              <Button
                variant="outline"
                size="xl"
                className="border-text-inverse/20 text-text-inverse hover:bg-text-inverse/10"
                asChild
              >
                <Link href={secondaryButton.href}>
                  {secondaryButton.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { CTASection };
export type { CTASectionProps };
