import type { Metadata } from 'next';

import { getDictionary } from '@lib/i18n';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Ledgerly',
  description: 'Finance Dashboard',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;

  await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
