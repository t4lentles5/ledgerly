import { MobileNavItem } from './MobileNavItem';

interface MobileNavItemProps {
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

export const MobileNav = ({ items, settingsItem }: MobileNavItemProps) => {
  return (
    <nav className='bg-background/80 fixed bottom-0 z-10 flex h-16 w-full justify-around border-t backdrop-blur-md lg:hidden'>
      {items.map((item) => (
        <MobileNavItem item={item} key={item.href} />
      ))}

      <MobileNavItem item={settingsItem} />
    </nav>
  );
};
