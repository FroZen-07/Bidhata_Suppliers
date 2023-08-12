import React from 'react'
import CollapsibleExample from '../components/Navbar'
import DarkVariantExample from '../components/Carousel'
import HeroSection from '../components/AboutUs'
import Products from '../components/Products'
import Services from '../components/Services'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import OurPartners from '../components/OurPartners'


const Home = () => {
  return (
    <>
        <CollapsibleExample/>
        <DarkVariantExample/>
        <HeroSection/>
        <Products/>
        <Services/>
        <OurPartners/>
        <GetInTouch/>
        <Footer/>
    </>
  )
}

export default Home