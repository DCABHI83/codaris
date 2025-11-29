import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Pricing from './components/Pricing'
import Review from './components/Review'
import OurTeam from './components/OurTeam'
import Faq from './components/Faq'
import Contact from './pages/Contact'
import Footer from './ui/Footer'
import Header from './ui/Header'

const App = () => {
  return (
    <>
      <Header/>
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="work">
        <OurWork />
      </div>
      
      <div id="pricing">
        <Pricing />
      </div>
      
      <div id="testimonials">
        <Review />
      </div>
      
      <div id="team">
        <OurTeam />
      </div>
      
      <div id="faq">
        <Faq />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </>
  )
}

export default App
