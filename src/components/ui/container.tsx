import * as React from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "md" | "narrow" | "lg" | "wide";
}

const containerSizes = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  narrow: "max-w-4xl",
  lg: "max-w-5xl",
  default: "max-w-7xl",
  wide: "max-w-[1400px]",
} as const;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          containerSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export { Container };
export type { ContainerProps };
