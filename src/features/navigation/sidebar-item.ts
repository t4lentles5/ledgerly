import { getDictionary } from '@lib/i18n';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const getSidebarItems = (locale: string, dict: Dictionary) => [
  {
    label: dict.sidebar.dashboard,
    href: `/${locale}`,
    icon: 'icon-[streamline--dashboard-3]',
  },
  {
    label: dict.sidebar.transactions,
    href: `/${locale}/transactions`,
    icon: 'icon-[lucide--receipt]',
  },
  {
    label: dict.sidebar.categories,
    href: `/${locale}/categories`,
    icon: 'icon-[akar-icons--tag]',
  },
  {
    label: dict.sidebar.budgets,
    href: `/${locale}/budgets`,
    icon: 'icon-[streamline--money-cash-bill-3-accounting-billing-payment-finance-cash-currency-money-bill]',
  },
];

export const getSettingsItem = (locale: string, dict: Dictionary) => ({
  label: dict.sidebar.settings,
  href: `/${locale}/settings`,
  icon: 'icon-[simple-line-icons--settings]',
});
