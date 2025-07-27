import React from 'react'

import { motion } from 'framer-motion';


const Adopt = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 grid-cols-1 bg-gradient-to-b from-green-800 to-green-400 items-center  py-10 mt-20'>
        <div className='text-center'  data-aos="fade-up"
    data-aos-offset="0"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"><p className='font-bold  md:text-8xl text-5xl leading-12'>Adopt <span className='text-green-900'>an</span> <span className='text-white'> Animal</span></p>
        
        <p className='mt-10 text-white md:text-3xl text-lg'>Take a Wild Animal into your Heart</p>
        <div className='mt-5'   
   data-aos="fade-left"
    data-aos-offset="0"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            <motion.button className='py-5 md:px-10 px-5 border font-bold md:text-lg text-sm text-white ' whileHover={{ 
      
        backgroundColor: 'white', 
        color: 'green' ,
        border:'none'
      }}
   
      transition={{ duration: 5 }}   
         
            >Animal Adoption</motion.button>
        </div>
        </div>
        <div className='px-5'  data-aos="zoom-in"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            <img src="./adopt.png" alt="" />
        </div>


      </div>
    </>
  )
}

export default Adopt
