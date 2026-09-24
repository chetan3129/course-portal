import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SectionSkeleton from './SectionSkeleton'

describe('SectionSkeleton', () => {
  it('renders the label and default 3 lines', () => {
    const { container } = render(<SectionSkeleton label="Loading your courses..." />)

    // 1. Verify accessibility label exists
    expect(screen.getByLabelText('Loading your courses...')).toBeInTheDocument()

    // 2. Verify text message is displayed
    expect(screen.getByText('Loading your courses...')).toBeInTheDocument()

    // 3. Verify it renders 3 lines by default
    const lines = container.getElementsByClassName('skeleton-line')
    expect(lines.length).toBe(3)
  })

  it('renders custom number of rows when passed', () => {
    const { container } = render(<SectionSkeleton label="Loading..." rows={5} />)

    const lines = container.getElementsByClassName('skeleton-line')
    expect(lines.length).toBe(5)
  })
})