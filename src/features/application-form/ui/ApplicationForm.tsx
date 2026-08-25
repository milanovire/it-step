import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { getBitrixWebhookUrl } from '@/shared/config/env'
import { resolveLeadTitle } from '../lib/resolveLeadTitle'
import styles from './ApplicationForm.module.scss'

interface ApplicationFormProps {
  courseName?: string
  compact?: boolean
}

export function ApplicationForm({ courseName, compact }: ApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage(null)
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const leadTitle = resolveLeadTitle(courseName)
    const message = formData.get('message')?.toString().trim()
    const commentBlocks = message
      ? [`Комментарий клиента:\n${message}`, '---']
      : []

    try {
      const response = await fetch(getBitrixWebhookUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            TITLE: leadTitle,
            NAME: formData.get('name'),
            PHONE: [
              {
                VALUE: formData.get('phone'),
                VALUE_TYPE: 'WORK',
              },
            ],
            COMMENTS: [
              ...commentBlocks,
              'Источник: Сайт',
              `Страница: ${window.location.href}`,
              `Раздел: ${leadTitle}`,
            ].join('\n'),
          },
        }),
      })

      const result = await response.json()
      if (!response.ok || result.error) {
        console.error(result)
        throw new Error(result.error_description || 'Ошибка отправки')
      }

      setSubmitted(true)
    } catch (error) {
      console.error(error)
      setErrorMessage('Не удалось отправить заявку. Попробуйте позже или позвоните нам.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3>Заявка отправлена!</h3>
        <p>Мы свяжемся с вами в ближайшее время.</p>
      </div>
    )
  }

  return (
    <form
      className={`${styles.form} ${compact ? styles.compact : ''}`}
      onSubmit={handleSubmit}
    >
      {!compact && <h3 className={styles.title}>Оставить заявку</h3>}
      {!compact && (
        <p className={styles.subtitle}>
          Заполните форму, и мы свяжемся с вами для консультации
        </p>
      )}
      {courseName && (
        <input type="hidden" name="course" value={courseName} />
      )}
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="name">Ваше имя</label>
          <input id="name" name="name" type="text" placeholder="Иван Иванов" required disabled={isSubmitting} />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Телефон</label>
          <input id="phone" name="phone" type="tel" placeholder="+375 (__) ___-__-__" required disabled={isSubmitting} />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Комментарий</label>
          <textarea
            id="message"
            name="message"
            placeholder="Расскажите о ваших целях или задайте вопрос..."
            rows={compact ? 2 : 3}
            disabled={isSubmitting}
          />
        </div>
      </div>
      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}
      <Button type="submit" variant="ctaSubmit" fullWidth disabled={isSubmitting}>
        <Send size={18} />
        {isSubmitting ? 'Отправка...' : 'Оставить заявку'}
      </Button>
    </form>
  )
}
