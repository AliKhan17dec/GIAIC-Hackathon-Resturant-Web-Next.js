import AboutUs from '@/components/chefs/hero000001'
import Navbar from '@/components/menu/header'
import Hero1 from '@/components/menu/hero01'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero1
      heading="Our Menu"
      menuLink=""  // Ensure this is passed as a string
      menuText="Home"
      menuText2='Chefs'
       />
      <AboutUs />
    </>
  )
}

export default page
