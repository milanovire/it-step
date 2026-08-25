import { getNewsBySlug, newsItems } from '@/entities/news/model/news'

describe('news model', () => {
  it('exports news items', () => {
    expect(newsItems.length).toBeGreaterThan(0)
  })

  it('finds news by slug', () => {
    const slug = newsItems[0].slug
    expect(getNewsBySlug(slug)?.title).toBe(newsItems[0].title)
    expect(getNewsBySlug('missing-slug')).toBeUndefined()
  })
})
