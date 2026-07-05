export type CourseCategory = 'adults' | 'children' | 'seasonal'

export interface Course {
  slug: string
  title: string
  shortDescription: string
  description: string
  image: string
  heroImage: string
  ageGroup: string
  duration: string
  price: string
  category?: CourseCategory
  forWhom: string[]
  skills: string[]
  program: { module: string; topics: string[] }[]
  advantages: string[]
  faq: { question: string; answer: string }[]
}
