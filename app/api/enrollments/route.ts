import { NextResponse } from 'next/server'
import { getCoursesBySlugs, delay } from '@/lib/data'
import { getEnrolledSlugs, enroll, unenroll } from '@/lib/enrollmentsStore'

export async function GET() {
  await delay(600)
  return NextResponse.json(getCoursesBySlugs(getEnrolledSlugs()))
}

export async function POST(req: Request) {
  const { slug } = await req.json()
  if (!slug) {
    return NextResponse.json({ error: 'slug is required' }, { status: 400 })
  }
  return NextResponse.json({ enrolled: enroll(slug) })
}

export async function DELETE(req: Request) {
  const { slug } = await req.json()
  if (!slug) {
    return NextResponse.json({ error: 'slug is required' }, { status: 400 })
  }
  return NextResponse.json({ enrolled: unenroll(slug) })
}
