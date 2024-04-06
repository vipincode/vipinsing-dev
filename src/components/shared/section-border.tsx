import { cn } from '@/lib/utils'

interface Props {
  marginTop?: string
  marginBottom?: string
  className?: string
}

export default function SectionBorder({ marginTop, marginBottom, className }: Props) {
  return (
    <div className={cn('grid grid-cols-2', `mt-[${marginTop}] mb-[${marginBottom}]`, className)}>
      <div className="border-t border-primary/50"></div>
      <div className="border-t border-primary/10 relative"></div>
    </div>
  )
}
