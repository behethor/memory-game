import getPhotoImages from '@/services/getPhotoImages'
import randomCardsDeck from '@/utils/randomCardsDeck'
import BoardGame from '@/components/BoardGame'

export default async function Memory () {
  const cardImages = await getPhotoImages()
  const randomImages = randomCardsDeck(cardImages)

  return (
    <main className="flex flex-col items-center">
      <BoardGame cardImages={randomImages}/>
    </main>
  )
}
