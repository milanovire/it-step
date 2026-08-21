import { render } from '@testing-library/react'
import { StarIcon } from '@/shared/ui/StarIcon'

describe('StarIcon', () => {
  it('renders svg', () => {
    const { container } = render(<StarIcon data-testid="star" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
