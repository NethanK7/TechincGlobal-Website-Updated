type BarDatum = {
  label: string;
  value: string;
  widthClass: string;
  toneClass?: string;
  note?: string;
};

type FlowDatum = {
  title: string;
  description: string;
};

export function BarChartCard({
  eyebrow,
  title,
  items,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  items: BarDatum[];
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft"
          : "rounded-3xl border border-surface-border bg-white p-6 shadow-soft"
      }
    >
      <span
        className={
          dark
            ? "text-[10px] font-semibold uppercase tracking-widest text-brand-teal"
            : "text-[10px] font-semibold uppercase tracking-widest text-brand-blue"
        }
      >
        {eyebrow}
      </span>
      <h3 className={dark ? "mt-2 text-lg font-bold text-white" : "mt-2 text-lg font-bold text-text-primary"}>
        {title}
      </h3>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between gap-4">
              <span className={dark ? "text-sm text-white/70" : "text-sm text-text-secondary"}>
                {item.label}
              </span>
              <span className={dark ? "text-sm font-bold text-white" : "text-sm font-bold text-text-primary"}>
                {item.value}
              </span>
            </div>
            <div
              className={
                dark
                  ? "mt-2 h-3 rounded-full border border-white/10 bg-slate-900/70"
                  : "mt-2 h-3 rounded-full border border-surface-border bg-[#F4F7F9]"
              }
            >
              <div
                className={`h-full rounded-full ${item.widthClass} ${
                  item.toneClass ?? (dark ? "bg-brand-teal" : "bg-brand-blue")
                }`}
              />
            </div>
            {item.note && (
              <p className={dark ? "mt-1 text-[11px] text-white/50" : "mt-1 text-[11px] text-text-muted"}>
                {item.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FlowDiagramCard({
  eyebrow,
  title,
  steps,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  steps: FlowDatum[];
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft"
          : "rounded-3xl border border-surface-border bg-white p-6 shadow-soft"
      }
    >
      <span
        className={
          dark
            ? "text-[10px] font-semibold uppercase tracking-widest text-brand-teal"
            : "text-[10px] font-semibold uppercase tracking-widest text-brand-blue"
        }
      >
        {eyebrow}
      </span>
      <h3 className={dark ? "mt-2 text-lg font-bold text-white" : "mt-2 text-lg font-bold text-text-primary"}>
        {title}
      </h3>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            <div
              className={
                dark
                  ? "rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                  : "rounded-2xl border border-surface-border bg-[#F9FBFC] p-4"
              }
            >
              <span
                className={
                  dark
                    ? "text-[10px] font-semibold uppercase tracking-widest text-brand-teal"
                    : "text-[10px] font-semibold uppercase tracking-widest text-brand-blue"
                }
              >
                Step {index + 1}
              </span>
              <h4 className={dark ? "mt-2 text-sm font-bold text-white" : "mt-2 text-sm font-bold text-text-primary"}>
                {step.title}
              </h4>
              <p className={dark ? "mt-2 text-xs leading-relaxed text-white/60" : "mt-2 text-xs leading-relaxed text-text-secondary"}>
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="pointer-events-none absolute top-1/2 -right-2 hidden h-px w-4 bg-brand-blue/30 xl:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
