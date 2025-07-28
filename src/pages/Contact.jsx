import React from 'react'
import Miniheader from '../components/Miniheader'

const Contact = () => {
  return (
    <>
    <Miniheader title={"Contact Us"}/>
  <div className='px-20 '>
      <div
         data-aos="fade-up"
    data-aos-offset="00"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  className="w-full h-[80vh] flex justify-center items-center bg-cover rounded-4xl"
  style={{ backgroundImage: "url('https://img.freepik.com/free-vector/zoo-park-entrance-scenery_107791-32698.jpg?semt=ais_hybrid&w=740&q=80')" }}
>

<div className='h-[80%] w-[80%] bg-white/40 rounded-2xl    p-10' 
data-aos="fade"
    data-aos-offset="00"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">

<fieldset className="fieldset grid items-center md:grid-cols-2 md:gap-20 gap-10 " 

>
  <legend className="fieldset-legend text-2xl font-semibold mb-2 text-center text-green-700">Contact Us</legend>

 <div>
   <div className="form-control">
    <label className="label text-[16px] font-bold ">Name</label>
    <input
      type="text"
      className="input focus:outline-none focus:border-transparent w-full rounded-2xl"
      placeholder="Enter your Name"
    />
  </div>

  <div className="form-control  mt-5 ">
    <label className="label text-[16px] font-bold">Email</label>
    <input
      type="email"
      className="input focus:outline-none focus:border-transparent w-full rounded-2xl"
      placeholder="Enter your email"
    />
  </div>
 </div>

  <div className="form-control   ">
    <label className="label text-[16px] font-bold">Message</label>
    <textarea
      rows={6}
      className="textarea focus:outline-none focus:border-transparent w-full rounded-2xl"
      placeholder="Write something here"
    />
  </div>


</fieldset>
  <button className="btn  mt-4 w-full border-0 text-white rounded-2xl bg-gradient-to-l to-green-300 via-green-700 from-green-950">Conatct</button>





</div>
</div>
  </div>
    </>
  )
}

export default Contact
