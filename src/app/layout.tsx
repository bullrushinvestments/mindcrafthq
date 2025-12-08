import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MindCraftHQ',
  description: 'MindCraftHQ offers personalized mental health solutions and blockchain-based digital credentialing for professionals. It combines micro-SaaS tools with web3 technology to provide a unique, secure, and scalable platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
