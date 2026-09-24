import type { Metadata } from 'next'
import { getCourses } from '@/lib/data'
import CourseSearch from '@/components/CourseSearch'

export const metadata: Metadata = {
  title: 'Course Catalog',
  description: 'Browse every course available in the student portal.',
}

export default function CoursesPage() {
  const courses = getCourses()

  return (
    <section>
      <h1>Course Catalog</h1>
      <CourseSearch courses={courses} />
    </section>
  )
}
