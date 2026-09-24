import Link from 'next/link'
import { Course } from '@/lib/types'

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.slug}`} className="course-card">
      <span className={`level level-${course.level.toLowerCase()}`}>{course.level}</span>
      <h3>{course.title}</h3>
      <p className="summary">{course.summary}</p>
      <p className="meta">
        {course.instructor} · {course.durationHours}h · ⭐ {course.rating}
      </p>
      <p className="price">₹{course.price.toLocaleString('en-IN')}</p>
    </Link>
  )
}
