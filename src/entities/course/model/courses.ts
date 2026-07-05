import type { Course, CourseCategory } from '../model/types'
import { childrenPrograms } from './children-programs'

const defaultFaq = [
  {
    question: 'Нужен ли опыт программирования для поступления?',
    answer: 'Нет, большинство программ рассчитаны на обучение с нуля. Главное — мотивация и готовность учиться.',
  },
  {
    question: 'Как проходит обучение?',
    answer: 'Занятия проходят в малых группах до 16 человек, дважды в неделю. Акцент на практику, домашние задания и финальный проект.',
  },
  {
    question: 'Выдаётся ли диплом?',
    answer: 'По окончании обучения вы получаете международный диплом IT STEP и сертификаты ведущих IT-компаний.',
  },
  {
    question: 'Есть ли рассрочка оплаты?',
    answer: 'Да, доступна гибкая система оплаты. Подробности уточняйте в отделе поступления.',
  },
]

export const courses: Course[] = [
  {
    slug: 'frontend',
    title: 'Frontend-разработка',
    shortDescription: 'Создание современных веб-интерфейсов с React, TypeScript и лучшими практиками UX.',
    description:
      'Комплексная программа подготовки frontend-разработчиков. Вы освоите HTML, CSS, JavaScript, TypeScript, React и современные инструменты сборки. Научитесь создавать адаптивные, быстрые и доступные веб-приложения.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop',
    ageGroup: 'от 16 лет',
    duration: '10 месяцев',
    price: '398 BYN/мес.',
    forWhom: [
      'Начинающих, желающих войти в IT',
      'Дизайнеров, стремящихся освоить вёрстку',
      'Студентов технических специальностей',
    ],
    skills: [
      'Вёрстка адаптивных сайтов на HTML5 и CSS3',
      'JavaScript ES6+ и TypeScript',
      'Разработка SPA на React',
      'Работа с REST API и состоянием приложения',
      'Git, CI/CD и командная разработка',
      'Создание портфолио из реальных проектов',
    ],
    program: [
      { module: 'Основы веб-разработки', topics: ['HTML5', 'CSS3', 'Flexbox & Grid', 'Адаптивная вёрстка'] },
      { module: 'JavaScript', topics: ['Синтаксис ES6+', 'DOM', 'Асинхронность', 'Fetch API'] },
      { module: 'React & TypeScript', topics: ['Компоненты', 'Hooks', 'React Router', 'State management'] },
      { module: 'Финальный проект', topics: ['Командная разработка', 'Code review', 'Деплой', 'Защита проекта'] },
    ],
    advantages: ['Актуальная программа 2025–2026', 'Менторство на каждом этапе', 'Помощь с трудоустройством'],
    faq: defaultFaq,
  },
  {
    slug: 'python',
    title: 'Python-разработка',
    shortDescription: 'Backend-разработка, автоматизация, анализ данных и основы машинного обучения на Python.',
    description:
      'Python — один из самых востребованных языков программирования. Программа охватывает backend-разработку, работу с базами данных, API и основы data science.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=900&fit=crop',
    ageGroup: 'от 16 лет',
    duration: '12 месяцев',
    price: '398 BYN/мес.',
    forWhom: ['Новичков в программировании', 'Аналитиков, желающих углубить навыки', 'Будущих backend-разработчиков'],
    skills: [
      'Основы Python и ООП',
      'Django / FastAPI для веб-приложений',
      'SQL и работа с PostgreSQL',
      'REST API и микросервисы',
      'Тестирование и отладка кода',
      'Основы data analysis',
    ],
    program: [
      { module: 'Python Basics', topics: ['Синтаксис', 'Структуры данных', 'ООП', 'Модули'] },
      { module: 'Web Backend', topics: ['Django', 'ORM', 'REST API', 'Аутентификация'] },
      { module: 'Базы данных', topics: ['SQL', 'PostgreSQL', 'Миграции', 'Оптимизация'] },
      { module: 'Проект', topics: ['Fullstack-приложение', 'Деплой', 'Документация'] },
    ],
    advantages: ['Востребованный стек на рынке', 'Практика на реальных задачах', 'Международный диплом'],
    faq: defaultFaq,
  },
  {
    slug: 'java',
    title: 'Java-разработка',
    shortDescription: 'Enterprise-разработка на Java: Spring, микросервисы, базы данных и архитектура ПО.',
    description:
      'Java остаётся стандартом корпоративной разработки. Программа готовит специалистов для работы в крупных IT-компаниях и банковском секторе.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=900&fit=crop',
    ageGroup: 'от 17 лет',
    duration: '12 месяцев',
    price: '398 BYN/мес.',
    forWhom: ['Технически ориентированных студентов', 'Будущих enterprise-разработчиков', 'Переквалифицирующихся специалистов'],
    skills: [
      'Java Core и ООП',
      'Spring Framework и Spring Boot',
      'Hibernate и JPA',
      'Микросервисная архитектура',
      'JUnit и интеграционное тестирование',
      'Docker и основы DevOps',
    ],
    program: [
      { module: 'Java Core', topics: ['Синтаксис', 'Коллекции', 'Многопоточность', 'Streams API'] },
      { module: 'Spring Ecosystem', topics: ['Spring Boot', 'Security', 'Data JPA', 'REST'] },
      { module: 'Архитектура', topics: ['Паттерны', 'Микросервисы', 'Message queues', 'CI/CD'] },
      { module: 'Дипломный проект', topics: ['Enterprise-приложение', 'Code review', 'Защита'] },
    ],
    advantages: ['Сертификация Oracle', 'Корпоративный стек', 'Высокий спрос на рынке'],
    faq: defaultFaq,
  },
  {
    slug: 'qa',
    title: 'QA / Тестирование ПО',
    shortDescription: 'Ручное и автоматизированное тестирование, обеспечение качества программного обеспечения.',
    description:
      'QA-инженеры — незаменимая часть любой IT-команды. Освойте методологии тестирования, инструменты автоматизации и работу с баг-трекингом.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&h=900&fit=crop',
    ageGroup: 'от 16 лет',
    duration: '8 месяцев',
    price: '398 BYN/мес.',
    forWhom: ['Внимательных и системных людей', 'Начинающих в IT', 'Разработчиков, желающих понять QA'],
    skills: [
      'Теория тестирования и виды тестов',
      'Тест-дизайн и тест-кейсы',
      'Selenium и автоматизация',
      'Postman и API-тестирование',
      'Jira, TestRail, баг-репорты',
      'SQL для тестировщиков',
    ],
    program: [
      { module: 'Основы QA', topics: ['SDLC', 'Виды тестирования', 'Документация', 'Баг-репорты'] },
      { module: 'Автоматизация', topics: ['Selenium WebDriver', 'Java для QA', 'Page Object', 'CI'] },
      { module: 'API Testing', topics: ['REST', 'Postman', 'JSON', 'Автотесты API'] },
      { module: 'Практика', topics: ['Реальные проекты', 'Нагрузочное тестирование', 'Защита'] },
    ],
    advantages: ['Быстрый вход в IT', 'ISTQB подготовка', 'Практика на живых проектах'],
    faq: defaultFaq,
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX Design',
    shortDescription: 'Проектирование пользовательских интерфейсов, UX-исследования и визуальный дизайн.',
    description:
      'Станьте дизайнером цифровых продуктов. Научитесь проводить исследования, создавать прототипы, проектировать интерфейсы и работать в Figma.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4f?w=1600&h=900&fit=crop',
    ageGroup: 'от 15 лет',
    duration: '9 месяцев',
    price: 'от 260 BYN/мес.',
    forWhom: ['Творческих людей', 'Графических дизайнеров', 'Маркетологов и продакт-менеджеров'],
    skills: [
      'UX-исследования и пользовательские сценарии',
      'Wireframing и прототипирование',
      'UI-дизайн в Figma',
      'Дизайн-системы и компоненты',
      'Адаптивный и мобильный дизайн',
      'Презентация и защита проектов',
    ],
    program: [
      { module: 'UX Foundations', topics: ['User research', 'Personas', 'User flows', 'Usability'] },
      { module: 'UI Design', topics: ['Типографика', 'Цвет', 'Композиция', 'Figma'] },
      { module: 'Прототипирование', topics: ['Wireframes', 'Interactive prototypes', 'Design systems'] },
      { module: 'Портфолио', topics: ['3 кейса', 'Презентация', 'Behance/Dribbble'] },
    ],
    advantages: ['Портфолио из реальных кейсов', 'Менторство дизайнеров', 'Связь с разработкой'],
    faq: defaultFaq,
  },
  {
    slug: 'computer-literacy',
    title: 'Компьютерная грамотность',
    shortDescription: 'Уверенная работа с ПК, офисными программами, интернетом и цифровыми инструментами.',
    description:
      'Базовый курс для тех, кто хочет уверенно пользоваться компьютером. Идеальная стартовая точка перед углублённым IT-обучением.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop',
    ageGroup: 'от 14 лет',
    duration: '4 месяца',
    price: 'от 150 BYN/мес.',
    forWhom: ['Начинающих пользователей ПК', 'Людей старшего возраста', 'Тех, кто хочет подготовиться к IT-курсам'],
    skills: [
      'Работа с Windows и файловой системой',
      'Microsoft Office: Word, Excel, PowerPoint',
      'Интернет, почта и облачные сервисы',
      'Безопасность в сети',
      'Основы цифровой грамотности',
      'Подготовка к дальнейшему обучению',
    ],
    program: [
      { module: 'Основы ПК', topics: ['Железо', 'ОС', 'Файлы', 'Программы'] },
      { module: 'Office', topics: ['Word', 'Excel', 'PowerPoint', 'Презентации'] },
      { module: 'Интернет', topics: ['Браузер', 'Почта', 'Облако', 'Безопасность'] },
      { module: 'Практика', topics: ['Задания', 'Тестирование', 'Сертификат'] },
    ],
    advantages: ['Доступная цена', 'Малые группы', 'Индивидуальный подход'],
    faq: defaultFaq,
  },
  {
    slug: 'it-navigator',
    title: 'IT Navigator',
    shortDescription: 'Знакомство с IT-профессиями: помогает выбрать направление развития в сфере технологий.',
    description:
      'Не знаете, с чего начать в IT? IT Navigator — это вводный курс, который познакомит вас с основными профессиями, технологиями и поможет определиться с дальнейшим путём.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop',
    ageGroup: 'от 14 лет',
    duration: '3 месяца',
    price: 'от 180 BYN/мес.',
    forWhom: ['Школьников и студентов', 'Тех, кто выбирает профессию', 'Родителей, планирующих обучение детей'],
    skills: [
      'Обзор IT-профессий: dev, QA, design, data',
      'Основы логики и алгоритмического мышления',
      'Первые шаги в программировании',
      'Знакомство с дизайном и тестированием',
      'Карьерные перспективы в IT',
      'Персональный план развития',
    ],
    program: [
      { module: 'IT Landscape', topics: ['Профессии', 'Зарплаты', 'Тренды', 'Образование'] },
      { module: 'Практика', topics: ['HTML basics', 'Python intro', 'Design intro', 'QA intro'] },
      { module: 'Проекты', topics: ['Мини-сайт', 'Скрипт', 'Макет', 'Тест-кейс'] },
      { module: 'Карьера', topics: ['План обучения', 'Консультация', 'Выбор курса'] },
    ],
    advantages: ['Помогает выбрать путь', 'Короткий формат', 'Зачёт в стоимость основного курса'],
    faq: defaultFaq,
  },
]

const allCourses: Course[] = [...courses, ...childrenPrograms]

export const getCourseBySlug = (slug: string): Course | undefined =>
  allCourses.find((c) => c.slug === slug)

export const getAdultCourses = (): Course[] =>
  courses.filter((c) => !c.category || c.category === 'adults')

export const getChildrenCourses = (): Course[] =>
  childrenPrograms.filter((c) => c.category === 'children')

export const getSeasonalPrograms = (): Course[] =>
  childrenPrograms.filter((c) => c.category === 'seasonal')

export const getCoursesByCategory = (category: CourseCategory): Course[] =>
  allCourses.filter((c) => (c.category ?? 'adults') === category)

export const getPopularCourses = (): Course[] => courses.slice(0, 6)
