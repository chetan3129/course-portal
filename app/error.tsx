'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="error-box">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button className="btn btn-primary" onClick={reset}>Try again</button>
    </div>
  )
}
