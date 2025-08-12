import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tacoma Kitchen Remodeling | Professional Kitchen Renovation Services',
  description: 'Transform your kitchen with Tacoma\'s trusted remodeling experts. Beautiful designs, professional craftsmanship, and local expertise you can trust. Get your free estimate today!',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
