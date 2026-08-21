import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaqAccordion } from '@/widgets/faq-accordion/ui/FaqAccordion'

const items = [
  { question: 'Q1', answer: 'A1' },
  { question: 'Q2', answer: 'A2' },
]

describe('FaqAccordion', () => {
  it('toggles answers', async () => {
    const user = userEvent.setup()
    render(<FaqAccordion items={items} />)

    expect(screen.getByText('A1')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Q1' }))
    expect(screen.queryByText('A1')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Q2' }))
    expect(screen.getByText('A2')).toBeInTheDocument()
  })
})
