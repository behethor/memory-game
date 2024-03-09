import { render, screen, fireEvent } from '@testing-library/react'
import BoardGame from '@/components/BoardGame'
import { deck } from '@/mock/deck'

describe('BoardGame', () => {
  test('renders a board game', () => {
    render(<BoardGame cardImages={deck} />)
    expect(screen.getByText('¡Welcome to Memory Game!')).toBeInTheDocument()
  })

  test('allows the user to set their name', () => {
    render(<BoardGame cardImages={deck} />)
    fireEvent.change(screen.getByLabelText('Enter your name to start the game'), { target: { value: 'John Doe' } })
    fireEvent.click(screen.getByText('¡Play!'))
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  test('matches the pairs and updates the score', () => {
    render(<BoardGame cardImages={deck} />)
    const card = screen.queryAllByAltText('Fish')[0]
    expect(card).toHaveAttribute('src', '/_next/image?url=%2Fimages%2FbackCardBlack.webp&w=384&q=75')
  })
})
