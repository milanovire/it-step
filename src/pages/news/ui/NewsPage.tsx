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
          <div>
            <h1 className={styles.title}>Новости</h1>
            <p className={styles.subtitle}>
              Актуальные события, наборы, акции и достижения IT ШАГ в Витебске
            </p>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <div className={styles.grid}>
            {newsItems.map((item) => (
              <div key={item.slug}>
                <NewsCard news={item} />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
