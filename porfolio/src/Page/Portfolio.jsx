import React, { useRef, useEffect } from 'react';
import A from '../assets/img1.png'; 
import B from '../assets/img2.png';
import C from '../assets/img3.png';


function Portfolio() {
  

  return (
    <div className="bg-[#2c3733] flex min-h-screen justify-center items-center p-3 md:p-[50px]">
      <div className="bg-black w-full  relative rounded-[10px]">
        <div class="absolute w-10 h-10 z-10 bg-[#DB6400] rounded-[10px]" id="animatedItem"></div>
        <div className="absolute left-10 z-10 w-10 h-10 rounded-[10px]" style={{ backgroundColor: '#ba113e', animation: 'rotateAround1 8s linear reverse infinite' }} id='animatedItem1'></div>
        <div className="text-[#2c3733] p-6">
          <a href="">
            <h1 className="font-sans-Bold text-xl">Developer X</h1>
          </a>
        </div>
        <div className=" flex-wrap md:flex justify-center md:gap-4 items-center  p-4">
          <div className="text-center space-y-2 mt-3 ">
            <a href="#">
              <img src={A} className="w-[300px] block mx-auto transition-all ease-in-out duration-1000 hover:md:w-[350px]" alt="Landing Page" />
            </a>
            <p className="text-[18px] font-sans-Bold text-[#2c3733]">Landing Page</p>
          </div>

          <div className="text-center space-y-2 mt-3">
            <a href="#">
              <img src={B} className="w-[300px] block mx-auto transition-all ease-in-out duration-1000 hover:md:w-[350px]" alt="Shopping Cart(ongoing)" />
            </a>
            <p className="text-[18px] font-sans-Bold text-[#2c3733]">Shopping Cart(ongoing)</p>
          </div>

          <div className="text-center space-y-2 mt-3">
            <a href="#">
              <img src={C} className="w-[300px] block mx-auto transition-all ease-in-out duration-1000 hover:md:w-[350px]" alt="Shopping Cart(ongoing)" />
            </a>
            <p className="text-[18px] font-sans-Bold text-[#2c3733]">Shopping Cart(ongoing)</p>
          </div>

          <div className="text-center space-y-2 mt-3">
            <a href="#">
              <img src={C} className="w-[300px] block mx-auto transition-all ease-in-out duration-1000 hover:md:w-[350px]" alt="Shopping Cart(ongoing)" />
            </a>
            <p className="text-[18px] font-sans-Bold text-[#2c3733]">Shopping Cart(ongoing)</p>
          </div>

          <div className="text-center space-y-2 mt-3">
            <a href="#">
              <img src={C} className="w-[300px] block mx-auto transition-all ease-in-out duration-1000 hover:md:w-[350px]" alt="Shopping Cart(ongoing)" />
            </a>
            <p className="text-[18px] font-sans-Bold text-[#2c3733]">Shopping Cart(ongoing)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;






