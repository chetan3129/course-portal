import { Lesson } from '@/lib/types'
import { baseUrl } from '@/lib/api'

async function getLessons(slug: string): Promise<Lesson[]> {
  const res = await fetch(`${baseUrl()}/api/courses/${slug}/lessons`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Could not load the lesson plan')
  return res.json()
}

export default async function LessonList({ slug }: { slug: string }) {
  const lessons = await getLessons(slug)

  if (lessons.length === 0) {
    return <p>The lesson plan for this course is not published yet.</p>
  }

  return (
    <ol className="lesson-list">
      {lessons.map((lesson) => (
        <li key={lesson.id}>
          <span>{lesson.title}</span>
          <span className="lesson-meta">
            {lesson.durationMinutes} min {lesson.isFree && <em className="free-tag">free preview</em>}
          </span>
        </li>
      ))}
    </ol>
  )
}
