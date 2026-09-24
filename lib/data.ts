import { Course, Lesson, Review } from './types'

const courses: Course[] = [
  {
    slug: 'nextjs-fundamentals',
    title: 'Next.js Fundamentals',
    instructor: 'Ananya Rao',
    category: 'Web Development',
    level: 'Beginner',
    durationHours: 18,
    price: 2999,
    rating: 4.7,
    seatsLeft: 12,
    summary: 'Learn routing, rendering strategies and data fetching in the Next.js App Router.',
    description:
      'A hands-on introduction to Next.js covering the App Router, server and client components, the four rendering strategies, and building API endpoints with route handlers.',
  },
  {
    slug: 'react-deep-dive',
    title: 'React Deep Dive',
    instructor: 'Daniel Fischer',
    category: 'Web Development',
    level: 'Intermediate',
    durationHours: 24,
    price: 3499,
    rating: 4.6,
    seatsLeft: 5,
    summary: 'Hooks, reconciliation, context patterns and performance profiling in real apps.',
    description:
      'Goes past the basics of React into custom hooks, render behaviour, memoisation trade-offs, context design and profiling slow components with real case studies.',
  },
  {
    slug: 'typescript-essentials',
    title: 'TypeScript Essentials',
    instructor: 'Meera Nair',
    category: 'Programming Languages',
    level: 'Beginner',
    durationHours: 14,
    price: 2499,
    rating: 4.8,
    seatsLeft: 20,
    summary: 'Types, generics and narrowing for developers coming from plain JavaScript.',
    description:
      'Builds a practical mental model of the TypeScript type system: structural typing, unions, generics, narrowing and how to type real React and Node codebases.',
  },
  {
    slug: 'node-api-design',
    title: 'Node.js API Design',
    instructor: 'Samuel Okoro',
    category: 'Backend',
    level: 'Intermediate',
    durationHours: 20,
    price: 3199,
    rating: 4.4,
    seatsLeft: 8,
    summary: 'Design REST APIs with validation, auth, error handling and pagination.',
    description:
      'Covers designing resource-oriented APIs in Node.js, request validation, layered architecture, authentication, structured error handling and API versioning.',
  },
  {
    slug: 'data-structures-in-java',
    title: 'Data Structures in Java',
    instructor: 'Priya Venkatesh',
    category: 'Computer Science',
    level: 'Beginner',
    durationHours: 30,
    price: 2799,
    rating: 4.5,
    seatsLeft: 34,
    summary: 'Arrays, lists, trees, graphs and complexity analysis with Java implementations.',
    description:
      'A classic data structures course taught in Java, with complexity analysis, implementation exercises and interview-style problem walkthroughs.',
  },
  {
    slug: 'cloud-foundations-aws',
    title: 'Cloud Foundations on AWS',
    instructor: 'Leah Mbeki',
    category: 'Cloud',
    level: 'Advanced',
    durationHours: 26,
    price: 4299,
    rating: 4.3,
    seatsLeft: 3,
    summary: 'Compute, storage, networking and IAM concepts mapped to AWS services.',
    description:
      'Explains core cloud building blocks through AWS: EC2, S3, VPC networking, IAM permission design, and cost-aware architecture decisions.',
  },
]

