import { Box } from '@/components/box';
import Profile from '@/components/profile';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Profile />
        <div className="space-y-6">
          <Box>Work Experience</Box>
          <Box>My Expert Area</Box>
        </div>
        <Box>Recent Projects</Box>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Box className="col-span-8">Storybook design </Box>
        <Box className="col-span-4">Let&apos;s👋 Work Together</Box>
      </div>
    </div>
  );
}
