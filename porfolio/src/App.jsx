import React from 'react';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import Portfolio from './Page/Project';


function App() {
  return (
   
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}/>,
      <Route path='/portfolio' element={<Portfolio/>}/>
      

    </Routes>
    
    </BrowserRouter>
     
   
  );
}

export default App;