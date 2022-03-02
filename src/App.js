import React from 'react'

import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './Components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App