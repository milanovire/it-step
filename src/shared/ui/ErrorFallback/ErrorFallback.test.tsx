import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ErrorFallback } from '@/shared/ui/ErrorFallback'
import { renderWithRouter } from '@/test/renderWithRouter'

describe('ErrorFallback', () => {
  it('renders error message and home link', () => {
    renderWithRouter(
      <ErrorFallback title="Ошибка" message="Тестовое сообщение" code={500} />
    )

    expect(screen.getByRole('heading', { name: 'Ошибка' })).toBeInTheDocument()
    expect(screen.getByText('Тестовое сообщение')).toBeInTheDocument()
    expect(screen.getByText('500')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /на главную/i })).toHaveAttribute('href', '/')
  })

  it('calls retry handler', async () => {
    const user = userEvent.setup()
    const onRetry = jest.fn()

    renderWithRouter(<ErrorFallback onRetry={onRetry} />)
    await user.click(screen.getByRole('button', { name: /попробовать снова/i }))

    expect(onRetry).toHaveBeenCalledTimes(1)
  })
})
