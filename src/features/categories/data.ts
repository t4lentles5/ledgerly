import { getDictionary } from '@lib/i18n';
import { createClient } from '@shared/lib/supabase/server';
import { Category, SupabaseCategory } from './types';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const getCategoryTranslationKey = (
  categoryId: string,
): keyof Dictionary['categories_list'] | null => {
  const translationMap: Record<string, keyof Dictionary['categories_list']> = {
    income: 'income',
    food: 'food',
    housing: 'housing',
    transport: 'transport',
    shopping: 'shopping',
    entertainment: 'entertainment',
    health: 'health',
    utilities: 'utilities',
    savings: 'savings',
    education: 'education',
    travel: 'travel',
    other: 'other',
  };

  return translationMap[categoryId] || null;
};

export const getCategoriesFromSupabase = async (
  dict: Dictionary,
): Promise<Category[]> => {
  const supabase = await createClient();

  const { data: categoriesData, error } = await supabase
    .from('categories')
    .select('*');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  if (!categoriesData) {
    return [];
  }

  return categoriesData.map((category: SupabaseCategory) => {
    const translationKey = getCategoryTranslationKey(category.id);
    const translatedName = translationKey
      ? dict.categories_list[translationKey]
      : category.id.charAt(0).toUpperCase() + category.id.slice(1);

    return {
      id: category.id,
      name: translatedName,
      icon: category.icon,
      surfaceClass: category.surface_class,
      type: category.type,
      transactions: 0,
      amount: 0,
    };
  });
};
