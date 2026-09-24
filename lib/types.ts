export type Level = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Course {
  slug: string
  title: string
  instructor: string
  category: string
  level: Level
  durationHours: number
  price: number
  rating: number
  seatsLeft: number
  summary: string
  description: string
}

export interface Lesson {
  id: string
  title: string
  durationMinutes: number
  isFree: boolean
}

export interface Review {
  id: string
  student: string
  rating: number
  comment: string
}
