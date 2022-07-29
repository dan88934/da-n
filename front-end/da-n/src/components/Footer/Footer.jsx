import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Daniel Hughes</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social__links">
        <a href="https://github.com/dan88934"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/daniel-hughes-088477100/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
      <small>&copy; Daniel Hughes. All rights reserved.</small>
    </div>

    </footer>
  )
}

export default footer