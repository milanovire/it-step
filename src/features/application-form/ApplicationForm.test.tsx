import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ApplicationForm } from '@/features/application-form/ui/ApplicationForm'

describe('ApplicationForm', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    }) as jest.Mock
  })

  it('submits form successfully', async () => {
    const user = userEvent.setup()
    render(<ApplicationForm courseName="Test course" compact />)

    await user.type(screen.getByLabelText(/имя/i), 'Иван')
    await user.type(screen.getByLabelText(/телефон/i), '+375291234567')
    await user.type(screen.getByLabelText(/комментарий/i), 'Хочу записаться на пробное занятие')
    await user.click(screen.getByRole('button', { name: /оставить заявку/i }))

    await waitFor(() => {
      expect(screen.getByText(/заявка отправлена/i)).toBeInTheDocument()
    })

    const [, requestInit] = (global.fetch as jest.Mock).mock.calls[0] as [string, RequestInit]
    const body = JSON.parse(String(requestInit.body))
    expect(body.fields.TITLE).toBe('Test course')
    expect(body.fields.COMMENTS).toContain('Комментарий клиента:')
    expect(body.fields.COMMENTS).toContain('Хочу записаться на пробное занятие')
  })

  it('shows comment field in compact mode', () => {
    render(<ApplicationForm compact />)
    expect(screen.getByLabelText(/комментарий/i)).toBeInTheDocument()
  })

  it('shows full form title when not compact', () => {
    render(<ApplicationForm />)
    expect(screen.getByRole('heading', { name: /оставить заявку/i })).toBeInTheDocument()
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument()
  })

  it('shows inline error when submission fails', async () => {
    const user = userEvent.setup()
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'FAIL', error_description: 'Server error' }),
    })

    render(<ApplicationForm compact />)

    await user.type(screen.getByLabelText(/имя/i), 'Иван')
    await user.type(screen.getByLabelText(/телефон/i), '+375291234567')
    await user.click(screen.getByRole('button', { name: /оставить заявку/i }))

    expect(await screen.findByRole('alert')).toHaveTextContent(/не удалось отправить заявку/i)
  })
})
