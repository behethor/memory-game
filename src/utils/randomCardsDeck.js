/**
 * Generates a random deck of cards.
 *
 * @param {Array} cards - The array of cards to generate the deck from.
 * @returns {Array} - The randomly generated deck of cards.
 */
export default function randomCardsDeck (cards) {
  if (cards.length === 0) return []

  const cardsCopy = [...cards]
  const randomizedCards = []
  let count = 0

  while (count < 9) {
    const randomIndex = Math.floor(Math.random() * cardsCopy.length)
    if (randomizedCards.includes(cardsCopy[randomIndex])) {
      continue
    }
    const randomCard = cardsCopy.splice(randomIndex, 1)[0]
    randomizedCards.push(randomCard.fields.image)
    count++
  }

  const deck = [...randomizedCards, ...randomizedCards].sort(() => Math.random() - 0.5)

  return deck
}
