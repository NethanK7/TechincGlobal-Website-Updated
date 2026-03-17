import * as React from "react";

import { cn } from "@/lib/utils";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  orientation?: "vertical" | "horizontal";
  className?: string;
}

function ProcessStep({
  step,
  title,
  description,
  orientation = "vertical",
  className,
}: ProcessStepProps) {
  return (
    <div
      className={cn(
        "relative flex",
        orientation === "vertical" ? "flex-row gap-4" : "flex-col items-center text-center",
        className
      )}
    >
      {/* Step number badge */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-brand-blue font-bold text-text-inverse shadow-glow",
          orientation === "vertical" ? "h-10 w-10 text-sm" : "h-12 w-12 text-base"
        )}
        aria-hidden="true"
      >
        {step}
      </div>

      {/* Content */}
      <div className={cn(orientation === "horizontal" && "mt-4")}>
        <h3
          className={cn(
            "font-semibold text-text-primary",
            orientation === "vertical" ? "text-base" : "text-lg"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-1 leading-relaxed text-text-secondary",
            orientation === "vertical" ? "text-sm" : "text-sm"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export { ProcessStep };
export type { ProcessStepProps };
