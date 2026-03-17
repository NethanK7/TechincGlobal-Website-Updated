import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  titleSize?: "sm" | "md" | "lg";
  className?: string;
  /** aria id for labelling the section */
  id?: string;
  /** Apply light text for dark backgrounds */
  dark?: boolean;
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  titleSize = "md",
  className,
  id,
  dark = false,
}: SectionHeaderProps) {
  const titleSizeClasses = {
    sm: "text-display-sm",
    md: "text-display-md",
    lg: "text-display-lg",
  } as const;

  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("mb-3 text-sm font-semibold uppercase tracking-wider", dark ? "text-brand-teal" : "text-brand-blue")}>
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={cn(
          "font-bold tracking-tight",
          dark ? "text-text-inverse" : "text-text-primary",
          titleSizeClasses[titleSize]
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-text-inverse/70" : "text-text-secondary")}>
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionHeader };
export type { SectionHeaderProps };
