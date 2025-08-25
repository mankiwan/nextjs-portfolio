import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

// Locale to OpenGraph locale mapping
const localeMap: Record<string, string> = {
  'en': 'en_US',
  'zh-HK': 'zh_HK',
  'zh-CN': 'zh_CN'
}

// These are Next.js metadata exports that are automatically used by the framework for SEO and
// social sharing. You don't see them being explicitly called because Next.js uses them behind
// the scenes.
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: ['portfolio', 'full-stack developer', 'web development', 'react', 'next.js', 'typescript'],
    authors: [{ name: 'Vicky' }],
    creator: 'Vicky',
    metadataBase: new URL('https://your-domain.com'),
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: 'https://your-domain.com',
      title: t('title'),
      description: t('description'),
      siteName: t('siteName'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-HK' }, { locale: 'zh-CN' }]
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
            <div className='flex flex-col min-h-screen'>
              <Navbar />
              <main className='flex-1'>
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