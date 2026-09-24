import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="brand">🎓 Student Course Portal</Link>
      <div className="nav-links">
        <Link href="/courses">Courses</Link>
        <Link href="/dashboard">My Courses</Link>
      </div>
    </nav>
  )
}
