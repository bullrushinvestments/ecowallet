import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoWallet',
  description: 'A no-code platform that helps small businesses integrate sustainable e-commerce practices into their operations and track environmental impact, while offering personal finance tools to customers for eco-friendly spending habits.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoWallet</h1>
      <p className="mt-4 text-lg">A no-code platform that helps small businesses integrate sustainable e-commerce practices into their operations and track environmental impact, while offering personal finance tools to customers for eco-friendly spending habits.</p>
    </main>
  )
}
