import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center ">
        <div className="relative z-10 text-black p-10 bg-white rounded-t-4xl">
            <h2 className="text-3xl sm:text-5xl font-light mb-4 font-serif">Welcome to My Portfolio</h2>
            <p className="mb-6">I'm a passionate developer showcasing my projects and skills.</p>
            <button className="cursor-pointer bg-blue-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500">Explore My Work</button>
<hr className="mt-8 w-30 m-auto border-t-4 border-yellow-500"/>
        </div>
    </section>
  )
}

export default Hero