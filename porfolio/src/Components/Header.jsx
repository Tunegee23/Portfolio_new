

import React, { useEffect,useState, useRef } from 'react';
import { gsap } from 'gsap'; 
import img1 from "../assets/facebook.svg"
import img2 from '../assets/github.svg'
import img3 from "../assets/instagram.svg"
import img4 from "../assets/linkedin.svg"



function DeveloperXPage() {

  // const [menuOpen, setMenuOpen] = useState(false);
  const textRef  = useRef(null);
  const paragraphRef = useRef(null);
  const smallRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const bigRef =useRef(null);
  const learnRef = useRef(null);
  const portRef = useRef(null);
  const contactRef = useRef(null);
  const iconRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(textRef.current,{ opacity: 0, y: 20 },  { opacity: 6,  y: 0,  duration: 1, delay: 0.4, ease: "power2.out" });
    gsap.fromTo(paragraphRef.current,{opacity: 0, y:10 }, { opacity: 6,  y: 0,  duration: 1, delay: 1, ease: "power2.out" });
    gsap.fromTo(smallRef.current,{ opacity: 0, x: -10 }, { opacity: 6, x: 0, duration: 1, delay: 1, ease: "power2.out" }); 
    gsap.fromTo(aboutRef.current,{ opacity: 0, x: -10 }, { opacity: 6, x: 0, duration: 1, delay: 1.5, ease: "power2.out" }); 
    gsap.fromTo(workRef.current,{ opacity: 0, y: 10 }, { opacity: 6, y: 0, duration: 1, delay: 2, ease: "power2.out" });
    gsap.fromTo(bigRef.current,{ opacity: 0, y: 10 }, { opacity: 6, y: 0, duration: 1, delay: 1, ease: "power2.out" });
    gsap.fromTo(learnRef.current,{ opacity: 0, y: 10 }, { opacity: 6, y: 0, duration: 1, delay: 2, ease: "power2.out" });
    gsap.fromTo(portRef.current,{ opacity: 0, y: 10 }, { opacity: 6, y: 0, duration: 1, delay: 2, ease: "power2.out" });
    gsap.fromTo(contactRef.current,{ opacity: 0, x: -10 }, { opacity: 6, x: 0, duration: 1, delay: 2.5, ease: "power2.out" }); 
    gsap.fromTo(iconRef.current,{ opacity: 0, x: -10 }, { opacity: 6, x: 0, duration: 1, delay: 2.5, ease: "power2.out" }); 
  })

  return (
    <div className="">
      <main className="container mx-auto px-4 py-10">
        <section  className="text-center font-sans-Bold text-[#2c3733]">
          <h3 ref={textRef}  className="text-4xl font-bold mb-4">I'm Opeyemi,  <br /> a Web Developer</h3>
          <p ref={paragraphRef} className="text-lg mb-8">I'm a dedicated front-end developer with two years of experience, driven by a passion for creating impactful web designs.</p>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16 mt-12">
          <div className="text-center text-[#2c3733] font-sans-Bold md:text-left">
            <h3 ref={aboutRef}  className="text-3xl font-bold mb-4">ABOUT ME</h3>
            <p ref={smallRef} className="text-lg mb-8">Possessing a growth mindset, I am committed to continuous learning and contribute effectively within collaborative teams, consistently delivering work with a high degree of accuracy.</p>
            <a href="#" ref={learnRef} className="hover:text-[#DB6400] font-semibold hover:underline">LEARN MORE →</a>
          </div>

          <div className="text-center text-[#2c3733] font-sans-Bold md:text-left">
            <h3 ref={workRef} className="text-3xl font-bold md:mb-0 mb-4">MY WORK</h3>
            <p ref={bigRef} className="text-lg mb-8">For me, frontend development is about connecting people with brands through great web experiences. I take design visions and build them into interactive websites that are easy to use and look good.</p>
            <a href="/portfolio" target="_blank" ref={portRef} className="hover:text-[#DB6400] font-semibold hover:underline">BROWSE PORTFOLIO →</a>
          </div>
        </section>

        

        <section className="text-center mt-16">
          <h3 ref={contactRef} className="text-2xl text-[#2c3733] font-semibold mb-4">CONTACT ME</h3>
          <div ref={iconRef} className="flex justify-center space-x-4">
            <a href="https://github.com/Tunegee23" target="_blank"> <img src={img2} alt="" className=' w-[20px] h-[20px] group-hover:text-[#DB6400]' /></a>
            <a href="https://www.instagram.com/ope_tunegee?igsh=NmRveTk2OWQ2ODJq" target="_blank"> <img src={img3} alt="" className=' w-[20px] h-[20px] group-hover:text-[#DB6400]' /></a>
            <a href="https://www.linkedin.com/in/opeyemi-ogunsanya-89611b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" > <img src={img4} alt="" className=' w-[20px] h-[20px] group-hover:text-[#DB6400]' /></a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DeveloperXPage;
