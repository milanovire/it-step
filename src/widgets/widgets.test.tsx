import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '@/widgets/header/ui/Header'
import { TopBar } from '@/widgets/top-bar/ui/TopBar'
import { Footer } from '@/widgets/footer/ui/Footer'
import { HeroSection } from '@/widgets/hero-section/ui/HeroSection'
import { AdvantagesSection } from '@/widgets/advantages-section/ui/AdvantagesSection'
import { ReviewCard } from '@/widgets/reviews-section/ui/ReviewCard'
import { ReviewPlatforms } from '@/widgets/reviews-section/ui/ReviewPlatforms'
import { ReviewsSection } from '@/widgets/reviews-section/ui/ReviewsSection'
import { PopularCoursesSection } from '@/widgets/popular-courses-section/ui/PopularCoursesSection'
import { TeachersCarousel } from '@/widgets/teachers-carousel/ui/TeachersCarousel'
import { ScrollToTopButton } from '@/widgets/scroll-to-top/ui/ScrollToTopButton'
import { MobileDrawer } from '@/features/mobile-drawer/ui/MobileDrawer'
import { reviews } from '@/widgets/reviews-section/model/reviews'
import { reviewPlatforms } from '@/widgets/reviews-section/model/platforms'
import { renderWithRouter } from '@/test/renderWithRouter'

describe('widgets', () => {
  it('renders TopBar contacts', () => {
    renderWithRouter(<TopBar />)
    expect(screen.getByText(/\+375 \(33\) 333-53-54/)).toBeInTheDocument()
    expect(screen.getByText(/г\. Витебск/)).toBeInTheDocument()
  })

  it('renders Header navigation', () => {
    renderWithRouter(<Header />)
    expect(screen.getByText('IT обучение')).toBeInTheDocument()
  })

  it('renders Footer contacts', () => {
    renderWithRouter(<Footer />)
    expect(screen.getByText(/vitebsk@itstep.by/i)).toBeInTheDocument()
  })

  it('renders HeroSection CTA', () => {
    renderWithRouter(<HeroSection />)
    expect(screen.getByRole('link', { name: /записаться/i })).toBeInTheDocument()
  })

  it('renders AdvantagesSection', () => {
    render(<AdvantagesSection />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders ReviewCard', () => {
    render(<ReviewCard review={reviews[0]} />)
    expect(screen.getByText(reviews[0].author)).toBeInTheDocument()
  })

  it('renders ReviewPlatforms', () => {
    render(<ReviewPlatforms />)
    expect(screen.getByText(reviewPlatforms[0].title)).toBeInTheDocument()
  })

  it('renders ReviewsSection', () => {
    renderWithRouter(<ReviewsSection />)
    expect(screen.getByTestId('swiper')).toBeInTheDocument()
  })

  it('renders PopularCoursesSection', () => {
    renderWithRouter(<PopularCoursesSection />)
    expect(screen.getByText(/детские направления/i)).toBeInTheDocument()
  })

  it('renders TeachersCarousel', () => {
    render(<TeachersCarousel />)
    expect(screen.getByTestId('swiper')).toBeInTheDocument()
  })

  it('shows scroll button after scroll', () => {
    Object.defineProperty(window, 'scrollY', { value: 400, configurable: true, writable: true })
    render(<ScrollToTopButton />)
    expect(screen.getByRole('button', { name: /вернуться наверх/i })).toBeInTheDocument()
  })

  it('renders MobileDrawer when open', async () => {
    const user = userEvent.setup()
    const onClose = jest.fn()
    renderWithRouter(<MobileDrawer isOpen onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: /закрыть/i }))
    expect(onClose).toHaveBeenCalled()
  })
})
