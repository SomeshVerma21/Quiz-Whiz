
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: {
    default: 'Quiz Whiz - Fun Interactive Learning Games',
    template: '%s | Quiz Whiz',
  },
  description: 'Engage in interactive educational puzzle games for various classes and subjects. Learn and have fun with Quiz Whiz!',
  openGraph: {
    title: 'Quiz Whiz - Fun Interactive Learning Games',
    description: 'An interactive educational puzzle game for students of all classes and subjects.',
    type: 'website',
    locale: 'en_US',
    // url: 'YOUR_APP_URL', // Replace with your actual app URL when deploying
    siteName: 'Quiz Whiz',
  },
  twitter: { // Optional: Add Twitter card metadata
    card: 'summary_large_image',
    title: 'Quiz Whiz - Fun Interactive Learning Games',
    description: 'An interactive educational puzzle game for students of all classes and subjects.',
    // images: ['YOUR_OG_IMAGE_URL'], // Replace with a link to your OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
