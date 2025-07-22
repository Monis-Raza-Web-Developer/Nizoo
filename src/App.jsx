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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   { AOS.init()}
    <Navbar/>
    <Hero/>
      <Cards/>


      
     
    </>
  )
}

export default App
