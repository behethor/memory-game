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
        ? (
          <div className="font-medium text-lg px-9 py-9 flex flex-col gap-12">
            <div className="text-grey">¡Welcome Back {userName}!</div>
            <button onClick={() => onClick()} className="rounded bg-metal font-medium px-16 py-2 text-lg text-white shadow-sm">¡Play!</button>
          </div>
        )
        : (
          <div className="flex flex-col px-3 justify-center gap-1">
            <div className="font-medium text-lg text-grey space-y-1">
              <h2 className="pl-6">¡Welcome to Memory Game!</h2>
            </div>
            <TextInput id="userName" ref={inputRef} label='Enter your name to start the game' />
            <div className="m-12 justify-center">
              <button onClick={() => onSetUserName()} className="rounded bg-metal font-medium px-16 py-2 text-lg text-white shadow-sm">¡Play!</button>
            </div>
          </div>)
      }
    </section>
  )
}
