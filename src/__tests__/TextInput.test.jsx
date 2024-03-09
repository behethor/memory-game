import { render, screen, fireEvent } from '@testing-library/react'
import TextInput from '../components/TextInput'
import { describe } from 'vitest'

describe('TextInput', test => {
  test('renders TextInput component', () => {
    render(<TextInput label="Test Label" id="test-input" />)

    const inputElement = screen.getByLabelText('Test Label')
    expect(inputElement).toBeInTheDocument()
  })

  test('handles input change', () => {
    render(<TextInput label="Test Label" id="test-input" />)

    const inputElement = screen.getByLabelText('Test Label')
    fireEvent.change(inputElement, { target: { value: 'Test Value' } })

    expect(inputElement.value).toBe('Test Value')
  })
})
