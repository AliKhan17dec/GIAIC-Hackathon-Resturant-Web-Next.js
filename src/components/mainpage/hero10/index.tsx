import Footer from '@/components/footer'
import React from 'react'

const Hero10 = () => {
  return (
    <div>
      <section className="bg-black text-white py-16 px-10 md:px-36">
  {/* Heading */}
  <div className="text-center mb-12">
    <h5 className="text-orange-500 text-xl font-medium">Blog Post</h5>
    <h2 className="text-4xl font-bold">
      Latest <span className="text-orange-500">News & Blog</span>
    </h2>
  </div>

  {/* Blog Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
        date: "10 February 2022",
        image: "/blog/unsplash_dphM2U1xq0U.png", // Replace with the actual image paths
      },
      {
        title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
        date: "10 February 2022",
        image: "/blog/unsplash_MqT0asuoIcU.png", // Replace with the actual image paths
      },
      {
        title: "Curabitur Rutrum Velit Ac Congue Malesuada",
        date: "10 February 2022",
        image: "/blog/unsplash_lP5MCM6nZ5A.png", // Replace with the actual image paths
      },
    ].map((blog, index) => (
      <div
        key={index}
        className="bg-black text-white border-[1px] border-white items-center shadow-lg md:mx-[0px] w-full "
      >
        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-58 object-cover"
        />

        {/* Blog Details */}
        <div className="p-4">
          <p className="text-orange-500 text-sm font-medium">{blog.date}</p>
          <h3 className="text-lg font-bold my-2">{blog.title}</h3>
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-orange-500 font-medium hover:underline"
            >
              Learn More
            </a>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-orange-500">
                <i className="fas fa-heart"></i>
              </button>
              <button className="text-gray-500 hover:text-orange-500">
                <i className="fas fa-share-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
{/* <div>
  <Footer />
</div> */}
    </div>

  )
}

export default Hero10
