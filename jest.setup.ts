import '@testing-library/jest-dom'

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin = ''
  readonly thresholds: ReadonlyArray<number> = []

  constructor(private callback: IntersectionObserverCallback) {
    this.callback = callback
  }

  observe() {
    this.callback([{ isIntersecting: true } as IntersectionObserverEntry], this)
  }

  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})

jest.mock('framer-motion', () => {
  const React = require('react')

  const motionPropKeys = new Set([
    'initial',
    'animate',
    'exit',
    'transition',
    'whileInView',
    'viewport',
    'layoutId',
    'whileHover',
    'whileTap',
  ])

  const stripMotionProps = (props: Record<string, unknown>) => {
    const next = { ...props }
    for (const key of Object.keys(next)) {
      if (motionPropKeys.has(key)) {
        delete next[key]
      }
    }
    return next
  }

  const handler = {
    get(_target: unknown, prop: string) {
      return ({
        children,
        ...props
      }: React.PropsWithChildren<Record<string, unknown>>) =>
        React.createElement(prop, stripMotionProps(props), children)
    },
  }

  return {
    motion: new Proxy({}, handler),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  }
})

jest.mock('swiper/react', () => {
  const React = require('react')
  return {
    Swiper: ({ children }: { children: React.ReactNode }) =>
      React.createElement('div', { 'data-testid': 'swiper' }, children),
    SwiperSlide: ({ children }: { children: React.ReactNode }) =>
      React.createElement('div', { 'data-testid': 'swiper-slide' }, children),
  }
})

jest.mock('swiper/css', () => ({}))
jest.mock('swiper/css/navigation', () => ({}))
jest.mock('swiper/css/pagination', () => ({}))

jest.mock('swiper/modules', () => ({
  Navigation: {},
  Pagination: {},
  A11y: {},
}))

beforeEach(() => {
  window.scrollTo = jest.fn()
  process.env.VITE_BITRIX_WEBHOOK_URL =
    'https://itstep.bitrix24.by/rest/18830/lkinlptow620dq0k/crm.lead.add'
})
