import { useEffect, useState } from 'react'
import { stringify, v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const setToSL = (e) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  

  const handleEdit = (e, id)=>{
    let t = todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    let newTodos = todos.filter((item)=>{
      return item.id!==id
    })
    setTodos(newTodos)
    setToSL()
  }

  const handleDelete = (e, id)=>{
    let newTodos = todos.filter((item)=>{
      return item.id!==id
    })
    setTodos(newTodos)
    setToSL()
  }

  const handleAdd = ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    setToSL()
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item)=>{
      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    setToSL
  }
  
  return (
    <>
      <div className="container mx-auto mt-7 bg-violet-100 rounded-xl my-2 p-5 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-xl font-bold'>Add a Todo</h2>
          <input type="text" onChange={handleChange} value = {todo} className='w-80'/>
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 font-bold text-white text-sm py-1 rounded-sm mx-6'>Save</button>
        </div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        {todos.length===0 && <div className="m-5">No Task</div> }
        <div className="todos">
          {todos.map((item)=>{
            return <div key={item.id} className="todo flex w-1/3 justify-between my-3">
            <div className="flex gap-5">
            <input name={item.id} onChange={handleCheckbox} type="checkbox" value ={item.isCompleted} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="buttons">
              <button onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 font-bold text-white text-sm py-1 rounded-sm mx-1'>Edit</button>
              <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 font-bold text-white text-sm py-1 rounded-sm mx-1'>Delete</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
