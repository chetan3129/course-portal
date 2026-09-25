import { NextResponse } from 'next/server'
import { getReviews, delay } from '@/lib/data'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  await delay(2000)
  return NextResponse.json(getReviews(slug))
}