



import Login from './components/auth/login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Mainlayoput from './Mainlayout'
import Signup from './components/auth/Signup'
import ForgotPassword from './components/auth/ForgotPassword'
import ResetPassword from './components/auth/ResetPassword'
import VerifyEmail from './components/auth/VerifyEmail'
import Navbar from './components/Navbar'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>
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

  },

  {
     path:"/reset-password",
     element:<ResetPassword/>

  },

  {
     path:"/verify-email",
     element:<VerifyEmail/>

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
