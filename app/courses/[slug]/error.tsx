'use client'

import Link from 'next/link'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="error-box">
      <h2>This course could not be loaded</h2>
      <p>{error.message}</p>
      <div className="button-row">
        <button className="btn btn-primary" onClick={reset}>Retry</button>
        <Link href="/courses" className="btn btn-secondary">Back to catalog</Link>
      </div>
    </div>
  )
}
