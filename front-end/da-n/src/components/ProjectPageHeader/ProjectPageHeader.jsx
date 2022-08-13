import React from 'react'
import HeaderSocialLinks from '../Header/HeaderSocialLinks'

const ProjectPageHeader = (data) => {
  const title = (data.data.data.title)
  return (
    <header>
    <div className="container header__container">
      <h1>{title}</h1>
      <HeaderSocialLinks />
      {/* ClassName='color-light was applied to the h5 below */}
      <div className="scroll__down__container">
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </div>
  </header>
  )
}

export default ProjectPageHeader