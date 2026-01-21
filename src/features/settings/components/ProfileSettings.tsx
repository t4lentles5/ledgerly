import { getDictionary } from '@lib/i18n';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface ProfileSettingsProps {
  dict: Dictionary;
}

export const ProfileSettings = ({ dict }: ProfileSettingsProps) => {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <div className='bg-violet-surface text-violet flex h-12 w-12 shrink-0 items-center justify-center rounded-full'>
          <span className='icon-[fluent--person-20-filled] text-2xl' />
        </div>
        <div>
          <h2 className='text-lg font-bold'>{dict.settings_view.profile}</h2>
          <p className='text-muted-foreground text-sm'>
            {dict.settings_view.profile_description}
          </p>
        </div>
      </div>

      <div className='bg-card rounded-2xl border p-6 shadow-sm'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='fullName' className='text-sm font-medium'>
              {dict.settings_view.full_name}
            </label>
            <input
              type='text'
              id='fullName'
              defaultValue='John Doe'
              className='bg-background border-border focus:border-primary rounded-xl border px-4 py-3 transition-colors outline-none'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-sm font-medium'>
              {dict.settings_view.email}
            </label>
            <input
              type='email'
              id='email'
              defaultValue='john.doe@example.com'
              className='bg-background border-border focus:border-primary rounded-xl border px-4 py-3 transition-colors outline-none'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
