import { SidebarItem } from './SidebarItem';
import { SettingsItem } from './SettingsItem';
import Link from 'next/link';

interface SidebarProps {
  items: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];

  settingsItem: {
    label: string;
    href: string;
    icon: string;
  };
}

export const Sidebar = ({ items, settingsItem }: SidebarProps) => {
  return (
    <section className='w-60 border-r h-screen fixed flex flex-col'>
      <div className='border-b p-5'>
        <Link href={'/'} className='font-bold text-2xl'>
          Ledgerly
        </Link>
      </div>

      <div className='flex flex-col p-5 grow justify-between gap-3'>
        <nav className='flex flex-col grow gap-3'>
          {items.map((item) => (
            <SidebarItem item={item} key={item.href} />
          ))}
        </nav>

        <SettingsItem settingsItem={settingsItem} />
      </div>
    </section>
  );
};
