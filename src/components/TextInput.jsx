import { forwardRef, useState } from 'react'

const TextInput = forwardRef(function TextInput(props, ref) {
  const { label, id } = props
  const [value, setValue] = useState('')
  const handleChange = (evt) => {
    setValue(evt.target.value)
  }
  return (
    <div className="text-black max-w-80 ">
      {label && (
        <label htmlFor={id} className='font-medium text-lg text-grey'>
          <p>{label}</p>
        </label>
      )}
      <input
        ref={ref}
        id={id}
        type="text"
        className="border-2 rounded-md p-2 color-metal w-full"
        value={value}
        onChange={(evt) => handleChange(evt)}
      />
    </div>
  )
})

export default TextInput
