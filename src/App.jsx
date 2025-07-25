import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import 'remixicon/fonts/remixicon.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Cards from './components/Cards';
import { motion } from "motion/react"
import { Application } from "@splinetool/runtime";
import Rare from './components/Rare';
import Footer from './components/Footer';

function App() {


  


  return (
    <>
   { AOS.init()}
    <Navbar/>
    <Hero/>
      <Cards/>

<Rare/>
      <Footer/>
     
    </>
  )
}

export default App
