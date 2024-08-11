import { H2 } from '@/components/typography';
import { portfolioData } from '@/config/data';
import PortfolioCard from '@/components/portfolio-card';

const Portfolio = () => {
  return (
    <>
      <H2>All Portfolio</H2>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {portfolioData.map((data) => (
          <PortfolioCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
