import { render, screen } from '@testing-library/react'
import { Container } from '@/shared/ui/Container'

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Content</Container>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('applies narrow modifier', () => {
    render(<Container narrow>Narrow</Container>)
    expect(screen.getByText('Narrow').className).toMatch(/narrow/)
  })
})
