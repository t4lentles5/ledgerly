import { getDictionary } from '@lib/i18n';

import { Header } from '@/shared/ui/header/Header';
import { getDateOptions } from '@/shared/config/date-options';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const dateOptions = getDateOptions(dict);

  return (
    <>
      <Header title={dict.header.dashboard.title} dateOptions={dateOptions} />
    </>
  );
}
