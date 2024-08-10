import profileImage from '@/assets/images/vipin-singh.jpg';
import { Box } from '@/components/box';
import { Icon } from '@/components/icon';
import { H2, H3, Text } from '@/components/typography';
import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  return (
    <Box className="space-y-3">
      <div className=" ">
        <Image src={profileImage} width={400} height={400} alt="" className="h-[300px] rounded-md object-cover" />
      </div>
      <article>
        <H2>Vipin Singh👋</H2>
        <Text>
          A Passionate <span className="text-gray-950 dark:text-gray-400">Front End Developer</span> 🖥️ &{' '}
          <span className="text-gray-950 dark:text-gray-400">Web Designer</span> having 5 years of Experiences.
        </Text>
      </article>
      <article>
        <H3 className="mb-1">Contact</H3>
        <ul className="space-y-2">
          <li className="text-sm font-light text-gray-950 dark:text-gray-300">
            <strong>Email:</strong> svipin174@gmail.com
          </li>
          <li className="text-sm font-light text-gray-950 dark:text-gray-300">
            <strong>Mobile:</strong> +91-7309088590
          </li>
        </ul>
      </article>
      <article className="flex gap-4 py-3">
        <Link href="#" className="transition-colors duration-75 ease-in hover:text-primary-600 dark:text-gray-300">
          <Icon type="facebook" size={18} />
        </Link>
        <Link href="#" className="hover:text-primary-600">
          <Icon type="linkedin" size={18} />
        </Link>
        <Link href="#" className="hover:text-primary-600">
          <Icon type="youtube" size={18} />
        </Link>
      </article>
    </Box>
  );
};

export default Profile;
