import React from 'react'
// import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import ProjectPageDescription from './components/ProjectPageDescription/ProjectPageDescription'
import Home from './pages/Home'
import Project from './pages/Project'
import sakuki from './project_details/sakuki'
import heiki from './project_details/heiki'


const App = () => {
  return (
    <>
    <Router>
      <Routes> 
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/sakuki" element={<Project data={sakuki}/>}/>
        <Route exact path="/heiki" element={<Project data={heiki}/>}/>
        {/* <Route exact path="/zenmon" element={<Project data={zenmon}/>}/>
        <Route exact path="/courier_app" element={<Project data={courier_app}/>}/>
        <Route exact path="/danflix" element={<Project data={danflix}/>}/>
        <Route exact path="/" element={<Project data={heiki}/>}/> */}
        {/* Pass data file in here - then map data in each component */}
    </Routes>
    </Router>
    </>
  )
}

export default App