import { Link } from 'react-router-dom'
import { MapPin, Briefcase, ArrowRight } from 'lucide-react'
import { ROUTES } from '@/shared/config/routes'
import type { Vacancy } from '../model/types'
import styles from './VacancyCard.module.scss'

interface VacancyCardProps {
  vacancy: Vacancy
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
  return (
    <Link to={ROUTES.vacancy(vacancy.slug)} className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{vacancy.title}</h3>
        {vacancy.salary && <span className={styles.salary}>{vacancy.salary}</span>}
      </div>
      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <MapPin size={14} />
          {vacancy.city}
        </span>
        <span className={styles.metaItem}>
          <Briefcase size={14} />
          {vacancy.employmentType}
        </span>
      </div>
      <p className={styles.description}>{vacancy.shortDescription}</p>
      <span className={styles.link}>
        Подробнее
        <ArrowRight size={16} />
      </span>
    </Link>
  )
}
