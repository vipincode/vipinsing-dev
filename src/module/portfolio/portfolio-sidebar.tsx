import { H2 } from '@/components/typography';
import { routes } from '@/config/routes';
import Link from 'next/link';

const PortfolioSidebar = () => {
  return (
    <div className="px-10 pb-10">
      <H2 className="mb-6">Web Projects</H2>
      <div className="space-y-6">
        <Link className="block" href="/portfolio">
          All
        </Link>
        <Link className="block" href={routes.portfolioId('css')}>
          HTML/CSS
        </Link>
        <Link className="block" href={routes.portfolioId('react')}>
          React
        </Link>
        <Link className="block" href={routes.portfolioId('next.js')}>
          Next.js
        </Link>
        <Link className="block" href={routes.portfolioId('storybook')}>
          Storybook
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSidebar;
