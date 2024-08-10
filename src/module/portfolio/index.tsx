import { H2, H3 } from '@/components/typography';
import { portfolioData } from '@/config/data';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <>
      <H2>All Portfolio</H2>
      <div className="mt-6 grid grid-cols-4 gap-6">
        {portfolioData.map((data) => (
          <div key={data.id}>
            <Link href={data.projectUrl} target="_blank">
              <H3>{data.projectName}</H3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
