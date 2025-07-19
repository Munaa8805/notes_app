import React from 'react'

const TextInput = ({label , name,value, onChange, required=false}) => {
  return (
    <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={name}
            >
              {label}
            </label>
            <input
            required={required}
              name={name}
              type="text"
              id="title"
              value={value}
              onChange={onChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter note title"
            />
          </div>
  )
}

export default TextInput
