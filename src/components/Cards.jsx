import React from 'react'
import { motion, scale } from 'framer-motion';
import { cards } from '../data/Cardsdata';
import { Link } from 'react-router-dom';

const Cards = () => {
 
  const directions = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out']; 
  return (
    <>
    <p className='sm:mt-30 mt-20 p-6 text-lg font-bold sm:text-3xl'>Explore In <span className='text-green-600'>NiE</span> ZOO</p>
  <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-6 min-h-screen overflow-hidden" >
    
     {cards.map((card, index) => (
        <div
          key={index}
          className="break-inside-avoid mb-4 bg-white   overflow-hidden"
        data-aos={directions[index % directions.length]} // 👈 dynamic direction
      data-aos-offset="100"
      data-aos-delay={`${index * 50}`} // 👈 slightly staggered delay
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
       
       >
          <img src={card.img} alt={card.title} className="w-full" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-md text-gray-600 p-2 ">
              {card.description?.slice(0,150)}
            </p>
        <motion.button
  className=" text-green-700 font-semibold text-md flex items-center gap-5"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 1000 }}
>
  <Link key={card.id} to={`/animals/${card.id}`}> Explore now <i className="ri-arrow-right-long-line"></i></Link>
 
</motion.button>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Cards
