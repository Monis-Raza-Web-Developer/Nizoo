import React, { useEffect, useState } from 'react'
import Halfparticles from './Halfparticles';
import Spline from '@splinetool/react-spline';
import { motion } from "motion/react"
import Cards from './Cards';
import Adopt from './Adopt';
import Visitplan from './Visitplan';

const Hero = () => {
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLw5jwi3ND49t_k2t-8hyWsZrazqXX0BmQmg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHqMYaZZGDhP28QeoRMCzuyBwKJWYn8SsZg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1W4W69Wsx8oPl0eJYRg8YZBMTDECj5y3IA&s",
  "https://t4.ftcdn.net/jpg/10/02/10/71/360_F_1002107138_QFbvzT79bQof6AC5U1uhR7Go9obU9rDE.jpg",
];




  // Auto-slide every 4 seconds
 

  // Manual navigation
  

  return (
    <>
   <div className="relative w-full md:h-[90vh] h-[80vh] overflow-hidden">
   
  {/* 🔁 Carousel Image */}
  <img
    src="https://media.istockphoto.com/id/598520904/photo/green-forest-foliage-aerial-view-woodland-tree-canopy-nature-background.jpg?s=612x612&w=0&k=20&c=RcCcRuTBBqnaZ_58Q1o9NGNUxRg-tlPzK_jTjpPIpM4="
    className="w-full h-full object-cover object-center"
    alt="Slide"
  />
   <Halfparticles/>

  {/* 🌟 Overlay Content */}
     
  <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 md:items-center px-5 lg:px-0 text-white px-auto  ">
    
    <div className=' lg:flex hidden w-full h-full'>
   
         <Spline className='' scene="https://prod.spline.design/DJ9eJB-es1uoENZ1/scene.splinecode" />
     
    </div>
     <div className='lg:hidden flex justify-center items-center  font-bold   w-full h-full text-5xl text-center '>
   
      <p>Experience the fastest animal on earth</p>
     
    </div>
    <motion.div className=" px-5 " initial={{ scale: 0 }} animate={{ scale: 1 }}
    transition={{duration:2}}
    
    >
  <img
    src="./hero1.png"
    className="w-full h-auto drop-shadow-2xl  rounded-2xl"
  />
</motion.div>
  </div>
</div>
<Cards/>
<Adopt/>
<Visitplan/>
</>

  );
}

export default Hero
