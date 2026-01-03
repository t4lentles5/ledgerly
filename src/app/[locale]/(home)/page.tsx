import { Header } from '@/shared/ui/header/Header';
import { getDictionary } from '@lib/i18n';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const dateOptions = [
    { label: dict.header.date_options.this_month, value: '' },
    { label: dict.header.date_options.last_month, value: 'last_month' },
    { label: dict.header.date_options.year_to_date, value: 'year_to_date' },
  ];

  return (
    <>
      <Header title={dict.header.dashboard.title} dateOptions={dateOptions} />
    </>
  );
}
