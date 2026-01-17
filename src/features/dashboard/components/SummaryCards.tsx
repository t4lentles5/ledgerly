import { getDictionary } from '@lib/i18n';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface SummaryCardsProps {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  dict: Dictionary;
}

export const SummaryCards = ({
  totalIncome,
  totalExpenses,
  balance,
  dict,
}: SummaryCardsProps) => {
  return (
    <section className='grid grid-cols-1 gap-4 md:grid-cols-3'>
      <div className='bg-card rounded-2xl border p-6 shadow-sm'>
        <div className='flex items-center gap-4'>
          <div className='text-green bg-green-surface flex h-12 w-12 shrink-0 items-center justify-center rounded-full'>
            <span className='icon-[meteor-icons--dollar] text-2xl' />
          </div>
          <div>
            <p className='text-muted-foreground text-sm font-medium'>
              {dict.categories_list.income}
            </p>
            <h3 className='text-2xl font-bold'>${totalIncome.toFixed(2)}</h3>
          </div>
        </div>
      </div>

      <div className='bg-card rounded-2xl border p-6 shadow-sm'>
        <div className='flex items-center gap-4'>
          <div className='bg-red-surface text-red flex h-12 w-12 shrink-0 items-center justify-center rounded-full'>
            <span className='icon-[fluent--arrow-trending-down-20-filled] text-2xl' />
          </div>
          <div>
            <p className='text-muted-foreground text-sm font-medium'>
              {dict.categories_list.transactions}
            </p>
            <h3 className='text-2xl font-bold'>
              ${Math.abs(totalExpenses).toFixed(2)}
            </h3>
          </div>
        </div>
      </div>

      <div className='bg-card rounded-2xl border p-6 shadow-sm'>
        <div className='flex items-center gap-4'>
          <div className='bg-blue-surface text-blue flex h-12 w-12 shrink-0 items-center justify-center rounded-full'>
            <span className='icon-[fluent--wallet-20-filled] text-2xl' />
          </div>
          <div>
            <p className='text-muted-foreground text-sm font-medium'>
              {dict.dashboard_view.balance}
            </p>
            <h3 className='text-2xl font-bold'>${balance.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
