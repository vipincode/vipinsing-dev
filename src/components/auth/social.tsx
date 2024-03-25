import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/config/routes'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

export default function Social() {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }
  return (
    <div className="flex items-center gap-x-3 w-full">
      <Button variant="outline" size="lg" className="w-full" onClick={() => onClick('google')}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="lg" className="w-full" onClick={() => onClick('github')}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  )
}
