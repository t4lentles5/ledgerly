import { Header } from '@/shared/ui/header/Header';
import { getDictionary } from '@lib/i18n';

export default async function BudgetsPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header
        title={dict.header.budgets.title}
        searchPlaceholder={dict.header.search_placeholder}
      />
    </>
  );
}
