'use server'

import { sendPasswordResetEmail } from '@/lib/mail'
import { generateResetPasswordToken } from '@/lib/tokens'
import { ResetSchema } from '@/schema/auth-schema'
import { getUserByEmail } from '@/utils/user'
import { z } from 'zod'

export const resetPassword = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'invalid email!' }
  }

  const { email } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { error: 'Email not found!' }
  }

  const passwordResetToken = await generateResetPasswordToken(email)
  await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token)

  return { success: 'Reset email sent!' }
}
