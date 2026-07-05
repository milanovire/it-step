export const ROUTES = {
  home: '/',
  itEducation: '/it-education',
  course: (slug: string) => `/courses/${slug}`,
  ctPrep: '/ct-prep',
  news: '/news',
  newsItem: (slug: string) => `/news/${slug}`,
  vacancies: '/vacancies',
  vacancy: (slug: string) => `/vacancies/${slug}`,
  itStepRb: '/it-step-rb',
} as const

export const NAV_ITEMS = [
  { label: 'IT обучение', path: ROUTES.itEducation, external: false },
  { label: 'Подготовка к ЦТ', path: ROUTES.ctPrep, external: false },
  { label: 'Новости', path: ROUTES.news, external: false },
  { label: 'Вакансии', path: ROUTES.vacancies, external: false },
  { label: 'Дневник', path: '', external: true },
  { label: 'IT ШАГ в РБ', path: ROUTES.itStepRb, external: false },
] as const
