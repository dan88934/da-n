import React from 'react'
import {useState} from 'react'
import ProjectPageHeader from '../components/ProjectPageHeader/ProjectPageHeader.jsx'
import ProjectPageNav from '../components/ProjectPageNav/ProjectPageNav.jsx'
import ProjectPageFooter from '../components/ProjectPageFooter/ProjectPageFooter.jsx'
import ProjectPageDescription from '../components/ProjectPageDescription/ProjectPageDescription.jsx'

function Project(data) {
  return (
    <>
    <ProjectPageNav data={data} /> 
    <ProjectPageDescription data={data}/> 
    <ProjectPageFooter/>  
    </>
  )
}

export default Project