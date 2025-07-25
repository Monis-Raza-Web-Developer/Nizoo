import React, { useEffect, useState } from 'react'
import * as motion from "motion/react-client"


const Rare = () => {
   

  
  return (
    <>

      <div className='relative w-full h-[100vh]  bg-green-900 text-amber-50 p-5 ' >
        <div className='absolute inset-0 flex  top-5 justify-center'><p className='font-bold text-3xl'>Explore Rarest animmal</p> </div>

        <div className='absolute inset-0 grid gap-10 grid-cols-1 lg:grid-cols-2 top-20 ,md:items-center px-10'>
            <div>
                <p className="text-4xl font-bold ">The Vinzoo Decancy</p>
                <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident labore quod ad error. Aut atque dicta enim quas esse fugiat molestiae laborum molestias iure, quasi dolorum at neque ad ducimus, sed amet reprehenderit? Vitae possimus quaerat consectetur, deleniti quis est error, exercitationem fuga, recusandae id nulla sunt quidem tenetur aspernatur? Praesentium magnam accusantium repellendus repudiandae natus dolorem, itaque nesciunt nemo doloribus harum reprehenderit earum nihil deleniti voluptatum fugit sapiente cumque! Doloremque beatae culpa minus vero amet placeat magni accusamus deleniti quisquam vitae, animi eveniet velit suscipit? Corrupti, asperiores! Dignissimos modi optio accusantium nisi, nemo quae ex vero saepe odio.</p>
            </div>
            <motion.div 

            
            >
                <img
    src="./rare1.png"
    alt="Animal"
    className="w-full h-auto  rounded-2xl"
  />
            </motion.div>
        </div>

    

 
  </div>
     
    </>
  )
}

export default Rare
