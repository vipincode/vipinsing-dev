import { Box } from '@/components/box';
import Profile from '@/components/profile';
import { H2 } from '@/components/typography/heading';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Profile />
        <div className="space-y-6">
          <Box>
            <H2>Work Experience</H2>
          </Box>
          <Box>
            <H2>My Expert Area</H2>
          </Box>
        </div>
        <Box>
          <H2>Recent Projects</H2>
        </Box>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Box className="col-span-8">
          <H2>Storybook design</H2>
        </Box>
        <Box className="col-span-4">
          <H2>Let&apos;s👋 Work Together</H2>
        </Box>
      </div>
    </div>
  );
}
