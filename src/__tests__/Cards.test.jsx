import { render, screen, fireEvent } from '@testing-library/react'
import Cards from '../components/Cards'

const gameCards = [
  { url: '/images/card1.webp', title: 'Card 1', uuid: '1asd23' },
  { url: '/images/card2.webp', title: 'Card 2', uuid: '1afff3' },
  { url: '/images/card3.webp', title: 'Card 3', uuid: '1f3s21' }
]
const flippedCards = [0, 9]
const solvedPairs = [1, 3]

describe('Cards component', () => {
  test('renders the correct number of cards', () => {
    render(<Cards gameCards={gameCards} flippedCards={flippedCards} solvedPairs={solvedPairs}/>)
    const cards = screen.getAllByRole('img')
    expect(cards.length).toBe(gameCards.length)
  })

  test('flips the card when clicked', () => {
    const handleClick = vi.fn()
    render(<Cards gameCards={gameCards} handleClick={handleClick} />)
    const card = screen.getByAltText(gameCards[0].title)
    fireEvent.click(card)
    expect(handleClick).toHaveBeenCalledWith(0)
  })
})
