import * as React from "react";

import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

function StatCard({ value, label, description, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-2xl border border-surface-border bg-surface-card p-6 text-center shadow-card transition-shadow duration-300 hover:shadow-card-hover",
        className
      )}
    >
      <span className="text-display-lg font-bold tracking-tight text-brand-blue">
        {value}
      </span>
      <span className="mt-1 text-base font-semibold text-text-primary">
        {label}
      </span>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}

export { StatCard };
export type { StatCardProps };
