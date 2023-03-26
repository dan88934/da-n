import React from 'react'
import './about.css'
import ME from '../../assets/CroppedGardenPhotoBW.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
      <section id='about'>
      <h5>Get to know</h5>  
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Daniel Hughes"/>
          </div>
      </div>

      <div className="about__content">
      
        

        <p>
        I developed an interest in programming whilst I was a student at the University of Leeds. 
        My major was Japanese language and I have been able to combine my linguistic abilities
        and interest in technology to develop several language related web apps which are
        detailed below. 
        </p>
        <p>
        I currently work for 1Password as a Customer Support Associate. I am also
        partaking in a software development mentorship at 1Password. As part of my mentorship, I have
        made changes to our codebase which are now running in production.
        </p>
        <p>
        Having a keen interest in Cyber Security, I passed the Security+ exam in 2023. My badge can be found here:&nbsp;
        <a href='https://www.credly.com/badges/6e82d8a0-0e3d-4bce-9554-4461783b720b/public_url' className='dark-link'>CompTIA Security+ Badge.</a>
        </p>
        <p>
          As someone who enjoys sharing the knowlege that I have gained, I have posted shell scripting tutorials on my blog:&nbsp; 
          <a href='https://dan176.wordpress.com/' className='dark-link'>Dan's Tech Blog.</a>
        </p>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
      </div>
      </div>
    </section>
  )
}

export default About