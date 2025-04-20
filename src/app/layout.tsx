import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { StrictMode } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Live Systems Models',
  description: 'A Platform for Fluidly Composing, Sharing, and Enriching Causal Models of World Systems',
  icons: {
    icon: [],
    apple: [],
    shortcut: []
  }
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
        suppressHydrationWarning
      >
        <StrictMode>
          <ThemeProvider>
            <div className="relative">
              <ThemeToggle />
              {children}
            </div>
          </ThemeProvider>
        </StrictMode>
      </body>
    </html>
  );
}
