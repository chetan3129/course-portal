import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="error-box">
      <h2>Page not found</h2>
      <p>The page or course you are looking for does not exist.</p>
      <Link href="/courses" className="btn btn-primary">Back to catalog</Link>
    </div>
  )
}
