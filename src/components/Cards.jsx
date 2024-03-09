import Image from 'next/image'

export default function Cards({
  gameCards = [],
  handleClick,
  flippedCards = [],
  solvedPairs = []
}) {
  return (
    <section className=" md:mx-10 lg:mx-48 flex flex-row flex-wrap justify-center gap-5">
      {gameCards?.map((card, index) => {
        const isFlipped = flippedCards.includes(index) ||
          solvedPairs.includes(index)
        const image = isFlipped ? card.url : '/images/backCardBlack.webp'

        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
          >
            <Image
              className={`object-fill w-40 h-52 rounded-xl shadow-xl ${isFlipped ? 'animate-spin-stop' : ''}`}
              priority
              src={image}
              alt={card.title}
              width={150}
              height={200}
            />
          </div>
        )
      })}
    </section>
  )
}
