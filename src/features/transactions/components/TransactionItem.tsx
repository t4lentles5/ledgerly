import { getDictionary } from '@lib/i18n';
import { formatTransactionDate } from '@lib/dateUtils';
import { Transaction } from '../types';

interface TransactionItemProps {
  transaction: Transaction;
  locale: string;
  dateFormatDict: Awaited<ReturnType<typeof getDictionary>>['date_format'];
}

export const TransactionItem = ({
  transaction,
  locale,
  dateFormatDict,
}: TransactionItemProps) => {
  const formattedAmount = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
  }).format(transaction.amount);

  const isPositive = transaction.amount > 0;
  const amountColor = isPositive ? 'text-green' : 'text-red';

  const formattedDate = formatTransactionDate(
    transaction.date,
    locale,
    dateFormatDict,
  );

  return (
    <article className='group bg-card hover:border-primary/20 hover:bg-surface-hover flex flex-row items-center justify-between rounded-xl border p-4 transition-all duration-200'>
      <div className='flex min-w-0 items-center gap-4'>
        <div
          className={`${transaction.categorySurfaceClass} grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-transform duration-200 group-hover:scale-105`}
        >
          <span
            className={`${transaction.categoryIcon} text-xl`}
            role='img'
            aria-hidden='true'
          />
        </div>

        <div className='flex min-w-0 flex-col gap-1'>
          <span className='text-foreground truncate font-medium tracking-tight'>
            {transaction.name}
          </span>
          <div className='text-muted-foreground flex items-center gap-2 text-xs font-medium'>
            <span className='whitespace-nowrap'>{transaction.category}</span>
            <span className='scale-50 text-xs'>●</span>
            <span className='truncate capitalize'>{formattedDate}</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-end gap-1.5'>
        <span
          className={`font-mono font-semibold tracking-tight ${amountColor} text-base`}
        >
          {isPositive ? '+' : ''}
          {formattedAmount}
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
            transaction.status === 'completed'
              ? 'bg-green-surface text-green'
              : transaction.status === 'pending'
                ? 'bg-yellow-surface text-yellow'
                : 'bg-red-surface text-red'
          }`}
        >
          {transaction.status}
        </span>
      </div>
    </article>
  );
};
