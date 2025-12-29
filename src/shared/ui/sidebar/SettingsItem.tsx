'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SettingsItemProps {
  settingsItem: {
    label: string;
    href: string;
    icon: string;
  };
}

export const SettingsItem = ({ settingsItem }: SettingsItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === settingsItem.href;

  return (
    <>
      <Link
        href={settingsItem.href}
        className={`${
          isActive
            ? 'bg-sidebar-primary text-foreground'
            : 'hover:bg-sidebar-accent hover:text-foreground text-muted-foreground'
        } flex items-center gap-3 rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out `}
      >
        <span
          className={`${settingsItem.icon}`}
          role='img'
          aria-hidden='true'
        />
        {settingsItem.label}
      </Link>
    </>
  );
};
