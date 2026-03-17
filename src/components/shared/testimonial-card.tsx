import * as React from "react";

import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  role: string;
  company: string;
  className?: string;
}

function TestimonialCard({
  quote,
  authorName,
  role,
  company,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex flex-col rounded-2xl border border-surface-border bg-surface-card p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover",
        className
      )}
    >
      {/* Decorative quote mark */}
      <div
        className="mb-4 text-5xl font-bold leading-none text-brand-blue/20"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <blockquote className="flex-1">
        <p className="text-base leading-relaxed text-text-secondary">
          {quote}
        </p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-surface-border pt-4">
        {/* Author avatar placeholder */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-semibold text-brand-blue"
          aria-hidden="true"
        >
          {authorName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <cite className="text-sm font-semibold not-italic text-text-primary">
            {authorName}
          </cite>
          <p className="text-xs text-text-muted">
            {role}, {company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export { TestimonialCard };
export type { TestimonialCardProps };
