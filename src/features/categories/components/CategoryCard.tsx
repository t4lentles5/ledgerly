import { Category } from '../types';

interface CategoryCardInterface {
  category: Category;
  transactionsLabel: string;
}

export const CategoryCard = ({
  category,
  transactionsLabel,
}: CategoryCardInterface) => {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(category.amount);

  return (
    <article className='bg-card flex grow flex-row items-center justify-between rounded-lg border p-4 transition-shadow hover:shadow-sm sm:max-w-52 sm:flex-col sm:items-start sm:gap-3 sm:p-5'>
      <header className='flex items-center gap-3'>
        <div
          className={`${category.surfaceClass} grid h-10 w-10 shrink-0 place-items-center rounded-full sm:h-12 sm:w-12`}
        >
          <span
            className={`${category.icon} text-lg sm:text-xl`}
            role='img'
            aria-hidden='true'
          />
        </div>

        <div className='flex flex-col'>
          <span className='line-clamp-1 text-sm font-semibold sm:text-base'>
            {category.name}
          </span>
          <span className='text-muted-foreground text-xs'>
            {category.transactions} {transactionsLabel}
          </span>
        </div>
      </header>

      <section className='flex flex-col items-end sm:mt-1 sm:items-start'>
        <span className='text-lg font-bold tracking-tight sm:text-2xl'>
          {formattedAmount}
        </span>
      </section>
    </article>
  );
};
