import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/next-theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vipin Singh - Frontend Developer & Web Designer | Portfolio",
  description:
    "Passionate frontend developer & web designer with 5 years of experience. Specialized in React, Next.js, Tailwind CSS, and modern web technologies.",
  generator: "v0.app",
  metadataBase: new URL("https://vipinsingh.dev"),
  openGraph: {
    title: "Vipin Singh - Frontend Developer & Web Designer",
    description:
      "Crafting beautiful, functional web experiences with modern technologies and thoughtful design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipin Singh - Frontend Developer",
    description: "Frontend Developer & Web Designer | 5+ years experience",
  },
  keywords: [
    "frontend developer",
    "web designer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "UI/UX",
    "web development",
  ],
  authors: [{ name: "Vipin Singh" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
