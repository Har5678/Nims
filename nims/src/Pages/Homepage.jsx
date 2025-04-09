import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Cards from '../Components/Cards'
import Banner2 from '../Components/Banner2'
import { assets } from '../assets/Assets'
import Banner3 from '../Components/Banner3'
import Home1 from '../Components/Home/Home1'
import Banner4 from '../Components/Banner4'
import Banner5 from '../Components/Banner5'
import Banner6 from '../Components/Banner6'
import Banner7 from '../Components/Banner7'
import Reviews from '../Components/Reviews'
import Banner8 from '../Components/Banner8'
import Footer from '../Components/Footer'


const Homepage = () => {
  return (
    <>
      <div className='h-auto sm:w-auto bg-cover bg-center overflow-x-hidden overflow-y-hidden' style={{
        backgroundImage: `url(${assets.background})`
      }}>
    
    <Navbar/>
        <Banner />
        <Cards />
      </div>
      <Banner2 />
      <Banner3 />
      <Home1/>
      <Banner4/>
      <Banner5/>
      <Banner6/>
      <Banner7/>
      <Reviews/>
      <Banner8/>
      <Footer/>
    </>
  )
}

export default Homepage