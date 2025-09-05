import React from 'react'

const Hero = () => {
  return (<>
<section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
>

<div className="relative z-10 text-white px-6">
<h2 className="text-xl font-semibold   mb-2">SHIPS ANYTHING</h2>
<h1 className="text-4xl md:text-6xl font-bold mb-6">Around The World</h1>
<button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold  cursor-pointer">
Button
</button>
</div>
</section>

</>
  )
}

export default Hero