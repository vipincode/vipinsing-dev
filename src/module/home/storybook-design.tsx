import { Box } from '@/components/box';
import { Icon } from '@/components/icon';
import { H2 } from '@/components/typography';
import { routes } from '@/config/routes';
import Image from 'next/image';
import Link from 'next/link';

const StorybookDesign = () => {
  return (
    <Box className="md:col-span-6 xl:col-span-8">
      <div className="flex items-center justify-between">
        <H2>Storybook ui design</H2>
        <Link href={routes.portfolio} className="flex items-center gap-1 text-sm text-primary-500">
          All Projects
          <Icon type="arrowRight" size={17} />
        </Link>
      </div>
      <div className="mt-2">
        <Link href="https://storybook-ui-first-step.vercel.app/?path=/docs/tokens-colors--docs" target="_blank">
          <Image
            className="rounded-md"
            src="/projects/storybook-1.png"
            width={300}
            height={300}
            alt="Storybook design"
          />
        </Link>
      </div>
    </Box>
  );
};

export default StorybookDesign;
