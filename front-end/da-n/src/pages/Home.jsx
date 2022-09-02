import React from 'react'
import {useState} from 'react'
import Header from '../components/Header/Header.jsx'
import Nav from '../components/Nav/Nav.jsx'
import About from '../components/About/About.jsx'
import Experience from '../components/Experience/Experience.jsx'
import Portfolio from '../components/Portfolio/Portfolio.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'

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