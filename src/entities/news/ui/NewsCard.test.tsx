import { render, screen } from '@testing-library/react'
import { newsItems } from '@/entities/news/model/news'
import { NewsCard } from '@/entities/news/ui/NewsCard'
import { renderWithRouter } from '@/test/renderWithRouter'

describe('NewsCard', () => {
  it('renders news preview', () => {
    renderWithRouter(<NewsCard news={newsItems[0]} />)
    expect(screen.getByRole('link')).toHaveAttribute('href', `/news/${newsItems[0].slug}`)
    expect(screen.getByText(newsItems[0].title)).toBeInTheDocument()
  })
})
