import { ArrowRight } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { ROUTES } from '@/shared/config/routes'
import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import styles from './HeroSection.module.scss'

export function HeroSection() {
  return (
    <section id={HERO_CONTAINER_ID} className={styles.hero}>
      <div className={styles.bgImage}>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop"
          alt="Слушатели IT ШАГ"
          loading="eager"
        />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <span className={styles.badge}>Витебск | С 2013 года</span>
            <h1 className={styles.title}>
              IT ШАГ — учебный центр для детей и взрослых
            </h1>
            <p className={styles.description}>
              Обучаем современным IT-направлениям с нуля. Практические занятия в небольших группах, опытные преподаватели и программы, ориентированные на реальные навыки, помогают детям и взрослым уверенно осваивать цифровые технологии.
            </p>
            <div className={styles.actions}>
              <Button to={ROUTES.itEducation} variant="cta" size="lg">
                Записаться
                <ArrowRight size={20} />
              </Button>
              <Button to={ROUTES.itStepRb} variant="secondary" size="lg">
                Подробнее
              </Button>
            </div>
          </div>

          <div className={styles.imageBlock}>
            <div className={styles.floatingCard}>
              <img
                src="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Обучение программированию"
              />
            </div>
            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statValue}>17K+</span>
                <span className={styles.statLabel}>выпускников</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>8</span>
                <span className={styles.statLabel}>учебных центров в РБ</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
