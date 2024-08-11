import { routes } from '@/config/routes';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="my-6 flex items-center justify-center gap-5 lg:hidden">
        <Link className="text-center text-xs font-light tracking-wide" href={routes.home}>
          Home
        </Link>
        <Link className="text-center text-xs font-light tracking-wide" href={routes.about}>
          About
        </Link>
        <Link className="text-center text-xs font-light tracking-wide" href={routes.portfolio}>
          Portfolio
        </Link>
        <Link className="text-center text-xs font-light tracking-wide" href={routes.contact}>
          Contact
        </Link>
        <Link className="text-center text-xs font-light tracking-wide" href={routes.blog}>
          Blog
        </Link>
      </div>
      <div className="text-center text-sm font-light tracking-wide">
        &copy;{new Date().getFullYear()} all right reserved
      </div>
    </footer>
  );
};

export default Footer;
