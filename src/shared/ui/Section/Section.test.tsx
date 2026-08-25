import { render, screen } from '@testing-library/react'
import { Section, SectionHeader } from '@/shared/ui/Section'

describe('Section', () => {
  it('renders section with background', () => {
    render(<Section background="white">Body</Section>)
    expect(screen.getByText('Body')).toBeInTheDocument()
  })
})

describe('SectionHeader', () => {
  it('renders title and subtitle', () => {
    render(<SectionHeader title="Title" subtitle="Subtitle" align="left" />)
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument()
    expect(screen.getByText('Subtitle')).toBeInTheDocument()
  })
})
