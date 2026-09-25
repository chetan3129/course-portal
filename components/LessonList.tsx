import { getLessons, delay } from '@/lib/data'

export default async function LessonList({ slug }: { slug: string }) {
  await delay(1000)
  const lessons = getLessons(slug)

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