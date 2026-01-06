import { getDictionary } from '@lib/i18n';

import { getCategories } from '@/features/categories/data';
import { CategoryCard } from '@/features/categories/components/CategoryCard';
import { Header } from '@/shared/ui/header/Header';

export default async function CategoriesPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const categories = getCategories(dict);

  return (
    <>
      <Header
        title={dict.header.categories.title}
        searchPlaceholder={dict.header.search_placeholder}
      />

      <div className='flex flex-wrap gap-5'>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            transactionsLabel={dict.categories_list.transactions}
          />
        ))}
      </div>
    </>
  );
}
