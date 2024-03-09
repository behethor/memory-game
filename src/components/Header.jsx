export default function Header({ score, wrongMoves, userName }) {
  const textColor = 'text-grey'
  return (
    <header className="flex flex-row h-24 font-medium text-md lg:text-3xl text-3xl text-metal space-y-1 text-center">
      {userName.length === 0
        ? null
        : (
          <>
            <div className="w-full">Player: <span className={textColor}>{userName}</span></div>
            <div className="w-full">Errors: <span className={textColor}>{wrongMoves}</span></div>
            <div className="w-full">Pairs: <span className={textColor}>{score}</span></div>
          </>
        )}

    </header>
  )
}
