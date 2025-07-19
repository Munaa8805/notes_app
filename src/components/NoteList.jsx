import React from "react";

const NoteList = ({ notes,deleteHandler }) => {
  if (!notes || notes.length === 0) {
    return <p className="text-gray-500 text-center">No notes available</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note.id} className="p-4 bg-white rounded-lg shadow-md border-l-4" style={{
            borderLeftColor: note.priority === "high" ? "red" : note.priority === "medium" ? "bg-yellow-200" : "green"
        }}>
          <h3 className="text-xl font-semibold">{note.title}</h3>
          <p className="text-sm text-gray-600">
            <strong>Category: </strong>
            
            {note.category}</p>
            <p className="text-sm text-gray-600">
            <strong>Description: </strong>
            
            {note.description}</p>
          <div className=" text-sm text-gray-600">
            <span
              className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                note.priority === "high"
                  ? "bg-red-200 text-red-800"
                  : note.priority === "medium"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {note.priority.charAt(0).toUpperCase() + note.priority.slice(1)}
            </span>
          </div>
          <button onClick={()=>deleteHandler(note.id)} className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
