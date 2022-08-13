import React from 'react'
import './projectpagenav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import Navigate from 'react-router-dom'


const ProjectPageNav = ({setActiveNav, activeNav}) => {
  // const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    </nav>
  )
}

export default ProjectPageNav