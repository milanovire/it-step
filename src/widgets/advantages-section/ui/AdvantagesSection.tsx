import {
  BookOpen,
  Users,
  Award,
  Briefcase,
  Code2,
  HeartHandshake,
} from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { AnimateInView } from '@/shared/ui/AnimateInView'
import styles from './AdvantagesSection.module.scss'

const advantages = [
  {
    icon: BookOpen,
    title: 'Современные программы',
    description:
      'Актуальные учебные планы, разработанные с учётом требований IT-индустрии 2025–2026 года.',
  },
  {
    icon: Users,
    title: 'Практикующие преподаватели',
    description:
      'Занятия ведут действующие IT-специалисты с реальным опытом в ведущих компаниях.',
  },
  {
    icon: Award,
    title: 'Международный диплом',
    description:
      'Диплом IT ШАГ признан в 20+ странах. Бесплатные сертификаты Microsoft, Cisco, Autodesk.',
  },
  {
    icon: Briefcase,
    title: 'Помощь с трудоустройством',
    description:
      'Центр карьеры помогает с резюме, портфолио и подготовкой к собеседованиям.',
  },
  {
    icon: Code2,
    title: 'Живые проекты',
    description:
      'Студенты работают над реальными задачами и формируют портфолио для работодателей.',
  },
  {
    icon: HeartHandshake,
    title: 'Поддержка студентов',
    description:
      'Менторство, консультации, гибкий график и индивидуальный подход к каждому.',
  },
]

export function AdvantagesSection() {
  return (
    <Section background="white">
      <Container>
        <SectionHeader
          title="Почему выбирают IT ШАГ"
          subtitle="Мы создаём среду, в которой каждый студент может раскрыть свой потенциал и построить успешную карьеру в IT"
        />
        <div className={styles.grid}>
          {advantages.map((item, index) => (
            <AnimateInView key={item.title} delay={index * 0.08}>
              <div className={styles.card}>
                <div className={styles.iconWrap}>
                  <item.icon size={24} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </Container>
    </Section>
  )
}
