'use server'

import { SignUpSchema } from '@/schema/auth-schema'
import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { getUserByEmail } from '@/utils/user'
import prisma from '@/config/db'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/mail'

export const signup = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, name, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: 'Email is already in use!' }
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  const verificationToken = await generateVerificationToken(email)
  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: 'Confirmation email sent!' }
}
