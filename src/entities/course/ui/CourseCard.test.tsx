import { render, screen } from '@testing-library/react'
import { getCourseBySlug, getChildrenCourses } from '@/entities/course/model/courses'
import { CourseCard } from '@/entities/course/ui/CourseCard'
import { renderWithRouter } from '@/test/renderWithRouter'

describe('CourseCard', () => {
  it('renders adult course card', () => {
    const course = getCourseBySlug('frontend')!
    renderWithRouter(<CourseCard course={course} />)
    expect(screen.getByText(course.title)).toBeInTheDocument()
    expect(screen.getByText('Подробнее')).toBeInTheDocument()
  })

  it('renders children badge when category is children', () => {
    const childCourse = getChildrenCourses()[0]
    renderWithRouter(<CourseCard course={childCourse} inCarousel />)
    expect(screen.getByText('Для детей')).toBeInTheDocument()
  })
})
