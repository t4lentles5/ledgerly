'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItemProps {
  item: {
    label: string;
    href: string;
    icon: React.ReactNode;
  };
}

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === `${item.href}`;

  return (
    <>
      <Link
        href={item.href}
        className={`${
          isActive
            ? 'bg-sidebar-primary text-foreground'
            : 'hover:bg-sidebar-accent hover:text-foreground text-muted-foreground '
        } flex items-center gap-3 rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out `}
      >
        <span className={`${item.icon}`} role='img' aria-hidden='true' />
        {item.label}
      </Link>
    </>
  );
};
