'use client'

import { useState } from 'react'

export default function EnrollButton({
  slug,
  initialEnrolled,
}: {
  slug: string
  initialEnrolled: boolean
}) {
  const [enrolled, setEnrolled] = useState(initialEnrolled)
  const [pending, setPending] = useState(false)

  async function toggleEnrollment() {
    setPending(true)
    const res = await fetch('/api/enrollments', {
      method: enrolled ? 'DELETE' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    })
    if (res.ok) {
      setEnrolled(!enrolled)
    }
    setPending(false)
  }

  return (
    <button
      className={`btn ${enrolled ? 'btn-secondary' : 'btn-primary'}`}
      onClick={toggleEnrollment}
      disabled={pending}
    >
      {pending ? 'Saving...' : enrolled ? 'Enrolled — leave course' : 'Enroll in this course'}
    </button>
  )
}
