import Image from 'next/image';
import Link from 'next/link';

interface PortfolioCardProps {
  id: number;
  projectName: string;
  projectUrl: string;
  projectImage: string;
  createdAt: string;
  shortDescription: string;
  description: string;
  category: string;
}

interface Props {
  data: PortfolioCardProps;
}

const PortfolioCard = ({ data }: Props) => {
  return (
    <div className="overflow-hidden rounded bg-gray-100 dark:bg-gray-950">
      <Link href={data.projectUrl} target="_blank">
        <Image src={data.projectImage} width={350} height={400} alt={data.projectName} />
      </Link>
      <div className="my-4 space-y-3 px-4">
        <Link href={data.projectUrl} target="_blank">
          <h3 className="line-clamp-1 text-[15px] font-semibold">{data.projectName}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-block rounded-md bg-gray-200 px-2 text-[10px] uppercase leading-[17px] text-gray-500 dark:bg-gray-700 dark:text-gray-100">
            {data.createdAt}
          </span>
          <span className="inline-block rounded-md bg-secondary-700 px-2 text-[10px] uppercase leading-[17px] text-white">
            {data.category}
          </span>
        </div>
        <p className="line-clamp-3 text-sm leading-6">{data.shortDescription}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
