import { SignInSchema } from '@/schema/auth-schema'
import { getUserByEmail } from '@/utils/user'
import bcrypt from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import Goggle from 'next-auth/providers/google'

export default {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Goggle({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      // allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data
          const user = await getUserByEmail(email)
          if (!user || !user.password) return null

          const passwordMatch = await bcrypt.compare(password, user.password)
          if (passwordMatch) return user
        }
        return null
      },
    }),
  ],
} satisfies NextAuthConfig
