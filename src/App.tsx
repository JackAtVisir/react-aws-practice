import { useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {addTodo} from './todoSlice'

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

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          {todo.text}
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
