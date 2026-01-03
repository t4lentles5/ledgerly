import { Select } from './Select';

interface HeaderProps {
  title: string;
  searchPlaceholder?: string;
  dateOptions?: { label: string; value: string }[];
  dateDefaultValue?: string;
}

export const Header = ({
  title,
  searchPlaceholder,
  dateOptions,
  dateDefaultValue,
}: HeaderProps) => {
  return (
    <>
      <header className='flex items-center w-full justify-between pb-4 border-b border-border mb-4'>
        <h2 className='text-xl font-bold tracking-tight text-foreground'>
          {title}
        </h2>

        <div className='flex items-center justify-end gap-4'>
          {searchPlaceholder && (
            <div className='relative w-64 hidden sm:block'>
              <span className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground icon-[iconoir--search]' />
              <input
                type='search'
                placeholder={searchPlaceholder}
                className='h-9 w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring transition-colors'
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
            className='inline-flex items-center justify-center rounded-md text-sm text-muted-foreground font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-foreground h-9 w-9'
            type='button'
            aria-label='Notifications'
          >
            <span
              className='h-5 w-5 icon-[iconoir--bell]'
              role='img'
              aria-hidden='true'
            />
          </button>
        </div>
      </header>
    </>
  );
};
