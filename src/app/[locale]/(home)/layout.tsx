import { getDictionary } from '@lib/i18n';

import { getSettingsItem, getSidebarItems } from '@/features/navigation/data';
import { Sidebar } from '@/shared/ui/sidebar/Sidebar';
import { MobileNav } from '@/shared/ui/mobile-nav/MobileNav';

export default async function HomeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const items = getSidebarItems(locale, dict);
  const settingsItem = getSettingsItem(locale, dict);

  return (
    <>
      <Sidebar items={items} settingsItem={settingsItem} />

      <div className='flex items-center justify-center lg:mb-0 lg:ml-60'>
        <div className='w-full pb-3 lg:max-w-4xl lg:pb-5'>{children}</div>
      </div>

      <MobileNav items={items} settingsItem={settingsItem} />
    </>
  );
}
