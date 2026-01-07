import { getDictionary } from '@lib/i18n';
import { Budget } from './types';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const getBudgets = (dict: Dictionary): Budget[] => [
  {
    id: 'food',
    name: dict.categories_list.food,
    icon: 'icon-[fluent--food-20-regular] text-orange',
    surfaceClass: 'bg-orange-surface',
    spent: 1200,
    limit: 1500,
  },
  {
    id: 'transport',
    name: dict.categories_list.transport,
    icon: 'icon-[raphael--bus] text-amber',
    surfaceClass: 'bg-amber-surface',
    spent: 100,
    limit: 150,
  },
  {
    id: 'shopping',
    name: dict.categories_list.shopping,
    icon: 'icon-[material-symbols-light--shopping-cart-outline-rounded] text-violet',
    surfaceClass: 'bg-violet-surface',
    spent: 2100,
    limit: 2000,
  },
  {
    id: 'entertainment',
    name: dict.categories_list.entertainment,
    icon: 'icon-[hugeicons--tv-01] text-pink',
    surfaceClass: 'bg-pink-surface',
    spent: 500,
    limit: 800,
  },
  {
    id: 'health',
    name: dict.categories_list.health,
    icon: 'icon-[iconoir--heart] text-red',
    surfaceClass: 'bg-red-surface',
    spent: 200,
    limit: 300,
  },
];
