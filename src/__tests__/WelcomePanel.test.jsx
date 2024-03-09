import { render, screen, fireEvent } from '@testing-library/react'
import WelcomePanel from '@/components/WelcomePanel'

describe('WelcomePanel', () => {
  test('renders input field when userName is not provided', () => {
    render(<WelcomePanel userName="" onChangeUserName={() => { }} onClick={() => { }} />)

    const inputField = 'Enter your name to start the game'
    expect(screen.getByText(inputField)).toBeInTheDocument()
  })
})
