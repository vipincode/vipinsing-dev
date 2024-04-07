export const routes = {
  homePage: '/',
  about: '/about',
  projects: '/projects',
  blogs: '/blogs',
  auth: {
    signIn: '/sign-in',
    signUp: '/sign-up',
    error: '/error',
    forgotPassword: '/forgot-password',
    newPassword: '/new-password',
    newVerification: '/new-verification',
  },
  admin: {
    home: '/dashboard/home',
    about: '/dashboard/about',
    skills: '/dashboard/skills',
    project: '/dashboard/projects',
    blog: '/dashboard/blogs',
    settings: '/dashboard/settings',
  },
  user: {
    settings: '/user/settings',
  },
}

/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [routes.homePage, routes.blogs, routes.projects, routes.about, routes.auth.newVerification]

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  routes.auth.signIn,
  routes.auth.signUp,
  routes.auth.error,
  routes.auth.forgotPassword,
  routes.auth.newPassword,
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * The prefix for USER
 * And Only access by User
 * @type {string[]}
 */
export const userRoutePrefix = '/user'

/**
 * The prefix for ADMIN
 * Only access by admin
 * @type {string[]}
 */
export const adminRoutesPrefix = '/dashboard'

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = routes.homePage
