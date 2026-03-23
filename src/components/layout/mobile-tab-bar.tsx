"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Capacitor } from "@capacitor/core";
import { DownloadIcon, MenuIcon, HomeIcon, AppWindowIcon, LayoutGridIcon, XIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { mainNavItems, ctaButton } from "@/config/navigation";

const TABS = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Services", href: "/services", icon: AppWindowIcon },
  { label: "Industries", href: "/industries", icon: LayoutGridIcon },
  { label: "Menu", href: "#menu", icon: MenuIcon, isDrawerTrigger: true },
];

export function MobileTabBar() {
  const pathname = usePathname();
  const [isNative, setIsNative] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      setIsNative(true);
    }
  }, []);

  const handleTabPress = async (isDrawerTrigger?: boolean) => {
    if (isNative) {
      try {
         await Haptics.impact({ style: ImpactStyle.Light });
      } catch (e) {
         // ignore
      }
    }
    
    if (isDrawerTrigger) {
      setIsDrawerOpen(!isDrawerOpen);
    } else {
      setIsDrawerOpen(false);
    }
  };

  const closeDrawer = () => setIsDrawerOpen(false);

  // Only render on native platforms
  if (!isNative) return null;

  return (
    <>
      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 z-40 bg-brand-navy/60 backdrop-blur-sm transition-opacity" 
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Drawer Menu */}
      <div 
        className={cn(
          "fixed left-0 right-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-40 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-surface transition-transform duration-300 ease-spring shadow-[-4px_-20px_40px_rgba(0,0,0,0.1)]",
          isDrawerOpen ? "translate-y-0" : "translate-y-[120%]"
        )}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-surface-border bg-surface/95 px-6 py-4 backdrop-blur-md">
          <span className="text-xl font-bold text-brand-navy">Menu</span>
          <button 
            type="button" 
            onClick={closeDrawer}
            className="rounded-full bg-surface-muted p-2 text-text-secondary hover:text-text-primary"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="px-4 py-6 space-y-6 bg-surface">
          {mainNavItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedSection === item.label;

            return (
              <div key={item.label} className="border-b border-surface-border/50 pb-4 last:border-0">
                {hasChildren ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setExpandedSection(isExpanded ? null : item.label)}
                      className="flex w-full items-center justify-between py-2 text-lg font-semibold text-text-primary"
                    >
                      {item.label}
                      <ChevronRightIcon 
                        className={cn("h-5 w-5 text-brand-blue transition-transform", isExpanded && "rotate-90")} 
                      />
                    </button>
                    {isExpanded && (
                      <div className="mt-3 grid grid-cols-1 gap-2 pl-4 border-l-2 border-brand-blue-pale">
                        <Link
                          href={item.href !== "#" ? item.href : `/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={closeDrawer}
                          className="py-2 text-base font-medium text-brand-blue"
                        >
                          Overview
                        </Link>
                        {item.children?.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeDrawer}
                            className="py-2 text-base text-text-secondary hover:text-brand-blue"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeDrawer}
                    className="flex w-full items-center justify-between py-2 text-lg font-semibold text-text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
          
          <div className="pt-4">
             <Link
                href={ctaButton.href}
                onClick={closeDrawer}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-4 text-base font-semibold text-white shadow-lg transition-all active:scale-[0.98]"
              >
                {ctaButton.label}
             </Link>
          </div>
        </div>
      </div>
      {/* Spacer to prevent content from hiding behind the tab bar */}
      <div className="h-[80px] safe-pb" aria-hidden="true" />
      
      {/* Fixed bottom tab bar */}
      <nav 
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-surface-border safe-pb shadow-[0_-4px_16px_rgba(0,0,0,0.05)]"
        aria-label="Bottom Navigation"
      >
        <div className="flex items-center justify-around h-16 px-2">
          {TABS.map((tab) => {
            const isActive = tab.isDrawerTrigger ? isDrawerOpen : (pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href)));
            
            const Icon = tab.icon;

            return (
              <Link
                key={tab.label}
                href={tab.href}
                onClick={(e) => {
                  if (tab.isDrawerTrigger) e.preventDefault();
                  handleTabPress(tab.isDrawerTrigger);
                }}
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors relative",
                  isActive ? "text-brand-blue" : "text-text-secondary hover:text-text-primary"
                )}
              >
                <Icon className={cn("w-6 h-6", isActive ? "stroke-[2.5px]" : "stroke-[2px]")} />
                <span className="text-[10px] font-medium tracking-wide">
                  {tab.label}
                </span>
                
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -top-[1px] w-8 h-[3px] rounded-b-full bg-brand-blue" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
