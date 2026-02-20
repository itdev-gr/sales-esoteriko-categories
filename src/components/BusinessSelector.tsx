import { useState, useRef, useEffect } from 'react';

export type BusinessSelectorProps = {
  value: string;
  options: readonly string[];
  onChange: (businessType: string) => void;
  label?: string;
};

const MAX_VISIBLE_OPTIONS = 8;

export function BusinessSelector({
  value,
  options,
  onChange,
  label = 'Τύπος επιχείρησης',
}: BusinessSelectorProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered =
    query.trim() === ''
      ? options
      : options.filter((opt) =>
          opt.toLowerCase().includes(query.toLowerCase().trim())
        );

  const inputValue = open ? query : value;
  const showDropdown = open && filtered.length > 0;

  useEffect(() => {
    if (!value) setQuery('');
  }, [value]);

  const handleFocus = () => {
    setOpen(true);
    setQuery(''); // πλήρης λίστα ώστε να μπορεί να διαλέξει άλλη
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (opt: string) => {
    onChange(opt);
    setQuery('');
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <label htmlFor="business-type" className="mb-1.5 block text-sm font-medium text-slate-600">
        {label}
      </label>
      <div className="relative">
        <input
          id="business-type"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!e.target.value) onChange('');
            setOpen(true);
          }}
          onFocus={handleFocus}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
          }}
          placeholder="Πληκτρολόγησε για αναζήτηση..."
          className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-4 pr-10 text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          aria-label={label}
          aria-autocomplete="list"
          aria-expanded={showDropdown}
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange('');
              setQuery('');
              setOpen(true);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            title="Άλλαξε επιλογή"
            aria-label="Άλλαξε επιλογή"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        )}
      </div>
      {showDropdown && (
        <ul
          className="absolute z-10 mt-1 max-h-[min(18rem,50vh)] w-full overflow-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
          role="listbox"
        >
          {filtered.slice(0, MAX_VISIBLE_OPTIONS * 2).map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              onClick={() => handleSelect(opt)}
              className={`cursor-pointer px-4 py-2 text-sm transition ${
                opt === value
                  ? 'bg-indigo-50 text-indigo-800 font-medium'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {opt}
            </li>
          ))}
          {filtered.length > MAX_VISIBLE_OPTIONS * 2 && (
            <li className="px-4 py-2 text-xs text-slate-500 border-t border-slate-100">
              Συνέχισε να πληκτρολογείς για να δεις περισσότερα
            </li>
          )}
        </ul>
      )}
      {open && query.trim() && filtered.length === 0 && (
        <p className="absolute z-10 mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-lg">
          Δεν βρέθηκε κατηγορία. Δοκίμασε άλλο κείμενο.
        </p>
      )}
    </div>
  );
}
