import { HeroSection } from '@/widgets/hero-section'
import { AdvantagesSection } from '@/widgets/advantages-section'
import { PopularCoursesSection } from '@/widgets/popular-courses-section'
import { Container } from '@/shared/ui/Container'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { Button } from '@/shared/ui/Button'
import { AnimateInView } from '@/shared/ui/AnimateInView'
import { ApplicationForm } from '@/features/application-form'
import { ROUTES } from '@/shared/config/routes'
import styles from './HomePage.module.scss'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <PopularCoursesSection />
      <Section background="gradient">
        <Container>
          <div className={styles.ctaGrid}>
            <AnimateInView direction="left">
              <SectionHeader
                title="Готовы начать карьеру в IT?"
                subtitle="Запишитесь на бесплатную консультацию — мы поможем выбрать программу и ответим на все вопросы"
                align="left"
              />
              <Button to={ROUTES.itEducation} size="lg">
                Выбрать курс
              </Button>
            </AnimateInView>
            <AnimateInView direction="right" delay={0.15}>
              <ApplicationForm compact />
            </AnimateInView>
          </div>
        </Container>
      </Section>
    </>
  )
}
