



import Login from './components/auth/login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Mainlayoput from './Mainlayout'
import Signup from './components/auth/Signup'
import ForgotPassword from './components/auth/ForgotPassword'
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


  },
  {
     path:"/forgot-password",
     element:<ForgotPassword/>

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
