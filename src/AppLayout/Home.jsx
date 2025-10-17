import React from 'react'
import '../index.css'
import Hero from '../Components/Hero'
import ClientSlider from '../Components/ClientSlider'
import About from '../Components/About'
import MyServices from '../Components/MyServices'
import HireMe from '../Components/HireMe'
import WorkSkill from '../Components/workSkill'
import OurWork from '../Components/OurWork'
import MyPortfolio from '../Components/MyPortfolio'
import Contact from '../Components/Contact'
import Footer from './Footer'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div className='w-full bg-themebg overflow-x-hidden'>
      <Hero/>
      <ClientSlider/>
      <About/>
      <MyServices/>
      <HireMe/>
      <WorkSkill/>
      <OurWork/>
      {/* <MyPortfolio/> */}
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
