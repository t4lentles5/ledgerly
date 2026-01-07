import { getDictionary } from '@lib/i18n';

import { getBudgets } from '@/features/budgets/data';
import { BudgetCard } from '@/features/budgets/components/BudgetCard';
import { Header } from '@/shared/ui/header/Header';

export default async function BudgetsPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const budgets = getBudgets(dict);

  return (
    <>
      <Header
        title={dict.header.budgets.title}
        searchPlaceholder={dict.header.search_placeholder}
      />

      <div className='mb-16 flex flex-col gap-3 px-3 sm:flex-row sm:flex-wrap lg:gap-5 lg:px-0'>
        {budgets.map((budget) => (
          <BudgetCard
            key={budget.id}
            budget={budget}
            spentLabel={dict.budgets_list.spent}
            ofLabel={dict.budgets_list.of}
          />
        ))}
      </div>
    </>
  );
}
