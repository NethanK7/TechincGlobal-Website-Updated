"use client";

import {
    LayoutDashboard,
    Layers,
    Lightbulb,
    FolderLock,
    Briefcase,
    Compass,
    ArrowLeftSquare
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLayoutMode } from "./layout-provider";
import { mainNavItems } from "@/config/navigation";
import { useState, useRef } from "react";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Home: LayoutDashboard,
    Platforms: Layers,
    Services: Lightbulb,
    Industries: FolderLock,
    Company: Briefcase,
    Resources: Compass,
};

export function Sidebar() {
    const pathname = usePathname();
    const { setViewMode } = useLayoutMode();
    const [activeGroup, setActiveGroup] = useState<string | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setActiveGroup(label);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveGroup(null);
        }, 200);
    };

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-16 border-r border-slate-800 bg-[#0B1120] text-slate-400 z-50 hidden lg:flex flex-col items-center py-4 shadow-2xl">
            {/* Minimalist Logo / Icon */}
            <div className="mb-8">
                <Link href="/" className="h-9 w-9 flex items-center justify-center rounded-lg bg-brand-blue/20 border border-slate-700 font-bold text-white text-sm">
                    <span className="text-brand-teal">T</span><span>G</span>
                </Link>
            </div>

            {/* Navigation Icons Stack */}
            <nav className="flex-1 flex flex-col items-center gap-4 w-full px-2" aria-label="Sidebar navigation">
                {mainNavItems.map((item) => {
                    const Icon = iconMap[item.label] || LayoutDashboard;
                    const primaryHref = item.href !== "#" ? item.href : item.children?.[0]?.href ?? "/";
                    const isActive = pathname === primaryHref || (primaryHref !== "/" && pathname.startsWith(primaryHref));
                    const hasChildren = item.children && item.children.length > 0;
                    const isOpen = activeGroup === item.label;

                    return (
                        <div
                            key={item.label}
                            className="group relative flex justify-center w-full"
                            onMouseEnter={() => handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href={primaryHref}
                                className={cn(
                                    "flex items-center justify-center h-10 w-10 rounded-xl transition-all duration-200 relative",
                                    isActive
                                        ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                                        : "hover:bg-slate-800/60 hover:text-white"
                                )}
                            >
                                <Icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                {hasChildren && (
                                    <div className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-brand-teal" />
                                )}
                            </Link>

                            {/* Hover Tooltip (Shown when NOT open) */}
                            {!isOpen && (
                                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 rounded-md bg-[#0F172A] border border-slate-800 text-slate-200 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border-l-brand-teal border-l-2 z-40">
                                    {item.label}
                                </div>
                            )}

                            {/* Flyout Submenu Panel */}
                            {hasChildren && isOpen && (
                                <div
                                    className="absolute left-full top-0 ml-3 w-56 rounded-xl bg-[#0F172A] border border-slate-800 p-2 shadow-2xl space-y-0.5 z-50 animate-in fade-in slide-in-from-left-2 duration-150"
                                >
                                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-800/60 mb-1">
                                        <Link href={primaryHref} className="text-slate-400 hover:text-white transition-colors">
                                            {item.label}
                                        </Link>
                                    </div>
                                    <div className="max-h-80 overflow-y-auto space-y-0.5 custom-scrollbar">
                                        {item.children?.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className={cn(
                                                    "block px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800/80 hover:text-white rounded-lg transition-colors",
                                                    pathname === child.href && "text-brand-teal font-semibold bg-brand-blue/10"
                                                )}
                                                onClick={() => setActiveGroup(null)}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            <div className="mt-auto w-full border-t border-slate-800/60 px-2 pt-4">
                <div className="flex flex-col items-center gap-3">
                    <Link
                        href="/contact"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-[11px] font-semibold text-white transition-all hover:bg-brand-blue-light"
                        title="Talk to us"
                    >
                        Go
                    </Link>
                    <button
                        type="button"
                        onClick={() => setViewMode("top")}
                        className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all duration-200"
                        title="Switch to Top Navbar"
                    >
                        <ArrowLeftSquare className="h-4.5 w-4.5" />
                    </button>
                </div>
            </div>
        </aside>
    );
}
