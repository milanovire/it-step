import { render, screen } from '@testing-library/react'
import { App } from '@/app/App'

describe('App', () => {
  it('renders home route', async () => {
    render(<App />)
    expect(await screen.findByText(/Витебск \| С 2013 года/i)).toBeInTheDocument()
  })
})
