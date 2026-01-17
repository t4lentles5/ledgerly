import { getDictionary } from '@lib/i18n';

import { Header } from '@shared/ui/header/Header';

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header title={dict.header.settings.title} dict={dict} />
    </>
  );
}
