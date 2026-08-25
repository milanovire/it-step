import { screen } from '@testing-library/react'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { renderWithRouter } from '@/test/renderWithRouter'

function BrokenComponent() {
  throw new Error('Render failed')
}

describe('ErrorBoundary', () => {
  it('renders fallback when child throws', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})

    renderWithRouter(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    )

    expect(screen.getByRole('heading', { name: /что-то пошло не так/i })).toBeInTheDocument()
  })
})
