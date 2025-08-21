import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Portfolio | IT Skills Showcase',
  description: 'Full-Stack Developer & Technology Enthusiast showcasing modern web development skills',
  keywords: ['portfolio', 'full-stack developer', 'web development', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Personal Portfolio | IT Skills Showcase',
    description: 'Full-Stack Developer & Technology Enthusiast showcasing modern web development skills',
    siteName: 'Personal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Portfolio | IT Skills Showcase',
    description: 'Full-Stack Developer & Technology Enthusiast showcasing modern web development skills',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }]
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}