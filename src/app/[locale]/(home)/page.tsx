import { getDictionary } from '@lib/i18n';

import { getTransactions } from '@features/transactions/data';
import { getBudgets } from '@features/budgets/data';
import { SummaryCards } from '@features/dashboard/components/SummaryCards';
import { FinancialOverview } from '@features/dashboard/components/FinancialOverview';
import { RecentTransactions } from '@features/dashboard/components/RecentTransactions';

import { Header } from '@shared/ui/header/Header';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const transactions = getTransactions(dict);
  const budgets = getBudgets(dict);

  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome + totalExpenses;

  const recentTransactions = transactions
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <>
      <Header title={dict.header.dashboard.title} showDateFilter dict={dict} />

      <div className='mb-16 flex flex-col gap-6 px-3 lg:gap-8 lg:px-0'>
        <SummaryCards
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          balance={balance}
          dict={dict}
        />

        <FinancialOverview
          transactions={transactions}
          budgets={budgets}
          dict={dict}
        />

        <RecentTransactions
          transactions={recentTransactions}
          locale={locale}
          dict={dict}
        />
      </div>
    </>
  );
}
