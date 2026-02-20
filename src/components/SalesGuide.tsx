import { useState } from 'react';
import { BusinessSelector } from './BusinessSelector';
import { StrategyCard } from './StrategyCard';
import { BUSINESS_TYPES, getStrategy } from '../lib/decisionEngine';

export function SalesGuide() {
  const [businessType, setBusinessType] = useState('');

  const strategy = businessType ? getStrategy(businessType) : null;

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <BusinessSelector
            value={businessType}
            options={BUSINESS_TYPES}
            onChange={setBusinessType}
          />
        </div>
      </aside>

      <div className="flex flex-col gap-4">
        {!strategy && (
          <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50/50 px-4 py-8 text-center text-slate-500">
            Επίλεξε τύπο επιχείρησης για να εμφανιστούν οι στρατηγικές.
          </p>
        )}

        {strategy && (
          <>
            <StrategyCard title="ΚΥΡΙΑ ΣΤΡΑΤΗΓΙΚΗ" variant="main">
              {strategy.main}
            </StrategyCard>
            <StrategyCard title="ΣΥΜΠΛΗΡΩΜΑΤΙΚΗ ΣΤΡΑΤΗΓΙΚΗ" variant="secondary">
              {strategy.secondary}
            </StrategyCard>
            <StrategyCard title="ΕΝΙΣΧΥΣΗ PERFORMANCE" variant="performance">
              {strategy.performance}
            </StrategyCard>
            <StrategyCard title="ΤΙ ΝΑ ΜΗΝ ΠΡΟΤΕΙΝΕΙΣ" variant="avoid">
              {strategy.avoid}
            </StrategyCard>
          </>
        )}
      </div>
    </div>
  );
}
