import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Navbar from './Components/Navbar'
import Portfolio from './Page/Portfolio'


function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      Component:Navbar
    },

    {
      path:"/Portfolio",
      Component: Portfolio
    }
  ])

  return (
   <>

<RouterProvider router={Router}/>
   </>
  )
}

export default App