import { getDictionary } from '@lib/i18n';

import { getTransactions } from '@features/transactions/data';
import { TransactionItem } from '@features/transactions/components/TransactionItem';
import { Header } from '@shared/ui/header/Header';

export default async function TransactionsPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const transactions = getTransactions(dict);

  return (
    <>
      <Header
        title={dict.header.transactions.title}
        searchPlaceholder={dict.transactions_view.search_placeholder}
        showDateFilter
        dict={dict}
      />

      <div className='mb-16 flex flex-col gap-3 px-3 lg:px-0'>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            locale={locale}
            dateFormatDict={dict.date_format}
          />
        ))}
      </div>
    </>
  );
}
