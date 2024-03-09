import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  test('renders the header', () => {
    render(<Header userName="John Doe" onOpenModal={vi.fn} wrongMoves={2} score={2} />)
    const header = screen.getByText('John Doe')
    expect(header).toBeInTheDocument()
  })

  test('do not renders the header', () => {
    const { container } = render(<Header userName="" onOpenModal={vi.fn} wrongMoves={2} score={2} />)
    expectTypeOf(container).toBeNull()
  })
})
