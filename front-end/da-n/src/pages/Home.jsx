import React from 'react'
import {useState} from 'react'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <>
    <Header />
    <Nav setActiveNav={setActiveNav} activeNav={activeNav}/>
    <About />
    <Experience />
    <Portfolio/> 
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home