import { getReviews, delay } from '@/lib/data'

export default async function ReviewList({ slug }: { slug: string }) {
  await delay(2000)
  const reviews = getReviews(slug)

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