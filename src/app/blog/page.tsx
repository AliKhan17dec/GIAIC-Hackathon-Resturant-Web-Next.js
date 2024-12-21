import BlogPage from '@/components/blog/hero0001'
import Navbar from '@/components/menu/header'
import Hero1 from '@/components/menu/hero01'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero1 
      heading="Our Menu"
      menuLink=""  // Ensure this is passed as a string
      menuText="Home"
      menuText2='Blog'
      />
      <BlogPage />
    </div>
  )
}

export default page
