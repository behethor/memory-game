import { useRef } from 'react'
import TextInput from '@/components/TextInput'

export default function WelcomePanel({ userName, handleUserName, onClick }) {
  const inputRef = useRef(null)
  const onSetUserName = () => {
    if (inputRef.current.value.length === 0) return
    handleUserName(inputRef.current.value)
  }
  return (
    <section>
      {userName.length > 0
        ? null
        : (
          <div className="flex flex-col px-3 justify-center gap-2">
            <div className="font-medium text-lg text-metal space-y-1">
              <h2 className="pl-6">¡Welcome to Memory Game!</h2>
            </div>
            <TextInput id="userName" ref={inputRef} label='Enter your name to start the game' />
            <div className="m-12 justify-center">
              <button onClick={() => onSetUserName()} className="rounded bg-indigo-900 font-medium px-16 py-2 text-lg text-white shadow-sm">¡Play!</button>
            </div>
          </div>)
      }
    </section>
  )
}
