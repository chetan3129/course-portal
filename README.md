# Student Course Portal

A small Next.js 14 App Router project: browse courses, open a course, enroll in it.

Built as teaching material for two sessions:

- **Day 1 — SSR:** CSR vs SSR vs SSG vs ISR, SEO, App Router, Server vs Client Components
- **Day 2 — Data Fetching & Streaming:** fetching in Server Components, Suspense, `loading.js` / `error.js`, Route Handlers

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

| Route | What it does | Rendering |
|---|---|---|
| `/` | Landing page | Static |
| `/courses` | Course catalog with a search box | SSG + a Client Component |
| `/courses/[slug]` | Course details, lesson plan, reviews, enroll button | SSR + Suspense streaming |
| `/dashboard` | The courses you enrolled in | CSR |

## API routes

- `GET /api/courses` (optional `?level=Beginner`)
- `GET /api/courses/[slug]`
- `GET /api/courses/[slug]/lessons` — 1s delay, so streaming is visible
- `GET /api/courses/[slug]/reviews` — 2s delay, so streaming is visible
- `GET | POST | DELETE /api/enrollments`

## Notes for teaching

`next dev` re-renders every page on each request, so SSG and SSR behave identically in
development. Use a production build to show the difference:

```bash
npm run build
npm start
```

The build output marks each route: `○` static (the catalog) and `ƒ` server-rendered on
demand (course details).

Enrollments are stored in server memory, so they reset when the server restarts.
