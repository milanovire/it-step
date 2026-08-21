import { AlertTriangle, Home, RotateCcw } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/shared/config/routes'
import styles from './ErrorFallback.module.scss'

interface ErrorFallbackProps {
  title?: string
  message?: string
  code?: string | number
  onRetry?: () => void
}

export function ErrorFallback({
  title = 'Что-то пошло не так',
  message = 'Произошла ошибка при загрузке страницы. Попробуйте обновить или вернитесь на главную.',
  code,
  onRetry,
}: ErrorFallbackProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.iconWrap} aria-hidden>
            <AlertTriangle size={28} />
          </div>
          {code !== undefined && <span className={styles.code}>{code}</span>}
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.message}>{message}</p>
          <div className={styles.actions}>
            {onRetry && (
              <Button type="button" variant="primary" onClick={onRetry}>
                <RotateCcw size={18} />
                Попробовать снова
              </Button>
            )}
            <Button to={ROUTES.home} variant={onRetry ? 'secondary' : 'primary'}>
              <Home size={18} />
              На главную
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
