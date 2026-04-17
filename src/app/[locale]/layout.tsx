import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { StoreProvider } from '@/shared/providers/StoreProvider'
import { Navbar } from '@/shared/components/Navbar'
import '../globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'JS Practice — Built-in Objects',
  description:
    'Interactive JavaScript/TypeScript exercises for every standard built-in object method, inspired by Codewars.',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <Navbar />
            {children}
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
