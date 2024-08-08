import { routes } from '@/config/routes';

type IconType = 'home' | 'user' | 'layers' | 'writing' | 'chat';

interface NavMenu {
  label: string;
  icon: IconType;
  href: string;
}

export const NavMenus: NavMenu[] = [
  {
    label: 'Home',
    icon: 'home',
    href: routes.home,
  },
  {
    label: 'About',
    icon: 'user',
    href: routes.about,
  },
  {
    label: 'Portfolio',
    icon: 'layers',
    href: routes.portfolio,
  },
  {
    label: 'Blog',
    icon: 'writing',
    href: routes.blog,
  },
  {
    label: 'Contact',
    icon: 'chat',
    href: routes.contact,
  },
];
