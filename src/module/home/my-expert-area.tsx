import { Box } from '@/components/box';
import { H2 } from '@/components/typography';
import { TechData } from '@/config/data';

const MyExpertArea = () => {
  return (
    <Box className="flex-1">
      <H2>My Expert Area</H2>
      <div className="h-scroll my-2 flex max-h-[180px] flex-wrap gap-3 overflow-y-auto">
        {TechData.map((data) => (
          <div key={data.id}>
            <span className="block rounded-md bg-primary-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-950 dark:text-gray-100">
              {data.name}
            </span>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default MyExpertArea;
