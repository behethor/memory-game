import randomCardsDeck from '@/utils/randomCardsDeck'

describe('randomCardsDeck', () => {
  test('should return an empty array if the input array is empty', () => {
    expect(randomCardsDeck([])).toEqual([])
  })

  test('should return a random deck of cards', () => {
    const cards = [
      { fields: { image: 'card1' } },
      { fields: { image: 'card2' } },
      { fields: { image: 'card3' } },
      { fields: { image: 'card4' } },
      { fields: { image: 'card5' } },
      { fields: { image: 'card6' } },
      { fields: { image: 'card7' } },
      { fields: { image: 'card8' } },
      { fields: { image: 'card9' } }
    ]

    const deck = randomCardsDeck(cards)

    expect(deck.length).toBe(18)
    expect(deck[0]).not.toBe('card2')
  })
})
