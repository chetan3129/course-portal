import { NextResponse } from 'next/server'
import { getCourses } from '@/lib/data'

export async function GET(req: Request) {
  const level = new URL(req.url).searchParams.get('level')
  const courses = getCourses()

  if (level) {
    return NextResponse.json(courses.filter((c) => c.level === level))
  }
  return NextResponse.json(courses)
}
