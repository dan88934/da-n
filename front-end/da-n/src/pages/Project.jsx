import React from 'react'
import {useState} from 'react'
import ProjectPageHeader from '../components/ProjectPageHeader/ProjectPageHeader'
import ProjectPageNav from '../components/ProjectPageNav/ProjectPageNav'
import ProjectPageFooter from '../components/ProjectPageFooter/ProjectPageFooter'
import ProjectPageDescription from '../components/ProjectPageDescription/ProjectPageDescription'

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