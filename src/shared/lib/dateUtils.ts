import { getDictionary } from './i18n';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const formatTransactionDate = (
  dateStr: string,
  locale: string,
  dict: Dictionary['date_format'],
) => {
  const date = new Date(dateStr);
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  const diffTime = today.getTime() - targetDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  });

  const formattedTime = timeFormatter.format(date);
  let datePart = '';

  if (diffDays === 0) {
  }

  if (diffDays === 1) {
    datePart = dict.yesterday;
  } else {
    if (isSameWeek(today, targetDate)) {
      datePart = new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(
        date,
      );

      datePart = datePart.charAt(0).toUpperCase() + datePart.slice(1);
    } else {
      datePart = new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(date);
    }
  }

  return `${datePart} ${dict.at} ${formattedTime}`;
};

function isSameWeek(d1: Date, d2: Date) {
  const d1c = new Date(d1);
  const d2c = new Date(d2);

  d1c.setHours(0, 0, 0, 0);
  d2c.setHours(0, 0, 0, 0);

  const day1 = d1c.getDay();
  const diff1 = d1c.getDate() - day1;
  const startOfWeek1 = new Date(d1c);
  startOfWeek1.setDate(diff1);

  return d2c >= startOfWeek1;
}
