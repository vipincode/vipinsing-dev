import Link from 'next/link';
import { Box } from '../box';
import { Icon } from '../icon';
import { routes } from '@/config/routes';

export const Navbar = () => {
  return (
    <Box size="small">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1">
          <Icon type="logo" size={34} />
          <div className="text-3xl font-bricolage font-bold tracking-tighter">
            Vipin <span className="text-primary-600">Singh</span>
          </div>
        </Link>
        <div className="flex items-center font-bricolage">
          <Link href={routes.home} className="flex gap-1 items-center px-4 py-2 rounded hover:bg-primary-50">
            <Icon type="home" size={16} className="text-gray-500" /> Home
          </Link>
          <Link href={routes.about} className="flex gap-1 items-center px-4 py-2 rounded hover:bg-primary-50">
            <Icon type="user" size={18} className="text-gray-500" /> About
          </Link>
          <Link href={routes.portfolio} className="flex gap-1 items-center px-4 py-2 rounded hover:bg-primary-50">
            <Icon type="layers" size={16} className="text-gray-500" /> Portfolio
          </Link>
          <Link href={routes.blog} className="flex gap-1 items-center px-4 py-2 rounded hover:bg-primary-50">
            <Icon type="writing" size={16} className="text-gray-500" /> Blog
          </Link>
          <Link href={routes.contact} className="flex gap-1 items-center px-4 py-2 rounded hover:bg-primary-50">
            <Icon type="chat" size={16} className="text-gray-500" /> Contact
          </Link>
        </div>
        <div>button</div>
      </div>
    </Box>
  );
};
