'use server'

import { signIn } from '@/config/auth'
import { routes, DEFAULT_LOGIN_REDIRECT } from '@/config/routes'
import { currentUser } from '@/lib/current-user'
import { sendVerificationEmail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/tokens'
import { SignInSchema } from '@/schema/auth-schema'
import { getUserByEmail } from '@/utils/user'
import { AuthError } from 'next-auth'
import { z } from 'zod'

export const signin = async (values: z.infer<typeof SignInSchema>) => {
  const validatedFields = SignInSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields!' }
  }

  const { email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Email does not exists!' }
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email)
    await sendVerificationEmail(verificationToken.email, verificationToken.token)

    return { success: 'Confirmation email sent!' }
  }

  // TODO: Two factor auth

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' }
        default:
          return { error: 'Something went wrong!' }
      }
    }

    throw error
  }
}
