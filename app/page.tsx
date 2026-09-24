import Link from 'next/link'

export default function HomePage() {
  return (
    <section>
      <h1>Student Course Portal</h1>
      <p className="lead">Browse the catalog, open a course and enroll in it.</p>
      <Link href="/courses" className="btn btn-primary">Browse courses</Link>
    </section>
  )
}
