export default function GameOver({ userName = '', handlePlayAgain }) {
  return (
    <div className="flex flex-col items-center gap-4 px-9 py-9">
      <h2 className="text-2xl font-semibold text-metal">¡Congratulations {userName}!</h2>
      <p className="text-lg font-medium text-metal">¡You have completed the game!</p>
      <button onClick={handlePlayAgain} className="rounded bg-indigo-900 font-medium px-16 py-2 text-lg text-white shadow-sm">Play Again</button>
    </div>
  )
}
