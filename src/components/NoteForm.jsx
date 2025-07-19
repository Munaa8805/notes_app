import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";

const NoteForm = ({ setNotes, notes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "normal",
    category: "work",
    description: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Title and Description are required");
      return;
    }
    const newNote = {
      ...formData,
      id: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setFormData({
      title: "",
      priority: "normal",
      category: "work",
      description: "",
    });
  };

  return (
    <>
      <button
        onClick={() => {
          setIsFormVisible(!isFormVisible);
        }}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer"
      >
        {isFormVisible ? "Hide Form" : "Add New Note"}
      </button>
      {isFormVisible && (
        <form className="mb-6 mt-6" onSubmit={handleSubmit}>
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "normal", label: "Normal" },
            ]}
          />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              type="text"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-2"
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="idea">Idea</option>
            </select>
          </div>
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required={true}
          />
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-500">
            Save
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
