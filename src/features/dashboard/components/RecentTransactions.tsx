import { getDictionary } from '@lib/i18n';

import { Transaction } from '@features/transactions/types';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface RecentTransactionsProps {
  transactions: Transaction[];
  locale: 'en' | 'es';
  dict: Dictionary;
}

export const RecentTransactions = ({
  transactions,
  locale,
  dict,
}: RecentTransactionsProps) => {
  return (
    <section className='flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-bold'>{dict.header.transactions.title}</h2>
        <button className='text-primary text-sm font-medium hover:underline'>
          {dict.dashboard_view.view_all}
        </button>
      </div>

      <div className='bg-card overflow-hidden rounded-2xl border shadow-sm'>
        <div className='flex flex-col divide-y'>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className='hover:bg-surface-hover flex items-center justify-between p-4 transition-colors duration-200 ease-in-out'
            >
              <div className='flex items-center gap-3'>
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${transaction.categorySurfaceClass}`}
                >
                  <span className={`${transaction.categoryIcon} text-lg`} />
                </div>
                <div className='min-w-0'>
                  <p className='truncate text-sm font-medium'>
                    {transaction.name}
                  </p>
                  <p className='text-muted-foreground text-xs'>
                    {new Date(transaction.date).toLocaleDateString(locale, {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <div className='shrink-0 text-right'>
                <span
                  className={`text-sm font-medium ${
                    transaction.amount > 0 ? 'text-green' : 'text-red'
                  }`}
                >
                  {transaction.amount > 0 ? '+' : ''}$
                  {Math.abs(transaction.amount).toFixed(0)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
