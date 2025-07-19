import React from "react";

const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>

      <select
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg mt-2"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
