import { HERO_CONTAINER_ID } from '@/shared/config/hero'
import { DIARY_URL } from '@/shared/config/diary'

describe('misc config', () => {
  it('exposes hero id', () => {
    expect(HERO_CONTAINER_ID).toBeTruthy()
  })

  it('exposes diary url', () => {
    expect(DIARY_URL).toMatch(/^https:\/\//)
  })
})
