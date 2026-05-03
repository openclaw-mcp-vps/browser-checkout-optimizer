import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CheckoutOptimizer — Reduce Abandonment Automatically',
  description: 'Track checkout behavior, analyze abandonment patterns, and get actionable UX recommendations to boost your e-commerce conversion rate.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="40148545-3fa6-4306-9974-dd020ae52e66"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
