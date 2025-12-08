import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindCraftHQ',
  description: 'MindCraftHQ offers personalized mental health solutions and blockchain-based digital credentialing for professionals. It combines micro-SaaS tools with web3 technology to provide a unique, secure, and scalable platform.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindCraftHQ</h1>
      <p className="mt-4 text-lg">MindCraftHQ offers personalized mental health solutions and blockchain-based digital credentialing for professionals. It combines micro-SaaS tools with web3 technology to provide a unique, secure, and scalable platform.</p>
    </main>
  )
}
