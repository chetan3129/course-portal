'use client'

import { useState } from 'react'
import { Course } from '@/lib/types'
import CourseCard from './CourseCard'

export default function CourseSearch({ courses }: { courses: Course[] }) {
  const [query, setQuery] = useState('')

  const filtered = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.instructor.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <input
        className="search-input"
        placeholder="Search by course or instructor..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p>No courses match your search.</p>
      ) : (
        <div className="card-grid">
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      )}
    </div>
  )
}
