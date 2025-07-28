import React, { useState } from 'react'
import {  Routes, Route, Link } from 'react-router-dom';


const Navbar = () => {

    const [toggle,settoggle] =useState(false);
    const handletoggle = ()=>{

        settoggle(!toggle)
        console.log(toggle)
    }
   
  return (
    <>
    
    <div className='relative px-[8%] py-[2%]  flex  justify-between z-50'>
<div className=' '>
    <p className='md:text-2xl text-xl font-bold'><span className='text-green-600 font-bold  text-xl  pr-1  '>NiE</span>ZOO</p> </div>
<div className='flex gap-5'>
    <div >
         <i className={` ${!toggle ? "ri-search-2-line text-2xl" : "hidden" }`} ></i>
    </div>
     <div onClick={handletoggle}>
      <i className={`${!toggle ? "ri-menu-3-line text-2xl" : "ri-close-large-line text-2xl"} `}></i>
     </div>
</div>
<div
  className={`absolute  left-1/2 -translate-x-1/2   sm:top-22 top-12   w-[90%] rounded-b-2xl  border border-gray-200  bg-white shadow-md text-black overflow-hidden transform transition-transform duration-700 ease-in-out  ${
    toggle ? "translate-y-0" : "-translate-y-[160%]"
  }`}
>
  <ul className="tracking-widest leading-10 text-lg p-4">
  
   
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About </Link></li>
    <li><Link to="/contact">Contact </Link></li>
    
 
  </ul>
</div>
    </div>
    





   
   
    </>
  )
}

export default Navbar
