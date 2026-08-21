import { getBitrixWebhookUrl } from '@/shared/config/env'

describe('env config', () => {
  const originalEnv = process.env.VITE_BITRIX_WEBHOOK_URL

  afterEach(() => {
    if (originalEnv === undefined) {
      delete process.env.VITE_BITRIX_WEBHOOK_URL
    } else {
      process.env.VITE_BITRIX_WEBHOOK_URL = originalEnv
    }
  })

  it('returns configured Bitrix webhook URL', () => {
    process.env.VITE_BITRIX_WEBHOOK_URL = 'https://example.test/crm.lead.add'
    expect(getBitrixWebhookUrl()).toBe('https://example.test/crm.lead.add')
  })

  it('throws when webhook URL is missing', () => {
    delete process.env.VITE_BITRIX_WEBHOOK_URL
    jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => getBitrixWebhookUrl()).toThrow(/VITE_BITRIX_WEBHOOK_URL/)
  })
})
