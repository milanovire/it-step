import { resolveLeadTitle } from './resolveLeadTitle'

describe('resolveLeadTitle', () => {
  it('uses explicit title when provided', () => {
    expect(resolveLeadTitle('Frontend-разработка')).toBe('Frontend-разработка')
  })

  it('resolves static pages from hash route', () => {
    window.location.hash = '#/it-education'
    expect(resolveLeadTitle()).toBe('IT обучение')
  })

  it('resolves course title from slug', () => {
    window.location.hash = '#/courses/frontend'
    expect(resolveLeadTitle()).toMatch(/Frontend/)
  })
})
