import { useState } from 'react'



function App() {
  const articles = ["mele", "uova", "pasta", "pesto"]
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState(articles)
  
  function handleSubmit(e) {
    e.preventDefault()
    if (newTask.length >= 3) {
      setTasks([newTask, ...tasks])
      setNewTask("")
    } else {
      alert("Type min three letters")
    }

  }

  function removeArticle(i) {
    const newArticles = tasks.filter((newArticle, newIndex) => newIndex != i)
    setTasks(newArticles)
  }

 



  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className='d-flex justify-content-center pt-3'>
            <h1>ARTICOLI</h1>
          </div>

          <div className='d-flex justify-content-center pt-3 gap-3 pb-5'>
            <input className='rounded' type="text" placeholder='Type your articles' value={newTask} onChange={e => setNewTask(e.target.value.toLowerCase())} />
            <button className="btn bg-warning rounded fw-bold">AGGIUNGI</button>
          </div>

        </div>
      </form>
      <div className="container">
        <ul className="list-group">
          {tasks.map((task, index) =>
            <li className="bg-body-tertiary list-group-item d-flex justify-content-between align-items-center fw-bold fs-4" key={index}>
              {task}

              <div className='d-flex gap-1'>
                <button className="btn text-bg-success rounded-pill"onClick={()=> edit(index) } >
                  <i className="bi bi-pen"></i>
                </button>
                <button className="btn text-bg-danger rounded-pill" onClick={() => removeArticle(index)}>
                  <i className="bi bi-trash3"></i>
                </button>
              </div>


            </li>
          )}
        </ul>
      </div>






    </>
  )
}

export default App
