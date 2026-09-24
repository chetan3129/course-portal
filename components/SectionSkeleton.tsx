export default function SectionSkeleton({ label, rows = 3 }: { label: string; rows?: number }) {
  return (
    <div className="skeleton-block" aria-label={label}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="skeleton-line" />
      ))}
      <p className="skeleton-label">{label}</p>
    </div>
  )
}
