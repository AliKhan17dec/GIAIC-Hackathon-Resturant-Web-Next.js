import React from 'react'
import Image from 'next/image'

const Hero06 = () => {
  return (
    <div className='max-w-[1322px] lg:mx-[140px] text-center mb-20'>
      <div className='text-[18px] text-[#333333]'>Partners & Clients</div>
      <div className='text-[48px]'>We work with the best pepole</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:gap-20">
  <div>
    <Image
      src="/hero06/image 2.png" // Replace with the correct image path
      alt="Drink"
      width={240}
      height={129}
      className="object-cover"
    />
  </div>
  <div>
    <Image
      src="/hero06/image 60.png" // Replace with the correct image path
      alt="Drink"
      width={166}
      height={128}
      className="object-cover"
    />
  </div>
  <div>
    <Image
      src="/hero06/image 56.png" // Replace with the correct image path
      alt="Drink"
      width={143}
      height={127}
      className="object-cover"
    />
  </div>
  <div>
    <Image
      src="/hero06/image 58.png" // Replace with the correct image path
      alt="Drink"
      width={130}
      height={129}
      className="object-cover"
    />
  </div>
  <div>
    <Image
      src="/hero06/image 57.png" // Replace with the correct image path
      alt="Drink"
      width={169}
      height={129}
      className="object-cover"
    />
  </div>
  <div>
    <Image
      src="/hero06/image 59.png" // Replace with the correct image path
      alt="Drink"
      width={113}
      height={129}
      className="object-cover"
    />
  </div>

</div>
  </div>
  )
}

export default Hero06
