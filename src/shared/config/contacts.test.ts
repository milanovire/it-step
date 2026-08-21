import { CONTACTS, SOCIAL_LINKS } from '@/shared/config/contacts'

describe('contacts config', () => {
  it('exposes admission and payment phones', () => {
    expect(CONTACTS.admission.phone).toContain('+375')
    expect(CONTACTS.payment.phones).toHaveLength(2)
    expect(CONTACTS.email).toContain('@')
  })

  it('lists social links', () => {
    expect(SOCIAL_LINKS.length).toBeGreaterThan(0)
    expect(SOCIAL_LINKS[0].href).toMatch(/^https:\/\//)
  })
})
