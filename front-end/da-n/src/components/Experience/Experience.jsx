import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <>
    <section id='experience'>
    <h5>The skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      {/* Frontend Experience */}
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small>Experienced</small>
              {/* The small text here had className='text-light */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Javascript</h4>
              <small>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small>Experienced</small>
            </div>
          </article>
        </div>
      </div>
      {/* Backend Experience */}
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Go</h4>
              <small>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small>Experienced</small>
            </div>
          </article>
        </div>

      </div>
    </div>
    </section>
    </>
  )
}

export default Experience