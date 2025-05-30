import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const handleCreateTodo = () => {
  
    navigate("/CreateTodo")
  }

  const handleLogin = () => {
  
    navigate("/Login")
  }

  const handleLists = () => {
  
    navigate("/Lists")
  }
  
  return (

    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleCreateTodo}>New List</button> 
      <button onClick={handleLists}>Your Lists</button>   
    </div>
    
  )
}

export default App
