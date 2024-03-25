import { cn } from '@/lib/utils'
import { KeyRound } from 'lucide-react'

interface HeaderProps {
  label: string
  className?: string
}

export default function Header({ label, className }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn('text-3xl font-semibold flex items-center gap-2', className)}>
        <KeyRound /> <span>Auth</span>
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}
