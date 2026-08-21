import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { VacancyCard } from '@/entities/vacancy'
import { vacancies } from '@/entities/vacancy/model/vacancies'
import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import styles from './VacanciesPage.module.scss'

export function VacanciesPage() {
  return (
    <>
      <section id={HERO_CONTAINER_ID} className={styles.hero}>
        <Container>
          <div>
            <h1 className={styles.title}>Вакансии</h1>
            <p className={styles.subtitle}>
              Присоединяйтесь к команде IT ШАГ. Мы ищем талантливых
              преподавателей и специалистов, увлечённых образованием.
            </p>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <div className={styles.grid}>
            {vacancies.map((vacancy) => (
              <div key={vacancy.slug}>
                <VacancyCard vacancy={vacancy} />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
