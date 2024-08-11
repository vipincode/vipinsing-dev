import { Box } from '@/components/box';
import { Icon } from '@/components/icon';
import Profile from '@/components/profile';
import { H2 } from '@/components/typography/heading';
import { routes } from '@/config/routes';
import MyExpertArea from '@/module/home/my-expert-area';
import RecentProject from '@/module/home/recent-project';
import StorybookDesign from '@/module/home/storybook-design';
import WorkExperience from '@/module/home/work-experience';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 xl:grid-cols-3">
        <Profile />
        <div className="flex flex-col gap-6">
          <WorkExperience />
          <MyExpertArea />
        </div>
        <RecentProject />
      </div>
      <div className="space-y-4 md:grid md:grid-cols-12 md:gap-6 md:space-y-0">
        <StorybookDesign />
        <Box className="min-h-[250px] md:col-span-6 xl:col-span-4">
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
