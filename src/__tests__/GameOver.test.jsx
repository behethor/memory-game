import { render, screen, fireEvent } from '@testing-library/react'
import GameOver from '@/components/GameOver'

describe('GameOver', () => {
  test('renders the game over message', () => {
    render(<GameOver handlePlayAgain={vi.fn} userName={'John Doe'} />)
    const gameOverMessage = screen.getByText('¡Congratulations John Doe!')
    expect(gameOverMessage).toBeInTheDocument()
  })

  test('renders message without user name', () => {
    render(<GameOver handlePlayAgain={vi.fn} />)
    const gameOverMessage = screen.getByText('¡Congratulations !')
    expect(gameOverMessage).toBeInTheDocument()
  })

  test('calls handlePlayAgain when play again button is clicked', () => {
    const handlePlayAgain = vi.fn()
    render(<GameOver handlePlayAgain={handlePlayAgain} />)
    const playAgainButton = screen.getByText('Play Again')
    fireEvent.click(playAgainButton)
    expect(handlePlayAgain).toHaveBeenCalled()
  })
})
