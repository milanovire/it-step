import { useParams, Navigate } from 'react-router-dom'
import { Clock, Users, Banknote, CheckCircle, Award } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { SectionHeader } from '@/shared/ui/Section'
import { AnimateInView } from '@/shared/ui/AnimateInView'
import { ApplicationForm } from '@/features/application-form'
import { FaqAccordion } from '@/widgets/faq-accordion'
import { getCourseBySlug } from '@/entities/course/model/courses'
import { ROUTES } from '@/shared/config/routes'
import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import styles from './CourseDetailPage.module.scss'

export function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const course = slug ? getCourseBySlug(slug) : undefined

  if (!course) {
    return <Navigate to={ROUTES.itEducation} replace />
  }

  return (
    <>
      <section id={HERO_CONTAINER_ID} className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={course.heroImage} alt={course.title} />
          <div className={styles.heroOverlay} />
        </div>
        <Container>
          <div className={styles.heroContent}>
            <AnimateInView>
              <span className={styles.heroBadge}>IT ШАГ</span>
              <h1 className={styles.heroTitle}>{course.title}</h1>
              <p className={styles.heroDesc}>{course.shortDescription}</p>
              <div className={styles.heroMeta}>
                <span><Users size={18} /> {course.ageGroup}</span>
                <span><Clock size={18} /> {course.duration}</span>
                <span><Banknote size={18} /> {course.price}</span>
              </div>
              <a href="#" onClick = {(e) => e.preventDefault()} className={styles.applyBtn}>Записаться на курс</a>
            </AnimateInView>
          </div>
        </Container>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutDecor} aria-hidden>
          <span className={styles.orb1} />
          <span className={styles.orb2} />
        </div>
        <Container>
          <div className={styles.aboutPanel}>
            <div className={styles.twoCol}>
              <AnimateInView direction="left">
                <span className={styles.eyebrow}>О программе</span>
                <h2 className={styles.sectionTitle}>О курсе</h2>
                <p className={styles.text}>{course.description}</p>
                <div className={styles.advantagesRow}>
                  {course.advantages.map((item) => (
                    <span key={item} className={styles.advantageChip}>
                      <Award size={14} />
                      {item}
                    </span>
                  ))}
                </div>
              </AnimateInView>
              <AnimateInView direction="right" delay={0.1}>
                <div className={styles.infoCard}>
                  <h3>Для кого этот курс</h3>
                  <ul>
                    {course.forWhom.map((item) => (
                      <li key={item}><CheckCircle size={16} /> {item}</li>
                    ))}
                  </ul>
                </div>
              </AnimateInView>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.skillsSection}>
        <Container>
          <SectionHeader
            title="Чему вы научитесь"
            subtitle="Практические навыки, которые вы освоите в процессе обучения"
          />
          <div className={styles.skillsGrid}>
            {course.skills.map((skill, i) => (
              <AnimateInView key={skill} delay={i * 0.05}>
                <div className={styles.skillCard}>
                  <span className={styles.skillNum}>{String(i + 1).padStart(2, '0')}</span>
                  <CheckCircle size={20} className={styles.skillIcon} />
                  <span>{skill}</span>
                </div>
              </AnimateInView>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.programSection}>
        <Container>
          <div className={styles.programPanel}>
            <SectionHeader title="Программа обучения" />
            <div className={styles.programGrid}>
              {course.program.map((module, i) => (
                <AnimateInView key={module.module} delay={i * 0.08}>
                  <div className={styles.programCard}>
                    <span className={styles.moduleNum}>{String(i + 1).padStart(2, '0')}</span>
                    <h3>{module.module}</h3>
                    <ul>
                      {module.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.faqSection}>
        <Container>
          <div className={styles.faqPanel}>
            <SectionHeader title="Часто задаваемые вопросы" />
            <FaqAccordion items={course.faq} />
          </div>
        </Container>
      </section>

      <section className={styles.applySection} id="apply">
        <div className={styles.applyDecor} aria-hidden>
          <span className={styles.orb1} />
        </div>
        <Container>
          <div className={styles.applyPanel}>
            <div className={styles.applyGrid}>
              <AnimateInView direction="left">
                <span className={styles.eyebrow}>Запись на обучение</span>
                <h2 onClick={(e) => e.preventDefault()} className={styles.sectionTitle} >Записаться на курс</h2>
                <p className={styles.applyText}>
                  Оставьте заявку на «{course.title}» — мы свяжемся с вами
                  и проведём бесплатную консультацию
                </p>
              </AnimateInView>
              <AnimateInView direction="right" delay={0.1}>
                <ApplicationForm courseName={course.title} />
              </AnimateInView>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
