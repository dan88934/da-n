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
              <small>
              <ul>
              <li>Experienced</li>
              </ul>
              </small>
              {/* The small text here had className='text-light */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small>
              <ul>
              <li>Experienced</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Javascript</h4>
              <small>
              <ul>
              <li>React</li>
              <li>Vanilla</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small>
              <ul>
              <li>Experienced</li>
              </ul>
              </small>
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
              <small>
              <ul>
              <li>Django</li>
              <li>Flask</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Go</h4>
              <small>
              <ul>
              <li>Gin</li>
              <li>Mux</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small>
              <ul>
              <li>Experienced</li>
              </ul>
              </small>
            </div>
          </article>
        </div>
      </div>
      {/* Other Experience */}
      <div className="experience__other">
      <h3>Other</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Docker</h4>
              <small>
              <ul>
              <li>Experienced</li>
              <li>Most of my projects run in Docker containers</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CI/CD</h4>
              <small>
              <ul>
              <li>Experienced with Semaphore CI</li>
              <li>Set up a CI+CD pipeline for one of my projects</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Linux</h4>
              <small>
              <ul>
              <li>Experienced</li>
              <li>My projects are all deployed on Ubuntu Server VPS'</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Git</h4>
              <small>
              <ul>
              <li>Used Github for all of my personal projects</li>
              <li>At 1Password, used Gitlab in my role as a developer mentee</li>
              </ul>
              </small>
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