import { useParams, Navigate, Link } from 'react-router-dom'
import { MapPin, ArrowLeft, CheckCircle } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { AnimateInView } from '@/shared/ui/AnimateInView'
import { ApplicationForm } from '@/features/application-form'
import { getVacancyBySlug } from '@/entities/vacancy/model/vacancies'
import { ROUTES } from '@/shared/config/routes'
import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import styles from './VacancyDetailPage.module.scss'

export function VacancyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const vacancy = slug ? getVacancyBySlug(slug) : undefined

  if (!vacancy) {
    return <Navigate to={ROUTES.vacancies} replace />
  }

  return (
    <>
      <section id={HERO_CONTAINER_ID} className={styles.hero}>
        <Container>
          <AnimateInView>
            <Link to={ROUTES.vacancies} className={styles.back}>
              <ArrowLeft size={18} />
              Все вакансии
            </Link>
            <h1 className={styles.title}>{vacancy.title}</h1>
            <div className={styles.meta}>
              <span><MapPin size={16} /> {vacancy.city}</span>
              {vacancy.salary && <span className={styles.salary}>{vacancy.salary}</span>}
            </div>
          </AnimateInView>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className={styles.grid}>
            <AnimateInView direction="left">
              <p className={styles.description}>{vacancy.description}</p>

              <div className={styles.block}>
                <h3>Требования</h3>
                <ul>
                  {vacancy.requirements.map((req) => (
                    <li key={req}><CheckCircle size={16} /> {req}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.block}>
                <h3>Обязанности</h3>
                <ul>
                  {vacancy.responsibilities.map((item) => (
                    <li key={item}><CheckCircle size={16} /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.block}>
                <h3>Условия</h3>
                <ul>
                  {vacancy.conditions.map((item) => (
                    <li key={item}><CheckCircle size={16} /> {item}</li>
                  ))}
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView direction="right" delay={0.1}>
              <div className={styles.applyCard}>
                <h3>Откликнуться на вакансию</h3>
                <p>Заполните форму, и мы свяжемся с вами</p>
                <ApplicationForm courseName={vacancy.title} compact />
              </div>
            </AnimateInView>
          </div>
        </Container>
      </Section>
    </>
  )
}
