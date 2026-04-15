import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { StoreProvider } from '@/shared/providers/StoreProvider'
import { Navbar } from '@/shared/components/Navbar'
import './globals.css'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
