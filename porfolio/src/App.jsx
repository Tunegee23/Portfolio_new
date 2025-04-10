import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Portfolio from './Page/Portfolio';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },
    
    {
       path: "portfolio", 
       element: <Portfolio />,
    },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;