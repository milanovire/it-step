import { useState } from 'react'
import {
  CheckCircle,
  Circle,
  BookOpen,
  Users,
  Target,
  Clock,
  Calendar,
  Banknote,
  MapPin,
  GraduationCap,
  ChevronRight,
} from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { AnimateInView } from '@/shared/ui/AnimateInView'
import { ApplicationForm } from '@/features/application-form'
import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import { CONTACTS } from '@/shared/config/contacts'
import styles from './CtPrepPage.module.scss'

const advantages = [
  {
    icon: BookOpen,
    title: 'Актуальная программа ЦТ',
    description:
      'Сейчас идёт набор на подготовку по английскому языку. Остальные предметы — в планах, следите за обновлениями.',
  },
  {
    icon: Users,
    title: 'Опытные преподаватели',
    description: 'Педагоги с многолетним стажем подготовки к централизованному тестированию.',
  },
  {
    icon: Target,
    title: 'Индивидуальный подход',
    description: 'Малые группы, диагностика уровня и персональный план подготовки.',
  },
]

const ACTIVE_SUBJECTS = new Set(['Английский язык'])

const subjects = [
  'Математика',
  'Физика',
  'Русский язык',
  'Белорусский язык',
  'Химия',
  'Биология',
  'Английский язык',
  'Обществоведение',
  'История',
  'География',
]

type CtPrepProgramStatus = 'active' | 'planned'

interface CtPrepProgram {
  id: string
  title: string
  status: CtPrepProgramStatus
  image: string
  shortDescription: string
  forWhom?: string
  duration?: string
  frequency?: string
  lessonLength?: string
  groupSize?: string
  format?: string
  price?: string
  payment?: string[]
  schedule?: string[]
  topics?: string[]
  includes?: string[]
}

const ctPrepPrograms: CtPrepProgram[] = [
  {
    id: 'english',
    title: 'Английский язык',
    status: 'active',
    image:
      'https://plus.unsplash.com/premium_photo-1666739032615-ecbd14dfb543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RW5nbGlzaHxlbnwwfHwwfHx8MA%3D%3D',
    shortDescription:
      'Системная подготовка к ЦТ по английскому: лексика и грамматика, чтение и аудирование, письменная часть и регулярные пробные тесты в формате экзамена.',
    forWhom: 'Берём детей на обучение с любым средним баллом!',
    duration: 'Сентябрь 2026 (продолжительность 18 месяцев)',
    frequency: '2 раза в неделю',
    lessonLength: '90 минут (2 академических часа)',
    groupSize: 'До 12 человек в группе',
    format: 'Очно · г. Витебск, пр-т Московский, 31А (3-й этаж)',
    price: 'Рассрочка: 250 BYN/мес. · Стоимость: 4500 BYN/мес.',
    payment: [
      'Возможна оплата за несколько месяцев вперёд — условия у администрации',
      `По вопросам оплаты: ${CONTACTS.payment.phones.map((p) => p.phone).join(' или ')}`,
    ],
    schedule: [
      'Расписание групп согласуется при записи (будни / выходные)',
      'Старт занятий — с августа, набор открыт',
    ],
    topics: [
      'Лексика и грамматика по требованиям ЦТ',
      'Чтение и работа с текстами',
      'Аудирование и понимание на слух',
      'Письменные задания и эссе',
      'Разбор типовых и сложных заданий',
      'Пробные тестирования и работа над ошибками',
    ],
    includes: [
      'Входная диагностика уровня',
      'Домашние задания с проверкой',
      'Консультации по стратегии сдачи экзамена',
    ],
  },
  {
    id: 'math',
    title: 'Математика',
    status: 'planned',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
    shortDescription: 'Подготовка к ЦТ по математике: алгебра, геометрия, задачи повышенной сложности.',
  },
  {
    id: 'russian',
    title: 'Русский язык',
    status: 'planned',
    image:
      'https://images.unsplash.com/photo-1456081101716-74e616ab23d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzc2lhbiUyMGxhbmd1YWdlfGVufDB8fDB8fHww',
    shortDescription: 'Орфография, пунктуация, работа с текстом и задания ЦТ по русскому языку.',
  },
  {
    id: 'history',
    title: 'История',
    status: 'planned',
    image:
      'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D',
    shortDescription: 'Хронология, анализ источников и типовые задания централизованного тестирования.',
  },
  {
    id: 'physics',
    title: 'Физика',
    status: 'planned',
    image:
      'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHx8MA%3D%3D',
    shortDescription: 'Теория, расчётные задачи и практика в формате экзаменационных заданий.',
  },
  {
    id: 'chemistry',
    title: 'Химия',
    status: 'planned',
    image:
      'https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlbWlzdHJ5fGVufDB8fDB8fHww',
    shortDescription: 'Неорганическая и органическая химия, задачи и тестовая часть ЦТ.',
  },
  {
    id: 'biology',
    title: 'Биология',
    status: 'planned',
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop',
    shortDescription: 'Ботаника, зоология, анатомия и подготовка к тестовым заданиям.',
  },
  {
    id: 'belarusian',
    title: 'Белорусский язык',
    status: 'planned',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    shortDescription: 'Нормы языка, текстовые задания и практика для сдачи ЦТ.',
  },
  {
    id: 'social',
    title: 'Обществоведение',
    status: 'planned',
    image:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop',
    shortDescription: 'Право, экономика, политология — в формате заданий централизованного тестирования.',
  },
  {
    id: 'geography',
    title: 'География',
    status: 'planned',
    image:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VvZ3JhcGh5fGVufDB8fDB8fHww',
    shortDescription: 'Физическая и экономическая география, карты и тестовые задания ЦТ.',
  },
]

function ProgramMetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock
  label: string
  value: string
}) {
  return (
    <div className={styles.programMetaItem}>
      <span className={styles.programMetaIcon}>
        <Icon size={18} />
      </span>
      <div>
        <span className={styles.programMetaLabel}>{label}</span>
        <span className={styles.programMetaValue}>{value}</span>
      </div>
    </div>
  )
}

export function CtPrepPage() {
  const defaultProgramId = ctPrepPrograms.find((p) => p.status === 'active')?.id ?? ctPrepPrograms[0].id
  const [selectedProgramId, setSelectedProgramId] = useState(defaultProgramId)
  const selectedProgram = ctPrepPrograms.find((p) => p.id === selectedProgramId) ?? ctPrepPrograms[0]
  const isActiveProgram = selectedProgram.status === 'active'

  return (
    <>
      <section id={HERO_CONTAINER_ID} className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&h=900&fit=crop"
            alt="Подготовка к ЦТ"
          />
          <div className={styles.heroOverlay} />
        </div>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Подготовка к ЦТ</h1>
            <p className={styles.heroDesc}>
              Комплексная подготовка к централизованному тестированию в малых группах
              с опытными преподавателями. Повысьте свои баллы и поступите в вуз мечты.
            </p>
          </div>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className={styles.aboutGrid}>
            <AnimateInView direction="left">
              <h2 className={styles.sectionTitle}>О программе</h2>
              <p className={styles.text}>
                IT ШАГ предлагает качественную подготовку к централизованному
                тестированию для учащихся 10–11 классов. Наши преподаватели знают
                специфику ЦТ и помогают систематизировать знания, отработать типовые
                задания и научиться распределять время на экзамене.
              </p>
              <p className={styles.text}>
                Занятия проходят в комфортных аудиториях в центре Витебска.
                Индивидуальный подход позволяет каждому ученику получать необходимое внимание преподавателя и эффективно осваивать материал.
              </p>
            </AnimateInView>
            <AnimateInView direction="right" delay={0.1}>
              <div className={styles.subjectsCard}>
                <h3>Предметы подготовки</h3>
                <div className={styles.subjectsList}>
                  {subjects.map((subject) => {
                    const isActive = ACTIVE_SUBJECTS.has(subject)

                    return (
                      <span
                        key={subject}
                        className={`${styles.subjectTag} ${isActive ? styles.subjectTagActive : styles.subjectTagInactive}`}
                      >
                        {isActive ? <CheckCircle size={14} /> : <Circle size={14} />}
                        {subject}
                      </span>
                    )
                  })}
                </div>
              </div>
            </AnimateInView>
          </div>
        </Container>
      </Section>

      <section className={styles.programsSection}>
        <div className={styles.programsDecor} aria-hidden>
          <span className={styles.orb1} />
          <span className={styles.dotGrid} />
        </div>
        <Container>
          <AnimateInView>
            <div className={styles.programsHeader}>
              <SectionHeader
                title="Направления подготовки"
                subtitle="Подробная информация о формате, расписании и оплате. Сейчас открыт набор по английскому языку — остальные предметы появятся позже."
              />
            </div>
          </AnimateInView>

          <AnimateInView delay={0.08}>
            <div className={styles.programLayout}>
              <nav className={styles.subjectSidebar} aria-label="Предметы подготовки к ЦТ">
                <div className={styles.subjectSidebarHead}>
                  <span className={styles.subjectSidebarEyebrow}>2026–2027</span>
                  <h3>Выберите предмет</h3>
                  <p>Открытый набор и программы в разработке</p>
                </div>
                <ul className={styles.subjectList}>
                  {ctPrepPrograms.map((program) => {
                    const isSelected = program.id === selectedProgramId
                    const isActive = program.status === 'active'

                    return (
                      <li key={program.id}>
                        <button
                          type="button"
                          className={`${styles.subjectItem} ${isSelected ? styles.active : ''} ${!isActive ? styles.planned : ''}`}
                          onClick={() => setSelectedProgramId(program.id)}
                          aria-current={isSelected ? 'true' : undefined}
                        >
                          <span className={styles.subjectItemMarker} aria-hidden />
                          <div className={styles.subjectInfo}>
                            <small className={isActive ? styles.statusActive : styles.statusSoon}>
                              {isActive ? 'Идёт набор' : 'Скоро'}
                            </small>
                            <span>{program.title}</span>
                          </div>
                          {isSelected && (
                            <ChevronRight className={styles.subjectChevron} size={20} aria-hidden />
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              <article className={styles.featuredProgram}>
                <div className={styles.featuredImageWrap}>
                  <img src={selectedProgram.image} alt={selectedProgram.title} loading="lazy" />
                  <div className={styles.featuredImageOverlay} />
                  {isActiveProgram ? (
                    <span className={styles.statusBadgeActive}>
                      Идёт набор
                    </span>
                  ) : (
                    <span className={styles.statusBadgePlanned}>Скоро будет</span>
                  )}
                </div>
                <div className={styles.featuredBody}>
                  <div className={styles.featuredHead}>
                    <h3 className={styles.featuredTitle}>{selectedProgram.title}</h3>
                    <p className={styles.featuredDesc}>{selectedProgram.shortDescription}</p>
                  </div>

                  {isActiveProgram ? (
                    <>
                      <div className={styles.programMetaGrid}>
                        {selectedProgram.forWhom && (
                          <ProgramMetaItem
                            icon={GraduationCap}
                            label="Для кого"
                            value={selectedProgram.forWhom}
                          />
                        )}
                        {selectedProgram.duration && (
                          <ProgramMetaItem
                            icon={Calendar}
                            label="Срок обучения"
                            value={selectedProgram.duration}
                          />
                        )}
                        {selectedProgram.frequency && selectedProgram.lessonLength && (
                          <ProgramMetaItem
                            icon={Clock}
                            label="Занятия"
                            value={`${selectedProgram.frequency}, ${selectedProgram.lessonLength}`}
                          />
                        )}
                        {selectedProgram.groupSize && (
                          <ProgramMetaItem
                            icon={Users}
                            label="Группа"
                            value={selectedProgram.groupSize}
                          />
                        )}
                        {selectedProgram.format && (
                          <ProgramMetaItem
                            icon={MapPin}
                            label="Формат"
                            value={selectedProgram.format}
                          />
                        )}
                        {selectedProgram.price && (
                          <ProgramMetaItem
                            icon={Banknote}
                            label="Стоимость"
                            value={selectedProgram.price}
                          />
                        )}
                      </div>

                      {selectedProgram.schedule && selectedProgram.schedule.length > 0 && (
                        <div className={styles.programBlock}>
                          <h4>Расписание и старт</h4>
                          <ul>
                            {selectedProgram.schedule.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className={styles.programTwoCol}>
                        {selectedProgram.topics && (
                          <div className={styles.programBlock}>
                            <h4>Программа подготовки</h4>
                            <ul>
                              {selectedProgram.topics.map((item) => (
                                <li key={item}>
                                  <CheckCircle size={16} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className={styles.programSideCol}>
                          {selectedProgram.includes && (
                            <div className={styles.programBlock}>
                              <h4>Что входит</h4>
                              <ul>
                                {selectedProgram.includes.map((item) => (
                                  <li key={item}>
                                    <CheckCircle size={16} />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {selectedProgram.payment && (
                            <div className={`${styles.programBlock} ${styles.paymentBlock}`}>
                              <h4>Оплата</h4>
                              <ul>
                                {selectedProgram.payment.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className={styles.plannedPreview}>
                      <p>
                        Направление находится в подготовке. Оставьте заявку ниже — сообщим о старте
                        набора первыми.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            </div>
          </AnimateInView>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            title="Преимущества обучения"
            subtitle="Почему стоит готовиться к ЦТ в IT ШАГ"
          />
          <div className={styles.advantagesGrid}>
            {advantages.map((item, i) => (
              <AnimateInView key={item.title} delay={i * 0.1}>
                <div className={styles.advantageCard}>
                  <div className={styles.advantageIcon}>
                    <item.icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="gradient">
        <Container>
          <div className={styles.applyGrid}>
            <AnimateInView direction="left">
              <SectionHeader
                title="Записаться на подготовку"
                subtitle="Оставьте заявку, и мы подберём оптимальную программу и расписание"
                align="left"
              />
            </AnimateInView>
            <AnimateInView direction="right" delay={0.1}>
              <ApplicationForm
                courseName={
                  isActiveProgram
                    ? `Подготовка к ЦТ — ${selectedProgram.title}`
                    : `Подготовка к ЦТ — ${selectedProgram.title} (ожидание набора)`
                }
              />
            </AnimateInView>
          </div>
        </Container>
      </Section>
    </>
  )
}
