import {API, graphqlOperation} from 'aws-amplify'
import { listTodos } from "./graphql/queries"
import { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const AllTodo = () => {

    const [todo, setTodo] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        fetchTodos()
        }, []
    )

    const handleHome = () => {
        navigate('/')
    }
    

    const fetchTodos = async () => {

        try {

            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todoList = todoData.data.listTodos.items
            console.log('Todo List: ', todoList) 
            setTodo(todoList)

        } catch (error) { 

            console.log('error on fetching todo', error)

        }
    }

    return (

        <div>

            <h1>All Todo Will Display Here Soon, I pray</h1>
            <button onClick={handleHome}>Go Home</button>

        </div>
    )
}

export default AllTodo