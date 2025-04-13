import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    
    {
       path: "/portfolio", 
       element: <Portfolio />,
    },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
  
  
  function Home() {
    return (
        <>
          <Navbar />
        </>
    );
}
}

export default App;