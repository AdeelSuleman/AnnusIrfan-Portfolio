import React from 'react'
import Navbar from './Navbar'
import { HeroPortfolio } from '../Components/HeroPortfolio'
import Footer from './Footer'

const Services = () => {
  return (
    <div className='w-full h-screen bg-themebg overflow-x-hidden'>

        <nav className='mt-10'>
        <Navbar/>
        </nav>
            <HeroPortfolio/>
            <Footer/>
    </div>
  )
}

export default Services
