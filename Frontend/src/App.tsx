

import './App.css'

import Login from './components/auth/login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Mainlayoput from './Mainlayout'
import Signup from './components/auth/Signup'
4

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Mainlayoput/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>


  }

])

function App() {
  

  return (
    <main>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </main>
  )
}

export default App
