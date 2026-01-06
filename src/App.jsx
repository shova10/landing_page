import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Client from './components/Client';
import Features from './components/Features';
import Stats from './components/Stats';
import About from './components/About';
import Footer from './components/Footer';
import Blog from './components/Blog';


function App (){
  return (
    <div>
      <Navbar />
      <Hero />
      <Client />
      <Features />
      <About />
      <Stats />
      <Footer />
      <Blog />
    </div>
  )
}

export default App;
