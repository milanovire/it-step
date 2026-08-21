import { reviewPlatforms } from '@/widgets/reviews-section/model/platforms'
import { reviews } from '@/widgets/reviews-section/model/reviews'
import { COURSE_TEACHERS } from '@/entities/course/model/teachers'

describe('static content models', () => {
  it('loads review platforms', () => {
    expect(reviewPlatforms.length).toBeGreaterThan(0)
  })

  it('loads reviews', () => {
    expect(reviews[0].text.length).toBeGreaterThan(0)
  })

  it('loads teachers', () => {
    expect(COURSE_TEACHERS.length).toBeGreaterThan(0)
  })
})
