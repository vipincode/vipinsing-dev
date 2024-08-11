import { Box } from '@/components/box';
import { Icon } from '@/components/icon';
import Logo from '@/components/logo';
import NavLinks from '@/components/navbar/nav-links';
import { routes } from '@/config/routes';
import ThemeToggle from '@/config/theme/theme-toggle';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <Box>
      <div className="flex items-center justify-between">
        <Link href={routes.home} className="flex items-center gap-1">
          <Logo />
        </Link>
        <div className="hidden items-center gap-1 font-bricolage lg:flex">
          <NavLinks />
        </div>
        <div className="hidden items-center gap-10 font-semibold text-gray-600 dark:text-gray-500 lg:flex">
          <ThemeToggle />
          <Link href={routes.contact} className="flex items-center gap-1">
            Let&apos;s Talk <Icon type="trendingUp" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button>
            <Icon type="alignRight" />
          </button>
        </div>
      </div>
    </Box>
  );
};
