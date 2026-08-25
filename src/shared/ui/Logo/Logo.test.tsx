import { render, screen } from '@testing-library/react'
import { Logo } from '@/shared/ui/Logo'
import { renderWithRouter } from '@/test/renderWithRouter'

describe('Logo', () => {
  it('links to home', () => {
    renderWithRouter(<Logo />)
    expect(screen.getByRole('link', { name: /IT ШАГ/i })).toHaveAttribute('href', '/')
  })

  it('supports light variant', () => {
    renderWithRouter(<Logo variant="light" />)
    expect(screen.getByRole('link', { name: /IT ШАГ/i }).className).toMatch(/light/)
  })
})
