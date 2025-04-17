
import React from 'react';
import Header from './Header';
import bg from '../assets/Bg.png';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="bg-[#2c3733] p-3 md:min-h-screen flex justify-center justify-items-center items-center  md:p-[70px] ">
      <div className=" bg-black p-10  relative rounded-[10px]">
        <div class="absolute w-10 h-10 bg-[#DB6400] rounded-[10px]" id="animatedItem"></div>
        <div className="absolute left-10 w-10 h-10 rounded-[10px]"
        style={{ backgroundColor: '#ba113e', animation: 'rotateAround1 8s linear reverse infinite' }} id='animatedItem1'></div>

        <header className="flex font-bold justify-between text-[#2c3733] items-center p-2">
          <div className="text-xl"> 
          <a href='#' className=' font-sans-Bold'>Developer X</a>
          </div>
          <nav className="md:flex text-[16px] font-sans-Bold hidden space-x-4">
            <a href="#" className="hover:text-[#DB6400]">Home</a>
            <a href="https://opetunegee.blogspot.com/2025/04/level-up-your-front-end-skills.html" target="_blank" className="hover:text-[#DB6400]"> Blog</a>
            <Link to="/portfolio" className="hover:text-[#DB6400]">portfolio</Link>
          </nav>
        </header>
        <Header />
      </div>
    </div>
  );
}

export default Navbar;