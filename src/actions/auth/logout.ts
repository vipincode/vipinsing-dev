'use server'

import { signOut } from '@/config/auth'

export const logout = async () => {
  await signOut()
}
