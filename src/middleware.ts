import authConfig from '@/config/auth.config'
import NextAuth from 'next-auth'
import {
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  routes,
  userRoutePrefix,
  adminRoutesPrefix,
} from '@/config/routes'
import { NextResponse } from 'next/server'
import { UserRole } from '@prisma/client'
import { currentUser } from '@/lib/current-user'

const { auth: middleware } = NextAuth(authConfig)

export default middleware(async (req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const session = await currentUser()

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isUserRoute = nextUrl.pathname.startsWith(userRoutePrefix)
  const isAdminRoute = nextUrl.pathname.startsWith(adminRoutesPrefix)

  if (isApiAuthRoute) {
    return NextResponse.next()
  }

  if (isUserRoute && session?.role !== UserRole.USER) {
    return Response.redirect(new URL(routes.homePage, nextUrl))
  }

  if (isAdminRoute && session?.role !== UserRole.ADMIN) {
    return Response.redirect(new URL(routes.homePage, nextUrl))
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return NextResponse.next()
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(routes.auth.signIn, nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
