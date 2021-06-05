import React from 'react'
import image from './images/homepage/homepage.jpg';

function Home() {
    return (
      <main className="home">
        <img
          src={image}
          alt="background cover"
          className="absolute object-cover w-full h-full"
        />
        <section className="relative flex justify-center items-center min-h-screen" >
          <h1 className="font-bold text-6xl text-white leading-none lg:leading-snug home-name">Hey buddy, I'm RanjaN</h1>
        </section>
      </main>
    );
}

export default Home
