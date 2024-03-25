import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/config/db'
import authConfig from '@/config/auth.config'
import { routes } from '@/config/routes'
import { getUserById } from '@/utils/user'

declare module 'next-auth' {
  interface User {
    role: 'ADMIN' | 'USER'
    isTwoFactorEnables: boolean
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: routes.auth.signIn,
    error: routes.auth.error,
  },
  // basePath: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth`,
  // trustHost: true,
  secret: process.env.AUTH_SECRET,
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== 'credentials') return true

      // Prevent signIn without verification
      const existingUser = await getUserById(user.id!)
      if (!existingUser?.emailVerified) return false

      return true
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      if (token.role && session.user) {
        session.user.role = token.role as 'ADMIN' | 'USER'
      }
      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token

      token.role = existingUser.role

      return token
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
})
