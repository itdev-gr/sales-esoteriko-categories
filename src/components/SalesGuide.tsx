import { useState } from 'react';
import { BusinessSelector } from './BusinessSelector';
import { StrategyCard } from './StrategyCard';
import { BUSINESS_TYPES, getStrategy } from '../lib/decisionEngine';

export function SalesGuide() {
  const [businessType, setBusinessType] = useState('');

  const strategy = businessType ? getStrategy(businessType) : null;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <BusinessSelector
          value={businessType}
          options={BUSINESS_TYPES}
          onChange={setBusinessType}
          label="Επίλεξε τύπο επιχείρησης"
        />
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {!strategy && (
          <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-4 py-6 text-center text-sm text-slate-500 sm:py-8">
            Πληκτρολόγησε ή διάλεξε τύπο επιχείρησης για να εμφανιστούν οι στρατηγικές.
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
