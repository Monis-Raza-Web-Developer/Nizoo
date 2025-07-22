import React, { useEffect, useState } from 'react'
import Halfparticles from './Halfparticles';

const Hero = () => {
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLw5jwi3ND49t_k2t-8hyWsZrazqXX0BmQmg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHqMYaZZGDhP28QeoRMCzuyBwKJWYn8SsZg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1W4W69Wsx8oPl0eJYRg8YZBMTDECj5y3IA&s",
  "https://t4.ftcdn.net/jpg/10/02/10/71/360_F_1002107138_QFbvzT79bQof6AC5U1uhR7Go9obU9rDE.jpg",
];


  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
     
  <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 md:items-center text-white px-8 z-10">
    
    <div className='flex items-center'>
   
      <p className="font-bold md:text-8xl sm:text-6xl text-5xl">Experience the World’s Fastest Animal</p>
     
    </div>
    <div className="   ">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkY4vsyU5PWwJBimyTlmrj_I_3UXwClBUc_w&s"
    alt="Animal"
    className="w-full h-auto  opacity-50 shadow-2xl rounded-4xl"
  />
</div>
  </div>
</div>

</>

  );
}

export default Hero
