import { Budget } from '@features/budgets/types';

interface BudgetStatusProps {
  budgets: Budget[];
  viewAllLabel: string;
}

export function BudgetStatus({ budgets, viewAllLabel }: BudgetStatusProps) {
  const sortedBudgets = [...budgets]
    .sort((a, b) => {
      const aPercent = a.spent / a.limit;
      const bPercent = b.spent / b.limit;
      return bPercent - aPercent;
    })
    .slice(0, 4);

  return (
    <div className='flex w-full flex-col gap-4'>
      {sortedBudgets.map((budget) => {
        const percentage = Math.min((budget.spent / budget.limit) * 100, 100);
        let colorClass = 'bg-blue';

        if (percentage >= 100) {
          colorClass = 'bg-red';
        } else if (percentage >= 80) {
          colorClass = 'bg-amber';
        }

        return (
          <div key={budget.id} className='flex flex-col gap-2'>
            <div className='flex items-center justify-between text-sm'>
              <div className='flex items-center gap-2'>
                <span className={`${budget.icon}`} />
                <span className='text-foreground font-medium'>
                  {budget.name}
                </span>
              </div>
              <div className='text-foreground'>
                <span className='text-foreground font-semibold'>
                  ${budget.spent}
                </span>
                <span className='mx-1 text-xs'>/</span>
                <span className='text-xs'>${budget.limit}</span>
              </div>
            </div>

            <div className='bg-muted-foreground h-2 w-full overflow-hidden rounded-full'>
              <div
                className={`h-full rounded-full transition-all duration-200 ease-in-out ${colorClass}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}

      <button className='text-primary mt-2 text-center text-sm font-medium hover:underline'>
        {viewAllLabel}
      </button>
    </div>
  );
}
