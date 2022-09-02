import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/CroppedHallGardenPhotoBW-removebg.png'
import HeaderSocialLinks from './HeaderSocialLinks.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Daniel Hughes</h1>
        {/* ClassName='color-light was applied to the h5 below */}
        <h5>Aspiring fullstack/back-end developer</h5>
        <CTA />
        <HeaderSocialLinks />
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <div className="scroll__down__container">
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header 