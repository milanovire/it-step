import { getCourseBySlug } from '@/entities/course/model/courses'
import { getNewsBySlug } from '@/entities/news/model/news'
import { getVacancyBySlug } from '@/entities/vacancy/model/vacancies'

const STATIC_PAGE_TITLES: Record<string, string> = {
  '/': 'Главная',
  '/it-education': 'IT обучение',
  '/ct-prep': 'Подготовка к ЦТ',
  '/news': 'Новости',
  '/vacancies': 'Вакансии',
  '/it-step-rb': 'IT ШАГ в РБ',
}

function getAppPath(): string {
  if (typeof window === 'undefined') {
    return '/'
  }

  const hashPath = window.location.hash.replace(/^#/, '')
  if (hashPath) {
    return hashPath.split('?')[0] || '/'
  }

  return window.location.pathname.split('?')[0] || '/'
}

export function resolveLeadTitle(explicitTitle?: string): string {
  const trimmed = explicitTitle?.trim()
  if (trimmed) {
    return trimmed
  }

  const path = getAppPath()

  if (STATIC_PAGE_TITLES[path]) {
    return STATIC_PAGE_TITLES[path]
  }

  const courseMatch = path.match(/^\/courses\/([^/]+)$/)
  if (courseMatch) {
    return getCourseBySlug(courseMatch[1])?.title ?? 'Курс IT ШАГ'
  }

  const newsMatch = path.match(/^\/news\/([^/]+)$/)
  if (newsMatch) {
    return getNewsBySlug(newsMatch[1])?.title ?? 'Новость IT ШАГ'
  }

  const vacancyMatch = path.match(/^\/vacancies\/([^/]+)$/)
  if (vacancyMatch) {
    return getVacancyBySlug(vacancyMatch[1])?.title ?? 'Вакансия IT ШАГ'
  }

  return 'Сайт IT ШАГ'
}
