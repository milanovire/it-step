import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import styles from './ApplicationForm.module.scss'

interface ApplicationFormProps {
  courseName?: string
  compact?: boolean
}

export function ApplicationForm({ courseName, compact }: ApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch(
        'HERE_LINK_TO_BITRIX',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              TITLE: `Заявка с сайта${courseName ? ` (${courseName})` : ''}`,
              NAME: formData.get('name'),
              PHONE: [
                {
                  VALUE: formData.get('phone'),
                  VALUE_TYPE: 'WORK',
                },
              ],
              EMAIL: formData.get('email')
                ? [
                    {
                      VALUE: formData.get('email'),
                      VALUE_TYPE: 'WORK',
                    },
                  ]
                : [],
              COMMENTS: formData.get('message') || '',
            },
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Ошибка отправки')
      }

      setSubmitted(true)
    } catch (error) {
      console.error(error)
      alert('Не удалось отправить заявку. Попробуйте позже.')
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
          <input id="name" name="name" type="text" placeholder="Иван Иванов" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Телефон</label>
          <input id="phone" name="phone" type="tel" placeholder="+375 (__) ___-__-__" required />
        </div>
        {!compact && (
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="email@example.com" />
          </div>
        )}
        {!compact && (
          <div className={styles.field}>
            <label htmlFor="message">Комментарий</label>
            <textarea
              id="message"
              name="message"
              placeholder="Расскажите о ваших целях..."
              rows={3}
            />
          </div>
        )}
      </div>
      <Button type="submit" fullWidth>
        <Send size={18} />
        Оставить заявку
      </Button>
    </form>
  )
}
