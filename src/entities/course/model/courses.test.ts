import {
  getCourseBySlug,
  getAdultCourses,
  getChildrenCourses,
  getSeasonalPrograms,
  getCoursesByCategory,
  getPopularCourses,
} from '@/entities/course/model/courses'

describe('courses model', () => {
  it('finds course by slug', () => {
    expect(getCourseBySlug('frontend')?.title).toMatch(/Frontend/)
    expect(getCourseBySlug('unknown')).toBeUndefined()
  })

  it('filters courses by category', () => {
    expect(getAdultCourses().every((c) => (c.category ?? 'adults') === 'adults')).toBe(true)
    expect(getChildrenCourses().every((c) => c.category === 'children')).toBe(true)
    expect(getSeasonalPrograms().every((c) => c.category === 'seasonal')).toBe(true)
    expect(getCoursesByCategory('adults').length).toBeGreaterThan(0)
  })

  it('returns popular children courses', () => {
    const popular = getPopularCourses()
    expect(popular.length).toBeGreaterThan(0)
    expect(popular.every((c) => c.category === 'children')).toBe(true)
  })
})
