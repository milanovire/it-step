import { motion } from 'framer-motion'
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.title}>Вакансии</h1>
            <p className={styles.subtitle}>
              Присоединяйтесь к команде IT ШАГ. Мы ищем талантливых
              преподавателей и специалистов, увлечённых образованием.
            </p>
          </motion.div>
        </Container>
      </section>
      <Section>
        <Container>
          <div className={styles.grid}>
            {vacancies.map((vacancy, index) => (
              <motion.div
                key={vacancy.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <VacancyCard vacancy={vacancy} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
