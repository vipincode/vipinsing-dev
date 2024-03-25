import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import Header from '@/components/auth/header'
import Social from '@/components/auth/social'
import BackButton from '@/components/auth/back-button'
import { cn } from '@/lib/utils'

interface AuthProps {
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
  children: React.ReactNode
  className?: string
}

export default function AuthWrapper({
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  children,
  className,
}: AuthProps) {
  return (
    <Card className={cn('w-full mx-4 sm:w-[400px]', className)}>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  )
}
