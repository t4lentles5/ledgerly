import { Budget } from '../types';

interface BudgetCardProps {
  budget: Budget;
  spentLabel: string;
  ofLabel: string;
}

export const BudgetCard = ({
  budget,
  spentLabel,
  ofLabel,
}: BudgetCardProps) => {
  const percentage = Math.min((budget.spent / budget.limit) * 100, 100);
  const isOverBudget = budget.spent > budget.limit;

  const formattedSpent = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(budget.spent);

  const formattedLimit = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(budget.limit);

  return (
    <article className='group bg-card hover:border-primary/20 hover:bg-surface-hover flex grow flex-col gap-4 rounded-xl border p-4 transition-all duration-200 sm:max-w-xs sm:p-5'>
      <header className='flex items-center gap-3'>
        <div
          className={`${budget.surfaceClass} grid h-10 w-10 shrink-0 place-items-center rounded-2xl transition-transform duration-200 group-hover:scale-105`}
        >
          <span
            className={`${budget.icon} text-lg`}
            role='img'
            aria-hidden='true'
          />
        </div>

        <div className='flex flex-col'>
          <span className='line-clamp-1 text-sm font-semibold sm:text-base'>
            {budget.name}
          </span>
          <span className='text-muted-foreground text-xs'>
            {spentLabel} {formattedSpent} {ofLabel} {formattedLimit}
          </span>
        </div>
      </header>

      <section className='flex flex-col gap-2'>
        <div className='bg-surface-active h-2 w-full overflow-hidden rounded-full'>
          <div
            className={`h-full transition-all duration-500 ease-in-out ${
              isOverBudget ? 'bg-red' : 'bg-primary'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className='flex justify-between text-xs font-medium'>
          <span className={isOverBudget ? 'text-red' : 'text-muted-foreground'}>
            {Math.round((budget.spent / budget.limit) * 100)}%
          </span>
          {isOverBudget && (
            <span className='text-red font-bold'>
              +
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(budget.spent - budget.limit)}
            </span>
          )}
        </div>
      </section>
    </article>
  );
};
