import { motion } from 'framer-motion'
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
          <motion.div
            className={styles.textBlock}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className={styles.badge}>Витебск | С 2013 года</span>
            <h1 className={styles.title}>
              IT ШАГ — центр дополнительного образования для детей и взрослых
            </h1>
            <p className={styles.description}>
              Обучаем современным IT-направлениям с нуля. Практические занятия в небольших группах, опытные преподаватели и программы, ориентированные на реальные навыки, помогают детям и взрослым уверенно осваивать цифровые технологии.
            </p>
            <div className={styles.actions}>
              <Button to={ROUTES.itEducation} size="lg">
                Записаться
                <ArrowRight size={20} />
              </Button>
              <Button to={ROUTES.itStepRb} variant="secondary" size="lg">
                Подробнее
              </Button>
            </div>
          </motion.div>

          <motion.div
            className={styles.imageBlock}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.floatingCard}>
              <img
                src="https://plus.unsplash.com/premium_photo-1661369599716-061c6d0a19a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8"
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
                <span className={styles.statLabel}>филиалов в РБ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
