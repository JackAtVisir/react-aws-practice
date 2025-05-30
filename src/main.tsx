import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux"
import store from './store.ts'
import App from './App.tsx'
import NotFoundPage from './NotFoundPage.tsx';
import TodoList from './TodoList.tsx';


const router = createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/CreateTodo", element:<TodoList/>},
  {path:"*", element:<NotFoundPage />},
])  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
