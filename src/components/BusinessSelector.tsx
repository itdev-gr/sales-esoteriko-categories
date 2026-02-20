import type { ChangeEvent } from 'react';

export type BusinessSelectorProps = {
  value: string;
  options: readonly string[];
  onChange: (businessType: string) => void;
  label?: string;
};

export function BusinessSelector({
  value,
  options,
  onChange,
  label = 'Τύπος επιχείρησης',
}: BusinessSelectorProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="business-type" className="text-sm font-medium text-slate-600">
        {label}
      </label>
      <select
        id="business-type"
        value={value}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        aria-label={label}
      >
        <option value="">— Επίλεξε τύπο επιχείρησης —</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
