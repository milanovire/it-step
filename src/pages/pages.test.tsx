import { render, screen } from '@testing-library/react'
import { HomePage } from '@/pages/home/ui/HomePage'
import { NewsPage } from '@/pages/news/ui/NewsPage'
import { CtPrepPage } from '@/pages/ct-prep/ui/CtPrepPage'
import { VacanciesPage } from '@/pages/vacancies/ui/VacanciesPage'
import { ItEducationPage } from '@/pages/it-education/ui/ItEducationPage'
import { ItStepRbPage } from '@/pages/it-step-rb/ui/ItStepRbPage'
import { CourseDetailPage } from '@/pages/course-detail/ui/CourseDetailPage'
import { NewsDetailPage } from '@/pages/news-detail/ui/NewsDetailPage'
import { VacancyDetailPage } from '@/pages/vacancy-detail/ui/VacancyDetailPage'
import { newsItems } from '@/entities/news/model/news'
import { vacancies } from '@/entities/vacancy/model/vacancies'
import { renderWithRouter } from '@/test/renderWithRouter'

describe('pages', () => {
  it('renders HomePage', () => {
    renderWithRouter(<HomePage />)
    expect(screen.getByText(/готовы начать карьеру/i)).toBeInTheDocument()
  })

  it('renders NewsPage', () => {
    renderWithRouter(<NewsPage />)
    expect(screen.getByRole('heading', { name: 'Новости' })).toBeInTheDocument()
    expect(screen.getAllByText(newsItems[0].title).length).toBeGreaterThan(0)
  })

  it('renders CtPrepPage', () => {
    renderWithRouter(<CtPrepPage />)
    expect(screen.getByRole('heading', { name: /подготовка к цт/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /предметы/i })).toBeInTheDocument()
  })

  it('renders VacanciesPage', () => {
    renderWithRouter(<VacanciesPage />)
    expect(screen.getByRole('heading', { name: /вакансии/i })).toBeInTheDocument()
  })

  it('renders ItEducationPage', () => {
    renderWithRouter(<ItEducationPage />)
    expect(screen.getByRole('heading', { name: /IT обучение/i })).toBeInTheDocument()
  })

  it('renders ItStepRbPage', () => {
    renderWithRouter(<ItStepRbPage />)
    expect(screen.getByRole('heading', { name: /IT ШАГ в Республике Беларусь/i })).toBeInTheDocument()
  })

  it('renders CourseDetailPage for valid slug', () => {
    renderWithRouter(<CourseDetailPage />, {
      route: '/courses/frontend',
      path: '/courses/:slug',
    })
    expect(screen.getByRole('heading', { name: /Frontend/i })).toBeInTheDocument()
  })

  it('renders NewsDetailPage for valid slug', () => {
    renderWithRouter(<NewsDetailPage />, {
      route: `/news/${newsItems[0].slug}`,
      path: '/news/:slug',
    })
    expect(screen.getByRole('heading', { name: newsItems[0].title })).toBeInTheDocument()
  })

  it('renders VacancyDetailPage for valid slug', () => {
    renderWithRouter(<VacancyDetailPage />, {
      route: `/vacancies/${vacancies[0].slug}`,
      path: '/vacancies/:slug',
    })
    expect(screen.getByRole('heading', { name: vacancies[0].title })).toBeInTheDocument()
  })
})
