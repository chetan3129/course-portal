import type { Metadata } from 'next'
import DashboardClient from '@/components/DashboardClient'

export const metadata: Metadata = {
  title: 'My Courses',
  description: 'Courses you are currently enrolled in.',
}

export default function DashboardPage() {
  return (
    <section>
      <h1>My Courses</h1>
      <DashboardClient />
    </section>
  )
}
