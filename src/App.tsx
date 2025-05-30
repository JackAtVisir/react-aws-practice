import { useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {addTodo, deleteTodo} from './todoSlice'

interface Todo {
  id: string,
  text: string,
  completed: boolean
}

function App() {

  const [text, setText] = useState("")
  const todos = useSelector((state: { todos: Todo[] })=>(state.todos))
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text))
      setText("")
    }
  }

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          {todo.text} 
          <button onClick={()=>{handleDeleteTodo(todo.id)}}>Delete</button>
        </li>
      ))}
    </ul>
      <input
      type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder="what doing g"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default App
