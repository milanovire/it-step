import { router } from '@/app/providers/router'

describe('router', () => {
  it('defines application routes', () => {
    expect(router.routes.length).toBeGreaterThan(0)
    const root = router.routes[0]
    expect(root.children?.length).toBeGreaterThan(5)
  })

  it('includes not found route', () => {
    const root = router.routes[0]
    expect(root.children?.some((route) => route.path === '*')).toBe(true)
  })
})
