'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Course } from '@/lib/types'
import CourseCard from './CourseCard'
import SectionSkeleton from './SectionSkeleton'

export default function DashboardClient() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/enrollments')
      if (!res.ok) throw new Error('Could not load your enrollments')
      setCourses(await res.json())
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function leaveCourse(slug: string) {
    await fetch('/api/enrollments', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    })
    load()
  }

  return (
    <>
      {loading && <SectionSkeleton label="Loading your courses..." rows={3} />}

      {error && (
        <div className="error-box">
          <p>{error}</p>
          <button className="btn btn-primary" onClick={load}>Retry</button>
        </div>
      )}

      {!loading && !error && courses.length === 0 && (
        <p>
          You are not enrolled in any courses yet. <Link href="/courses">Browse the catalog</Link>.
        </p>
      )}

      {!loading && !error && courses.length > 0 && (
        <div className="card-grid">
          {courses.map((course) => (
            <div key={course.slug} className="enrollment-item">
              <CourseCard course={course} />
              <button className="btn btn-secondary" onClick={() => leaveCourse(course.slug)}>
                Leave course
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
