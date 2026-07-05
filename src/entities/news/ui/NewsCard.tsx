import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { ROUTES } from '@/shared/config/routes'
import { formatDate } from '@/shared/lib/hooks'
import type { NewsItem } from '../model/types'
import styles from './NewsCard.module.scss'

interface NewsCardProps {
  news: NewsItem
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Link to={ROUTES.newsItem(news.slug)} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={news.image} alt={news.title} loading="lazy" />
        <span className={styles.category}>{news.category}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.date}>
          <Calendar size={14} />
          {formatDate(news.date)}
        </div>
        <h3 className={styles.title}>{news.title}</h3>
        <p className={styles.description}>{news.shortDescription}</p>
        <span className={styles.link}>
          Подробнее
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}
