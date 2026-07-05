import { CheckCircle, Circle, BookOpen, Users, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/shared/ui/Container'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { AnimateInView } from '@/shared/ui/AnimateInView'
import { ApplicationForm } from '@/features/application-form'
import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import styles from './CtPrepPage.module.scss'

const advantages = [
  {
    icon: BookOpen,
    title: 'Полный охват программы ЦТ',
    description: 'Математика, русский и английский языки, история — актуальные предметы для успешной сдачи ЦТ.',
  },
  {
    icon: Users,
    title: 'Опытные преподаватели',
    description: 'Педагоги с многолетним стажем подготовки к централизованному тестированию.',
  },
  {
    icon: Target,
    title: 'Индивидуальный подход',
    description: 'Малые группы, диагностика уровня и персональный план подготовки.',
  },
]

const ACTIVE_SUBJECTS = new Set([
  'Математика',
  'Английский язык',
  'Русский язык',
  'История',
])

const subjects = [
  'Математика',
  'Физика',
  'Русский язык',
  'Белорусский язык',
  'Химия',
  'Биология',
  'Английский язык',
  'Обществоведение',
  'История',
  'География',
]

export function CtPrepPage() {
  return (
    <>
      <section id={HERO_CONTAINER_ID} className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&h=900&fit=crop"
            alt="Подготовка к ЦТ"
          />
          <div className={styles.heroOverlay} />
        </div>
        <Container>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>Подготовка к ЦТ</h1>
            <p className={styles.heroDesc}>
              Комплексная подготовка к централизованному тестированию в малых группах
              с опытными преподавателями. Повысьте свои баллы и поступите в вуз мечты.
            </p>
          </motion.div>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className={styles.aboutGrid}>
            <AnimateInView direction="left">
              <h2 className={styles.sectionTitle}>О программе</h2>
              <p className={styles.text}>
                IT ШАГ предлагает качественную подготовку к централизованному
                тестированию для учащихся 10–11 классов. Наши преподаватели знают
                специфику ЦТ и помогают систематизировать знания, отработать типовые
                задания и научиться распределять время на экзамене.
              </p>
              <p className={styles.text}>
                Занятия проходят в комфортных аудиториях в центре Витебска.
                Группы до 12 человек обеспечивают индивидуальное внимание каждому
                ученику.
              </p>
            </AnimateInView>
            <AnimateInView direction="right" delay={0.1}>
              <div className={styles.subjectsCard}>
                <h3>Предметы подготовки</h3>
                <div className={styles.subjectsList}>
                  {subjects.map((subject) => {
                    const isActive = ACTIVE_SUBJECTS.has(subject)

                    return (
                      <span
                        key={subject}
                        className={`${styles.subjectTag} ${isActive ? styles.subjectTagActive : styles.subjectTagInactive}`}
                      >
                        {isActive ? <CheckCircle size={14} /> : <Circle size={14} />}
                        {subject}
                      </span>
                    )
                  })}
                </div>
              </div>
            </AnimateInView>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Преимущества обучения"
            subtitle="Почему стоит готовиться к ЦТ в IT STEP"
          />
          <div className={styles.advantagesGrid}>
            {advantages.map((item, i) => (
              <AnimateInView key={item.title} delay={i * 0.1}>
                <div className={styles.advantageCard}>
                  <div className={styles.advantageIcon}>
                    <item.icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="gradient">
        <Container>
          <div className={styles.applyGrid}>
            <AnimateInView direction="left">
              <SectionHeader
                title="Записаться на подготовку"
                subtitle="Оставьте заявку, и мы подберём оптимальную программу и расписание"
                align="left"
              />
            </AnimateInView>
            <AnimateInView direction="right" delay={0.1}>
              <ApplicationForm courseName="Подготовка к ЦТ" />
            </AnimateInView>
          </div>
        </Container>
      </Section>
    </>
  )
}
