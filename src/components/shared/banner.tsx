import { cn } from '@/lib/utils'

interface bannerProps {
  bannerHeading: string
  bannerDescription: string
  textAlign?: string
  className?: string
}

export default function Banner({ bannerHeading, bannerDescription, textAlign, className }: bannerProps) {
  return (
    <div className={cn('min-h-[240px] flex justify-center items-center bg-primary bg-blend-multiply', className)}>
      <div className={cn('text-center', `text-${textAlign}`)}>
        <h1 className="text-[42px] font-bold text-primary mb-3">{bannerHeading}</h1>
        <p className="text-[18px] font-medium text-muted dark:text-gray-300">{bannerDescription}</p>
      </div>
    </div>
  )
}
