import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tacoma Kitchen Remodeling | [Your Company Name] Remodelers',
  description: 'Professional kitchen remodeling in Tacoma: design, cabinets, countertops, and full renovations. Free estimates.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">{children}</body>
    </html>
  )
}
