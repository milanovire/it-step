import { Link } from 'react-router-dom'
import { Clock, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/shared/config/routes'
import type { Course, CourseCategory } from '@/entities/course/model/types'
import styles from './CourseCard.module.scss'

interface CourseCardProps {
  course: Course
  inCarousel?: boolean
}

const CATEGORY_LABELS: Record<CourseCategory, string> = {
  adults: 'Взрослые',
  children: 'Для детей',
  seasonal: 'Интенсив',
}

export function CourseCard({ course, inCarousel }: CourseCardProps) {
  const category = course.category ?? 'adults'

  return (
    <Link
      to={ROUTES.course(course.slug)}
      className={`${styles.card} ${inCarousel ? styles.inCarousel : ''} ${category !== 'adults' ? styles.kidsCard : ''}`}
    >
      <div className={styles.imageWrap}>
        <img src={course.image} alt={course.title} loading="lazy" />
        <div className={styles.imageOverlay} />
        {category !== 'adults' && (
          <span className={`${styles.badge} ${styles[`badge_${category}`]}`}>
            {CATEGORY_LABELS[category]}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.shortDescription}</p>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <Users size={14} />
            {course.ageGroup}
          </span>
          <span className={styles.metaItem}>
            <Clock size={14} />
            {course.duration}
          </span>
        </div>
        <Button variant="outline" size="sm" className={styles.btn}>
          Подробнее
          <ArrowRight size={16} />
        </Button>
      </div>
    </Link>
  )
}
