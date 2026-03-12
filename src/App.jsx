import { useState } from 'react'



function App() {
  const articles = ["mele", "uova", "pasta", "pesto"]
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks]=useState(articles)

  function handleSubmit(e){
    e.preventDefault()
    setTasks([newTask,...tasks])
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>ARTICOLI</h1>

          <input type="text" placeholder='Type your articles' value={newTask} onChange={e => setNewTask(e.target.value)} />
          <button>Invia</button>


        </div>
      </form>
      <div className="container">
        <ul className="list-group">
        {tasks.map((task,index)=>
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {task}
            <span className="badge text-bg-primary rounded-pill">1</span>
          </li>
        )}
        </ul>
      </div>
      
          
        
          
      

    </>
  )
}

export default App
