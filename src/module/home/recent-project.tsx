import { Box } from '@/components/box';
import { Icon } from '@/components/icon';
import { H2 } from '@/components/typography';
import { routes } from '@/config/routes';
import Image from 'next/image';
import Link from 'next/link';

const RecentProject = () => {
  return (
    <Box className="h-full">
      <div className="flex items-center justify-between">
        <H2>Recent Projects</H2>
        <Link href={routes.portfolio} className="flex items-center gap-1 text-sm text-primary-500">
          All Projects
          <Icon type="arrowRight" size={17} />
        </Link>
      </div>
      <div className="mt-6 space-y-8">
        <Link className="block" href="https://nextauth-theta-eight.vercel.app" target="_blank">
          <Image className="rounded-md" src="/projects/auth.png" width={400} height={400} alt="Next Auth app" />
        </Link>
        <Link className="block" href="https://ap-square.netlify.app" target="_blank">
          <Image className="rounded-md" src="/projects/saloon.png" width={400} height={400} alt="Next Auth app" />
        </Link>
      </div>
    </Box>
  );
};

export default RecentProject;
