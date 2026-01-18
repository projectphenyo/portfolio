import React from 'react'

const About = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center ">
        <div className="relative z-10 text-black p-10 bg-white rounded-t-4xl">
            <h2 className="text-3xl sm:text-5xl font-light mb-4 font-serif">About Me</h2>
            <p className="mb-6">Hi, I’m Phenyo — a passionate developer student and creative problem solver.  
I enjoy building modern, responsive web applications that blend clean design with powerful functionality.  
My journey in tech has been fueled by curiosity and a love for learning. I view software development as a way of driving my creativity and strategic thinking into reality. 
When I’m not coding, you’ll find me exploring design trends, learning about emerging tech, or brainstorming creative projects.  </p>
            <button className="cursor-pointer bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-500">Explore My Work</button>
<hr className="mt-8 w-30 m-auto border-t-4 border-yellow-500"/>
        </div>
    </section>
  )
}

export default About