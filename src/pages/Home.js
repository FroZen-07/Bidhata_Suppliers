import React from 'react'
import CollapsibleExample from '../components/Navbar'
import DarkVariantExample from '../components/Carousel'
import HeroSection from '../components/AboutUs'
import Products from '../components/Products'
import Services from '../components/Services'


const Home = () => {
  return (
    <>
        <CollapsibleExample/>
        <DarkVariantExample/>
        <HeroSection/>
        <Products/>
        <Services/>
    </>
  )
}

export default Home