import { Box } from '@/components/box';
import Image from 'next/image';
import profileImage from '@/assets/images/vipin-singh.jpg';
import { Icon } from '../icon';
import Link from 'next/link';

const Profile = () => {
  return (
    <Box className="space-y-3">
      <div className=" ">
        <Image src={profileImage} width={400} height={400} alt="" className="h-[300px] object-cover rounded-md" />
      </div>
      <article className="space-y-3">
        <h2 className="text-2xl font-bricolage font-semibold">Vipin Singh 👋</h2>
        <p className="text-base font-normal dark:text-gray-300">
          Passionate <span className="dark:text-white">Front End Developer</span> 🖥️ &{' '}
          <span className="dark:text-white">Web Designer</span> having 5 years of Experiences.
        </p>
      </article>
      <article>
        <h3 className="text-base font-normal mb-2">Contact</h3>
        <ul className="space-y-2">
          <li className="text-sm font-light dark:text-gray-300">
            <strong>Email:</strong> svipin174@gmail.com
          </li>
          <li className="text-sm font-light dark:text-gray-300">
            <strong>Mobile:</strong> +91-7309088590
          </li>
        </ul>
      </article>
      <article className="flex gap-4 pt-3">
        <Link href="#" className="hover:text-primary-600 dark:text-gray-300 transition-colors ease-in duration-75">
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
