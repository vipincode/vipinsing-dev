import type { Metadata } from 'next';
import { Poppins, Bricolage_Grotesque } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/navbar';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600'],
  display: 'swap',
});

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'vipin singh portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="dark" suppressHydrationWarning>
      <body className={`${poppins.variable} ${bricolage_grotesque.variable}`}>
        <div className="container mx-auto px-4 py-6 space-y-8">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
}
