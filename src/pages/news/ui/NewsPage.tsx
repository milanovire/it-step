import { motion } from 'framer-motion'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { NewsCard } from '@/entities/news'
import { newsItems } from '@/entities/news/model/news'
import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import styles from './NewsPage.module.scss'

export function NewsPage() {
  return (
    <>
      <section id={HERO_CONTAINER_ID} className={styles.hero}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.title}>Новости</h1>
            <p className={styles.subtitle}>
              Актуальные события, наборы, акции и достижения IT STEP в Витебске
            </p>
          </motion.div>
        </Container>
      </section>
      <Section>
        <Container>
          <div className={styles.grid}>
            {newsItems.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <NewsCard news={item} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
