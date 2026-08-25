import { render, screen } from '@testing-library/react'
import { AnimateInView } from '@/shared/ui/AnimateInView'

describe('AnimateInView', () => {
  it('renders children', () => {
    render(
      <AnimateInView>
        <span>Visible</span>
      </AnimateInView>,
    )
    expect(screen.getByText('Visible')).toBeInTheDocument()
  })
})
