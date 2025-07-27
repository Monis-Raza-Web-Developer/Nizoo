import React from 'react'
import { motion } from 'framer-motion';

const Visitplan = () => {
  return (
    <>
    <div className='md:mt-20 overflow-hidden'>
     
        <div className='grid md:grid-cols-7 grid-cols-1 items-center  py-10 px-5 '>
   <p
  className="text-green-900 text-5xl  hidden  font-bold col-span-1 text-center md:flex justify-center items-center"
  style={{ writingMode: 'vertical-lr' }}
>
  Plan Your Visit
</p>
<p
  className="text-green-900 text-4xl pb-4  md:hidden  font-bold col-span-1 text-center flex justify-center "
  
>
  Plan Your Visit
</p>
      
        <div className='px-5 col-span-3' >
            <img src="./plan.png" alt="" />
        </div>
        <div className='col-span-3 p-5'>
          <div className=''>
            <p className='text-green-700 text-xl font-semibold'>Zoo Timings</p>
            <p className='text-md'>The operational timings of the zoo are from 09:00 am till sunset and the zoo is open round the week.</p>
          </div>
          <div className='pt-5'>
                    <p className='text-green-700 text-xl font-semibold'>Ticket Rates</p>
            <li className='text-md'>Adult and Children: PKR 100</li>
                  <li className='text-md'>Senior Citizens (60 years and above): Free</li>
          </div>
         <div className='pt-5'>
                    <p className='text-green-700 text-xl font-semibold'>Note:</p>
            <li className='text-md'>Tickets are applicable for the same date of purchase.</li>
                  <li className='text-md'>Tickets are non-refundable and non-transferable.</li>
                    <li className='text-md'>School, Colleges, University and other educational institutions shall some up with a request on letterhead of their institution, so they can be considered for student package.</li>
          </div>
        </div>

      </div>
    </div>
      
    </>
  )
}

export default Visitplan
