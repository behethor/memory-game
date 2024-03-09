export default function Footer({ handlePlayAgain }) {
  return (
    <footer>
      <div className="flex m-12 justify-center">
        <button onClick={handlePlayAgain} className="rounded bg-indigo-900 font-medium px-16 py-2 text-lg text-white shadow-sm">Reset Game</button>
      </div>
    </footer>
  )
}