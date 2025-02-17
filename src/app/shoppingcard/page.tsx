import Navbar from '@/components/menu/header'
import Hero1 from '@/components/menu/hero01'
import Hero001 from '@/components/shoppingcart/hero001'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero1 
      heading="Our Menu"
      menuLink=""  // Ensure this is passed as a string
      menuText="Home"
      menuText2='Shopping cart'
      />
      <Hero001 />
    </div>
  )
}

export default page
