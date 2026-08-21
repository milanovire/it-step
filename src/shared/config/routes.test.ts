import { NAV_ITEMS, ROUTES } from '@/shared/config/routes'

describe('ROUTES', () => {
  it('builds dynamic paths', () => {
    expect(ROUTES.course('frontend')).toBe('/courses/frontend')
    expect(ROUTES.newsItem('test')).toBe('/news/test')
    expect(ROUTES.vacancy('dev')).toBe('/vacancies/dev')
  })
})

describe('NAV_ITEMS', () => {
  it('contains main sections', () => {
    expect(NAV_ITEMS.some((item) => item.label === 'IT обучение')).toBe(true)
    expect(NAV_ITEMS.some((item) => item.external)).toBe(true)
  })
})
