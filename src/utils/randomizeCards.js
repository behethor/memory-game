/**
 * Randomizes the order of the given array of cards.
 *
 * @param {Array} cards - The array of cards to be randomized.
 * @returns {Array} - The randomized array of cards.
 */
export default function randomizeCards (cards) {
  if (cards.length === 0) return []
  return cards.sort(() => Math.random() - 0.5)
}
