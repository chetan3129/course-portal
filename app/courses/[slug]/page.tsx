import { Suspense } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Course } from '@/lib/types'
import { baseUrl } from '@/lib/api'
import { isEnrolled } from '@/lib/enrollmentsStore'
import EnrollButton from '@/components/EnrollButton'
import LessonList from '@/components/LessonList'
import ReviewList from '@/components/ReviewList'
import SectionSkeleton from '@/components/SectionSkeleton'

async function getCourse(slug: string): Promise<Course | null> {
  const res = await fetch(`${baseUrl()}/api/courses/${slug}`, { cache: 'no-store' })
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Could not load this course')
  return res.json()
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const course = await getCourse(params.slug)
  if (!course) return { title: 'Course not found' }

  return {
    title: course.title,
    description: course.summary,
    openGraph: {
      title: course.title,
      description: course.summary,
      type: 'website',
    },
  }
}

export default async function CourseDetailsPage({ params }: { params: { slug: string } }) {
  const course = await getCourse(params.slug)
  if (!course) notFound()

  const enrolled = isEnrolled(course.slug)

  return (
    <article>
      <span className={`level level-${course.level.toLowerCase()}`}>{course.level}</span>
      <h1>{course.title}</h1>
      <p className="lead">{course.description}</p>

      <dl className="detail-grid">
        <div><dt>Instructor</dt><dd>{course.instructor}</dd></div>
        <div><dt>Category</dt><dd>{course.category}</dd></div>
        <div><dt>Duration</dt><dd>{course.durationHours} hours</dd></div>
        <div><dt>Rating</dt><dd>⭐ {course.rating}</dd></div>
        <div><dt>Seats left</dt><dd>{course.seatsLeft}</dd></div>
        <div><dt>Price</dt><dd>₹{course.price.toLocaleString('en-IN')}</dd></div>
      </dl>

      <EnrollButton slug={course.slug} initialEnrolled={enrolled} />

      <h2>Lesson plan</h2>
      <Suspense fallback={<SectionSkeleton label="Loading lesson plan..." rows={4} />}>
        <LessonList slug={course.slug} />
      </Suspense>

      <h2>Student reviews</h2>
      <Suspense fallback={<SectionSkeleton label="Loading student reviews..." rows={3} />}>
        <ReviewList slug={course.slug} />
      </Suspense>
    </article>
  )
}
