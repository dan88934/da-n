import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocialLinks = () => {
  return (
    //Target="_blank" opens the link in a new tab
    <div className="header__social__links"> 
        <a href="https://www.linkedin.com/in/daniel-hughes-088477100/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/dan88934" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocialLinks