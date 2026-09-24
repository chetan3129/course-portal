import { headers } from 'next/headers'

export function baseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  const host = headers().get('host') ?? 'localhost:3000'
  const protocol = host.startsWith('localhost') || host.startsWith('127.0.0.1') ? 'http' : 'https'
  return `${protocol}://${host}`
}
