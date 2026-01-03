import { Header } from '@/shared/ui/header/Header';
import { getDictionary } from '@lib/i18n';

export default async function CategoriesPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header
        title={dict.header.categories.title}
        searchPlaceholder={dict.header.search_placeholder}
      />
    </>
  );
}
