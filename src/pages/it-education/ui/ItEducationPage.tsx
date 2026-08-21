import { useState } from 'react'
import { Briefcase, GraduationCap, Sun, Sparkles } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { AnimateInView } from '@/shared/ui/AnimateInView'
import { ApplicationForm } from '@/features/application-form'
import { CourseCard } from '@/entities/course'
import {
  getAdultCourses,
  getChildrenCourses,
  getSeasonalPrograms,
} from '@/entities/course/model/courses'
import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import styles from './ItEducationPage.module.scss'

type TabId = 'children' | 'adults' |  'seasonal'

const TABS: { id: TabId; label: string; icon: typeof Briefcase }[] = [
  { id: 'children', label: 'Дети и подростки', icon: GraduationCap },
  { id: 'adults', label: 'Для взрослых', icon: Briefcase },
  { id: 'seasonal', label: 'Сезонные программы', icon: Sun },
]

const TAB_CONTENT: Record<TabId, { title: string; subtitle: string }> = {
  adults: {
    title: 'IT-курсы для взрослых',
    subtitle: 'Профессиональные программы с нуля до junior-специалиста.',
  },
  children: {
    title: 'Обучение для детей и подростков',
    subtitle: 'Детский учебный центр IT ШАГ: от первого знакомства с компьютером до профессионального IT-образования в старших классах.',
  },
  seasonal: {
    title: 'Сезонные IT-программы',
    subtitle: 'Летние, зимние, весенние и осенние интенсивы на каникулах — короткий формат, максимум практики и ярких проектов.',
  },
}

const TAB_COURSES: Record<TabId, () => ReturnType<typeof getAdultCourses>> = {
  adults: getAdultCourses,
  children: getChildrenCourses,
  seasonal: getSeasonalPrograms,
}

export function ItEducationPage() {
  const [activeTab, setActiveTab] = useState<TabId>('children')
  const courses = TAB_COURSES[activeTab]()
  const content = TAB_CONTENT[activeTab]

  return (
    <>
      <section id={HERO_CONTAINER_ID} className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=900&fit=crop"
            alt="IT обучение"
          />
          <div className={styles.heroOverlay} />
        </div>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <Sparkles size={14} />
              IT ШАГ · Витебск
            </span>
            <h1 className={styles.title}>IT обучение</h1>
            <p className={styles.subtitle}>
              Курсы для взрослых, программы для детей и подростков, сезонные
              интенсивы — выберите направление и начните путь в IT
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <strong>7</strong>
                <span>направлений для взрослых</span>
              </div>
              <div className={styles.stat}>
                <strong>6</strong>
                <span>возрастных групп детей</span>
              </div>
              <div className={styles.stat}>
                <strong>1</strong>
                <span>сезонная программа</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.catalogDecor} aria-hidden>
          <span className={styles.orb1} />
          <span className={styles.dotGrid} />
        </div>
        <Container>
          <div className={styles.catalogPanel}>
            <div className={styles.tabs}>
              {TABS.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {isActive && <span className={styles.tabBg} />}
                    <Icon size={18} className={styles.tabIcon} />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>

            <div>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>{content.title}</h2>
                <p className={styles.sectionSubtitle}>{content.subtitle}</p>
              </div>

              <div className={styles.coursesGrid}>
                {courses.map((course) => (
                  <div key={course.slug}>
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaPanel}>
            <AnimateInView direction="left">
              <span className={styles.eyebrow}>Бесплатная консультация</span>
              <h2 className={styles.ctaTitle}>Не знаете, что выбрать?</h2>
              <p className={styles.ctaText}>
                Оставьте заявку — мы поможем подобрать программу для вас или
                вашего ребёнка и ответим на все вопросы
              </p>
            </AnimateInView>
            <AnimateInView direction="right" delay={0.1}>
              <ApplicationForm compact />
            </AnimateInView>
          </div>
        </Container>
      </section>
    </>
  )
}
