import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Schema Timeline Viewer — Visual Database Schema Evolution',
  description: 'Connect to your database and visualize schema changes over time with interactive diffs and impact analysis. Built for backend developers and DBAs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f63636f3-9d42-4005-98df-489199185f71"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
