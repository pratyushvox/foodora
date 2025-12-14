
import Login from './components/auth/login'
import Mainlayout from './Layout/MainLayout'
import Signup from './components/auth/Signup'
import ForgotPassword from './components/auth/ForgotPassword'
import ResetPassword from './components/auth/ResetPassword'
import VerifyEmail from './components/auth/VerifyEmail'

import HeroSection from './components/Herosection'
import { createBrowserRouter,  RouterProvider  } from 'react-router-dom'
import Profile from './components/Profile'
import SearchPage from './components/SearchPage'
import RestaurantDetails from './components/RestaurantDetails'
import Cart from './components/Cart'
import Restaurant from './components/admin/Restaurant'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Mainlayout/>,
    children:[
      {
        path:"/",
        element:<HeroSection/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/search/:params",
        element:<SearchPage/>

      },
      {
        path:"/restaurant/:id",
        element:<RestaurantDetails/>

      },
      {
        path:"/cart",
        element:<Cart/>

      },
      //admin service  start from here 

      {
        path:"/admin/restaurant",
        element:<Restaurant/>
        
      }
    ]
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
