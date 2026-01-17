import { getDictionary } from '@lib/i18n';

import { Transaction } from '@features/transactions/types';
import { Budget } from '@features/budgets/types';
import { ExpensesChart } from './ExpensesChart';
import { BudgetStatus } from './BudgetStatus';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface FinancialOverviewProps {
  transactions: Transaction[];
  budgets: Budget[];
  dict: Dictionary;
}

export const FinancialOverview = ({
  transactions,
  budgets,
  dict,
}: FinancialOverviewProps) => {
  return (
    <section className='flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-bold'>
          {dict.dashboard_view.financial_overview}
        </h2>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='bg-card flex flex-col items-center rounded-2xl border p-6 shadow-sm'>
          <h3 className='mb-4 w-full text-sm font-medium'>
            {dict.dashboard_view.expenses_categories}
          </h3>
          <ExpensesChart
            transactions={transactions}
            noDataLabel={dict.dashboard_view.no_expenses}
          />
        </div>

        <div className='bg-card flex flex-col rounded-2xl border p-6 shadow-sm'>
          <h3 className='mb-4 text-sm font-medium'>
            {dict.dashboard_view.budget_status}
          </h3>
          <BudgetStatus
            budgets={budgets}
            viewAllLabel={dict.dashboard_view.view_all}
          />
        </div>
      </div>
    </section>
  );
};
