import getPhotoImages from '@/services/getPhotoImages'
import { photos } from '@/mock/photos'

const mockFetch = vi.fn()
global.fetch = mockFetch // Assign mock to global fetch

describe('getPhotoImages', () => {
  test('should return an empty array when the response is not ok', async () => {
    const mockResponse = { ok: false }
    mockFetch.mockResolvedValueOnce(mockResponse)
    const result = await getPhotoImages()

    expect(result).toEqual([])
  })

  test('should return the photo images from a successful response', async () => {
    const mockData = { photos }
    const mockResponse = new Response(JSON.stringify(mockData), { status: 200 })
    mockFetch.mockResolvedValueOnce(mockResponse)
    const result = await getPhotoImages()

    expect(result).toEqual(mockData.entries)
  })
})
