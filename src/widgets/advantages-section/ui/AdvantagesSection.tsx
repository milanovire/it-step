import {
  BookOpen,
  Users,
  Code2,
  HeartHandshake,
  ClipboardList,
  MonitorSmartphone
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
    title: 'Индивидуальный подход',
    description:
      'Небольшие группы позволяют преподавателям уделять внимание каждому ученику, отвечать на вопросы и сопровождать обучение до достижения результата.',
  },
  {
    icon: Code2,
    title: 'Обучение на практике',
    description:
      'На занятиях слушатели выполняют практические задания и работают над собственными проектами, закрепляя полученные знания.',
  },
  {
    icon: HeartHandshake,
    title: 'Поддержка слушателей',
    description:
      'Консультации, гибкий график и индивидуальный подход к каждому.',
  },
  {
  icon: ClipboardList,
  title: 'Электронный дневник MyStat',
  description:
    'Родители и учащиеся могут в любое время отслеживать посещаемость, успеваемость, домашние задания и расписание занятий через электронный дневник MyStat.',
},
{
  icon: MonitorSmartphone,
  title: 'Очное обучение',
  description:
    'Все занятия проходят в современных компьютерных классах с преподавателем. Мы не продаем записанные видеоуроки — обучение строится на живом общении, практике и постоянной обратной связи.',
},
]

export function AdvantagesSection() {
  return (
    <Section background="white">
      <Container>
        <SectionHeader
          title="Почему выбирают IT ШАГ"
          subtitle="Мы создаём среду, в которой каждый слушатель может раскрыть свой потенциал и построить успешную карьеру в IT"
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
