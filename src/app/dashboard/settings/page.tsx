import LogoutButton from '@/components/auth/logout-button'
import { auth } from '@/config/auth'
import { Button } from '@react-email/components'

export default async function SettingsPage() {
  const session = await auth()
  return (
    <div>
      <h1>Settings Page</h1>
      {JSON.stringify(session)}
      <div>
        <LogoutButton>
          <Button>Logout</Button>
        </LogoutButton>
      </div>
    </div>
  )
}
