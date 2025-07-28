import React from 'react'

const Miniheader = ({title}) => {
  return (
  <div
  className="w-full md:h-[30vh] h-[15vh] flex justify-center items-center bg-cover mb-10 rounded-b-4xl "
  style={{ backgroundImage: "url('https://danpearlman.com/wp-content/uploads/2017/07/Panda_Header.jpg')" }}
><p className='md:text-5xl text-3xl text-green-700  font-black'>{title}</p>
      
    </div>
  )
}

export default Miniheader
