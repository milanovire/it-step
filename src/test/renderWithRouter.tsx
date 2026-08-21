import type { ReactElement, ReactNode } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

interface Options extends Omit<RenderOptions, 'wrapper'> {
  route?: string
  path?: string
}

export function renderWithRouter(ui: ReactElement, options: Options = {}) {
  const { route = '/', path = '*', ...renderOptions } = options

  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path={path} element={children} />
        </Routes>
      </MemoryRouter>
    )
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}
