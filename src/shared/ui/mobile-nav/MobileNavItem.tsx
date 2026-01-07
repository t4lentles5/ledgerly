'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileNavItem {
  item: {
    label: string;
    href: string;
    icon: React.ReactNode;
  };
}

export const MobileNavItem = ({ item }: MobileNavItem) => {
  const pathname = usePathname();

  const isActive = pathname === `${item.href}`;

  return (
    <Link
      href={item.href}
      className={`${
        isActive
          ? 'text-primary'
          : 'hover:bg-surface-hover hover:text-foreground text-muted-foreground'
      } flex w-full flex-col items-center justify-center gap-1 rounded-lg p-1 transition-colors duration-200 ease-in-out`}
    >
      <span
        className={`${item.icon} text-xl`}
        role='img'
        aria-hidden='true'
      />
      <span className='text-[10px] font-medium'>{item.label}</span>
    </Link>
  );
};
