import { Box } from '@/components/box';
import Profile from '@/components/profile';
import { H2, Text } from '@/components/typography';

const AboutMe = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-4">
        <Profile />
      </div>
      <div className="col-span-8">
        <Box>
          <H2>About me 👋</H2>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia natus tempora cupiditate suscipit quisquam
            cumque, temporibus provident qui quasi, quo a eum sapiente! Consequatur fugiat cumque impedit corrupti
            maxime maiores?
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default AboutMe;
