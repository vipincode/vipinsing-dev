import Box from '@/components/box';
import { Icon } from '@/components/icon';

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <Icon type="heart" size={24} color="red" />
      <Box variant="secondary">
        <h1 className="text-[100px] font-bold">My New Portfolio</h1>
        <p className="text-6xl font-light">Coming soon...</p>
      </Box>
    </div>
  );
}
