import { Box } from '@/components/box';
import { H2, Text } from '@/components/typography';
import { WorkExperienceData } from '@/config/data';

const WorkExperience = () => {
  return (
    <Box className="flex-1">
      <H2>Work Experience</H2>
      <div className="h-scroll my-4 max-h-[250px] space-y-4 overflow-y-auto">
        {WorkExperienceData.map((data) => (
          <div className="grid grid-cols-8" key={data.id}>
            <div className="col-span-3">
              <Text variant="sm" className="dark:text-gray-300">
                {data.duration}
              </Text>
            </div>
            <div className="col-span-5">
              <Text className="text-gray-950 dark:text-gray-200">{data.company}</Text>
              <Text variant="xs" className="dark:text-gray-600">
                {data.profile}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default WorkExperience;
