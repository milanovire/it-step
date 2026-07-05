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
          alt="Студенты IT ШАГ"
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
            <span className={styles.badge}>Витебск | С 1999 года</span>
            <h1 className={styles.title}>
              IT ШАГ — образование, которое открывает путь в IT
            </h1>
            <p className={styles.description}>
              Международная академия программирования и цифровых технологий.
              Обучаем с нуля до профессионала в малых группах с практикующими
              преподавателями. Международный диплом и помощь с трудоустройством.
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
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=700&fit=crop"
                alt="Обучение программированию"
              />
            </div>
            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statValue}>170K+</span>
                <span className={styles.statLabel}>выпускников</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>20+</span>
                <span className={styles.statLabel}>стран мира</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
