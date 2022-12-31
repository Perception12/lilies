import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main/Main'
import Cta from './components/Cta'

const Home = () => {
  return (
    <div class="bg-veryDarkGreen">
      <Header />
      <Hero />
      <Main />
      <Cta />
    </div>
  )
}

export default Home