const lessonsBySlug: Record<string, Lesson[]> = {
  'nextjs-fundamentals': [
    { id: 'l1', title: 'App Router and file conventions', durationMinutes: 42, isFree: true },
    { id: 'l2', title: 'Server components vs client components', durationMinutes: 55, isFree: true },
    { id: 'l3', title: 'SSR, SSG, ISR and CSR compared', durationMinutes: 61, isFree: false },
    { id: 'l4', title: 'Route handlers and data fetching', durationMinutes: 48, isFree: false },
  ],
  'react-deep-dive': [
    { id: 'l1', title: 'How React renders and re-renders', durationMinutes: 50, isFree: true },
    { id: 'l2', title: 'Writing custom hooks that scale', durationMinutes: 47, isFree: false },
    { id: 'l3', title: 'Context patterns without re-render storms', durationMinutes: 52, isFree: false },
  ],
  'typescript-essentials': [
    { id: 'l1', title: 'Structural typing explained', durationMinutes: 35, isFree: true },
    { id: 'l2', title: 'Generics you will actually use', durationMinutes: 44, isFree: false },
    { id: 'l3', title: 'Narrowing and discriminated unions', durationMinutes: 39, isFree: false },
  ],
  'node-api-design': [
    { id: 'l1', title: 'Resource modelling and URL design', durationMinutes: 40, isFree: true },
    { id: 'l2', title: 'Validation and error contracts', durationMinutes: 46, isFree: false },
    { id: 'l3', title: 'Pagination, filtering and sorting', durationMinutes: 38, isFree: false },
  ],
  'data-structures-in-java': [
    { id: 'l1', title: 'Complexity analysis crash course', durationMinutes: 45, isFree: true },
    { id: 'l2', title: 'Linked lists and dynamic arrays', durationMinutes: 58, isFree: false },
    { id: 'l3', title: 'Trees, heaps and balanced search', durationMinutes: 64, isFree: false },
    { id: 'l4', title: 'Graph traversal patterns', durationMinutes: 57, isFree: false },
  ],
  'cloud-foundations-aws': [
    { id: 'l1', title: 'Regions, availability zones and compute', durationMinutes: 43, isFree: true },
    { id: 'l2', title: 'Storage classes and durability', durationMinutes: 41, isFree: false },
    { id: 'l3', title: 'VPC networking from scratch', durationMinutes: 66, isFree: false },
    { id: 'l4', title: 'IAM policy design', durationMinutes: 49, isFree: false },
  ],
}

const reviewsBySlug: Record<string, Review[]> = {
  'nextjs-fundamentals': [
    { id: 'r1', student: 'Harish K.', rating: 5, comment: 'The rendering strategies module finally made ISR click for me.' },
    { id: 'r2', student: 'Fatima S.', rating: 4, comment: 'Great pacing. Would like more exercises on route handlers.' },
    { id: 'r3', student: 'Tom B.', rating: 5, comment: 'Clear explanations of server vs client components.' },
  ],
  'react-deep-dive': [
    { id: 'r1', student: 'Nikhil P.', rating: 5, comment: 'The profiling section changed how I debug slow pages.' },
    { id: 'r2', student: 'Grace L.', rating: 4, comment: 'Dense but worth it. Rewatched the reconciliation lesson twice.' },
  ],
  'typescript-essentials': [
    { id: 'r1', student: 'Aditi M.', rating: 5, comment: 'Best explanation of generics I have come across.' },
    { id: 'r2', student: 'Omar R.', rating: 5, comment: 'Short, focused, and immediately useful at work.' },
  ],
  'node-api-design': [
    { id: 'r1', student: 'Kiran J.', rating: 4, comment: 'Solid coverage of error handling patterns.' },
  ],
  'data-structures-in-java': [
    { id: 'r1', student: 'Sanjay T.', rating: 5, comment: 'Helped me clear two interview rounds.' },
    { id: 'r2', student: 'Elif D.', rating: 4, comment: 'Graph section is excellent, arrays section felt slow.' },
  ],
  'cloud-foundations-aws': [
    { id: 'r1', student: 'Rahul V.', rating: 4, comment: 'IAM lesson alone was worth the price.' },
  ],
}

export function getCourses(): Course[] {
  return courses
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

export function getCoursesBySlugs(slugs: string[]): Course[] {
  return courses.filter((c) => slugs.includes(c.slug))
}

export function getLessons(slug: string): Lesson[] {
  return lessonsBySlug[slug] ?? []
}

export function getReviews(slug: string): Review[] {
  return reviewsBySlug[slug] ?? []
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
