export interface Vacancy {
  slug: string
  title: string
  city: string
  shortDescription: string
  description: string
  requirements: string[]
  responsibilities: string[]
  conditions: string[]
  salary?: string
}
