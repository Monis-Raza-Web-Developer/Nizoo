import React from 'react'
import Miniheader from '../components/Miniheader'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
    <Miniheader title={"About Us"}/>
      <div className="bg-base-100 text-base-content">
      {/* Navbar */}
      

      {/* About Section */}
      <section className="relative py-16 px-4 md:px-20">
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center" 
        >
          {/* Image */}
          <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
            <img
            src="https://www.mandai.com/content/dam/mandai/singapore-zoo/wild-africa-giraffes-1200x630.jpg"
            alt="Team"
            className="rounded-box shadow-md w-full "
          />
          </motion.div>

          {/* Content */}
          <div className=' '>
           <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }} className="md:absolute left-150 top-25 md:text-6xl text-4xl text-green-800 ">
              <h2 >About Us</h2>
          </motion.div>
            <p className="text-gray-600 md:mt-0  mt-5">
              Founded in 2024, our company delivers scalable and innovative digital
              solutions. Our goal is simple — empower businesses through technology.
            </p>
            <p className="text-gray-600">
              With a talented team and a culture of excellence, we strive to exceed
              expectations and build long-lasting relationships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
 
    </div>
    </>
  )
}

export default About
