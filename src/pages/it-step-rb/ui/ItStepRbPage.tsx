import { Award, Building2,Monitor, Briefcase, GraduationCap, Users, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/shared/ui/Container'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { AnimateInView } from '@/shared/ui/AnimateInView'
import { CONTACTS } from '@/shared/config/contacts'
import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import styles from './ItStepRbPage.module.scss'

const stats = [
  { value: '2013', label: 'год основания' },
  { value: '17K+', label: 'выпускников' },
  { value: '8', label: 'филиалов в РБ' },
]

const branches = [
  {
    city: 'Минск',
    address: 'г. Минск, ул. К. Маркса, 32',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    city: 'Витебск',
    address: 'г. Витебск, пр-т Московский, 31А',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
  },
  {
    city: 'Барановичи',
    address: 'г. Барановичи, ул.Брестская, 13',
    image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    city: 'Брест',
    address: 'г. Брест, ул. Советская, 56',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop',
  },
  {
    city: 'Гомель',
    address: 'Гомель, ул. Советская, 20 (2 этаж)',
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    city: 'Гродно',
    address: 'г. Гродно, ул. Мицкевича, д. 3 (2 этаж)',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    city: 'Бобруйск',
    address: 'г. Бобруйск ул.Горького, 12 (ТЦ Вэстор-2, 3 этаж) пр-т Строителей, 58(ТЦ Спектр)',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    city: 'Могилёв',
    address: 'г. Могилев, пер. Пожарный, д. 1а, 2й этаж',
    image: 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
  },
]

const advantages = [
{
  icon: Award,
  title: 'Согласованные учебные программы',
  description: 'Все программы, используемые в учебных центрах для обучения, согласованы в отделе образования.',
},
{
  icon: Users,
  title: 'Практикующие преподаватели',
  description: 'Занятия проводят преподаватели и IT-специалисты с практическим опытом, которые делятся реальными знаниями и современными технологиями.',
},
{
  icon: Building2,
  title: 'Очное обучение',
  description: 'Мы обучаем только вживую. Никаких записанных видеоуроков — живое общение с преподавателем, практика и ответы на вопросы на каждом занятии.',
},
{
  icon: Monitor,
  title: 'Современные аудитории',
  description: 'Комфортные компьютерные классы, современное оборудование и программное обеспечение для эффективного обучения.',
},
{
  icon: Briefcase,
  title: 'Стажировка после курсов',
  description: 'Для слушателей некоторых специализированных курсов предусмотрена возможность прохождения стажировки после успешного завершения обучения.',
},
{
  icon: GraduationCap,
  title: 'Практический подход',
  description: 'Основной упор делается на практические задания и реальные проекты, чтобы выпускники уверенно применяли полученные знания.',
},
]

export function ItStepRbPage() {
  return (
    <>
      <section id={HERO_CONTAINER_ID} className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=900&fit=crop"
            alt="IT ШАГ в Беларуси"
          />
          <div className={styles.heroOverlay} />
        </div>
        <Container>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>IT ШАГ в Республике Беларусь</h1>
            <p className={styles.heroDesc}>
              Лидер профессионального компьютерного образования с 2013 года.
              Более 8 филиалов по всей стране готовят IT-специалистов мирового уровня.
            </p>
          </motion.div>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <AnimateInView key={stat.label} delay={i * 0.08}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </AnimateInView>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className={styles.historyGrid}>
            <AnimateInView direction="left">
              <SectionHeader
                title="История и миссия"
                subtitle=""
                align="left"
              />
              <p className={styles.text}>
                Компьютерная Академия IT ШАГ работает с 2013 года и за это время стала одним из ведущих учебных центров в сфере IT-образования в Беларуси. 
                Академия предлагает современные программы обучения для детей, подростков и взрослых, помогая получить востребованные цифровые навыки и практический опыт под руководством преподавателей-практиков.
              </p>
              <p className={styles.text}>
                Наша миссия — дать каждому возможность получить качественное IT-образование
                и построить успешную карьеру в одной из самых перспективных отраслей.
                Мы обучаем детей от 7 лет и взрослых без возрастных ограничений.
              </p>
            </AnimateInView>
            <AnimateInView direction="right" delay={0.1}>
              <div className={styles.historyImage}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=500&fit=crop"
                  alt="Студенты IT ШАГ"
                />
              </div>
            </AnimateInView>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <SectionHeader title="Наши преимущества" />
          <div className={styles.advantagesGrid}>
            {advantages.map((item, i) => (
              <AnimateInView key={item.title} delay={i * 0.08}>
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

      <Section>
        <Container>
          <SectionHeader
            title="Филиалы в Беларуси"
            subtitle="IT ШАГ представлена в крупнейших городах страны"
          />
          <div className={styles.branchesGrid}>
            {branches.map((branch, i) => (
              <AnimateInView key={branch.city} delay={i * 0.08}>
                <div className={styles.branchCard}>
                  <div className={styles.branchImage}>
                    <img src={branch.image} alt={`IT ШАГ ${branch.city}`} />
                  </div>
                  <div className={styles.branchInfo}>
                    <h3>{branch.city}</h3>
                    <p>
                      <MapPin size={14} />
                      {branch.address}
                    </p>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <SectionHeader title="Как нас найти" subtitle="IT ШАГ в Витебске" />
          <div className={styles.mapGrid}>
            <AnimateInView direction="left">
              <div className={styles.mapWrap}>
                <iframe
                  title="Карта IT ШАГ Витебск"
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c8f9e0a1b2c3d4e5f6a7b8c9d0e1f2&source=mapframe&ll=30.223211%2C55.178491&mode=poi&poi%5Bpoint%5D=30.222975%2C55.178500&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D32271056665&pt=30.223740%2C55.177830%2Cpm2rdm&z=19"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </AnimateInView>
            <AnimateInView direction="right" delay={0.1}>
              <div className={styles.contactCard}>
                <h3>Контакты Витебского филиала</h3>
                <div className={styles.contactItem}>
                  <MapPin size={20} />
                  <div>
                    <strong>Адрес</strong>
                    <p>{CONTACTS.address.text}</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <Users size={20} />
                  <div>
                    <strong>Поступление</strong>
                    <p>
                      <a href={CONTACTS.admission.href}>{CONTACTS.admission.phone}</a> <br/>
                      <a href={CONTACTS.academic.href}>{CONTACTS.academic.phone}</a>
                    </p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <Building2 size={20} />
                  <div>
                    <strong>Email</strong>
                    <p>
                      <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>
        </Container>
      </Section>
    </>
  )
}
