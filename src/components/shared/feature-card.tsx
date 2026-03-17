import * as React from "react";
import Link from "next/link";
import {
  Settings,
  Code,
  Zap,
  RefreshCw,
  Link2,
  MessageSquare,
  Headphones,
  GraduationCap,
  Factory,
  Truck,
  ShoppingCart,
  Briefcase,
  Building2,
  Heart,
  BookOpen,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Settings,
  Code,
  Zap,
  RefreshCw,
  Link2,
  MessageSquare,
  HeadphonesIcon: Headphones,
  Headphones,
  GraduationCap,
  Factory,
  Truck,
  ShoppingCart,
  Briefcase,
  Building2,
  Heart,
  BookOpen,
  Globe,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  href,
  className,
}: FeatureCardProps) {
  const IconComponent = iconMap[icon];

  const content = (
    <div
      className={cn(
        "group flex flex-col rounded-2xl border border-surface-border bg-surface-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover",
        href && "cursor-pointer hover:-translate-y-1",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-text-inverse">
        {IconComponent ? (
          <IconComponent className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Settings className="h-6 w-6" aria-hidden="true" />
        )}
      </div>
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
      {href && (
        <div className="mt-4 flex items-center text-sm font-medium text-brand-blue transition-colors group-hover:text-brand-blue-light">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export { FeatureCard, iconMap };
export type { FeatureCardProps };
