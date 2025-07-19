import React from 'react'

const TextAreaInput = ({label, name, value, onChange, required=false}) => {
  return (
     <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={name}
            >
              {label}
            </label>
            <textarea
            required={required}
              name={name}
              type="text"
              className="w-full p-2 border rounded-lg"
              value={value}
              onChange={onChange}
              placeholder="Enter note description"
              rows="4"
              id="description"
            ></textarea>
          </div>
  )
}

export default TextAreaInput
