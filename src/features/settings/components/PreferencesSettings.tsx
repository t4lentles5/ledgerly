import { getDictionary } from '@lib/i18n';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface PreferencesSettingsProps {
  dict: Dictionary;
  locale: 'en' | 'es';
}

export const PreferencesSettings = ({
  dict,
  locale,
}: PreferencesSettingsProps) => {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <div className='bg-blue-surface text-blue flex h-12 w-12 shrink-0 items-center justify-center rounded-full'>
          <span className='icon-[fluent--settings-20-filled] text-2xl' />
        </div>
        <div>
          <h2 className='text-lg font-bold'>
            {dict.settings_view.preferences}
          </h2>
          <p className='text-muted-foreground text-sm'>
            {dict.settings_view.preferences_description}
          </p>
        </div>
      </div>

      <div className='bg-card rounded-2xl border p-6 shadow-sm'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='language' className='text-sm font-medium'>
              {dict.settings_view.language}
            </label>
            <div className='relative'>
              <select
                id='language'
                defaultValue={locale}
                className='bg-background border-border focus:border-primary w-full appearance-none rounded-xl border py-3 pr-10 pl-4 transition-colors outline-none'
              >
                <option value='en'>English</option>
                <option value='es'>Español</option>
              </select>
              <span className='icon-[fluent--chevron-down-20-filled] text-muted-foreground pointer-events-none absolute top-1/2 right-3 -translate-y-1/2' />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='currency' className='text-sm font-medium'>
              {dict.settings_view.currency}
            </label>
            <div className='relative'>
              <select
                id='currency'
                defaultValue='usd'
                className='bg-background border-border focus:border-primary w-full appearance-none rounded-xl border py-3 pr-10 pl-4 transition-colors outline-none'
              >
                <option value='usd'>USD ($)</option>
                <option value='eur'>EUR (€)</option>
                <option value='gbp'>GBP (£)</option>
                <option value='mxn'>MXN ($)</option>
                <option value='pen'>PEN (S/)</option>
              </select>
              <span className='icon-[fluent--chevron-down-20-filled] text-muted-foreground pointer-events-none absolute top-1/2 right-3 -translate-y-1/2' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
