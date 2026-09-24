let enrolledSlugs: string[] = []

export function getEnrolledSlugs(): string[] {
  return enrolledSlugs
}

export function isEnrolled(slug: string): boolean {
  return enrolledSlugs.includes(slug)
}

export function enroll(slug: string): string[] {
  if (!enrolledSlugs.includes(slug)) {
    enrolledSlugs = [...enrolledSlugs, slug]
  }
  return enrolledSlugs
}

export function unenroll(slug: string): string[] {
  enrolledSlugs = enrolledSlugs.filter((s) => s !== slug)
  return enrolledSlugs
}
