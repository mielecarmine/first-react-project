import React, { useState } from 'react'
import './App.css'

function App() {
  const [names, setNames] = useState(['Carmine','Franco','Luigi']);
  const [newName, setNewName] = useState('');

  const handleAddName = () => {
    if (newName.trim() !== '') {
      setNames([...names, newName]);
      setNewName('');
    }
  };

  return (
    <div>
      <h1>Lista di Nomi</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Inserisci un nuovo nome' />
      <button onClick={handleAddName}>Aggiungi</button>
    </div>
  )
}

export default App
