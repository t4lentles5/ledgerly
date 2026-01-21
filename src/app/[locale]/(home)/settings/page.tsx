import { getDictionary } from '@lib/i18n';

import { ProfileSettings } from '@features/settings/components/ProfileSettings';
import { PreferencesSettings } from '@features/settings/components/PreferencesSettings';
import { SecuritySettings } from '@features/settings/components/SecuritySettings';

import { Header } from '@shared/ui/header/Header';

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header title={dict.header.settings.title} dict={dict} />

      <div className='mb-16 flex flex-col gap-6 px-3 lg:gap-8 lg:px-0'>
        <ProfileSettings dict={dict} />

        <PreferencesSettings dict={dict} locale={locale} />

        <SecuritySettings dict={dict} />

        <div className='flex gap-3'>
          <button className='bg-primary hover:bg-primary/90 flex-1 rounded-xl px-6 py-3 font-medium text-white transition-colors'>
            {dict.settings_view.save_changes}
          </button>
          <button className='hover:bg-surface-hover active:bg-surface-active rounded-xl border px-6 py-3 font-medium transition-colors'>
            {dict.settings_view.cancel}
          </button>
        </div>
      </div>
    </>
  );
}
