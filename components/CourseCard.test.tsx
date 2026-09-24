import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CourseCard from './CourseCard'
import { Course } from '@/lib/types'

const mockCourse: Course = {
  slug: 'nextjs-101',
  title: 'Next.js Fundamentals',
  instructor: 'Alex Doe',
  durationHours: 6,
  rating: 4.8,
  price: 2499,
  summary: 'Learn Next.js from scratch.',
  level: 'Beginner',
  category: '',
  seatsLeft: 0,
  description: ''
}

describe('CourseCard Component', () => {
  it('renders title and price', () => {
    render(<CourseCard course={mockCourse} />)
    expect(screen.getByText('Next.js Fundamentals')).toBeInTheDocument()
    expect(screen.getByText('₹2,499')).toBeInTheDocument()
  })
})