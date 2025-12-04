import React from 'react'
import Hero from '../components/Hero'
import OurWork from '../components/OurWork'
import Services from '../components/Services'
import Contact from './Contact'
import Review from '../components/Review'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import OurTeam from '../components/OurTeam'


const Home = () => {
  return (
<>
<Hero/>
<OurWork/>
<Services/>
<Pricing/>
<Faq/>
<Contact/>
<Review/>
<OurTeam/>
</>
  )
}

export default Home
