'use client';
import { NavMenus } from '@/components/navbar/nav-menus';
import Link from 'next/link';
import { Icon } from '@/components/icon';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const NavLinks = () => {
  const path = usePathname();
  return (
    <>
      {NavMenus.map((menu) => (
        <Link
          key={menu.label}
          href={menu.href}
          className={twMerge(
            'flex gap-2 items-center px-4 py-2 rounded hover:bg-primary-50 dark:hover:bg-gray-950 dark:text-gray-500 dark:hover:text-white dark:transition-all dark:ease-in duration-75',
            path === menu.href && 'bg-primary-50 dark:bg-gray-950',
          )}
        >
          <Icon type={menu.icon} size={16} />
          {menu.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
