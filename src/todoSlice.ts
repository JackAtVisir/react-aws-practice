import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from "nanoid"

interface Todo {
    id: string,
    text: string,
    completed: boolean
}

type TodoState = Todo[]

const initialState: TodoState = []

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({id: nanoid(), text: action.payload, completed: false});
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer