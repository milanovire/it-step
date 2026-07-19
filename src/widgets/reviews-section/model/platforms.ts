export interface ReviewPlatform {
  id: number
  title: string
  rating: string
  reviewsCount: number
  href: string
}

export const reviewPlatforms: ReviewPlatform[] = [
  {
    id: 1,
    title: 'Google',
    rating: '4.9',
    reviewsCount: 280,
    href: 'https://www.google.com/search?sca_esv=6ccada2d19b2238e&sxsrf=APpeQnsQPlyVShJIAtga10hWSlIFtjGZKQ:1784495590602&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3iMWapDC1zyq-OEOmbr-zoEVBR0bD30ZOTH_fLjMWHy2BXO_TcDpSnzwr76Y0UIBALWXDKM7TR2FpENqT9JbHoZpPx2muw73IYVy1NeoCVOJz006r2t9mb8GgqbcXhPKzVQQkkGPqA8qQn_BPziNNR4i7hsCXj2rnPezZrW5lhpIqj9cZ8NiL0YPXtXEr9nL-brY8Y%3D&q=%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F+%D0%A8%D0%90%D0%93,+%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%8B%D0%B5+%D0%BA%D1%83%D1%80%D1%81%D1%8B+%D0%B2+%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%B5+%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&sa=X&ved=2ahUKEwjtpJ-O1N-VAxWqFxAIHRhZK3oQ0bkNegQIPhAH&biw=1536&bih=730&dpr=1.25',
  },
  {
    id: 2,
    title: 'Яндекс',
    rating: '4.7',
    reviewsCount: 28,
    href: 'https://yandex.by/maps/org/kompyuternaya_akademiya_shag/32271056665/reviews/?ll=30.222974%2C55.178500&z=13',
  },
]