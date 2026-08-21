import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/shared/ui/Button'
import { renderWithRouter } from '@/test/renderWithRouter'

describe('Button', () => {
  it('renders native button', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click</Button>)
    await user.click(screen.getByRole('button', { name: 'Click' }))
    expect(onClick).toHaveBeenCalled()
  })

  it('renders router link when to is passed', () => {
    renderWithRouter(<Button to="/news">News</Button>)
    expect(screen.getByRole('link', { name: 'News' })).toHaveAttribute('href', '/news')
  })

  it('renders external link', () => {
    render(<Button href="https://example.com" external>Site</Button>)
    const link = screen.getByRole('link', { name: 'Site' })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
