import { Box } from '@/components/box';
import { Icon } from '@/components/icon';
import Profile from '@/components/profile';
import { H2 } from '@/components/typography/heading';
import { routes } from '@/config/routes';
import MyExpertArea from '@/module/home/my-expert-area';
import WorkExperience from '@/module/home/work-experience';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid-rows-26 grid grid-cols-3 gap-6">
        <Profile />
        <div className="flex flex-col gap-6">
          <WorkExperience />
          <MyExpertArea />
        </div>
        <div>
          <Box className="h-full">
            <H2>Recent Projects</H2>
          </Box>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Box className="col-span-8">
          <H2>Storybook design</H2>
        </Box>
        <Box className="col-span-4 min-h-[250px]">
          <span className="bg-primary-10 my-3 inline-block rounded px-3 py-2 text-primary-400 dark:bg-gray-950 dark:text-gray-300">
            Available for Hire
          </span>
          <H2 variant="lg" className="leading-[52px]">
            Let&apos;s👋 <br /> Work Together
          </H2>
          <Link href={routes.contact} className="flex items-center gap-1 text-primary-600">
            Let&apos;s Talk <Icon type="trendingUp" />
          </Link>
        </Box>
      </div>
    </div>
  );
}
