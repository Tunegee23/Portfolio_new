import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import Portfolio from './Page/Portfolio';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/portfolio",
      element: <Portfolio/>
    }
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;