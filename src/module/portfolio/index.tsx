import { H2 } from '@/components/typography';
import { portfolioData } from '@/config/data';
import PortfolioCard from '@/components/portfolio-card';

const Portfolio = () => {
  return (
    <>
      <H2>All Portfolio</H2>
      <div className="mt-6 space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-3">
        {portfolioData.map((data) => (
          <PortfolioCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
