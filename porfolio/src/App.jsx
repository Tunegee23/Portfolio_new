import React from 'react';
import { BrowserRouter, Route,  Routes, } from 'react-router-dom';
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