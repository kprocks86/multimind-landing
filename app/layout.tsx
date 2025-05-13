// ... existing code ...
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MultiMind',
  description: 'One SDK Every AI Model Unlimited Agents.',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
// ... existing code ...