import { Select } from './Select';
import { getDateOptions } from '@shared/config/date-options';
import { getDictionary } from '@lib/i18n';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface HeaderProps {
  title: string;
  searchPlaceholder?: string;
  showDateFilter?: boolean;
  dateDefaultValue?: string;
  dict: Dictionary;
}

export const Header = ({
  title,
  searchPlaceholder,
  showDateFilter = false,
  dateDefaultValue,
  dict,
}: HeaderProps) => {
  const dateOptions = showDateFilter ? getDateOptions(dict) : null;

  return (
    <>
      <header className='bg-background/80 sticky top-0 z-10 mb-3 flex h-16 items-center justify-between border-b px-5 backdrop-blur-md lg:mb-5 lg:px-0'>
        <h2 className='text-foreground text-xl font-bold tracking-tight'>
          {title}
        </h2>

        <div className='flex items-center justify-end gap-4'>
          {searchPlaceholder && (
            <div className='relative hidden w-64 lg:block'>
              <span className='text-muted-foreground icon-[iconoir--search] absolute top-2.5 left-2.5 h-4 w-4' />
              <input
                type='search'
                placeholder={searchPlaceholder}
                className='bg-background placeholder:text-muted-foreground focus:ring-primary h-9 w-full rounded-md border py-2 pr-4 pl-9 text-sm transition-colors outline-none focus:ring-1'
              />
            </div>
          )}
          {dateOptions && (
            <Select
              options={dateOptions}
              defaultValue={dateDefaultValue || ''}
              className='w-40'
            />
          )}
          <button
            type='button'
            aria-label='Notifications'
            className='text-muted-foreground hover:bg-surface-hover hover:text-foreground focus-visible:ring-primary active:bg-surface-active inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'
          >
            <span
              className='icon-[iconoir--bell] h-5 w-5'
              role='img'
              aria-hidden='true'
            />
          </button>
        </div>
      </header>
    </>
  );
};
