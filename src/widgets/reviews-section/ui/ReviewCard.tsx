import { Star } from 'lucide-react'
import type { Review } from '../model/reviews'
import styles from './ReviewsSection.module.scss'

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.quote}>“</div>

      <p className={styles.reviewText}>{review.text}</p>

      <div className={styles.cardFooter}>
        <div className={styles.rating}>
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="currentColor"
              strokeWidth={1.8}
            />
          ))}
        </div>

        <div className={styles.author}>
          <strong>{review.author}</strong>
          <span>{review.course}</span>
        </div>
      </div>
    </article>
  )
}