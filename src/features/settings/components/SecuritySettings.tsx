import { getDictionary } from '@lib/i18n';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface SecuritySettingsProps {
  dict: Dictionary;
}

export const SecuritySettings = ({ dict }: SecuritySettingsProps) => {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <div className='bg-red-surface text-red flex h-12 w-12 shrink-0 items-center justify-center rounded-full'>
          <span className='icon-[fluent--shield-lock-20-filled] text-2xl' />
        </div>
        <div>
          <h2 className='text-lg font-bold'>{dict.settings_view.security}</h2>
          <p className='text-muted-foreground text-sm'>
            {dict.settings_view.security_description}
          </p>
        </div>
      </div>

      <div className='bg-card rounded-2xl border p-6 shadow-sm'>
        <div className='flex flex-col gap-4'>
          <button className='hover:bg-surface-hover active:bg-surface-active flex items-center justify-between rounded-xl border p-4 transition-colors'>
            <div className='flex items-center gap-3'>
              <span className='icon-[fluent--key-20-filled] text-primary text-xl' />
              <span className='text-sm font-medium'>
                {dict.settings_view.change_password}
              </span>
            </div>
            <span className='icon-[fluent--chevron-right-20-filled] text-muted-foreground' />
          </button>

          <div className='border-border border-t pt-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <span className='icon-[fluent--shield-checkmark-20-filled] text-primary text-xl' />
                <div>
                  <p className='text-sm font-medium'>
                    {dict.settings_view.two_factor}
                  </p>
                  <p className='text-muted-foreground text-xs'>
                    {dict.settings_view.two_factor_desc}
                  </p>
                </div>
              </div>
              <label className='relative inline-flex cursor-pointer items-center'>
                <input type='checkbox' className='peer sr-only' />
                <div className="peer bg-border after:bg-background peer-checked:bg-primary peer-focus:ring-primary/50 h-6 w-11 rounded-full peer-focus:ring-2 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:transition-all after:content-[''] peer-checked:after:translate-x-full"></div>
              </label>
            </div>
          </div>

          <div className='border-border border-t pt-4'>
            <button className='group hover:bg-red-surface/10 active:bg-red-surface/20 border-red/20 hover:border-red/40 flex w-full items-center justify-between rounded-xl border p-4 transition-all'>
              <div className='flex items-center gap-3'>
                <div className='bg-red-surface text-red group-hover:bg-red/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors'>
                  <span className='icon-[fluent--delete-20-filled] text-lg' />
                </div>
                <div className='text-left'>
                  <p className='text-red text-sm font-semibold'>
                    {dict.settings_view.delete_account}
                  </p>
                  <p className='text-muted-foreground text-xs'>
                    {dict.settings_view.delete_account_desc}
                  </p>
                </div>
              </div>
              <span className='icon-[fluent--chevron-right-20-filled] text-red transition-transform group-hover:translate-x-1' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
