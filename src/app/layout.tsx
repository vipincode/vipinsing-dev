import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { auth } from '@/config/auth'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Vipin Singh Front End Developer & Web Designer in Byldd',
  description: 'Independent Front End Developer Next.js and Web Designer',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning className={`${poppins.variable}`}>
        <body>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <main>{children}</main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  )
}
