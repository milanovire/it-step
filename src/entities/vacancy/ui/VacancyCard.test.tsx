import { render, screen } from '@testing-library/react'
import { vacancies } from '@/entities/vacancy/model/vacancies'
import { VacancyCard } from '@/entities/vacancy/ui/VacancyCard'
import { renderWithRouter } from '@/test/renderWithRouter'

describe('VacancyCard', () => {
  it('renders vacancy card', () => {
    renderWithRouter(<VacancyCard vacancy={vacancies[0]} />)
    expect(screen.getByText(vacancies[0].title)).toBeInTheDocument()
  })
})
