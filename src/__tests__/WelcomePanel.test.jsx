import { vi, describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import WelcomePanel from '@/components/WelcomePanel'

describe('WelcomePanel', () => {
  test('renders welcome message when userName is provided', () => {
    const userName = 'John Doe'
    render(<WelcomePanel userName={userName} onChangeUserName={vi.fn} onClick={vi.fn} />)

    const welcomeMessage = screen.getByText(`¡Welcome Back ${userName}!`)
    expect(welcomeMessage).toBeInTheDocument()
  })

  test('renders input field when userName is not provided', () => {
    render(<WelcomePanel userName="" onChangeUserName={() => {}} onClick={() => {}} />)

    const inputField = 'Enter your name to start the game'
    expect(screen.getByText(inputField)).toBeInTheDocument()
  })

  test('calls onClick when play button is clicked', () => {
    const onClick = vi.fn()
    render(<WelcomePanel userName="John Doe" onChangeUserName={() => {}} onClick={onClick} />)

    const playButton = screen.getByText('¡Play!')
    fireEvent.click(playButton)

    expect(onClick).toHaveBeenCalled()
  })
})
