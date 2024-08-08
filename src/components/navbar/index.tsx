import Link from 'next/link';
import { Box } from '@/components/box';
import { Icon } from '@/components/icon';
import { routes } from '@/config/routes';
import NavLinks from '@/components/navbar/nav-links';
import ThemeChanger from '@/config/theme/theme-changer';

export const Navbar = () => {
  return (
    <Box>
      <div className="flex justify-between items-center">
        <Link href={routes.home} className="flex items-center gap-1">
          <Icon type="logo" size={34} />
          <div className="text-3xl font-bricolage font-bold tracking-tighter">
            Vipin<span className="text-primary-600">Folio</span>
          </div>
        </Link>
        <div className="flex items-center gap-1 font-bricolage">
          <NavLinks />
        </div>
        <div className="flex items-center gap-10 dark:text-gray-500">
          <ThemeChanger />
          <button className="flex gap-1 items-center ">
            Let&apos;s Talk <Icon type="trendingUp" />
          </button>
        </div>
      </div>
    </Box>
  );
};
