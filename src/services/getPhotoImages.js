import { CARD_PHOTOS_URL } from '@/constants'

/**
 * Fetches photo images from the CARD_PHOTOS_URL.
 * @returns {Promise<Array>} A promise that resolves to an array of photo images.
 */
export default async function getPhotoImages () {
  const response = await fetch(CARD_PHOTOS_URL)
  if (!response.ok) {
    return []
  }
  const data = await response.json()
  return data.entries
}
