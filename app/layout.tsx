import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { Wrapper } from '@/components/wrapper'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
})

export const metadata: Metadata = {
  title: "Portfolio of Julien 'Tyloo' Bonvarlet",
  description:
    "Portfolio of Julien 'Tyloo' Bonvarlet. It contains all my projects, experiences, skills and a blog where I share my thoughts and ideas."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`flex min-h-screen flex-col ${jetbrainsMono.variable} antialiased`}>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer />
        <Toaster position='top-right' theme='dark' />
        <Analytics />
      </body>
    </html>
  )
}
