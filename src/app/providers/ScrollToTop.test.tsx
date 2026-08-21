import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from '@/app/providers/ScrollToTop'

describe('ScrollToTop', () => {
  it('scrolls on pathname change', () => {
    const scrollTo = jest.fn()
    window.scrollTo = scrollTo

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="*" element={<ScrollToTop />} />
        </Routes>
      </MemoryRouter>,
    )

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'instant' })
  })
})
