import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
import { ROUTES } from '@/shared/config/routes'

interface LogoProps {
  variant?: 'default' | 'light'
}

export function Logo({ variant = 'default' }: LogoProps) {
  return (
    <Link to={ROUTES.home} className={`${styles.logo} ${styles[variant]}`}>
      <div className={styles.text}>
        <span className={styles.brand}>IT ШАГ</span>
      </div>
    </Link>
  )
}
