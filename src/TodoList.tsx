import { useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {addTodo, deleteTodo} from './todoSlice'
import { useNavigate } from "react-router-dom";

interface Todo {
    id: string,
    text: string,
    completed: boolean
  }

function TodoList() {

    const [text, setText] = useState("")
    const todos = useSelector((state: { todos: Todo[] })=>(state.todos))
    const dispatch = useDispatch()
    const navigate = useNavigate();
  
    const handleAddTodo = () => {
      if (text) {
        dispatch(addTodo(text))
        setText("")
      }
    }
  
    const handleDeleteTodo = (id: string) => {
      dispatch(deleteTodo(id))
    }

    const handleSave = () => {
      
    }

    const handleHome = () => {
        navigate("/")
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
        <button onClick={handleSave}>Save List</button>
        <button onClick={handleHome}>Home</button>
      </div>

    )
  }

  export default TodoList