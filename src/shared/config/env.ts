export function getBitrixWebhookUrl(): string {
  const url = process.env.VITE_BITRIX_WEBHOOK_URL ?? ''

  if (!url) {
    throw new Error('VITE_BITRIX_WEBHOOK_URL is not configured')
  }

  return url
}
