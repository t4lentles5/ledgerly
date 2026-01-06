import {
  getSettingsItem,
  getSidebarItems,
} from '@/features/navigation/sidebar-item';
import { Sidebar } from '@/shared/ui/sidebar/Sidebar';
import { getDictionary } from '@lib/i18n';

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
      <div className='ml-60 flex items-center justify-center'>
        <div className='w-full max-w-4xl p-2'>{children}</div>
      </div>
    </>
  );
}
