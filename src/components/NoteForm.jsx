import React, { useState } from "react";

const NoteForm = ({ setNotes, notes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "normal",
    category: "work",
    description: "",
  });

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
    <form className="mb-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          name="title"
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter note title"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="priority"
        >
          Priority
        </label>

        <select
          type="text"
          name="priority
"
          id="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg mt-2"
        >
          <option value="high">High</option>
          <option value="normal">Normal</option>
          <option value="low">Low</option>
        </select>
      </div>
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
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          name="description"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter note description"
          rows="4"
          id="description"
        ></textarea>
      </div>
      <button className="w-full bg-purple-600 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-500">
        Save
      </button>
    </form>
  );
};

export default NoteForm;
