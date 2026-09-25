import { NextResponse } from 'next/server'
import { getLessons, delay } from '@/lib/data'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  await delay(1000)
  return NextResponse.json(getLessons(slug))
}