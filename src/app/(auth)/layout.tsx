import { ChildProps } from '@/types'

export default function AuthRootLayout({ children }: ChildProps) {
  return <div className="bg-background min-h-screen flex-center">{children}</div>
}
