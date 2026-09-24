import { ReactNode } from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Student Course Portal',
    template: '%s | Student Course Portal',
  },
  description: 'Browse courses and enroll in the ones you want to take.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
