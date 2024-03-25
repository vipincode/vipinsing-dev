import AuthWrapper from '@/components/auth/auth-wrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export default function ErrorCard() {
  return (
    <AuthWrapper headerLabel="Oops! Something went wrong!" backButtonLabel="Back to login" backButtonHref="/auth/login">
      <div className="flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </AuthWrapper>
  )
}
