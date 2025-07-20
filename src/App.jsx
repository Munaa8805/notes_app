import { useState, useEffect, use } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState(()=>{
    const notes = JSON.parse(localStorage.getItem("notes"));
    return notes ? notes : [];
  });

  // useEffect(() => {
  //   const notes = JSON.parse(localStorage.getItem("notes"));
  //   if (notes) {
  //     setNotes(notes);
  //   }
  // },[]);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes]);
  const deleteHandler = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (!confirmDelete) return;
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div className="max-w-lg mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Notes App</h2>
      <NoteForm setNotes={setNotes} notes={notes} />
      <NoteList notes={notes} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
