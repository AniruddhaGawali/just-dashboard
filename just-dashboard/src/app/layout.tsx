import { Inter } from 'next/font/google';

import './globals.css';
import MainLayout from '@/components/layouts/MainLayout';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Just Dashboard',
  description:
    'A modern dashboard template built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} @container`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
