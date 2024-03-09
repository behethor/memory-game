export default function GameOver({ userName = '', handlePlayAgain }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-md px-9 py-9">
      <h2 className="text-2xl font-semibold text-slate-50">¡Congratulations {userName}!</h2>
      <p className="text-lg font-medium text-slate-50">¡You have completed the game!</p>
      <button onClick={() => handlePlayAgain()} className="rounded bg-indigo-900 font-medium px-16 py-2 text-lg text-white shadow-sm">Play Again</button>
    </div>
  )
}
