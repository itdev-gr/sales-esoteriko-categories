import type { ReactNode } from 'react';

export type StrategyCardVariant = 'main' | 'secondary' | 'performance' | 'avoid';

export type StrategyCardProps = {
  title: string;
  children: ReactNode;
  variant: StrategyCardVariant;
};

const variantStyles: Record<
  StrategyCardVariant,
  { card: string; title: string }
> = {
  main: {
    card: 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500/30',
    title: 'text-indigo-800 font-bold',
  },
  secondary: {
    card: 'border-slate-300 bg-slate-50',
    title: 'text-slate-700 font-semibold',
  },
  performance: {
    card: 'border-slate-300 bg-slate-50',
    title: 'text-slate-700 font-semibold',
  },
  avoid: {
    card: 'border-amber-300 bg-amber-50/80',
    title: 'text-amber-800 font-semibold',
  },
};

export function StrategyCard({ title, children, variant }: StrategyCardProps) {
  const styles = variantStyles[variant];

  return (
    <section
      className={`rounded-xl border px-4 py-3 ${styles.card}`}
      aria-labelledby={`card-${variant}`}
    >
      <h2 id={`card-${variant}`} className={`mb-2 text-sm uppercase tracking-wide ${styles.title}`}>
        {title}
      </h2>
      <div className="text-slate-700 leading-relaxed">{children}</div>
    </section>
  );
}
