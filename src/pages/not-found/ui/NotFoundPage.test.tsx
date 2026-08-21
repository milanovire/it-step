import { render, screen } from '@testing-library/react'
import { NotFoundPage } from '@/pages/not-found'
import { renderWithRouter } from '@/test/renderWithRouter'

describe('NotFoundPage', () => {
  it('renders 404 message', () => {
    renderWithRouter(<NotFoundPage />)

    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /страница не найдена/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /на главную/i })).toBeInTheDocument()
  })
})
