import Link from 'next/link';

import { SidebarItem } from './SidebarItem';

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
    <section className='fixed hidden h-screen w-60 flex-col border-r lg:flex'>
      <div className='border-b p-5'>
        <Link href={'/'} className='text-2xl font-bold'>
          Ledgerly
        </Link>
      </div>

      <div className='flex grow flex-col justify-between gap-3 p-5'>
        <nav className='flex grow flex-col gap-3'>
          {items.map((item) => (
            <SidebarItem item={item} key={item.href} />
          ))}
        </nav>

        <SidebarItem item={settingsItem} />
      </div>
    </section>
  );
};
