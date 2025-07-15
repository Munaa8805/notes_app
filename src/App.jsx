import { useState } from 'react'
import NoteForm from './components/NoteForm'


function App() {
  const [notes, setNotes] = useState([]);


  return (
    <div  className='max-w-lg mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg p-4'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Notes App</h2>
      <NoteForm setNotes={setNotes} notes={notes}/>
     
    </div>
  )
}

export default App
