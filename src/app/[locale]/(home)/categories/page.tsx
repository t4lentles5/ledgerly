import { getDictionary } from '@lib/i18n';

import { getCategories } from '@features/categories/data';
import { CategoryCard } from '@features/categories/components/CategoryCard';
import { Header } from '@shared/ui/header/Header';

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
        dict={dict}
      />

      <div className='mb-16 flex flex-col gap-3 px-3 sm:flex-row sm:flex-wrap lg:gap-5 lg:px-0'>
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
