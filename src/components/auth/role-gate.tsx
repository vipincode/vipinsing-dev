'use client'

import { useCurrentRole } from '@/hooks/user-currents-role'
import { UserRole } from '@prisma/client'
import FormError from '@/components/shared/form-error'

interface RoleGateProps {
  children: React.ReactNode
  allowedRole: UserRole
}

export default function RoleGate({ children, allowedRole }: RoleGateProps) {
  const role = useCurrentRole()

  if (role !== allowedRole) {
    return <FormError message="You do not have permission to view this content" />
  }
  return <>{children}</>
}
