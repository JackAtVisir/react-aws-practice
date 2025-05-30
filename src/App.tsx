import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();
  const handleTodo = () => {
  
    navigate("/Todo")

  }
  
  return (

    <div>

      <button onClick={handleTodo}>Todo List</button>
    
    </div>
    
  )
}

export default App
