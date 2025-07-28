import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-20 ">
  <aside>
    <div>
   <p className='md:text-4xl text-xl font-bold'><span className='text-green-600 font-bold  text-3xl  pr-1  '>NiE</span>ZOO</p> </div>
    <p>
      Nei ZOO
      <br />
      Providing fun and chilling environment for you
    </p>
  </aside>
  <nav>
    <p className="font-bold text-[16px] text-green-800">ANIMALS</p>
    <a className="link link-hover">Lion</a>
    <a className="link link-hover">Tiger</a>
    <a className="link link-hover">Panda</a>
    <a className="link link-hover">Hipopatamus</a>
  </nav>
  <nav>
    <p className="font-bold text-[16px] text-green-800">Company</p>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <p className="font-bold text-[16px] text-green-800">Legal</p>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </>
  )
}

export default Footer
