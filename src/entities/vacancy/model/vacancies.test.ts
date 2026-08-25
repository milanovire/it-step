import { getVacancyBySlug, vacancies } from '@/entities/vacancy/model/vacancies'

describe('vacancies model', () => {
  it('exports vacancies', () => {
    expect(vacancies.length).toBeGreaterThan(0)
  })

  it('finds vacancy by slug', () => {
    const slug = vacancies[0].slug
    expect(getVacancyBySlug(slug)?.title).toBe(vacancies[0].title)
    expect(getVacancyBySlug('missing')).toBeUndefined()
  })
})
