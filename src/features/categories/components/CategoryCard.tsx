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
    <article className='bg-card flex max-w-52 grow flex-col gap-3 rounded-lg border p-5 transition-shadow hover:shadow-sm'>
      <header className='flex items-center gap-3'>
        <div
          className={`${category.surfaceClass} grid h-12 w-12 place-items-center rounded-full`}
        >
          <span className={`${category.icon} text-xl`} role='img' aria-hidden='true' />
        </div>

        <div className='flex flex-col'>
          <span className='line-clamp-1 font-semibold'>{category.name}</span>
          <span className='text-muted-foreground text-xs'>
            {category.transactions} {transactionsLabel}
          </span>
        </div>
      </header>

      <section className='mt-1 flex flex-col'>
        <span className='text-2xl font-bold tracking-tight'>{formattedAmount}</span>
      </section>
    </article>
  );
};
