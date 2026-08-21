import { useParams, Navigate, Link } from 'react-router-dom'
import { Calendar, ArrowLeft } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { AnimateInView } from '@/shared/ui/AnimateInView'
import { ApplicationForm } from '@/features/application-form'
import { getNewsBySlug } from '@/entities/news/model/news'
import { formatDate } from '@/shared/lib/hooks'
import { ROUTES } from '@/shared/config/routes'
import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import styles from './NewsDetailPage.module.scss'

export function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const news = slug ? getNewsBySlug(slug) : undefined

  if (!news) {
    return <Navigate to={ROUTES.news} replace />
  }

  return (
    <>
      <section id={HERO_CONTAINER_ID} className={styles.hero}>
        <Container>
          <AnimateInView>
            <Link to={ROUTES.news} className={styles.back}>
              <ArrowLeft size={18} />
              Все новости
            </Link>
            <span className={styles.category}>{news.category}</span>
            <h1 className={styles.title}>{news.title}</h1>
            <div className={styles.date}>
              <Calendar size={16} />
              {formatDate(news.date)}
            </div>
          </AnimateInView>
        </Container>
      </section>
      <Section background="white">
        <Container>
          <div className={styles.layout}>
            <AnimateInView direction="left">
              <figure className={styles.mediaCard}>
                <img src={news.image} alt={news.title} loading="lazy" />
                <figcaption>
                  <span className={styles.mediaCategory}>{news.category}</span>
                  <time dateTime={news.date}>{formatDate(news.date)}</time>
                </figcaption>
              </figure>
            </AnimateInView>

            <div className={styles.mainCol}>
              <AnimateInView delay={0.05}>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />
              </AnimateInView>

              <AnimateInView delay={0.12}>
                <div className={styles.applyBlock}>
                  <h2>Есть вопросы по этой новости?</h2>
                  <p>Оставьте заявку — перезвоним и расскажем подробности</p>
                  <ApplicationForm courseName={news.title} compact />
                </div>
              </AnimateInView>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
