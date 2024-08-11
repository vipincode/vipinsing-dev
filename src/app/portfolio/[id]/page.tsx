import { Box } from '@/components/box';
import PortfolioCard from '@/components/portfolio-card';
import { H2, TextOutline } from '@/components/typography';
import { portfolioData } from '@/config/data';

interface Props {
  params: { id: string };
}

export default function PortfolioSinglePage({ params: { id } }: Props) {
  const filterData = portfolioData.filter((item) => item.category === id);
  return (
    <Box>
      <H2 className="capitalize">All {id} Portfolio</H2>
      <div className="mt-6 grid grid-cols-3 gap-6">
        {filterData.map((data) => (
          <PortfolioCard key={data.id} data={data} />
        ))}
      </div>
    </Box>
  );
}
