import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

interface BackToButtonProps {
  label: string
  href: string
  className?: string
}

export default function BackToButton({ label, href, className }: BackToButtonProps) {
  return (
    <Button variant="link" asChild className={cn('capitalize tracking-[1px]', className)}>
      <Link href={href} className="text-xs  font-normal">
        <ChevronLeft className="w-4 h-4" /> {label}
      </Link>
    </Button>
  )
}
