import { Review } from '@/lib/types'
import { baseUrl } from '@/lib/api'

async function getReviews(slug: string): Promise<Review[]> {
  const res = await fetch(`${baseUrl()}/api/courses/${slug}/reviews`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Could not load student reviews')
  return res.json()
}

export default async function ReviewList({ slug }: { slug: string }) {
  const reviews = await getReviews(slug)

  if (reviews.length === 0) {
    return <p>No reviews yet for this course.</p>
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <p className="review-head">
            <strong>{review.student}</strong> · {'⭐'.repeat(review.rating)}
          </p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  )
}
