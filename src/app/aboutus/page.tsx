import Hero00001 from '@/components/aboutus/hero00001'
import Hero00002 from '@/components/aboutus/hero00002'
import Hero00003 from '@/components/aboutus/hero00003'
import TeamSection from '@/components/aboutus/hero00004'
import FoodMenu from '@/components/aboutus/hero00005'
import Hero8 from '@/components/mainpage/hero8'
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
      menuText2='About Us'
       />
      <Hero00001 />
      <Hero00002 />
      <Hero00003 />
      <TeamSection />
      <br />
      <br />
      <Hero8 />
      <FoodMenu />
    </>
  )
}

export default page
