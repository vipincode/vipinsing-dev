# Intro

Vipin Singh

build
In the scripts section, add these lines:

"postinstall": "prisma generate",
"build": "prisma generate && next build",

```tsx
export const routes = {
  homePage: '/',
  about: '/about',
  auth: {
    signIn: '/sign-in',
    signUp: '/sign-up',
    error: '/error',
    forgotPassword: '/forgot-password',
    newPassword: '/new-password',
    newVerification: '/new-verification',
  },
  settings: '/settings',
  userSettings: '/user-settings',
  projects: '/projects',
  projectDetail: (id: string) => `/projects/${id}`,
  blogs: '/blogs',
  blogDetail: (id: string) => `/blogs/${id}`,
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
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = routes.homePage
// export const DEFAULT_LOGIN_REDIRECT = routes.settings
// export const USER_LOGIN_REDIRECT = routes.userSettings

export const AdminRoutes = [
  routes.auth.signIn,
  routes.auth.signUp,
  routes.auth.error,
  routes.auth.forgotPassword,
  routes.auth.newPassword,
]
```

[](https://github.com/nextauthjs/next-auth/discussions/9609)
