import { getDictionary } from '@lib/i18n';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const getDateOptions = (dict: Dictionary) => [
  { label: dict.header.date_options.this_month, value: '' },
  { label: dict.header.date_options.last_month, value: 'last_month' },
  { label: dict.header.date_options.year_to_date, value: 'year_to_date' },
];
