import { ArrowRight, Star } from 'lucide-react'
import { reviewPlatforms } from '../model/platforms'
import styles from './ReviewsSection.module.scss'

export function ReviewPlatforms() {
  return (
    <div className={styles.platforms}>
      {reviewPlatforms.map((platform) => (
        <a
          key={platform.id}
          href={platform.href} target="_blank" rel="noopener noreferrer" className={styles.platformCard}>
          <div className={styles.platformHeader}>
          <h4>{platform.title}</h4>

          <ArrowRight size={18} />
          </div>

          <div className={styles.platformRating}>
            <Star size={18} fill="currentColor" strokeWidth={1.8} />
            <span>{platform.rating}</span>
          </div>

          <p>{platform.reviewsCount}+ отзывов</p>
        </a>
      ))}
    </div>
  )
}