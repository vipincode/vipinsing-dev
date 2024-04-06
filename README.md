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

## Welcome to Vipin Singh's Journey in Web Development

### About Me

Hello, I'm Vipin Singh, and I'm delighted to welcome you to my digital playground. My journey in the world of web development has been an exciting ride, filled with creativity, innovation, and continuous learning.

### From Design to Dynamic UIs

My career kickstarted as a web designer, where I honed my skills in crafting visually stunning and intuitive user interfaces. With a keen eye for aesthetics and functionality, I strived to create experiences that captivate and engage users.

### Mastering Motion and Animation

Driven by my passion for enhancing user experiences, I delved into the world of motion and animation. Armed with tools like Framer Motion and GreenSock Animation Platform (GSAP), I brought life to static designs, infusing them with fluidity and interactivity that truly resonate with users.

### Venturing into Full Stack with Next.js 14

As the digital landscape evolved, so did my aspirations. Currently, I'm on an exciting journey of mastering Next.js 14, delving into the realm of full stack development. With Next.js, I'm unlocking the potential to build lightning-fast, server-rendered React applications, seamlessly integrating front-end and back-end technologies to deliver robust and scalable solutions.

### Join Me on this Thrilling Adventure

Whether you're a fellow developer, a prospective client, or simply someone passionate about the boundless possibilities of web development, I invite you to join me on this thrilling adventure. Together, let's push the boundaries of creativity, harness the power of technology, and craft digital experiences that leave a lasting impression.

About Me

Hey there! I'm Vipin Singh, a passionate web enthusiast, and I'm thrilled to welcome you to my digital space. My journey in the vast realm of web development has been nothing short of exhilarating. It all began with a curious mind and a knack for design.

From Web Design to Full Stack Development

Embarking on my career path, I started as a web designer, meticulously crafting user interfaces that not only looked captivating but also delivered seamless user experiences. As the digital landscape evolved, so did my skills. Transitioning into a React UI developer, I delved deeper into the intricacies of front-end development, mastering the art of building dynamic and responsive web applications.

Embracing Next.js Full Stack Development

But my thirst for knowledge didn't stop there. Always eager to stay ahead of the curve, I recently immersed myself in learning Next.js 14, diving into the world of full stack development. With Next.js, I've unlocked the power to create blazing-fast, server-rendered React applications, seamlessly integrating front-end and back-end functionalities to deliver robust and scalable solutions.
