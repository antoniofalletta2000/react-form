import { useState } from 'react'



function App() {
  const articles = ["mele", "uova", "pasta", "pesto"]
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks]=useState(articles)
  

  function handleSubmit(e){
    e.preventDefault()
    if(newTask.length>=3){
    setTasks([newTask,...tasks])
    setNewTask("")
    }else{
      alert("Type min three letters")
    }
    
  }

  function removeArticle(i){
    const newArticles= tasks.filter((newArticle,newIndex)=> newIndex!=i )
    setTasks(newArticles)
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
            <button className="btn text-bg-primary rounded-pill" onClick={()=>removeArticle(index)}>
              <i className="bi bi-trash3"></i>
            </button>
          </li>
        )}
        </ul>
      </div>
      
          
        
          
      

    </>
  )
}

export default App
