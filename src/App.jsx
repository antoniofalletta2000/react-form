import { useState } from 'react'



function App() {
  const articles = ["mele", "uova", "pasta", "pesto"]
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState(articles)
  const [edit, setEdit] = useState(-1)
  const [editText, setEditText] = useState('')

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

  function saveArticle(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editText;
    setTasks(updatedTasks);
    setEdit(-1);
  }





  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className='d-flex justify-content-center pt-3'>
            <h1>ARTICOLI DA ACQUISTARE</h1>
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
            <li className="bg-body-tertiary list-group-item d-flex justify-content-between align-items-center fw-bold" key={index}>

              <h2>{edit !== index ? task : <input className='border border-success rounded' value={editText} onChange={(e) => setEditText(e.target.value)} />}</h2>
              <div className='d-flex gap-1'>
                
                {edit === index ? (
                  <button
                    className="btn btn-success rounded-pill"
                    onClick={() => saveArticle(index)}
                  >
                    <i className="bi bi-check-lg"></i> 
                  </button>
                ) : (
                  
                  <button
                    className="btn text-bg-primary rounded-pill"
                    onClick={() => { setEditText(task); setEdit(index); }}
                  >
                    <i className="bi bi-pen"></i>
                  </button>
                )}

                <button className="btn text-bg-danger rounded-pill" onClick={() => removeArticle(index)}>
                  <i className="bi bi-trash3"></i>
                </button>
              </div>


            </li>
          )}
          {tasks.length === 0 && <li className="list-group-item d-flex justify-content-center align-items-center border border-danger">
            <h5>NON CI SONO ARTICOLI</h5>
          </li>}
        </ul>
      </div>






    </>
  )
}

export default App
