import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { siteDescription, siteUrl } from '@/lib/site';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FORK YOU — Fork the future.',
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: `${siteUrl}/` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'FORK YOU — Fork the future.',
    description: siteDescription,
    url: `${siteUrl}/`,
    siteName: 'FORK YOU',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'FORK YOU — Fork the future.',
    description: siteDescription,
  },
  icons: {
    icon: `${new URL(siteUrl).pathname.replace(/\/$/, '')}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
