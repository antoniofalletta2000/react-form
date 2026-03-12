import { useState } from 'react'



function App() {
  const articles=["mele", "uova", "pasta", "pesto"]
  const [newTask, setNewTask]=useState("")

  return (
    <>
      <div className="container">
        <h1>ARTICOLI</h1>
        <input type="text" placeholder='Type your articles' value={newTask} onChange={e=>setNewTask(e.target.value)}/>
        <button>Invia</button>
      </div>
    </>
  )
}

export default App
