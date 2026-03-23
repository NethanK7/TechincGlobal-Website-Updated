import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Search, X, CornerDownLeft, FileText, Briefcase, Factory } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/content/services';
import { caseStudies } from '@/content/case-studies';
import { industries } from '@/content/industries';

interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  icon?: any;
}

export function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Combine items into a searchable array
  const searchItems: SearchItem[] = [
    ...services.map((item) => ({
      title: item.title,
      description: item.description,
      href: `/services/${item.slug}`,
      category: 'Service',
      icon: Briefcase,
    })),
    ...caseStudies.map((item) => ({
      title: item.title,
      description: item.challenge || "",
      href: `/case-studies/${item.slug}`,
      category: 'Case Study',
      icon: FileText,
    })),
    ...industries.map((item) => ({
      title: item.title,
      description: item.description,
      href: `/industries/${item.slug}`,
      category: 'Industry',
      icon: Factory,
    })),
  ];

  const filteredItems = query
    ? searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-brand-navy/60 p-4 pt-20 backdrop-blur-sm transition-all duration-200">
      <div className="w-full max-w-2xl rounded-xl border border-surface-border bg-white shadow-card animate-in fade-in-0 zoom-in-95">
        {/* Search Input bar */}
        <div className="flex items-center gap-2 border-b border-surface-border px-4 py-3">
          <Search className="h-5 w-5 text-text-muted" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search our content, services, industries..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-base text-text-primary placeholder-text-muted outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-text-muted hover:bg-surface-muted hover:text-text-primary transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results layout */}
        <div className="max-h-[60vh] overflow-y-auto px-2 py-3">
          {query && filteredItems.length > 0 ? (
            <div className="space-y-1">
              {filteredItems.map((item) => {
                const IconComponent = item.icon || FileText;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-brand-blue/5 group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-muted text-text-secondary group-hover:bg-brand-blue-pale group-hover:text-brand-blue transition-colors">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary group-hover:text-brand-blue transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-text-muted line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase font-bold text-brand-teal tracking-wider bg-brand-teal/10 px-1.5 py-0.5 rounded">
                        {item.category}
                      </span>
                      <CornerDownLeft className="h-3.5 w-3.5 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : query && filteredItems.length === 0 ? (
            <p className="text-center py-6 text-sm text-text-muted">No results found for "{query}".</p>
          ) : (
            <p className="text-center py-6 text-sm text-text-muted">Type to search...</p>
          )}
        </div>
      </div>
    </div>
  );
}
