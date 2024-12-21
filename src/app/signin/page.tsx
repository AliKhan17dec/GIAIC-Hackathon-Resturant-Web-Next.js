import Navbar from '@/components/menu/header'
import Hero1 from '@/components/menu/hero01'
import SignInPage from '@/components/signin/signinhero1'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar />
        <Hero1
        heading="Our Menu"
        menuLink=""  // Ensure this is passed as a string
        menuText="Home"
        menuText2='Signin'
         />
        <SignInPage/>
        
    </div>
  )
}

export default index
