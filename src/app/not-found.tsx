import { routes } from '@/config/routes';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-8xl font-bold leading-[120px]">Not Found</h2>
        <p className="text-5xl font-normal leading-[62px]">Could not find requested resource</p>
        <Link href={routes.home} className="mt-10 block font-4xl font-normal tracking-wide uppercase">
          Return Home
        </Link>
      </div>
    </div>
  );
}
