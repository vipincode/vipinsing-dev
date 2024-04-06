import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'

interface Props {
  size?: number
  className?: string
}

export default function SocialsIcon({ size, className }: Props) {
  return (
    <div className={cn('flex items-center justify-center gap-6 text-primary', className)}>
      <Link href="#">
        <SlSocialLinkedin size={size} />
      </Link>
      <Link href="#">
        <FiFacebook size={size} />
      </Link>
      <Link href="#">
        <FaXTwitter size={size} />
      </Link>
    </div>
  )
}
