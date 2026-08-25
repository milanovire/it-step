import { formatDate, useMediaQuery } from '@/shared/lib/hooks'
import { renderHook, act } from '@testing-library/react'

describe('formatDate', () => {
  it('formats ISO date in ru-RU locale', () => {
    const formatted = formatDate('2026-08-08')
    expect(formatted).toMatch(/2026/)
    expect(formatted).toMatch(/8/)
  })
})

describe('useMediaQuery', () => {
  it('returns matchMedia result and reacts to changes', () => {
    let listeners: Array<(event: MediaQueryListEvent) => void> = []
    const media = {
      matches: false,
      media: '(max-width: 1024px)',
      addEventListener: (_: string, listener: (event: MediaQueryListEvent) => void) => {
        listeners.push(listener)
      },
      removeEventListener: (_: string, listener: (event: MediaQueryListEvent) => void) => {
        listeners = listeners.filter((item) => item !== listener)
      },
    }

    window.matchMedia = jest.fn().mockReturnValue(media)

    const { result } = renderHook(() => useMediaQuery('(max-width: 1024px)'))
    expect(result.current).toBe(false)

    act(() => {
      media.matches = true
      listeners.forEach((listener) =>
        listener({ matches: true } as MediaQueryListEvent),
      )
    })

    expect(result.current).toBe(true)
  })
})
